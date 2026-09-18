
let activePopoverCourseId = null;

function applyFacultyOverrides() {
  const overrides = Storage.getFacultyOverrides();
  state.courses.forEach(c => {
    if (overrides[c.id]) {
      c.facultyStatus = overrides[c.id];
      c.isCustomStatus = true;
    }
  });
}

function openFacultyStatusPopover(courseId, triggerBtn) {
  activePopoverCourseId = courseId;
  const popover = document.getElementById('facultyStatusPopover');
  if (!popover) return;

  const rect = triggerBtn.getBoundingClientRect();
  const popoverWidth = 200;
  
  // Position popover
  let left = rect.left;
  if (left + popoverWidth > window.innerWidth - 10) {
    left = window.innerWidth - popoverWidth - 10;
  }
  if (left < 10) left = 10;

  let top = rect.bottom + 6;
  if (top + 180 > window.innerHeight) {
    top = rect.top - 180;
  }

  popover.style.top = `${Math.max(10, top)}px`;
  popover.style.left = `${Math.max(10, left)}px`;
  popover.classList.remove('hidden');
}

function closeFacultyStatusPopover() {
  const popover = document.getElementById('facultyStatusPopover');
  if (popover) popover.classList.add('hidden');
  activePopoverCourseId = null;
}

function setCourseFacultyStatus(courseId, newStatus) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;

  course.facultyStatus = newStatus;
  course.isCustomStatus = true;

  Storage.saveFacultyOverride(courseId, newStatus);
  Storage.setCachedCourses(state.courses);

  showToast(`Statut faculté mis à jour : ${newStatus}`, 'success');
  renderDashboard();
}

/**
 * Main Application Controller for Recensement S9 Dashboard
 * 100% Clean Light Medical Theme, Hierarchical Syllabus View by default.
 */

import { INITIAL_DATA } from './initialData.js';
import { Storage } from './storage.js';
import { Sync } from './sync.js';

// State Management
const state = {
  courses: [],
  sheetDate: INITIAL_DATA.sheetUpdateDate,
  personalProgress: {},
  settings: {},
  filters: {
    tab: 'all',          // 'all' | 'catchup' | 'done' | 'todo'
    module: '',
    facStatus: '',
    prof: '',
    search: ''
  },
  activeNoteCourseId: null,
  activeView: 'syllabus', // 'syllabus' (default) | 'table' | 'cards'
  moduleCollapsed: {
    'GYNECO-OBSTETRIQUE': false,
    'ORL - OPHTALMO': false,
    'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ': false,
    'URGENCES - RÉANIMATION': false
  }
};

// Module Metadata & Styling
const MODULES_META = {
  'GYNECO-OBSTETRIQUE': {
    id: 'gyneco-obs',
    title: 'Gynécologie - Obstétrique',
    short: 'Gynéco-Obs',
    coeff: '1.0 (Gynéco 0.4 / Obs 0.6)',
    coeffShort: 'Coeff 1.0',
    color: 'text-pink-600',
    bgLight: 'bg-pink-50',
    border: 'border-pink-200',
    accentBar: 'bg-pink-500',
    icon: 'baby'
  },
  'ORL - OPHTALMO': {
    id: 'orl-ophtalmo',
    title: 'ORL - Ophtalmologie',
    short: 'ORL - Ophtalmo',
    coeff: '2.0 (ORL 1.0 / Ophtalmo 1.0)',
    coeffShort: 'Coeff 2.0',
    color: 'text-amber-600',
    bgLight: 'bg-amber-50',
    border: 'border-amber-200',
    accentBar: 'bg-amber-500',
    icon: 'eye'
  },
  'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ': {
    id: 'sante-publique',
    title: 'Médecine Sociale & Santé Publique - Économie de Santé',
    short: 'Santé Publique & Éco',
    coeff: '1.0 (Santé Publique 0.8 / Éco 0.2)',
    coeffShort: 'Coeff 1.0',
    color: 'text-emerald-600',
    bgLight: 'bg-emerald-50',
    border: 'border-emerald-200',
    accentBar: 'bg-emerald-500',
    icon: 'activity'
  },
  'URGENCES - RÉANIMATION': {
    id: 'urgences-rea',
    title: 'Urgences - Réanimation',
    short: 'Urgences - Réa',
    coeff: '1.0 (Urgences 0.6 / Réa 0.4)',
    coeffShort: 'Coeff 1.0',
    color: 'text-blue-600',
    bgLight: 'bg-blue-50',
    border: 'border-blue-200',
    accentBar: 'bg-blue-500',
    icon: 'siren'
  }
};

