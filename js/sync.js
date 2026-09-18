/**
 * Sync Manager for Recensement S9
 * Connects to Google Sheets with zero CORS errors using Google Visualization JSONP,
 * with fallbacks for direct CSV and proxy, and schedules daily 20:00 synchronization.
 */

import { Storage } from './storage.js';
import { INITIAL_DATA } from './initialData.js';

export const Sync = {
  syncTimeoutId: null,

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
          delete window[callbackName]; delete globalThis[callbackName];
        } catch (e) {
          window[callbackName] = undefined;
        }
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }

      window[callbackName] = globalThis[callbackName] = (data) => {
        cleanup();
        try {
          const parsed = this.processGvizResponse(data);
          resolve(parsed);
        } catch (err) {
          reject(err);
        }
      };

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

    // Check Row 0 for update date
    if (rows[0] && rows[0].c && rows[0].c[5] && rows[0].c[5].v) {
      sheetUpdateDate = String(rows[0].c[5].v).trim();
    }

    const courses = [];
    let currentModule = '';
    let currentProf = '';
    let counter = 1;

    for (let r = 3; r < rows.length; r++) {
      const row = rows[r];
      if (!row || !row.c) continue;

      const c = row.c;

      // Module in Col 0
      if (c[0] && c[0].v) {
        const val0 = String(c[0].v).trim();
        if (val0) currentModule = val0;
      }

      // Submodule in Col 1
      let subModule = '';
      if (c[1] && c[1].v) {
        subModule = String(c[1].v).trim();
      }

      // Prof in Col 3
      if (c[3] && c[3].v) {
        const val3 = String(c[3].v).trim();
        if (val3) currentProf = val3;
      }

      // Course title in Col 4
      const rawTitle = (c[4] && c[4].v) ? String(c[4].v).trim() : '';
      if (!rawTitle || rawTitle === '...' || rawTitle.toLowerCase() === 'cours') {
        continue;
      }

      // Faculty status in Col 5
      const rawStatus = (c[5] && c[5].v) ? String(c[5].v).trim() : '';

      // C1 & C2
      const c1Val = c[6] ? c[6].v : false;
      const c1 = String(c1Val).toUpperCase() === 'TRUE' || c1Val === true;

      const c2Val = c[7] ? c[7].v : false;
      const c2 = String(c2Val).toUpperCase() === 'TRUE' || c2Val === true;

      const { cleanTitle, badges } = this.parseCourseTitle(rawTitle);

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

      courses.push({
        id,
        module: currentModule,
        submodule: subModule,
        prof: currentProf,
        rawTitle,
        title: cleanTitle,
        badges,
        facultyStatus,
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
    if (rows[0] && rows[0].length > 5 && rows[0][5]) {
      sheetUpdateDate = rows[0][5];
    }

    const courses = [];
    let currentModule = '';
    let currentProf = '';
    let counter = 1;

    for (let r = 3; r < rows.length; r++) {
      const row = rows[r];
      if (!row) continue;

      if (row[0] && row[0].trim()) {
        currentModule = row[0].trim();
      }
      if (row[3] && row[3].trim()) {
        currentProf = row[3].trim();
      }

      const rawTitle = (row[4] || '').trim();
      const rawStatus = (row[5] || '').trim();

      if (!rawTitle || rawTitle === '...' || rawTitle.toLowerCase() === 'cours') {
        continue;
      }

      const subModule = (row[1] || '').trim();
      const c1 = (row[6] || '').trim().toUpperCase() === 'TRUE';
      const c2 = (row[7] || '').trim().toUpperCase() === 'TRUE';

      const { cleanTitle, badges } = this.parseCourseTitle(rawTitle);

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

      courses.push({
        id,
        module: currentModule,
        submodule: subModule,
        prof: currentProf,
        rawTitle,
        title: cleanTitle,
        badges,
        facultyStatus,
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
