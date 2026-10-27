/**
 * Sync Manager for Recensement S9 - Enhanced Resilient Edition
 * 
 * Heuristic-driven synchronizer for Google Sheets & CSV:
 * 1. Multi-row Header Scanner (automatically detects wherever the header is placed).
 * 2. Content Profiling Fallback (identifies columns by their values: "Effectué", "Pr.", "TRUE/FALSE").
 * 3. Stable Title-based Course ID mapping (prevents personal notes/checkboxes from shifting).
 * 4. Zero CORS JSONP with multi-tier fallback (CSV direct, Proxy, Cache).
 */

import { Storage } from './storage.js';
import { INITIAL_DATA, resolveCourseQuestions, normalizeCanonicalTitle } from './initialData.js';

export const Sync = {
  syncTimeoutId: null,

  /**
   * Universal cell value reader (works identically for Google Viz Objects and raw CSV strings)
   */
  getCellValue(cell) {
    if (cell === null || cell === undefined) return '';
    if (typeof cell === 'object') {
      if ('v' in cell && cell.v !== null && cell.v !== undefined) {
        return String(cell.v).trim();
      }
      if ('f' in cell && cell.f !== null && cell.f !== undefined) {
        return String(cell.f).trim();
      }
      return '';
    }
    return String(cell).trim();
  },

  /**
   * Normalize Submodule name to canonical format
   */
  normalizeSubmodule(rawSub, module) {
    const s = (rawSub || '').trim().toUpperCase();
    const m = (module || '').trim().toUpperCase();
    if (s.includes('OPHTALMO')) return 'Ophtalmologie';
    if (s.includes('ORL')) return 'ORL';
    if (m.includes('GYNECO') || s.includes('GYNECO')) return 'Gynécologie - Obstétrique';
    if (m.includes('SANTÉ') || m.includes('SANTE') || s.includes('SANTÉ') || s.includes('SANTE')) return 'Santé Publique';
    if (m.includes('URGENCES') || s.includes('URGENCES')) return 'Urgences - Réanimation';
    return rawSub || '';
  },

  /**
   * Resilient Faculty Status Normalizer (Insensitive to accents, spaces, and case variations)
   */
  normalizeFacultyStatus(rawStatus) {
    if (!rawStatus) return 'Non effectué';
    const s = String(rawStatus)
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Removes accents: "effectué" -> "effectue"

    if (/effectu|fait|valide|termine|dispense/.test(s)) {
      return 'Effectué';
    }
    if (/en\s*cours|progression|partiel/.test(s)) {
      return 'En cours';
    }
    if (/hors|annule|supprime/.test(s)) {
      return 'Hors programme';
    }
    return 'Non effectué';
  },

  /**
   * Extract Google Spreadsheet ID and GID from URL
   */
  extractSheetInfo(url) {
    const idMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const sheetId = idMatch ? idMatch[1] : '1MB7Ay2KFM3QEOW-5RMaBr4GQQgBvx76E1NHqB2Mg_74';

    const gidMatch = url.match(/[?#&]gid=([0-9]+)/);
    const gid = gidMatch ? gidMatch[1] : '0';

    const csvExportUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
    return { sheetId, gid, csvExportUrl };
  },

  /**
   * Match course against baseline catalog by canonical normalized title
   */
  matchInitialCourse(title, rawTitle, id = null) {
    if (typeof INITIAL_DATA === 'undefined' || !Array.isArray(INITIAL_DATA?.courses)) return null;
    const tNorm = normalizeCanonicalTitle(title || rawTitle);
    if (tNorm) {
      const byTitle = INITIAL_DATA.courses.find(ic => {
        const icNorm = normalizeCanonicalTitle(ic.title || ic.rawTitle);
        return icNorm === tNorm || icNorm.includes(tNorm) || tNorm.includes(icNorm);
      });
      if (byTitle) return byTitle;
    }
    if (id) {
      return INITIAL_DATA.courses.find(ic => ic.id === id) || null;
    }
    return null;
  },

  /**
   * Parse course observation into badge descriptors
   */
  parseObservationBadges(rawObs) {
    if (!rawObs || typeof rawObs !== 'string') return [];
    const obs = rawObs.trim();
    if (!obs) return [];

    const badges = [];
    const obsLower = obs.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 1. Drive promo
    if (obsLower.includes('drive promo') || obsLower.includes('dispo drive')) {
      badges.push({
        type: 'drive',
        category: 'drive',
        text: 'Drive Promo',
        icon: 'hard-drive',
        tooltip: 'Support disponible sur le Drive Promo',
        cssClass: 'obs-badge obs-badge-drive',
        bg: 'bg-indigo-50 dark:bg-indigo-950/40',
        textCol: 'text-indigo-700 dark:text-indigo-300',
        border: 'border-indigo-200 dark:border-indigo-800'
      });
    }

    // 2. Nouveau cours
    if (obsLower.includes('nouveau cours')) {
      const isNeverTaught = obsLower.includes('jamais enseigne') || obsLower.includes('inedit');
      badges.push({
        type: 'new_course',
        category: 'new',
        text: isNeverTaught ? 'Nouveau cours (inédit)' : 'Nouveau cours',
        icon: 'sparkles',
        tooltip: obs,
        cssClass: 'obs-badge obs-badge-new',
        bg: 'bg-blue-50 dark:bg-blue-950/40',
        textCol: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800'
      });
    }

    // 3. Cours changé / Schémas / Modifications
    if (obsLower.includes('cours change') || obsLower.includes('modifications') || obsLower.includes('modifie')) {
      const hasSchemas = obsLower.includes('schemas');
      const isMinor = obsLower.includes('legeres') || obsLower.includes('anciens diapos');
      badges.push({
        type: 'changed_course',
        category: 'changed',
        text: hasSchemas ? 'Schémas ajoutés' : (isMinor ? 'Modif. mineures' : 'Cours modifié'),
        icon: 'file-edit',
        tooltip: obs,
        cssClass: 'obs-badge obs-badge-changed',
        bg: 'bg-amber-50 dark:bg-amber-950/40',
        textCol: 'text-amber-700 dark:text-amber-300',
        border: 'border-amber-200 dark:border-amber-800'
      });
    }

    // 4. Cours inchangé
    if (obsLower.includes('inchange')) {
      badges.push({
        type: 'unchanged',
        category: 'unchanged',
        text: 'Cours inchangé',
        icon: 'check-circle-2',
        tooltip: 'Support identique aux années précédentes',
        cssClass: 'obs-badge obs-badge-unchanged',
        bg: 'bg-emerald-50 dark:bg-emerald-950/40',
        textCol: 'text-emerald-700 dark:text-emerald-300',
        border: 'border-emerald-200 dark:border-emerald-800'
      });
    }

    // 5. Prof change
    if (obsLower.includes('nouvelle prof') || obsLower.includes('nouveau prof') || obsLower.includes('enseigne l\'annee derniere par')) {
      let profText = 'Nouveau Pr';
      const prMatch = obs.match(/Pr\s+([A-Za-zÀ-ÿ]+)/i);
      if (prMatch) {
        profText = `Ex-${prMatch[0]}`;
      }
      badges.push({
        type: 'prof_change',
        category: 'prof',
        text: profText,
        icon: 'user-check',
        tooltip: obs,
        cssClass: 'obs-badge obs-badge-prof',
        bg: 'bg-purple-50 dark:bg-purple-950/40',
        textCol: 'text-purple-700 dark:text-purple-300',
        border: 'border-purple-200 dark:border-purple-800'
      });
    }

    // Fallback badge if no specific descriptors matched
    if (badges.length === 0) {
      badges.push({
        type: 'note',
        category: 'note',
        text: obs.length > 28 ? obs.substring(0, 25) + '...' : obs,
        tooltip: obs,
        icon: 'info',
        cssClass: 'obs-badge',
        bg: 'bg-slate-100 dark:bg-slate-800',
        textCol: 'text-slate-700 dark:text-slate-300',
        border: 'border-slate-200 dark:border-slate-700'
      });
    }

    return badges;
  },

  /**
   * Parse course title and isolate parenthetical annotations into badges
   */
  parseCourseTitle(rawTitle) {
    let cleanTitle = (rawTitle || '').trim();
    const badges = [];

    // 1. (nouveau cours)
    if (/\(nouveau\s+cours\)/i.test(cleanTitle)) {
      badges.push({
        type: 'new',
        text: 'Nouveau cours',
        icon: 'sparkles',
        bg: 'bg-blue-50',
        textCol: 'text-blue-700',
        border: 'border-blue-200'
      });
      cleanTitle = cleanTitle.replace(/\(nouveau\s+cours\)/gi, '').trim();
    }

    // 2. (cours changé / modifié)
    if (/\(cours\s+(?:changé|change|modifié|modifie)\)/i.test(cleanTitle)) {
      badges.push({
        type: 'changed',
        text: 'Cours changé',
        icon: 'alert-circle',
        bg: 'bg-amber-50',
        textCol: 'text-amber-800',
        border: 'border-amber-200'
      });
      cleanTitle = cleanTitle.replace(/\(cours\s+(?:changé|change|modifié|modifie)\)/gi, '').trim();
    }

    // 3. > devenue asphyxie +++
    const arrowMatch = cleanTitle.match(/>\s*([^>]+)$/);
    if (arrowMatch) {
      badges.push({
        type: 'faculty_note',
        text: `Note: ${arrowMatch[1].trim()}`,
        icon: 'info',
        bg: 'bg-purple-50',
        textCol: 'text-purple-700',
        border: 'border-purple-200'
      });
      cleanTitle = cleanTitle.substring(0, arrowMatch.index).trim();
    }

    // 4. Any other parenthetical note
    const parenMatch = cleanTitle.match(/\(([^)]+)\)$/);
    if (parenMatch) {
      badges.push({
        type: 'info',
        text: parenMatch[1].trim(),
        icon: 'tag',
        bg: 'bg-slate-100',
        textCol: 'text-slate-700',
        border: 'border-slate-200'
      });
      cleanTitle = cleanTitle.substring(0, parenMatch.index).trim();
    }

    cleanTitle = cleanTitle.replace(/[\s,\-]+$/, '').trim();
    return { cleanTitle, badges };
  },

  /**
   * INTELLIGENT TWO-PASS COLUMN DETECTION & PROFILING
   * Detects columns regardless of column shifts, insertions, or header renamings.
   */
  detectColumnMapping(rows) {
    const mapping = {
      colModule: 0,
      colSub: 1,
      colProf: -1,
      colCourse: -1,
      colStatus: -1,
      colObs: -1,
      colC1: -1,
      colC2: -1,
      dataStartRow: 3,
      sheetUpdateDate: 'N/A'
    };

    if (!rows || rows.length === 0) return mapping;

    // Scan the first 4 rows to extract any update date
    for (let r = 0; r < Math.min(4, rows.length); r++) {
      const row = rows[r];
      const cells = Array.isArray(row) ? row : (row?.c || []);
      for (let c = 0; c < cells.length; c++) {
        const val = this.getCellValue(cells[c]);
        const m = val.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
        if (m) {
          mapping.sheetUpdateDate = m[0];
          break;
        }
      }
      if (mapping.sheetUpdateDate !== 'N/A') break;
    }

    // PASS 1: Score the first 5 rows to locate the primary header row
    let bestHeaderRow = 1;
    let highestScore = -1;

    for (let r = 0; r < Math.min(5, rows.length); r++) {
      const row = rows[r];
      if (!row) continue;
      const cells = Array.isArray(row) ? row : (row?.c || []);
      let score = 0;

      cells.forEach(cell => {
        const val = this.getCellValue(cell).toLowerCase();
        if (!val) return;
        if (/prof|enseignant|pr\b/.test(val)) score += 3;
        if (/^cours\b|intitul|titre|le[çc]on/.test(val)) score += 3;
        if (/^cm\b|statut|status|etat|dispens/.test(val)) score += 3;
        if (/obs|remarque|note/.test(val)) score += 2;
        if (/couche|c1|c2/.test(val)) score += 2;
        if (/module/.test(val)) score += 1;
      });

      if (score > highestScore) {
        highestScore = score;
        bestHeaderRow = r;
      }
    }

    // Inspect the best header row (and immediate row below for split sub-headers like C1/C2)
    const headerRow = rows[bestHeaderRow];
    const subHeaderRow = rows[bestHeaderRow + 1] || null;
    const headerCells = Array.isArray(headerRow) ? headerRow : (headerRow?.c || []);

    headerCells.forEach((cell, idx) => {
      const val = this.getCellValue(cell).toLowerCase();
      if (!val) return;

      if (/prof|enseignant|intervenant/.test(val)) {
        mapping.colProf = idx;
      } else if (/^cours\b|intitul|sujet|le[çc]on/.test(val) && !/couche/.test(val)) {
        mapping.colCourse = idx;
      } else if (/^cm\b|statut|status|etat|dispens/.test(val)) {
        mapping.colStatus = idx;
      } else if (/observation|remarque|commentaire/.test(val)) {
        mapping.colObs = idx;
      } else if (/^c1\b/.test(val)) {
        mapping.colC1 = idx;
      } else if (/^c2\b/.test(val)) {
        mapping.colC2 = idx;
      }
    });

    // Check secondary sub-header row for C1, C2 if missing
    if (subHeaderRow && (mapping.colC1 === -1 || mapping.colC2 === -1)) {
      const subCells = Array.isArray(subHeaderRow) ? subHeaderRow : (subHeaderRow?.c || []);
      subCells.forEach((cell, idx) => {
        const val = this.getCellValue(cell).toLowerCase();
        if (/^c1\b/.test(val) && mapping.colC1 === -1) mapping.colC1 = idx;
        if (/^c2\b/.test(val) && mapping.colC2 === -1) mapping.colC2 = idx;
      });
    }

    // Determine where actual course data begins
    mapping.dataStartRow = bestHeaderRow + 1;
    if (rows[mapping.dataStartRow]) {
      const nextCells = Array.isArray(rows[mapping.dataStartRow]) ? rows[mapping.dataStartRow] : (rows[mapping.dataStartRow]?.c || []);
      const isSubHeader = nextCells.some(c => /c1|c2|coeff/i.test(this.getCellValue(c)));
      if (isSubHeader) mapping.dataStartRow++;
    }

    // PASS 2: Content Profiling Heuristic Fallback
    // If any key column is still undetermined, analyze sample data cells across the first 25 rows
    const sampleRows = rows.slice(mapping.dataStartRow, mapping.dataStartRow + 25);
    const maxCols = Math.max(...sampleRows.map(r => Array.isArray(r) ? r.length : (r?.c?.length || 0)), 8);

    for (let c = 0; c < maxCols; c++) {
      const colValues = sampleRows.map(r => {
        const cell = Array.isArray(r) ? r[c] : (r?.c ? r.c[c] : null);
        return this.getCellValue(cell);
      }).filter(Boolean);

      // Detect Status column by its characteristic faculty values
      if (mapping.colStatus === -1) {
        const hasStatusTokens = colValues.some(v => /effectu|hors\s*programme|en\s*cours/i.test(v));
        if (hasStatusTokens && c !== mapping.colCourse && c !== mapping.colProf) {
          mapping.colStatus = c;
        }
      }

      // Detect Professor column by titles or common prefixes
      if (mapping.colProf === -1) {
        const profPrefixes = colValues.filter(v => /^pr\b/i.test(v)).length;
        if (profPrefixes >= 2 && c !== mapping.colCourse) {
          mapping.colProf = c;
        }
      }

      // Detect Couche C1 & C2 by boolean TRUE/FALSE presence
      const boolHits = colValues.filter(v => /^(true|false)$/i.test(v)).length;
      if (boolHits >= 3) {
        if (mapping.colC1 === -1) {
          mapping.colC1 = c;
        } else if (mapping.colC2 === -1 && c > mapping.colC1) {
          mapping.colC2 = c;
        }
      }
    }

    // Final structural defaults if ever missing
    if (mapping.colProf === -1) mapping.colProf = 3;
    if (mapping.colCourse === -1) mapping.colCourse = 4;
    if (mapping.colStatus === -1) mapping.colStatus = 5;
    if (mapping.colObs === -1) mapping.colObs = 6;
    if (mapping.colC1 === -1) mapping.colC1 = 7;
    if (mapping.colC2 === -1) mapping.colC2 = 8;

    return mapping;
  },

  /**
   * Unified Row Extractor for both GViz and CSV rows
   */
  extractCourseFromRow(row, mapping, currentModule, currentSubModule, currentProf, counter) {
    const cells = Array.isArray(row) ? row : (row?.c || []);

    // Module in colModule
    let moduleVal = this.getCellValue(cells[mapping.colModule]);
    if (moduleVal && moduleVal !== currentModule) {
      currentModule = moduleVal;
      currentSubModule = '';
    }

    // Submodule in colSub
    let subVal = this.getCellValue(cells[mapping.colSub]);
    if (subVal) {
      currentSubModule = subVal;
    } else if (currentSubModule) {
      subVal = currentSubModule;
    }

    // Prof in colProf
    let profVal = this.getCellValue(cells[mapping.colProf]);
    if (profVal) {
      currentProf = profVal;
    }

    // Course raw title
    const rawTitle = this.getCellValue(cells[mapping.colCourse]);
    if (!rawTitle || rawTitle === '...' || /^cours$/i.test(rawTitle)) {
      return { course: null, currentModule, currentSubModule, currentProf };
    }

    // Observation
    const rawObs = mapping.colObs !== -1 ? this.getCellValue(cells[mapping.colObs]) : '';

    // Faculty Status
    const rawStatus = mapping.colStatus !== -1 ? this.getCellValue(cells[mapping.colStatus]) : '';
    const facultyStatus = this.normalizeFacultyStatus(rawStatus);

    // C1 & C2 Layers
    const c1Val = mapping.colC1 !== -1 ? this.getCellValue(cells[mapping.colC1]) : '';
    const c2Val = mapping.colC2 !== -1 ? this.getCellValue(cells[mapping.colC2]) : '';
    const sheetC1 = String(c1Val).toUpperCase() === 'TRUE';
    const sheetC2 = String(c2Val).toUpperCase() === 'TRUE';

    // Parse badges from title and observations
    const { cleanTitle, badges: titleBadges } = this.parseCourseTitle(rawTitle);
    const obsBadges = this.parseObservationBadges(rawObs);
    const badges = [...titleBadges, ...obsBadges];

    // STABLE COURSE ID RESOLUTION:
    // Match against initial canonical course first to guarantee IDs never shift when rows are added
    const matchedInitial = this.matchInitialCourse(cleanTitle, rawTitle);
    const id = matchedInitial ? matchedInitial.id : `c_${counter.toString().padStart(3, '0')}`;

    // Questions count and exam weight
    const questions = resolveCourseQuestions({ title: cleanTitle, rawTitle });
    const weight = Number(((questions / 2227) * 100).toFixed(2));

    // Inherit submodule from canonical data if empty
    let finalSubmodule = subVal;
    if (!finalSubmodule && matchedInitial?.submodule) {
      finalSubmodule = matchedInitial.submodule;
    }

    const course = {
      id,
      module: currentModule,
      submodule: this.normalizeSubmodule(finalSubmodule, currentModule),
      prof: currentProf,
      rawTitle,
      title: cleanTitle,
      observation: rawObs,
      badges,
      facultyStatus,
      questions,
      weight,
      sheetC1,
      sheetC2
    };

    return { course, currentModule, currentSubModule, currentProf };
  },

  /**
   * Primary fetch method: JSONP via script tag (Works on file:// and http:// with NO CORS ERRORS!)
   */
  fetchViaGvizJsonp(sheetId, gid = '0') {
    return new Promise((resolve, reject) => {
      const callbackName = '__gviz_cb_' + Math.random().toString(36).substring(2, 9);
      let script = null;

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error('Délai d\'attente dépassé (timeout 12s)'));
      }, 12000);

      function cleanup() {
        clearTimeout(timeout);
        try {
          if (typeof window !== 'undefined') delete window[callbackName];
          if (typeof globalThis !== 'undefined') delete globalThis[callbackName];
        } catch (e) {
          if (typeof window !== 'undefined') window[callbackName] = undefined;
          if (typeof globalThis !== 'undefined') globalThis[callbackName] = undefined;
        }
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }

      const responseHandler = (data) => {
        cleanup();
        try {
          const parsed = this.processGvizResponse(data);
          resolve(parsed);
        } catch (err) {
          reject(err);
        }
      };

      if (typeof window !== 'undefined') window[callbackName] = responseHandler;
      if (typeof globalThis !== 'undefined') globalThis[callbackName] = responseHandler;

      script = document.createElement('script');
      script.src = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=responseHandler:${callbackName}&gid=${gid}&_t=${Date.now()}`;
      script.onerror = () => {
        cleanup();
        reject(new Error('Échec du chargement JSONP Google Sheets'));
      };

      document.head.appendChild(script);
    });
  },

  /**
   * Process structured table returned by Google Visualization API
   */
  processGvizResponse(data) {
    if (!data || !data.table || !data.table.rows) {
      throw new Error('Format de données Google Sheets invalide');
    }

    const rows = data.table.rows;
    const mapping = this.detectColumnMapping(rows);

    const courses = [];
    let currentModule = '';
    let currentSubModule = '';
    let currentProf = '';
    let counter = 1;

    for (let r = mapping.dataStartRow; r < rows.length; r++) {
      const row = rows[r];
      if (!row || !row.c) continue;

      const res = this.extractCourseFromRow(row, mapping, currentModule, currentSubModule, currentProf, counter);
      currentModule = res.currentModule;
      currentSubModule = res.currentSubModule;
      currentProf = res.currentProf;

      if (res.course) {
        courses.push(res.course);
        counter++;
      }
    }

    return {
      courses,
      sheetUpdateDate: mapping.sheetUpdateDate,
      syncedAt: new Date().toISOString()
    };
  },

  /**
   * Fallback: Fetch CSV directly
   */
  async fetchDirectCsv(url) {
    const sep = url.includes('?') ? '&' : '?';
    const cacheBustUrl = `${url}${sep}_t=${Date.now()}`;
    const response = await fetch(cacheBustUrl, {
      method: 'GET',
      headers: { 'Accept': 'text/csv, text/plain, */*' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const csvText = await response.text();
    return this.processSheetCSV(csvText);
  },

  /**
   * Fallback 2: CORS Proxy
   */
  async fetchViaProxy(url) {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error('Proxy error');
    const csvText = await response.text();
    return this.processSheetCSV(csvText);
  },

  /**
   * Robust CSV Parser with full multi-line cell support
   */
  parseCSV(text) {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          currentCell += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        currentRow.push(currentCell.trim());
        currentCell = '';
      } else if ((char === '\r' || char === '\n') && !inQuotes) {
        if (char === '\r' && nextChar === '\n') {
          i++;
        }
        currentRow.push(currentCell.trim());
        if (currentRow.some(c => c !== '')) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = '';
      } else {
        currentCell += char;
      }
    }

    if (currentCell !== '' || currentRow.length > 0) {
      currentRow.push(currentCell.trim());
      if (currentRow.some(c => c !== '')) {
        rows.push(currentRow);
      }
    }

    return rows;
  },

  /**
   * Process raw CSV table with identical heuristic mapping
   */
  processSheetCSV(csvText) {
    const rows = this.parseCSV(csvText);
    if (!rows || rows.length < 3) {
      throw new Error('Feuille CSV vide ou invalide');
    }

    const mapping = this.detectColumnMapping(rows);

    const courses = [];
    let currentModule = '';
    let currentSubModule = '';
    let currentProf = '';
    let counter = 1;

    for (let r = mapping.dataStartRow; r < rows.length; r++) {
      const row = rows[r];
      if (!row) continue;

      const res = this.extractCourseFromRow(row, mapping, currentModule, currentSubModule, currentProf, counter);
      currentModule = res.currentModule;
      currentSubModule = res.currentSubModule;
      currentProf = res.currentProf;

      if (res.course) {
        courses.push(res.course);
        counter++;
      }
    }

    return {
      courses,
      sheetUpdateDate: mapping.sheetUpdateDate,
      syncedAt: new Date().toISOString()
    };
  },

  /**
   * Master fetch with multi-tier fallback:
   * 1. GViz JSONP (Zero CORS restriction on file:// and http://)
   * 2. Direct CSV fetch
   * 3. CORS Proxy
   */
  async fetchRemoteData(customUrl = null) {
    const settings = Storage.getSettings();
    const url = customUrl || settings.sheetUrl;
    const { sheetId, gid, csvExportUrl } = this.extractSheetInfo(url);

    // Tier 1: Try Google Visualization JSONP (works seamlessly on file://, http://, and mobile)
    try {
      console.log('[Sync] Trying Tier 1: Google Visualization JSONP...');
      const data = await this.fetchViaGvizJsonp(sheetId, gid);
      console.log('[Sync] JSONP successful! Extracted courses count:', data.courses.length);
      return { success: true, data };
    } catch (errJsonp) {
      console.warn('[Sync] JSONP failed, trying Tier 2 direct CSV:', errJsonp.message);
    }

    // Tier 2: Try direct CSV fetch with normalized export URL
    try {
      const data = await this.fetchDirectCsv(csvExportUrl);
      console.log('[Sync] Direct CSV fetch successful! Extracted courses count:', data.courses.length);
      return { success: true, data };
    } catch (errDirect) {
      console.warn('[Sync] Direct CSV failed, trying Tier 3 proxy:', errDirect.message);
    }

    // Tier 3: Try CORS proxy with normalized export URL
    try {
      const data = await this.fetchViaProxy(csvExportUrl);
      console.log('[Sync] Proxy fetch successful! Extracted courses count:', data.courses.length);
      return { success: true, data };
    } catch (errProxy) {
      console.warn('[Sync] All remote sync tiers failed:', errProxy.message);
    }

    // Tier 4: Fallback to local cache or bundled data
    return {
      success: false,
      error: 'Impossible de contacter Google Sheets.',
      fallbackData: Storage.getCachedCourses() || INITIAL_DATA.courses
    };
  },

  /**
   * Difference detector for notifying status changes
   */
  findDifferences(oldCourses, newCourses) {
    if (!oldCourses || !oldCourses.length) return [];
    const oldMap = new Map();
    oldCourses.forEach(c => {
      const key = `${c.module}|${c.title}`.toLowerCase();
      oldMap.set(key, c.facultyStatus);
    });

    const updates = [];
    newCourses.forEach(c => {
      const key = `${c.module}|${c.title}`.toLowerCase();
      const oldStatus = oldMap.get(key);
      if (oldStatus && oldStatus !== c.facultyStatus) {
        updates.push({
          course: c,
          oldStatus,
          newStatus: c.facultyStatus
        });
      }
    });

    return updates;
  },

  isSyncOverdue() {
    const meta = Storage.getSyncMeta();
    if (!meta || !meta.lastSyncedAt) return true;

    const lastSync = new Date(meta.lastSyncedAt);
    const now = new Date();
    const today20 = new Date(now);
    today20.setHours(20, 0, 0, 0);

    if (now >= today20 && lastSync < today20) {
      return true;
    }

    const hoursSinceLast = (now.getTime() - lastSync.getTime()) / (1000 * 60 * 60);
    return hoursSinceLast >= 24;
  },

  scheduleDailySync(onSyncCallback) {
    if (this.syncTimeoutId) {
      clearTimeout(this.syncTimeoutId);
    }

    const now = new Date();
    const target = new Date();
    target.setHours(20, 0, 0, 0);

    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }

    const msUntilSync = target.getTime() - now.getTime();
    this.syncTimeoutId = setTimeout(async () => {
      console.log('[Sync] Running scheduled 20:00 sync...');
      if (onSyncCallback) {
        await onSyncCallback(true);
      }
      this.scheduleDailySync(onSyncCallback);
    }, msUntilSync);
  },

  getTimeUntilNextSync() {
    const now = new Date();
    const target = new Date();
    target.setHours(20, 0, 0, 0);

    const isToday = now < target;
    if (!isToday) {
      target.setDate(target.getDate() + 1);
    }

    const diffMs = target.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return {
      isToday,
      hours: diffHours,
      minutes: diffMinutes,
      formatted: `${diffHours}h ${diffMinutes}m`
    };
  }
};