// DOM Elements Cache
const elements = {
  // Sync
  btnSyncManual: document.getElementById('btnSyncManual'),
  syncIcon: document.getElementById('syncIcon'),
  nextSyncLabel: document.getElementById('nextSyncLabel'),
  bannerAlert: document.getElementById('bannerAlert'),
  bannerMessage: document.getElementById('bannerMessage'),
  bannerIcon: document.getElementById('bannerIcon'),
  btnCloseBanner: document.getElementById('btnCloseBanner'),
  lastSheetUpdateLabel: document.getElementById('lastSheetUpdateLabel'),

  // Stats
  statMyPercent: document.getElementById('statMyPercent'),
  statMyCount: document.getElementById('statMyCount'),
  statMyBar: document.getElementById('statMyBar'),
  statFacCount: document.getElementById('statFacCount'),
  statFacBar: document.getElementById('statFacBar'),
  statCatchupCount: document.getElementById('statCatchupCount'),
  cardPriorityCatchup: document.getElementById('cardPriorityCatchup'),
  statC1Count: document.getElementById('statC1Count'),
  statC2Count: document.getElementById('statC2Count'),

  // Tabs
  countTabAll: document.getElementById('countTabAll'),
  countTabCatchup: document.getElementById('countTabCatchup'),
  countTabDone: document.getElementById('countTabDone'),
  countTabTodo: document.getElementById('countTabTodo'),
  mobileCatchupBadge: document.getElementById('mobileCatchupBadge'),

  // Navigation & Modules
  moduleCardsContainer: document.getElementById('moduleCardsContainer'),
  btnToggleAllAccordions: document.getElementById('btnToggleAllAccordions'),

  // Views Containers
  coursesSyllabusView: document.getElementById('coursesSyllabusView'),
  coursesTableView: document.getElementById('coursesTableView'),
  coursesTableBody: document.getElementById('coursesTableBody'),
  coursesCardsView: document.getElementById('coursesCardsView'),
  emptyState: document.getElementById('emptyState'),
  btnEmptyReset: document.getElementById('btnEmptyReset'),
  resultsSummary: document.getElementById('resultsSummary'),

  // Controls
  searchInput: document.getElementById('searchInput'),
  btnClearSearch: document.getElementById('btnClearSearch'),
  filterModule: document.getElementById('filterModule'),
  filterFacStatus: document.getElementById('filterFacStatus'),
  filterProf: document.getElementById('filterProf'),
  btnResetFilters: document.getElementById('btnResetFilters'),

  // View Switchers
  btnViewSyllabus: document.getElementById('btnViewSyllabus'),
  btnViewTable: document.getElementById('btnViewTable'),
  btnViewCards: document.getElementById('btnViewCards'),

  // Note Modal
  noteModal: document.getElementById('noteModal'),
  noteModalTitle: document.getElementById('noteModalTitle'),
  noteModalModule: document.getElementById('noteModalModule'),
  noteModalProf: document.getElementById('noteModalProf'),
  noteTextarea: document.getElementById('noteTextarea'),
  btnCloseNoteModal: document.getElementById('btnCloseNoteModal'),
  btnCancelNote: document.getElementById('btnCancelNote'),
  btnSaveNote: document.getElementById('btnSaveNote'),
  noteSaveStatus: document.getElementById('noteSaveStatus'),

  // Settings Modal
  btnOpenSettings: document.getElementById('btnOpenSettings'),
  settingsModal: document.getElementById('settingsModal'),
  btnCloseSettingsModal: document.getElementById('btnCloseSettingsModal'),
  settingSheetUrl: document.getElementById('settingSheetUrl'),
  settingAutoSync: document.getElementById('settingAutoSync'),
  btnSaveSettingsModal: document.getElementById('btnSaveSettingsModal'),
  btnExportBackup: document.getElementById('btnExportBackup'),
  importFileInput: document.getElementById('importFileInput'),
  btnResetAllData: document.getElementById('btnResetAllData'),

  // Mobile
  btnMobileSync: document.getElementById('btnMobileSync'),
  btnMobileSettings: document.getElementById('btnMobileSettings'),

  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage'),
  toastIcon: document.getElementById('toastIcon')
};

/**
 * Initialize Application
 */
async function init() {
  // Load settings
  state.settings = Storage.getSettings();
  state.activeView = state.settings.viewMode || 'syllabus';

  // Load cached courses or initial pre-bundled
  const cached = Storage.getCachedCourses();
  if (cached && Array.isArray(cached) && cached.length > 0) {
    state.courses = cached;
  } else {
    state.courses = INITIAL_DATA.courses;
    Storage.setCachedCourses(state.courses);
  }

  // Apply user faculty status overrides
  applyFacultyOverrides();

  // Load sync metadata
  const syncMeta = Storage.getSyncMeta();
  if (syncMeta.sheetDate) {
    state.sheetDate = syncMeta.sheetDate;
  }
  updateSheetDateDisplay();

  // Load user progress
  state.personalProgress = Storage.getPersonalProgress();

  // Populate Professors list
  populateProfessors();

  // Setup UI Listeners
  setupEventListeners();

  // Setup View mode buttons
  setViewMode(state.activeView);

  // Setup Daily 20:00 Scheduler
  updateNextSyncBadge();
  setInterval(updateNextSyncBadge, 60000);

  if (state.settings.autoSync) {
    Sync.scheduleDailySync(handleDailyAutoSync);
    if (Sync.isSyncOverdue()) {
      console.log('[Auto-Sync] Sync overdue, triggering background refresh...');
      triggerSync(false);
    }
  }

  // Initial render
  renderDashboard();
  refreshIcons();
}

/**
 * Render Complete Dashboard
 */
function renderDashboard() {
  updateStats();
  renderModuleQuickCards();
  renderCoursesView();
  refreshIcons();
}

/**
 * Populate professors dropdown
 */
function populateProfessors() {
  const profs = Array.from(new Set(state.courses.map(c => c.prof).filter(Boolean))).sort();
  elements.filterProf.innerHTML = '<option value="">Tous les Enseignants (' + profs.length + ')</option>';
  profs.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    elements.filterProf.appendChild(opt);
  });
}

/**
 * Update global statistics
 */
function updateStats() {
  const total = state.courses.length;
  const facDone = state.courses.filter(c => c.facultyStatus === 'Effectué').length;
  const myDone = state.courses.filter(c => state.personalProgress[c.id]?.done).length;
  const myPercent = total > 0 ? Math.round((myDone / total) * 100) : 0;
  const facPercent = total > 0 ? Math.round((facDone / total) * 100) : 0;

  const catchupList = state.courses.filter(c => c.facultyStatus === 'Effectué' && !state.personalProgress[c.id]?.done);
  const catchupCount = catchupList.length;

  const c1Count = state.courses.filter(c => state.personalProgress[c.id]?.c1).length;
  const c2Count = state.courses.filter(c => state.personalProgress[c.id]?.c2).length;

  // DOM elements
  elements.statMyPercent.textContent = `${myPercent}%`;
  elements.statMyCount.textContent = myDone;
  elements.statMyBar.style.width = `${myPercent}%`;

  elements.statFacCount.textContent = facDone;
  elements.statFacBar.style.width = `${facPercent}%`;

  elements.statCatchupCount.textContent = catchupCount;
  elements.statC1Count.textContent = c1Count;
  elements.statC2Count.textContent = c2Count;

  // Tabs counts
  elements.countTabAll.textContent = total;
  elements.countTabCatchup.textContent = catchupCount;
  elements.countTabDone.textContent = myDone;
  elements.countTabTodo.textContent = total - myDone;

  // Mobile badge
  if (catchupCount > 0) {
    elements.mobileCatchupBadge.textContent = catchupCount;
    elements.mobileCatchupBadge.classList.remove('hidden');
  } else {
    elements.mobileCatchupBadge.classList.add('hidden');
  }
}

/**
 * Render Quick Jump Module Cards
 */
