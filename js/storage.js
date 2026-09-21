/**
 * Storage Manager for Recensement S9
 * Handles persistence of personal advancement, notes, layers, and settings in localStorage.
 */

const STORAGE_KEYS = {
  PERSONAL_PROGRESS: 'recensement_personal_progress_v1',
  SETTINGS: 'recensement_settings_v1',
  SYNC_META: 'recensement_sync_meta_v1',
  CACHED_COURSES: 'recensement_cached_courses_v1',
  FACULTY_OVERRIDES: 'recensement_faculty_overrides_v1',
  FACULTY_DATES: 'recensement_faculty_dates_v1',
  SEEN_CATCHUP_IDS: 'recensement_seen_catchup_ids_v1'
};

const DEFAULT_SETTINGS = {
  theme: 'light', // Light theme by default
  autoSync: true,
  syncHour: 20,
  syncMinute: 0,
  sheetUrl: 'https://docs.google.com/spreadsheets/d/1MB7Ay2KFM3QEOW-5RMaBr4GQQgBvx76E1NHqB2Mg_74/export?format=csv&gid=0',
  viewMode: 'syllabus', // Default view is organized syllabus by module
  enableCouches: true
};

export const Storage = {
  getPersonalProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PERSONAL_PROGRESS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Failed to read personal progress:', e);
      return {};
    }
  },

  savePersonalProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEYS.PERSONAL_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save personal progress:', e);
    }
  },

  toggleCourseDone(courseId) {
    const progress = this.getPersonalProgress();
    const current = progress[courseId] || { done: false, c1: false, c2: false, note: '' };
    current.done = !current.done;
    if (current.done) {
      current.doneDate = new Date().toISOString();
    } else {
      delete current.doneDate;
    }
    progress[courseId] = current;
    this.savePersonalProgress(progress);
    return current;
  },

  toggleCourseCouche(courseId, coucheIndex) {
    const progress = this.getPersonalProgress();
    const current = progress[courseId] || { done: false, c1: false, c2: false, note: '' };
    const key = coucheIndex === 1 ? 'c1' : 'c2';
    current[key] = !current[key];
    if (current.c1 || current.c2) {
      current.done = true;
      if (!current.doneDate) current.doneDate = new Date().toISOString();
    }
    progress[courseId] = current;
    this.savePersonalProgress(progress);
    return current;
  },

  saveCourseNote(courseId, note) {
    const progress = this.getPersonalProgress();
    const current = progress[courseId] || { done: false, c1: false, c2: false, note: '' };
    current.note = note.trim();
    progress[courseId] = current;
    this.savePersonalProgress(progress);
    return current;
  },

  getSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : { ...DEFAULT_SETTINGS };
    } catch (e) {
      return { ...DEFAULT_SETTINGS };
    }
  },

  saveSettings(newSettings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...newSettings };
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Failed to save settings:', e);
      return DEFAULT_SETTINGS;
    }
  },

  getSyncMeta() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SYNC_META);
      return raw ? JSON.parse(raw) : { lastSyncedAt: null, sheetDate: '', newUpdatesCount: 0 };
    } catch (e) {
      return { lastSyncedAt: null, sheetDate: '', newUpdatesCount: 0 };
    }
  },

  setSyncMeta(meta) {
    try {
      localStorage.setItem(STORAGE_KEYS.SYNC_META, JSON.stringify(meta));
    } catch (e) {
      console.error('Failed to save sync meta:', e);
    }
  },

  getCachedCourses() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CACHED_COURSES);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  setCachedCourses(courses) {
    try {
      localStorage.setItem(STORAGE_KEYS.CACHED_COURSES, JSON.stringify(courses));
    } catch (e) {
      console.error('Failed to save cached courses:', e);
    }
  },


  getFacultyOverrides() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.FACULTY_OVERRIDES);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  saveFacultyOverride(courseId, status) {
    try {
      const overrides = this.getFacultyOverrides();
      if (status === null || status === undefined) {
        delete overrides[courseId];
      } else {
        overrides[courseId] = status;
      }
      localStorage.setItem(STORAGE_KEYS.FACULTY_OVERRIDES, JSON.stringify(overrides));
    } catch (e) {
      console.error('Failed to save faculty override:', e);
    }
  },

  clearFacultyOverrides() {
    try {
      localStorage.removeItem(STORAGE_KEYS.FACULTY_OVERRIDES);
    } catch (e) {
      console.error('Failed to clear faculty overrides:', e);
    }
  },

  getFacultyDates() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.FACULTY_DATES);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  saveFacultyDates(dates) {
    try {
      localStorage.setItem(STORAGE_KEYS.FACULTY_DATES, JSON.stringify(dates));
    } catch (e) {
      console.error('Failed to save faculty dates:', e);
    }
  },

  saveFacultyDate(courseId, dateStr) {
    const dates = this.getFacultyDates();
    if (!dateStr) {
      delete dates[courseId];
    } else {
      dates[courseId] = dateStr;
    }
    this.saveFacultyDates(dates);
  },

  getSeenCatchupIds() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SEEN_CATCHUP_IDS);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  saveSeenCatchupIds(ids) {
    try {
      localStorage.setItem(STORAGE_KEYS.SEEN_CATCHUP_IDS, JSON.stringify(ids));
    } catch (e) {
      console.error('Failed to save seen catchup ids:', e);
    }
  },

  markCatchupIdsSeen(courseIds) {
    const seen = this.getSeenCatchupIds() || [];
    const seenSet = new Set(seen);
    let changed = false;
    courseIds.forEach(id => {
      if (!seenSet.has(id)) {
        seenSet.add(id);
        changed = true;
      }
    });
    if (changed) {
      this.saveSeenCatchupIds(Array.from(seenSet));
    }
  },

  exportBackup() {
    return JSON.stringify({
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: this.getPersonalProgress(),
      settings: this.getSettings()
    }, null, 2);
  },

  importBackup(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.progress) {
        this.savePersonalProgress(data.progress);
      }
      if (data.settings) {
        this.saveSettings(data.settings);
      }
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
};
