/**
 * Sync Manager for Recensement S9
 * Connects to Google Sheets with zero CORS errors using Google Visualization JSONP,
 * with fallbacks for direct CSV and proxy, and schedules daily 20:00 synchronization.
 * Dynamically supports the new "Observation" column and shifted status/layer columns.
 */

import { Storage } from './storage.js';
import { INITIAL_DATA, resolveCourseQuestions, normalizeCanonicalTitle } from './initialData.js';

export const Sync = {
  syncTimeoutId: null,

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

  matchInitialCourse(title, rawTitle, id) {
    if (typeof INITIAL_DATA === 'undefined' || !Array.isArray(INITIAL_DATA?.courses)) return null;
    const tNorm = normalizeCanonicalTitle(title || rawTitle);
    if (tNorm) {
      const byTitle = INITIAL_DATA.courses.find(ic => {
        const icNorm = normalizeCanonicalTitle(ic.title || ic.rawTitle);
        return icNorm === tNorm || icNorm.includes(tNorm) || tNorm.includes(icNorm);
      });
      if (byTitle) return byTitle;
    }
    return INITIAL_DATA.courses.find(ic => ic.id === id) || null;
  },

  /**
   * Parse course observation into badge descriptors
   */
  parseObservationBadges(rawObs) {
    if (!rawObs || typeof rawObs !== 'string') return [];
    const obs = rawObs.trim();
    if (!obs) return [];

    const badges = [];
    const obsLower = obs.toLowerCase();

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
      const isNeverTaught = obsLower.includes('jamais enseigné') || obsLower.includes('inédit');
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
    if (obsLower.includes('cours changé') || obsLower.includes('cours change') || obsLower.includes('modifications')) {
      const hasSchemas = obsLower.includes('schémas') || obsLower.includes('schemas');
      const isMinor = obsLower.includes('légères') || obsLower.includes('anciens diapos');
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
    if (obsLower.includes('inchangé') || obsLower.includes('inchange')) {
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
    if (obsLower.includes('nouvelle prof') || obsLower.includes('nouveau prof') || obsLower.includes('enseigné l\'année dernière par')) {
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

    // If none of the specific patterns matched, provide raw observation
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
   * Parse course title and isolate annotations into badges
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
    let sheetUpdateDate = 'N/A';

    // Dynamically look for date in Row 0
    if (rows[0] && rows[0].c) {
      for (const cell of rows[0].c) {
        if (cell && cell.v) {
          const m = String(cell.v).match(/\d{1,2}\/\d{1,2}\/\d{4}/);
          if (m) {
            sheetUpdateDate = m[0];
            break;
          }
        }
      }
    }

    // Dynamic column detection in Row 1
    let colModule = 0;
    let colSub = 1;
    let colProf = 3;
    let colCourse = 4;
    let colObs = -1;
    let colStatus = 5;
    let colC1 = 6;
    let colC2 = 7;

    if (rows[1] && rows[1].c) {
      rows[1].c.forEach((cell, idx) => {
        if (!cell || !cell.v) return;
        const val = String(cell.v).trim().toLowerCase();
        if (val.includes('prof')) colProf = idx;
        if (val.includes('cours')) colCourse = idx;
        if (val.includes('observation')) colObs = idx;
        if (val === 'cm' || val.includes('statut') || val.includes('status')) colStatus = idx;
      });
      if (colObs !== -1) {
        colStatus = colObs + 1;
        colC1 = colStatus + 1;
        colC2 = colC1 + 1;
      }
    }

    const courses = [];
    let currentModule = '';
    let currentSubModule = '';
    let currentProf = '';
    let counter = 1;

    for (let r = 3; r < rows.length; r++) {
      const row = rows[r];
      if (!row || !row.c) continue;

      const c = row.c;

      // Module in Col 0
      if (c[colModule] && c[colModule].v) {
        const val0 = String(c[colModule].v).trim();
        if (val0 && val0 !== currentModule) {
          currentModule = val0;
          currentSubModule = '';
        }
      }

      // Submodule in Col 1
      let subModule = '';
      if (c[colSub] && c[colSub].v) {
        subModule = String(c[colSub].v).trim();
        if (subModule) currentSubModule = subModule;
      }
      if (!subModule && currentSubModule) {
        subModule = currentSubModule;
      }

      // Prof in colProf
      if (c[colProf] && c[colProf].v) {
        const val3 = String(c[colProf].v).trim();
        if (val3) currentProf = val3;
      }

      // Course title in colCourse
      const rawTitle = (c[colCourse] && c[colCourse].v) ? String(c[colCourse].v).trim() : '';
      if (!rawTitle || rawTitle === '...' || rawTitle.toLowerCase() === 'cours') {
        continue;
      }

      // Observation in colObs
      const rawObs = (colObs !== -1 && c[colObs] && c[colObs].v) ? String(c[colObs].v).trim() : '';

      // Faculty status in colStatus
      const rawStatus = (c[colStatus] && c[colStatus].v) ? String(c[colStatus].v).trim() : '';

      // C1 & C2
      const c1Val = c[colC1] ? c[colC1].v : false;
      const c1 = String(c1Val).toUpperCase() === 'TRUE' || c1Val === true;

      const c2Val = c[colC2] ? c[colC2].v : false;
      const c2 = String(c2Val).toUpperCase() === 'TRUE' || c2Val === true;

      const { cleanTitle, badges: titleBadges } = this.parseCourseTitle(rawTitle);
      const obsBadges = this.parseObservationBadges(rawObs);
      const badges = [...titleBadges, ...obsBadges];

      let facultyStatus = 'Non effectué';
      const sLower = rawStatus.toLowerCase();
      if (sLower.includes('effectu')) {
        facultyStatus = 'Effectué';
      } else if (sLower.includes('cours')) {
        facultyStatus = 'En cours';
      } else if (sLower.includes('hors')) {
        facultyStatus = 'Hors programme';
      }

      const id = `c_${counter.toString().padStart(3, '0')}`;
      counter++;

      // Canonical question resolver
      const questions = resolveCourseQuestions({ title: cleanTitle, rawTitle });
      const weight = Number(((questions / 2227) * 100).toFixed(2));

      // Inherit submodule from initialData if missing
      const initCourse = this.matchInitialCourse(cleanTitle, rawTitle, id);
      if (initCourse && !subModule && initCourse.submodule) {
        subModule = initCourse.submodule;
      }

      courses.push({
        id,
        module: currentModule,
        submodule: this.normalizeSubmodule(subModule, currentModule),
        prof: currentProf,
        rawTitle,
        title: cleanTitle,
        observation: rawObs,
        badges,
        facultyStatus,
        questions,
        weight,
        sheetC1: c1,
        sheetC2: c2
      });
    }

    return {
      courses,
      sheetUpdateDate,
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

  processSheetCSV(csvText) {
    const rows = this.parseCSV(csvText);
    if (!rows || rows.length < 3) {
      throw new Error('Feuille vide');
    }

    let sheetUpdateDate = 'N/A';
    if (rows[0]) {
      for (const cell of rows[0]) {
        const m = cell.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
        if (m) {
          sheetUpdateDate = m[0];
          break;
        }
      }
    }

    // Dynamic column detection in Row 1
    let colModule = 0;
    let colSub = 1;
    let colProf = 3;
    let colCourse = 4;
    let colObs = -1;
    let colStatus = 5;
    let colC1 = 6;
    let colC2 = 7;

    if (rows[1]) {
      rows[1].forEach((h, idx) => {
        const hl = h.toLowerCase();
        if (hl.includes('prof')) colProf = idx;
        if (hl.includes('cours')) colCourse = idx;
        if (hl.includes('observation')) colObs = idx;
        if (hl === 'cm' || hl.includes('statut') || hl.includes('status')) colStatus = idx;
      });
      if (colObs !== -1) {
        colStatus = colObs + 1;
        colC1 = colStatus + 1;
        colC2 = colC1 + 1;
      }
    }

    const courses = [];
    let currentModule = '';
    let currentSubModule = '';
    let currentProf = '';
    let counter = 1;

    for (let r = 3; r < rows.length; r++) {
      const row = rows[r];
      if (!row) continue;

      if (row[colModule] && row[colModule].trim()) {
        const val0 = row[colModule].trim();
        if (val0 && val0 !== currentModule) {
          currentModule = val0;
          currentSubModule = '';
        }
      }

      let subModule = (row[colSub] || '').trim();
      if (subModule) {
        currentSubModule = subModule;
      } else if (currentSubModule) {
        subModule = currentSubModule;
      }

      if (row[colProf] && row[colProf].trim()) {
        currentProf = row[colProf].trim();
      }

      const rawTitle = (row[colCourse] || '').trim();
      if (!rawTitle || rawTitle === '...' || rawTitle.toLowerCase() === 'cours') {
        continue;
      }

      const rawObs = colObs !== -1 ? (row[colObs] || '').trim() : '';
      const rawStatus = (row[colStatus] || '').trim();

      const c1 = (row[colC1] || '').trim().toUpperCase() === 'TRUE';
      const c2 = (row[colC2] || '').trim().toUpperCase() === 'TRUE';

      const { cleanTitle, badges: titleBadges } = this.parseCourseTitle(rawTitle);
      const obsBadges = this.parseObservationBadges(rawObs);
      const badges = [...titleBadges, ...obsBadges];

      let facultyStatus = 'Non effectué';
      const sLower = rawStatus.toLowerCase();
      if (sLower.includes('effectu')) {
        facultyStatus = 'Effectué';
      } else if (sLower.includes('cours')) {
        facultyStatus = 'En cours';
      } else if (sLower.includes('hors')) {
        facultyStatus = 'Hors programme';
      }

      const id = `c_${counter.toString().padStart(3, '0')}`;
      counter++;

      // Canonical question resolver
      const questions = resolveCourseQuestions({ title: cleanTitle, rawTitle });
      const weight = Number(((questions / 2227) * 100).toFixed(2));

      // Inherit submodule from initialData if missing
      const initCourse = this.matchInitialCourse(cleanTitle, rawTitle, id);
      if (initCourse && !subModule && initCourse.submodule) {
        subModule = initCourse.submodule;
      }

      courses.push({
        id,
        module: currentModule,
        submodule: this.normalizeSubmodule(subModule, currentModule),
        prof: currentProf,
        rawTitle,
        title: cleanTitle,
        observation: rawObs,
        badges,
        facultyStatus,
        questions,
        weight,
        sheetC1: c1,
        sheetC2: c2
      });
    }

    return {
      courses,
      sheetUpdateDate,
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
      console.log('[Sync] JSONP successful! Courses count:', data.courses.length);
      return { success: true, data };
    } catch (errJsonp) {
      console.warn('[Sync] JSONP failed, trying Tier 2 direct CSV:', errJsonp.message);
    }

    // Tier 2: Try direct CSV fetch with normalized export URL
    try {
      const data = await this.fetchDirectCsv(csvExportUrl);
      console.log('[Sync] Direct CSV fetch successful!');
      return { success: true, data };
    } catch (errDirect) {
      console.warn('[Sync] Direct CSV failed, trying Tier 3 proxy:', errDirect.message);
    }

    // Tier 3: Try CORS proxy with normalized export URL
    try {
      const data = await this.fetchViaProxy(csvExportUrl);
      console.log('[Sync] Proxy fetch successful!');
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