function renderModuleQuickCards() {
  elements.moduleCardsContainer.innerHTML = '';

  const modules = Object.keys(MODULES_META);
  modules.forEach(modKey => {
    const meta = MODULES_META[modKey];
    const modCourses = state.courses.filter(c => c.module === modKey);
    const modTotal = modCourses.length;
    const modMyDone = modCourses.filter(c => state.personalProgress[c.id]?.done).length;
    const modFacDone = modCourses.filter(c => c.facultyStatus === 'Effectué').length;
    const percent = modTotal > 0 ? Math.round((modMyDone / modTotal) * 100) : 0;

    const isSelected = state.filters.module === modKey;

    const card = document.createElement('div');
    card.className = `light-card rounded-xl p-3 cursor-pointer transition border ${
      isSelected 
        ? 'border-indigo-500 bg-indigo-50/50 ring-2 ring-indigo-500/20' 
        : 'hover:border-slate-300'
    }`;
    
    // Jump and scroll to module or filter
    card.onclick = () => {
      // If we are in syllabus view, scroll directly to module section
      if (state.activeView === 'syllabus') {
        const targetSection = document.getElementById(`section-${meta.id}`);
        if (targetSection) {
          state.moduleCollapsed[modKey] = false;
          renderDashboard();
          setTimeout(() => {
            const el = document.getElementById(`section-${meta.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
          return;
        }
      }
      selectModuleFilter(isSelected ? '' : modKey);
    };

    card.innerHTML = `
      <div class="flex items-center justify-between mb-1.5">
        <div class="flex items-center gap-1.5">
          <div class="p-1.5 rounded-lg ${meta.bgLight} ${meta.color}">
            <i data-lucide="${meta.icon}" class="w-3.5 h-3.5"></i>
          </div>
          <span class="font-bold text-xs text-slate-800">${meta.short}</span>
        </div>
        <span class="text-xs font-bold ${percent === 100 ? 'text-emerald-600' : 'text-indigo-600'}">${percent}%</span>
      </div>

      <div class="space-y-1 mt-2">
        <div class="flex justify-between text-[10px] text-slate-500 font-medium">
          <span>Moi: <strong>${modMyDone}</strong>/${modTotal}</span>
          <span>Fac: <strong>${modFacDone}</strong>/${modTotal}</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div class="${meta.accentBar} h-1.5 rounded-full transition-all duration-300" style="width: ${percent}%"></div>
        </div>
      </div>
    `;

    elements.moduleCardsContainer.appendChild(card);
  });
}

/**
 * Filter courses based on active controls
 */
function getFilteredCourses() {
  return state.courses.filter(course => {
    const progress = state.personalProgress[course.id] || {};
    const isDone = !!progress.done;
    const isCatchup = course.facultyStatus === 'Effectué' && !isDone;

    if (state.filters.tab === 'catchup' && !isCatchup) return false;
    if (state.filters.tab === 'done' && !isDone) return false;
    if (state.filters.tab === 'todo' && isDone) return false;

    if (state.filters.module && course.module !== state.filters.module) return false;
    if (state.filters.facStatus && course.facultyStatus !== state.filters.facStatus) return false;
    if (state.filters.prof && course.prof !== state.filters.prof) return false;

    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      const matchTitle = (course.title || '').toLowerCase().includes(q);
      const matchRaw = (course.rawTitle || '').toLowerCase().includes(q);
      const matchProf = (course.prof || '').toLowerCase().includes(q);
      const matchModule = (course.module || '').toLowerCase().includes(q);
      const matchSub = (course.submodule || '').toLowerCase().includes(q);
      const matchNote = (progress.note || '').toLowerCase().includes(q);
      const matchBadge = (course.badges || []).some(b => b.text.toLowerCase().includes(q));

      if (!matchTitle && !matchRaw && !matchProf && !matchModule && !matchSub && !matchNote && !matchBadge) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Master Render of Current View (Syllabus, Table, or Cards)
 */
function renderCoursesView() {
  const filtered = getFilteredCourses();
  elements.resultsSummary.textContent = `Affichage de ${filtered.length} sur ${state.courses.length} cours`;

  if (filtered.length === 0) {
    elements.coursesSyllabusView.classList.add('hidden');
    elements.coursesTableView.classList.add('hidden');
    elements.coursesCardsView.classList.add('hidden');
    elements.emptyState.classList.remove('hidden');
    return;
  }

  elements.emptyState.classList.add('hidden');

  if (state.activeView === 'syllabus') {
    elements.coursesSyllabusView.classList.remove('hidden');
    elements.coursesTableView.classList.add('hidden');
    elements.coursesCardsView.classList.add('hidden');
    renderSyllabusView(filtered);
  } else if (state.activeView === 'table') {
    elements.coursesSyllabusView.classList.add('hidden');
    elements.coursesTableView.classList.remove('hidden');
    elements.coursesCardsView.classList.add('hidden');
    renderTableView(filtered);
  } else {
    elements.coursesSyllabusView.classList.add('hidden');
    elements.coursesTableView.classList.add('hidden');
    elements.coursesCardsView.classList.remove('hidden');
    renderCardsView(filtered);
  }
}

/**
 * 1. SYLLABUS HIERARCHICAL VIEW (DEFAULT)
 * Organizes by Module -> Professor Group -> Clean Course Rows
 */
function renderSyllabusView(filteredCourses) {
  elements.coursesSyllabusView.innerHTML = '';

  const modules = Object.keys(MODULES_META);
  
  modules.forEach(modKey => {
    const meta = MODULES_META[modKey];
    const modCourses = filteredCourses.filter(c => c.module === modKey);
    
    // If filtering and this module has no matching courses, skip
    if (modCourses.length === 0) return;

    // Calculate module completion stats
    const allModCourses = state.courses.filter(c => c.module === modKey);
    const modMyDone = allModCourses.filter(c => state.personalProgress[c.id]?.done).length;
    const modFacDone = allModCourses.filter(c => c.facultyStatus === 'Effectué').length;
    const modPercent = allModCourses.length > 0 ? Math.round((modMyDone / allModCourses.length) * 100) : 0;

    const isCollapsed = !!state.moduleCollapsed[modKey];

    // Module Container Box
    const section = document.createElement('div');
    section.id = `section-${meta.id}`;
    section.className = 'light-card rounded-2xl overflow-hidden border border-slate-200 transition-all';

    // Module Header Bar (Accordion Trigger)
    const header = document.createElement('div');
    header.className = `p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none bg-gradient-to-r from-slate-50 to-white hover:bg-slate-100/60 border-b ${isCollapsed ? 'border-transparent' : 'border-slate-200'} transition`;
    header.onclick = () => {
      state.moduleCollapsed[modKey] = !state.moduleCollapsed[modKey];
      renderCoursesView();
      refreshIcons();
    };

    header.innerHTML = `
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <div class="p-2.5 rounded-xl ${meta.bgLight} ${meta.color} flex-shrink-0 shadow-sm border ${meta.border}">
          <i data-lucide="${meta.icon}" class="w-5 h-5"></i>
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 truncate tracking-tight">
              ${meta.title}
            </h3>
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-full ${meta.bgLight} ${meta.color} border ${meta.border}">
              ${meta.coeffShort}
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-0.5">
            ${modMyDone} sur ${allModCourses.length} cours étudiés (${modPercent}%) • Faculté : ${modFacDone} dispensés
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 flex-shrink-0">
        <!-- Mini Progress Pill -->
        <div class="hidden sm:flex items-center gap-2">
          <div class="w-20 bg-slate-200 rounded-full h-2 overflow-hidden">
            <div class="${meta.accentBar} h-2 rounded-full" style="width: ${modPercent}%"></div>
          </div>
          <span class="text-xs font-bold text-slate-700">${modPercent}%</span>
        </div>

        <!-- Chevron -->
        <div class="p-1 rounded-lg text-slate-400 hover:text-slate-700">
          <i data-lucide="${isCollapsed ? 'chevron-down' : 'chevron-up'}" class="w-5 h-5"></i>
        </div>
      </div>
    `;

    section.appendChild(header);

    // Module Body (Lessons grouped by Professor)
    if (!isCollapsed) {
      const body = document.createElement('div');
      body.className = 'p-3 sm:p-5 space-y-4 bg-white';

      // Group courses by Professor (maintaining sheet order)
      const profGroups = [];
      const seenProfs = new Set();

      modCourses.forEach(c => {
        const profName = c.prof || 'Enseignants Divers';
        if (!seenProfs.has(profName)) {
          seenProfs.add(profName);
          profGroups.push({
            prof: profName,
            courses: modCourses.filter(item => (item.prof || 'Enseignants Divers') === profName)
          });
        }
      });

      profGroups.forEach(group => {
        const groupBlock = document.createElement('div');
        groupBlock.className = 'space-y-2';

        // Professor Group Divider Header
        const groupHeader = document.createElement('div');
        groupHeader.className = 'flex items-center gap-2 px-1 pt-1 pb-0.5';
        groupHeader.innerHTML = `
          <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">${group.prof}</span>
          <span class="text-[11px] text-slate-400 font-medium">(${group.courses.length} cours)</span>
          <div class="h-px bg-slate-100 flex-1 ml-2"></div>
        `;
        groupBlock.appendChild(groupHeader);

        // Course rows list
        const rowsList = document.createElement('div');
        rowsList.className = 'space-y-2';

        group.courses.forEach(course => {
          const row = createCourseRowElement(course);
          rowsList.appendChild(row);
        });

        groupBlock.appendChild(rowsList);
        body.appendChild(groupBlock);
      });

      section.appendChild(body);
    }

    elements.coursesSyllabusView.appendChild(section);
  });

  setupActionListeners();
}

/**
 * Creates an elegant, horizontal, high-density Course Row
 */
function createCourseRowElement(course) {
  const progress = state.personalProgress[course.id] || { done: false, c1: false, c2: false, note: '' };
  const isDone = !!progress.done;
  const isCatchup = course.facultyStatus === 'Effectué' && !isDone;
  const facStatusClass = getFacultyStatusClass(course.facultyStatus);

  const row = document.createElement('div');
  row.className = `course-row rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
    isDone ? 'is-done' : ''
  } ${isCatchup ? 'is-catchup' : ''}`;

  // Left column: Checkbox + Title + Badges
  // Right column: Faculty Status + Couches (C1/C2) + Note + Actions
  row.innerHTML = `
    <div class="flex items-start gap-3 flex-1 min-w-0">
      
      <!-- Checkbox Button -->
      <button 
        class="check-toggle-btn toggle-done-btn mt-0.5 ${isDone ? 'is-checked' : ''}" 
        data-id="${course.id}"
        title="${isDone ? 'Marqué comme étudié (cliquer pour annuler)' : 'Marquer comme étudié'}"
      >
        ${isDone ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : ''}
      </button>

      <!-- Lesson Title & Badges -->
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2 flex-wrap mb-1">
          <!-- Main Clean Title -->
          <span class="font-bold text-sm text-slate-900 leading-snug cursor-pointer ${isDone ? 'line-through text-slate-500' : ''}" data-id="${course.id}">
            ${course.title}
          </span>

          <!-- Title Notes Badges (Nouveau cours, cours changé, etc.) -->
          ${(course.badges || []).map(b => `
            <span class="title-badge ${b.bg} ${b.textCol} ${b.border}">
              <i data-lucide="${b.icon || 'tag'}" class="w-3 h-3"></i>
              ${b.text}
            </span>
          `).join('')}

          <!-- Priority Catchup Badge -->
          ${isCatchup ? `
            <span class="title-badge bg-amber-50 text-amber-800 border-amber-300 flex items-center gap-1 font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              À rattraper
            </span>
          ` : ''}
        </div>

        <!-- Sub-details (Submodule & Prof) -->
        <div class="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          ${course.submodule ? `
            <span class="font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded text-[10px] uppercase">
              ${course.submodule}
            </span>
          ` : ''}
          <span>${course.prof || 'Enseignant non spécifié'}</span>
          ${progress.note ? `
            <span class="text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded text-[10px] flex items-center gap-1 font-semibold border border-amber-200">
              <i data-lucide="file-text" class="w-3 h-3"></i> Note perso
            </span>
          ` : ''}
        </div>
      </div>

    </div>

    <!-- Right Controls: Faculty Status + Couches + Note -->
    <div class="flex items-center gap-2 sm:gap-2.5 self-end sm:self-center flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto justify-between sm:justify-end">
      
      <!-- Interactive Faculty Status Selector Pill -->
      <div class="status-pill ${facStatusClass} relative cursor-pointer inline-flex items-center gap-1.5 hover:opacity-90 transition shadow-sm" title="Modifier le statut faculté">
        <i data-lucide="${getFacultyStatusIcon(course.facultyStatus)}" class="w-3 h-3 pointer-events-none flex-shrink-0"></i>
        <select 
          class="change-fac-status-select bg-transparent text-inherit font-bold text-[11px] cursor-pointer focus:outline-none pr-3.5 appearance-none" 
          data-id="${course.id}"
        >
          <option value="Effectué" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Effectué' ? 'selected' : ''}>Effectué</option>
          <option value="En cours" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'En cours' ? 'selected' : ''}>En cours</option>
          <option value="Non effectué" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Non effectué' ? 'selected' : ''}>Non effectué</option>
          <option value="Hors programme" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Hors programme' ? 'selected' : ''}>Hors programme</option>
        </select>
        <i data-lucide="chevron-down" class="w-2.5 h-2.5 opacity-60 pointer-events-none absolute right-1.5"></i>
      </div>

      <!-- Couches de Révision C1 / C2 -->
      <div class="flex items-center gap-1">
        <button 
          title="Couche 1 (1er Tour de révision)" 
          class="couche-chip ${progress.c1 ? 'active' : 'inactive'}" 
          data-id="${course.id}" 
          data-couche="1"
        >
          C1
        </button>
        <button 
          title="Couche 2 (2ème Tour de consolidation)" 
          class="couche-chip ${progress.c2 ? 'active' : 'inactive'}" 
          data-id="${course.id}" 
          data-couche="2"
        >
          C2
        </button>
      </div>

      <!-- Note Button -->
      <button 
        class="btn-note p-1.5 rounded-lg border transition ${
          progress.note 
            ? 'bg-amber-100 text-amber-800 border-amber-300' 
            : 'bg-slate-50 text-slate-400 hover:text-slate-800 hover:bg-slate-100 border-slate-200'
        }" 
        data-id="${course.id}"
        title="${progress.note ? 'Voir / Modifier ma note' : 'Ajouter une note personnelle'}"
      >
        <i data-lucide="${progress.note ? 'file-text' : 'edit-3'}" class="w-4 h-4"></i>
      </button>

    </div>
  `;

  return row;
}

/**
 * 2. COMPACT TABLE VIEW
 */
function renderTableView(courses) {
  elements.coursesTableBody.innerHTML = '';

  courses.forEach(course => {
    const progress = state.personalProgress[course.id] || { done: false, c1: false, c2: false, note: '' };
    const isDone = !!progress.done;
    const isCatchup = course.facultyStatus === 'Effectué' && !isDone;
    const facClass = getFacultyStatusClass(course.facultyStatus);

    const tr = document.createElement('tr');
    tr.className = `hover:bg-slate-50/80 transition-colors ${isDone ? 'bg-indigo-50/30' : ''} ${isCatchup ? 'bg-amber-50/20' : ''}`;

    tr.innerHTML = `
      <td class="py-3 px-4 text-center">
        <button class="check-toggle-btn toggle-done-btn mx-auto ${isDone ? 'is-checked' : ''}" data-id="${course.id}">
          ${isDone ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : ''}
        </button>
      </td>
      <td class="py-3 px-4">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-bold text-slate-900 ${isDone ? 'line-through text-slate-500' : ''}">${course.title}</span>
          ${(course.badges || []).map(b => `
            <span class="title-badge ${b.bg} ${b.textCol} ${b.border}">
              ${b.text}
            </span>
          `).join('')}
        </div>
      </td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-600">
        ${course.submodule || (MODULES_META[course.module]?.short || 'Module')}
      </td>
      <td class="py-3 px-4 text-xs text-slate-600">
        ${course.prof || '-'}
      </td>
      <td class="py-3 px-4">
<!-- Interactive Faculty Status Selector Pill -->
      <div class="status-pill ${facStatusClass} relative cursor-pointer inline-flex items-center gap-1.5 hover:opacity-90 transition shadow-sm" title="Modifier le statut faculté">
        <i data-lucide="${getFacultyStatusIcon(course.facultyStatus)}" class="w-3 h-3 pointer-events-none flex-shrink-0"></i>
        <select 
          class="change-fac-status-select bg-transparent text-inherit font-bold text-[11px] cursor-pointer focus:outline-none pr-3.5 appearance-none" 
          data-id="${course.id}"
        >
          <option value="Effectué" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Effectué' ? 'selected' : ''}>Effectué</option>
          <option value="En cours" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'En cours' ? 'selected' : ''}>En cours</option>
          <option value="Non effectué" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Non effectué' ? 'selected' : ''}>Non effectué</option>
          <option value="Hors programme" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Hors programme' ? 'selected' : ''}>Hors programme</option>
        </select>
        <i data-lucide="chevron-down" class="w-2.5 h-2.5 opacity-60 pointer-events-none absolute right-1.5"></i>
      </div>
      </td>
      <td class="py-3 px-4 text-center">
        <div class="inline-flex items-center gap-1">
          <button class="couche-chip ${progress.c1 ? 'active' : 'inactive'}" data-id="${course.id}" data-couche="1">C1</button>
          <button class="couche-chip ${progress.c2 ? 'active' : 'inactive'}" data-id="${course.id}" data-couche="2">C2</button>
        </div>
      </td>
      <td class="py-3 px-4 text-center">
        <button class="btn-note p-1.5 rounded-lg border text-slate-400 hover:text-slate-900 ${progress.note ? 'bg-amber-100 text-amber-800 border-amber-300' : 'border-slate-200'}" data-id="${course.id}">
          <i data-lucide="${progress.note ? 'file-text' : 'edit-3'}" class="w-4 h-4"></i>
        </button>
      </td>
    `;

    elements.coursesTableBody.appendChild(tr);
  });

  setupActionListeners();
}

/**
 * 3. GRID CARDS VIEW
 */
function renderCardsView(courses) {
  elements.coursesCardsView.innerHTML = '';

  courses.forEach(course => {
    const progress = state.personalProgress[course.id] || { done: false, c1: false, c2: false, note: '' };
    const isDone = !!progress.done;
    const isCatchup = course.facultyStatus === 'Effectué' && !isDone;
    const meta = MODULES_META[course.module] || { short: 'Module', bgLight: 'bg-indigo-50', color: 'text-indigo-600' };
    const facStatusClass = getFacultyStatusClass(course.facultyStatus);

    const card = document.createElement('div');
    card.className = `light-card rounded-2xl p-4 flex flex-col justify-between border transition ${
      isDone 
        ? 'bg-indigo-50/30 border-indigo-200' 
        : isCatchup 
          ? 'border-amber-300 bg-amber-50/20 shadow-sm' 
          : 'border-slate-200'
    }`;

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${meta.bgLight} ${meta.color}">
            ${course.submodule || meta.short}
          </span>
          <!-- Interactive Faculty Status Selector Pill -->
      <div class="status-pill ${facStatusClass} relative cursor-pointer inline-flex items-center gap-1.5 hover:opacity-90 transition shadow-sm" title="Modifier le statut faculté">
        <i data-lucide="${getFacultyStatusIcon(course.facultyStatus)}" class="w-3 h-3 pointer-events-none flex-shrink-0"></i>
        <select 
          class="change-fac-status-select bg-transparent text-inherit font-bold text-[11px] cursor-pointer focus:outline-none pr-3.5 appearance-none" 
          data-id="${course.id}"
        >
          <option value="Effectué" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Effectué' ? 'selected' : ''}>Effectué</option>
          <option value="En cours" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'En cours' ? 'selected' : ''}>En cours</option>
          <option value="Non effectué" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Non effectué' ? 'selected' : ''}>Non effectué</option>
          <option value="Hors programme" class="text-slate-900 bg-white font-medium" ${course.facultyStatus === 'Hors programme' ? 'selected' : ''}>Hors programme</option>
        </select>
        <i data-lucide="chevron-down" class="w-2.5 h-2.5 opacity-60 pointer-events-none absolute right-1.5"></i>
      </div>
        </div>

        <h4 class="font-bold text-sm text-slate-900 leading-snug mb-1.5 ${isDone ? 'line-through text-slate-500' : ''}">
          ${course.title}
        </h4>

        <!-- Badges -->
        <div class="flex items-center gap-1 flex-wrap mb-2">
          ${(course.badges || []).map(b => `
            <span class="title-badge ${b.bg} ${b.textCol} ${b.border}">
              ${b.text}
            </span>
          `).join('')}
          ${isCatchup ? `
            <span class="title-badge bg-amber-50 text-amber-800 border-amber-300 font-bold">
              À rattraper
            </span>
          ` : ''}
        </div>

        <div class="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
          <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400 flex-shrink-0"></i>
          <span class="truncate">${course.prof || 'Enseignant non spécifié'}</span>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <button 
          class="toggle-done-btn flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs transition ${
            isDone 
              ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
          }"
          data-id="${course.id}"
        >
          <i data-lucide="${isDone ? 'check' : 'circle'}" class="w-3.5 h-3.5"></i>
          <span>${isDone ? 'Étudié ✓' : 'Marquer fait'}</span>
        </button>

        <div class="flex items-center gap-1">
          <button class="couche-chip ${progress.c1 ? 'active' : 'inactive'}" data-id="${course.id}" data-couche="1">C1</button>
          <button class="couche-chip ${progress.c2 ? 'active' : 'inactive'}" data-id="${course.id}" data-couche="2">C2</button>
        </div>

        <button class="btn-note p-2 rounded-xl border ${progress.note ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-slate-50 text-slate-400 border-slate-200'}" data-id="${course.id}">
          <i data-lucide="${progress.note ? 'file-text' : 'edit-3'}" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;

    elements.coursesCardsView.appendChild(card);
  });

  setupActionListeners();
}

/**
 * Setup Click Actions for Rows & Cards
 */
function setupActionListeners() {
  // Faculty Status Select Dropdowns
  document.querySelectorAll('.change-fac-status-select').forEach(select => {
    select.onchange = (e) => {
      e.stopPropagation();
      const courseId = select.getAttribute('data-id');
      const newStatus = select.value;
      setCourseFacultyStatus(courseId, newStatus);
    };
    // Prevent row click bubbling
    select.onclick = (e) => e.stopPropagation();
  });

  // Checkbox Done buttons
  document.querySelectorAll('.toggle-done-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const courseId = btn.getAttribute('data-id');
      const updated = Storage.toggleCourseDone(courseId);
      state.personalProgress[courseId] = updated;
      showToast(updated.done ? 'Cours marqué comme étudié ✓' : 'Cours remis à étudier', updated.done ? 'success' : 'info');
      renderDashboard();
    };
  });

  // Couche C1 / C2 chips
  document.querySelectorAll('.couche-chip').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const courseId = btn.getAttribute('data-id');
      const layerNum = parseInt(btn.getAttribute('data-couche'), 10);
      const updated = Storage.toggleCourseCouche(courseId, layerNum);
      state.personalProgress[courseId] = updated;
      renderDashboard();
    };
  });

  // Note buttons
  document.querySelectorAll('.btn-note').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const courseId = btn.getAttribute('data-id');
      openNoteModal(courseId);
    };
  });
}

/**
 * Open Note Modal
 */
function openNoteModal(courseId) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;

  state.activeNoteCourseId = courseId;
  const progress = state.personalProgress[courseId] || {};

  elements.noteModalTitle.textContent = course.title;
  elements.noteModalModule.textContent = `${course.module} • ${course.submodule || ''}`;
  elements.noteModalProf.textContent = `Enseignant: ${course.prof || 'Non spécifié'}`;
  elements.noteTextarea.value = progress.note || '';
  elements.noteSaveStatus.textContent = progress.note ? 'Note existante' : 'Aucune note';

  elements.noteModal.classList.remove('hidden');
  refreshIcons();
  elements.noteTextarea.focus();
}

/**
 * Save Note
 */
function saveNote() {
  if (!state.activeNoteCourseId) return;
  const text = elements.noteTextarea.value;
  const updated = Storage.saveCourseNote(state.activeNoteCourseId, text);
  state.personalProgress[state.activeNoteCourseId] = updated;

  elements.noteModal.classList.add('hidden');
  showToast('Note personnelle enregistrée !', 'success');
  renderDashboard();
}

/**
 * Status Helpers
 */
function getFacultyStatusClass(status) {
  switch (status) {
    case 'Effectué': return 'status-effectue';
    case 'En cours': return 'status-en-cours';
    case 'Hors programme': return 'status-hors-programme';
    default: return 'status-non-effectue';
  }
}

function getFacultyStatusIcon(status) {
  switch (status) {
    case 'Effectué': return 'check-check';
    case 'En cours': return 'clock';
    case 'Hors programme': return 'ban';
    default: return 'circle-dashed';
  }
}

/**
 * Trigger Remote Sync
 */
async function triggerSync(isScheduled = false) {
  elements.syncIcon.classList.add('animate-spin');
  elements.btnSyncManual.disabled = true;

  try {
    const result = await Sync.fetchRemoteData();
    if (result.success) {
      const oldCourses = state.courses;
      const newCourses = result.data.courses;

      const diffs = Sync.findDifferences(oldCourses, newCourses);

      state.courses = newCourses;
      state.sheetDate = result.data.sheetUpdateDate;

      Storage.setCachedCourses(newCourses);
      Storage.setSyncMeta({
        lastSyncedAt: new Date().toISOString(),
        sheetDate: state.sheetDate,
        newUpdatesCount: diffs.length
      });

      populateProfessors();
      updateSheetDateDisplay();
      renderDashboard();

      if (diffs.length > 0) {
        showBanner(`✨ Mise à jour faculté : ${diffs.length} cours ont changé de statut !`, 'success');
        showToast(`Synchronisation réussie ! ${diffs.length} cours mis à jour.`, 'success');
      } else {
        showToast(isScheduled ? 'Auto-synchro 20:00 terminée (à jour)' : 'Synchronisation réussie : aucune modification détectée', 'info');
      }
    } else {
      const msg = 'Feuille Google Sheets inaccessible (Privée) : Assurez-vous dans Google Drive que le partage est bien défini sur "Tous les utilisateurs disposant du lien" en tant que "Lecteur".';
      showBanner(msg, 'warning');
      showToast('Accès refusé par Google : Feuille privée ou lien restreint.', 'warning');
    }
  } catch (err) {
    console.error('Sync error:', err);
    showToast('Erreur de synchronisation réseau.', 'warning');
  } finally {
    elements.syncIcon.classList.remove('animate-spin');
    elements.btnSyncManual.disabled = false;
    updateNextSyncBadge();
  }
}

async function handleDailyAutoSync() {
  console.log('[App] Auto sync at 20:00 executing...');
  await triggerSync(true);
}

function updateNextSyncBadge() {
  const info = Sync.getTimeUntilNextSync();
  if (info.isToday) {
    elements.nextSyncLabel.textContent = `Synchro à 20:00 (dans ${info.formatted})`;
  } else {
    elements.nextSyncLabel.textContent = `Synchro demain à 20:00`;
  }
}

function updateSheetDateDisplay() {
  elements.lastSheetUpdateLabel.textContent = `Feuille: ${state.sheetDate}`;
}

/**
 * Setup All Event Listeners
 */
function setupEventListeners() {
  // Sync
  elements.btnSyncManual.onclick = () => triggerSync(false);
  elements.btnMobileSync.onclick = () => triggerSync(false);

  // Quick Tabs
  document.querySelectorAll('.quick-tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.quick-tab-btn').forEach(b => {
        b.classList.remove('bg-white', 'text-indigo-700', 'shadow-sm');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('bg-white', 'text-indigo-700', 'shadow-sm');
      btn.classList.remove('text-slate-600');

      const tab = btn.getAttribute('data-tab');
      state.filters.tab = tab;

      // Smart view switching:
      // When at 'Tous', default to Syllabus view.
      // When at any other filter (À Rattraper, Étudiés, À faire), default to the Rows/Table view (the second one).
      if (tab === 'all') {
        setViewMode('syllabus');
      } else {
        setViewMode('table');
      }
    };
  });

  // Mobile Bottom Navigation
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.onclick = () => {
      const view = btn.getAttribute('data-view');
      document.querySelectorAll('.mobile-nav-btn').forEach(b => {
        b.classList.remove('text-indigo-600');
        b.classList.add('text-slate-500');
      });
      btn.classList.add('text-indigo-600');
      btn.classList.remove('text-slate-500');

      if (view === 'catchup') {
        document.querySelector('.quick-tab-btn[data-tab="catchup"]').click();
      } else if (view === 'modules') {
        document.getElementById('moduleCardsContainer').scrollIntoView({ behavior: 'smooth' });
      } else {
        document.querySelector('.quick-tab-btn[data-tab="all"]').click();
      }
    };
  });

  // Priority Catchup card shortcut
  elements.cardPriorityCatchup.onclick = () => {
    document.querySelector('.quick-tab-btn[data-tab="catchup"]').click();
  };

  // Toggle All Accordions
  elements.btnToggleAllAccordions.onclick = () => {
    const modules = Object.keys(MODULES_META);
    const anyOpen = modules.some(m => !state.moduleCollapsed[m]);
    modules.forEach(m => {
      state.moduleCollapsed[m] = anyOpen;
    });
    renderCoursesView();
    refreshIcons();
  };

  // Search input
  let searchTimeout;
  elements.searchInput.oninput = (e) => {
    clearTimeout(searchTimeout);
    const val = e.target.value;
    if (val.length > 0) {
      elements.btnClearSearch.classList.remove('hidden');
    } else {
      elements.btnClearSearch.classList.add('hidden');
    }
    searchTimeout = setTimeout(() => {
      state.filters.search = val;
      renderCoursesView();
      refreshIcons();
    }, 180);
  };

  elements.btnClearSearch.onclick = () => {
    elements.searchInput.value = '';
    elements.btnClearSearch.classList.add('hidden');
    state.filters.search = '';
    renderCoursesView();
    refreshIcons();
  };

  // Filters
  elements.filterModule.onchange = (e) => {
    state.filters.module = e.target.value;
    renderDashboard();
  };

  elements.filterFacStatus.onchange = (e) => {
    state.filters.facStatus = e.target.value;
    renderCoursesView();
    refreshIcons();
  };

  elements.filterProf.onchange = (e) => {
    state.filters.prof = e.target.value;
    renderCoursesView();
    refreshIcons();
  };

  elements.btnResetFilters.onclick = resetAllFilters;
  elements.btnEmptyReset.onclick = resetAllFilters;

  // View Switchers
  elements.btnViewSyllabus.onclick = () => setViewMode('syllabus');
  elements.btnViewTable.onclick = () => setViewMode('table');
  elements.btnViewCards.onclick = () => setViewMode('cards');

  // Note modal
  elements.btnCloseNoteModal.onclick = () => elements.noteModal.classList.add('hidden');
  elements.btnCancelNote.onclick = () => elements.noteModal.classList.add('hidden');
  elements.btnSaveNote.onclick = saveNote;

  // Settings modal
  elements.btnOpenSettings.onclick = openSettingsModal;
  elements.btnMobileSettings.onclick = openSettingsModal;
  elements.btnCloseSettingsModal.onclick = () => elements.settingsModal.classList.add('hidden');
  elements.btnSaveSettingsModal.onclick = saveSettingsModal;

  const btnResetDefaultSheet = document.getElementById('btnResetDefaultSheet');
  if (btnResetDefaultSheet) {
    btnResetDefaultSheet.onclick = () => {
      const defaultUrl = 'https://docs.google.com/spreadsheets/d/1MB7Ay2KFM3QEOW-5RMaBr4GQQgBvx76E1NHqB2Mg_74/edit?gid=0#gid=0';
      elements.settingSheetUrl.value = defaultUrl;
      Storage.saveSettings({ sheetUrl: defaultUrl });
      showToast('Lien officiel S9 rétabli !', 'info');
    };
  }

  // Export / Import
  elements.btnExportBackup.onclick = () => {
    const jsonStr = Storage.exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `recensement-s9-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Sauvegarde JSON exportée avec succès !', 'success');
  };

  elements.importFileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const res = Storage.importBackup(evt.target.result);
      if (res.success) {
        state.personalProgress = Storage.getPersonalProgress();
        renderDashboard();
        elements.settingsModal.classList.add('hidden');
        showToast('Sauvegarde restaurée avec succès !', 'success');
      } else {
        showToast('Fichier de sauvegarde invalide.', 'warning');
      }
    };
    reader.readAsText(file);
  };

  // Reset
  elements.btnResetAllData.onclick = () => {
    if (confirm('Attention : Voulez-vous vraiment effacer toutes vos coches et notes de révision ?')) {
      if (confirm('Confirmez-vous la remise à zéro définitive ?')) {
        Storage.savePersonalProgress({});
        state.personalProgress = {};
        renderDashboard();
        elements.settingsModal.classList.add('hidden');
        showToast('Toutes les données ont été réinitialisées.', 'info');
      }
    }
  };

  elements.btnCloseBanner.onclick = () => {
    elements.bannerAlert.classList.add('hidden');
  };
}

function selectModuleFilter(modKey) {
  state.filters.module = modKey;
  elements.filterModule.value = modKey;
  renderDashboard();
}

function resetAllFilters() {
  state.filters.tab = 'all';
  setViewMode('syllabus');
  state.filters.module = '';
  state.filters.facStatus = '';
  state.filters.prof = '';
  state.filters.search = '';

  elements.searchInput.value = '';
  elements.btnClearSearch.classList.add('hidden');
  elements.filterModule.value = '';
  elements.filterFacStatus.value = '';
  elements.filterProf.value = '';

  document.querySelectorAll('.quick-tab-btn').forEach(b => {
    b.classList.remove('bg-white', 'text-indigo-700', 'shadow-sm');
    b.classList.add('text-slate-600');
  });
  const allBtn = document.querySelector('.quick-tab-btn[data-tab="all"]');
  if (allBtn) {
    allBtn.classList.add('bg-white', 'text-indigo-700', 'shadow-sm');
    allBtn.classList.remove('text-slate-600');
  }

  renderDashboard();
}

function setViewMode(mode) {
  state.activeView = mode;
  Storage.saveSettings({ viewMode: mode });

  // Update button visual states
  [
    { btn: elements.btnViewSyllabus, mode: 'syllabus' },
    { btn: elements.btnViewTable, mode: 'table' },
    { btn: elements.btnViewCards, mode: 'cards' }
  ].forEach(item => {
    if (item.btn) {
      if (item.mode === mode) {
        item.btn.className = 'p-1.5 rounded-lg bg-white text-indigo-700 shadow-sm transition flex items-center gap-1 text-xs font-bold px-2.5';
      } else {
        item.btn.className = 'p-1.5 rounded-lg text-slate-500 hover:text-slate-900 transition flex items-center gap-1 text-xs font-medium px-2';
      }
    }
  });

  renderCoursesView();
  refreshIcons();
}

function openSettingsModal() {
  const settings = Storage.getSettings();
  elements.settingSheetUrl.value = settings.sheetUrl;
  elements.settingAutoSync.checked = settings.autoSync;
  elements.settingsModal.classList.remove('hidden');
  refreshIcons();
}

function saveSettingsModal() {
  const newUrl = elements.settingSheetUrl.value.trim();
  const newAuto = elements.settingAutoSync.checked;

  Storage.saveSettings({
    sheetUrl: newUrl,
    autoSync: newAuto
  });

  elements.settingsModal.classList.add('hidden');
  showToast('Paramètres enregistrés !', 'success');
}

/**
 * Toast notification
 */
let toastTimeout;
function showToast(message, type = 'info') {
  clearTimeout(toastTimeout);
  elements.toastMessage.textContent = message;

  if (type === 'success') {
    elements.toastIcon.setAttribute('data-lucide', 'check-circle');
    elements.toastIcon.className = 'w-5 h-5 text-emerald-600';
  } else if (type === 'warning') {
    elements.toastIcon.setAttribute('data-lucide', 'alert-triangle');
    elements.toastIcon.className = 'w-5 h-5 text-amber-600';
  } else {
    elements.toastIcon.setAttribute('data-lucide', 'info');
    elements.toastIcon.className = 'w-5 h-5 text-indigo-600';
  }

  elements.toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  elements.toast.classList.add('translate-y-0', 'opacity-100');
  refreshIcons();

  toastTimeout = setTimeout(() => {
    elements.toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    elements.toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

function showBanner(message, type = 'info') {
  elements.bannerMessage.textContent = message;
  elements.bannerAlert.className = `rounded-xl p-3.5 border flex items-center justify-between gap-3 text-xs md:text-sm transition-all duration-300 ${
    type === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-slate-100 border-slate-300 text-slate-800'
  }`;
  elements.bannerAlert.classList.remove('hidden');
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', init);

// Expose for browser console and programmatic access
if (typeof window !== 'undefined') {
  window.RecensementApp = { state, Storage, Sync, setViewMode };
}
