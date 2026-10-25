/**
 * Recensement S9 - Bundled JavaScript
 * Single file bundle containing initialData, Storage, Sync, and App logic.
 * Generated on 2026-10-25
 */
(function() {
/**
 * Pre-bundled initial dataset from Recensement S9 Google Sheet
 * Auto-generated with intelligent title note extraction & pedagogical observations.
 * All question counts extracted directly from ATARAXIE S9 CPC 2027.
 */
const INITIAL_DATA = {
  "sheetUpdateDate": "21/10/2026",
  "generatedAt": "2026-09-21T19:47:56.888Z",
  "courses": [
    {
      "id": "c_001",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Errarhay",
      "title": "Uterus cicatriciel",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 11,
      "weight": 0.49,
      "rawTitle": "Uterus cicatriciel",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "uterus_cicatriciel",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_002",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Errarhay",
      "title": "Le retard de croissance intra-utérine RCIU",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 18,
      "weight": 0.81,
      "rawTitle": "Le retard de croissance intra-utérine RCIU",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "rciu",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_003",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Errarhay",
      "title": "Les infections génitales",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 36,
      "weight": 1.62,
      "rawTitle": "Les infections génitales",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "infections_genitales",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_004",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Errarhay",
      "title": "Toxoplasmose et grossesse",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 17,
      "weight": 0.76,
      "rawTitle": "Toxoplasmose et grossesse",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "toxoplasmose_grossesse",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_005",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Errarhay",
      "title": "Rubéole et grossesse",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 7,
      "weight": 0.31,
      "rawTitle": "Rubéole et grossesse",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "rubeole_grossesse",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_006",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Errarhay",
      "title": "Les suites de couches normales et pathologiques",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 23,
      "weight": 1.03,
      "rawTitle": "Les suites de couches normales et pathologiques",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "suites_de_couches",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_007",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Mamouni",
      "title": "Infections urinaires et grossesse",
      "badges": [
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Nouveau Pr",
          "icon": "user-check",
          "tooltip": "Nouvelle prof",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 26,
      "weight": 1.17,
      "rawTitle": "Infections urinaires et grossesse",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "infections_urinaires_grossesse",
      "observation": "Nouvelle prof"
    },
    {
      "id": "c_008",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Mamouni",
      "title": "Streptocoque B et grossesse",
      "badges": [],
      "questions": 4,
      "weight": 0.18,
      "rawTitle": "Streptocoque B et grossesse",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "streptocoque_b_grossesse",
      "observation": ""
    },
    {
      "id": "c_009",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Mamouni",
      "title": "Cancer de la vulve",
      "badges": [],
      "questions": 8,
      "weight": 0.36,
      "rawTitle": "Cancer de la vulve",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cancer_vulve",
      "observation": ""
    },
    {
      "id": "c_010",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Mamouni",
      "title": "La rupture prématurée des membranes RPM",
      "badges": [],
      "questions": 13,
      "weight": 0.58,
      "rawTitle": "La rupture prématurée des membranes RPM",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "rpm",
      "observation": ""
    },
    {
      "id": "c_011",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Mamouni",
      "title": "La délivrance normale et pathologique",
      "badges": [],
      "questions": 24,
      "weight": 1.08,
      "rawTitle": "La délivrance normale et pathologique",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "delivrance",
      "observation": ""
    },
    {
      "id": "c_012",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Bouchikhi",
      "title": "Grossesse extra-utérine",
      "badges": [],
      "questions": 25,
      "weight": 1.12,
      "rawTitle": "Grossesse extra-utérine",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "geu",
      "observation": ""
    },
    {
      "id": "c_013",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Bouchikhi",
      "title": "Les Maladies trophoblastiques Gestationnelles",
      "badges": [],
      "questions": 31,
      "weight": 1.39,
      "rawTitle": "Les Maladies trophoblastiques Gestationnelles",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "maladies_trophoblastiques",
      "observation": ""
    },
    {
      "id": "c_014",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Bouchikhi",
      "title": "Les avortements",
      "badges": [],
      "questions": 8,
      "weight": 0.36,
      "rawTitle": "Les avortements",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "avortements",
      "observation": ""
    },
    {
      "id": "c_015",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Bouchikhi",
      "title": "Cancer du sein",
      "badges": [],
      "questions": 47,
      "weight": 2.11,
      "rawTitle": "Cancer du sein",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cancer_sein",
      "observation": ""
    },
    {
      "id": "c_016",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Bouchikhi",
      "title": "Cancer de l'ovaire",
      "badges": [],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Cancer de l'ovaire",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cancer_ovaire",
      "observation": ""
    },
    {
      "id": "c_017",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Fdili",
      "title": "Diagnostic et surveillance de la grossesse",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 21,
      "weight": 0.94,
      "rawTitle": "Diagnostic et surveillance de la grossesse",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "diagnostic_grossesse",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_018",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Fdili",
      "title": "Hémorragies du 3ème trimestre",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 29,
      "weight": 1.3,
      "rawTitle": "Hémorragies du 3ème trimestre",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "hemorragies_3eme_trimestre",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_019",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Fdili",
      "title": "Présentations défléchies",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 25,
      "weight": 1.12,
      "rawTitle": "Présentations défléchies",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "presentations_deflechies",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_020",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Chaara",
      "title": "Diabète et grossesse",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 24,
      "weight": 1.08,
      "rawTitle": "Diabète et grossesse",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "diabete_grossesse",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_021",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Chaara",
      "title": "Pré-éclampsie",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 21,
      "weight": 0.94,
      "rawTitle": "Pré-éclampsie",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "pre_eclampsie",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_022",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Chaara",
      "title": "Allo-immunisations foeto-maternelles: Rhésus",
      "badges": [],
      "questions": 18,
      "weight": 0.81,
      "rawTitle": "Allo-immunisations foeto-maternelles: Rhésus",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "allo_immunisation",
      "observation": ""
    },
    {
      "id": "c_023",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Chaara",
      "title": "La grossesse gémellaire",
      "badges": [],
      "questions": 16,
      "weight": 0.72,
      "rawTitle": "La grossesse gémellaire",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "grossesse_gemellaire",
      "observation": ""
    },
    {
      "id": "c_024",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Chaara",
      "title": "La menace d’accouchement prématuré",
      "badges": [],
      "questions": 13,
      "weight": 0.58,
      "rawTitle": "La menace d’accouchement prématuré",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "map",
      "observation": ""
    },
    {
      "id": "c_025",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Chaara",
      "title": "La souffrance foetale aiguë > devenue asphyxie +++",
      "badges": [
        {
          "type": "faculty_note",
          "text": "Note: devenue asphyxie +++",
          "icon": "info",
          "bg": "bg-purple-50",
          "textCol": "text-purple-700",
          "border": "border-purple-200"
        }
      ],
      "questions": 6,
      "weight": 0.27,
      "rawTitle": "La souffrance foetale aiguë > devenue asphyxie +++",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "souffrance_foetale",
      "observation": ""
    },
    {
      "id": "c_026",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Melhouf",
      "title": "Accouchement normal",
      "badges": [],
      "questions": 13,
      "weight": 0.58,
      "rawTitle": "Accouchement normal",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "accouchement_normal",
      "observation": ""
    },
    {
      "id": "c_027",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Melhouf",
      "title": "presentation de siege",
      "badges": [],
      "questions": 12,
      "weight": 0.54,
      "rawTitle": "presentation de siege",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "presentation_siege",
      "observation": ""
    },
    {
      "id": "c_028",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Melhouf",
      "title": "Dysplasies cervicales",
      "badges": [],
      "questions": 9,
      "weight": 0.4,
      "rawTitle": "Dysplasies cervicales",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "dysplasies_cervicales",
      "observation": ""
    },
    {
      "id": "c_029",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Melhouf",
      "title": "Les fibromes utérins",
      "badges": [],
      "questions": 21,
      "weight": 0.94,
      "rawTitle": "Les fibromes utérins",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "fibromes_uterins",
      "observation": ""
    },
    {
      "id": "c_030",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Melhouf",
      "title": "Cancer du col uterin",
      "badges": [],
      "questions": 27,
      "weight": 1.21,
      "rawTitle": "Cancer du col uterin",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cancer_col_uterin",
      "observation": ""
    },
    {
      "id": "c_031",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. Melhouf",
      "title": "Le cancer de l'endomètre",
      "badges": [],
      "questions": 13,
      "weight": 0.58,
      "rawTitle": "Le cancer de l'endomètre",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cancer_endometre",
      "observation": ""
    },
    {
      "id": "c_032",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. S.Jayi",
      "title": "Endometrioses",
      "badges": [],
      "questions": 2,
      "weight": 0.09,
      "rawTitle": "Endometrioses",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "endometriose",
      "observation": ""
    },
    {
      "id": "c_033",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "Gynécologie - Obstétrique",
      "prof": "Pr. S.Jayi",
      "title": "Abord du couple infertile",
      "badges": [],
      "questions": 4,
      "weight": 0.18,
      "rawTitle": "Abord du couple infertile",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "couple_infertile",
      "observation": ""
    },
    {
      "id": "c_034",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Anatomie et physiologie de la vision",
      "badges": [],
      "questions": 10,
      "weight": 0.45,
      "rawTitle": "Anatomie et physiologie de la vision",
      "facultyStatus": "Hors programme",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "vision_anatomie",
      "observation": ""
    },
    {
      "id": "c_035",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Examen clinique en ophtalmologie",
      "badges": [],
      "questions": 22,
      "weight": 0.99,
      "rawTitle": "Examen clinique en ophtalmologie",
      "facultyStatus": "Hors programme",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "ophtalmo_examen",
      "observation": ""
    },
    {
      "id": "c_036",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Conduite à tenir devant un oeil rouge",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Conduite à tenir devant un oeil rouge",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "oeil_rouge",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_037",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Conduite à tenir devant une baisse de l’acuité visuelle",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Conduite à tenir devant une baisse de l’acuité visuelle",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "bav",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_038",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Les conjonctivites",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 10,
      "weight": 0.45,
      "rawTitle": "Les conjonctivites",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "21/09/2026",
      "key": "conjonctivites",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_039",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Les kératites",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 5,
      "weight": 0.22,
      "rawTitle": "Les kératites",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "keratites",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_040",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Moutei",
      "title": "Les uvéites",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "tooltip": "Nouveau cours, Dispo drive promo",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        }
      ],
      "questions": 21,
      "weight": 0.94,
      "rawTitle": "Les uvéites (nouveau cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "uveites",
      "observation": "Nouveau cours, Dispo drive promo"
    },
    {
      "id": "c_041",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Chraibi",
      "title": "Les manifestations oculaires liées au diabète",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Abdellaoui",
          "icon": "user-check",
          "tooltip": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 67,
      "weight": 3.01,
      "rawTitle": "Les manifestations oculaires liées au diabète",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "diabete_oculaire",
      "observation": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)"
    },
    {
      "id": "c_042",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Chraibi",
      "title": "Le décollement de la rétine rhegmatogène",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Abdellaoui",
          "icon": "user-check",
          "tooltip": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Le décollement de la rétine rhegmatogène",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "decollement_retine",
      "observation": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)"
    },
    {
      "id": "c_043",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Chraibi",
      "title": "La dégénérescence maculaire liées à l'âge",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Abdellaoui",
          "icon": "user-check",
          "tooltip": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 24,
      "weight": 1.08,
      "rawTitle": "La dégénérescence maculaire liées à l'âge",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "dmla",
      "observation": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)"
    },
    {
      "id": "c_044",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Chraibi",
      "title": "Les strabismes",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Abdellaoui",
          "icon": "user-check",
          "tooltip": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Les strabismes",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "strabismes",
      "observation": "Cours inchangé (enseigné l'année dernière par Pr Abdellaoui)"
    },
    {
      "id": "c_045",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Chraibi",
      "title": "Les glaucomes",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Benatiya",
          "icon": "user-check",
          "tooltip": "Cours inchangé (enseigné l'année dernière par Pr Benatiya)",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 30,
      "weight": 1.35,
      "rawTitle": "Les glaucomes",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "glaucomes",
      "observation": "Cours inchangé (enseigné l'année dernière par Pr Benatiya)"
    },
    {
      "id": "c_046",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Benatiya",
      "title": "Leucocorie",
      "badges": [
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours (inédit)",
          "icon": "sparkles",
          "tooltip": "Nouveau cours (jamais enseigné avant)",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        }
      ],
      "questions": 0,
      "weight": 0,
      "rawTitle": "Leucocorie (nouveau cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "leucocorie",
      "observation": "Nouveau cours (jamais enseigné avant)"
    },
    {
      "id": "c_047",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Benatiya",
      "title": "Les traumatismes oculo-orbitaires",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 17,
      "weight": 0.76,
      "rawTitle": "Les traumatismes oculo-orbitaires",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "traumatismes_oculo_orbitaires",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_048",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Benatiya",
      "title": "CAT devant une exophtalmie",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 26,
      "weight": 1.17,
      "rawTitle": "CAT devant une exophtalmie",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "exophtalmie",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_049",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Benatiya",
      "title": "CAT devant un larmoiement",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 30,
      "weight": 1.35,
      "rawTitle": "CAT devant un larmoiement",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "larmoiement",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_050",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Benatiya",
      "title": "Les amétropies",
      "badges": [
        {
          "type": "changed_course",
          "category": "changed",
          "text": "Schémas ajoutés",
          "icon": "file-edit",
          "tooltip": "Cours changé (le pr a ajouté des schémas)",
          "cssClass": "obs-badge obs-badge-changed",
          "bg": "bg-amber-50 dark:bg-amber-950/40",
          "textCol": "text-amber-700 dark:text-amber-300",
          "border": "border-amber-200 dark:border-amber-800"
        }
      ],
      "questions": 22,
      "weight": 0.99,
      "rawTitle": "Les amétropies",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "ametropies",
      "observation": "Cours changé (le pr a ajouté des schémas)"
    },
    {
      "id": "c_051",
      "module": "ORL - OPHTALMO",
      "submodule": "Ophtalmologie",
      "prof": "Pr. Benatiya",
      "title": "Les cataractes",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 32,
      "weight": 1.44,
      "rawTitle": "Les cataractes",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cataractes",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_052",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Benmansour",
      "title": "Otites externes et otites moyennes aigues",
      "badges": [
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "tooltip": "Nouveau cours, enseigné l'année dernière par Pr Oudidi",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Oudidi",
          "icon": "user-check",
          "tooltip": "Nouveau cours, enseigné l'année dernière par Pr Oudidi",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 30,
      "weight": 1.35,
      "rawTitle": "Otites externes et otites moyennes aigues (nouveau cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "otites_externes_oma",
      "observation": "Nouveau cours, enseigné l'année dernière par Pr Oudidi"
    },
    {
      "id": "c_053",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Benmansour",
      "title": "Otites moyennes chroniques",
      "badges": [
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "tooltip": "Nouveau cours",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        }
      ],
      "questions": 25,
      "weight": 1.12,
      "rawTitle": "Otites moyennes chroniques",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "otites_chroniques",
      "observation": "Nouveau cours"
    },
    {
      "id": "c_054",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Ridal",
      "title": "Les sinusites",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Zaki",
          "icon": "user-check",
          "tooltip": "Enseigné l'année dernière par Pr Zaki, Dispo drive promo",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 26,
      "weight": 1.17,
      "rawTitle": "Les sinusites (nouveau cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "sinusites",
      "observation": "Enseigné l'année dernière par Pr Zaki, Dispo drive promo"
    },
    {
      "id": "c_055",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Ridal",
      "title": "Paralysie faciale",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "tooltip": "Nouveau cours, enseigné l'année dernière par Pr Benmansour, Dispo drive promo",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        },
        {
          "type": "prof_change",
          "category": "prof",
          "text": "Ex-Pr Benmansour",
          "icon": "user-check",
          "tooltip": "Nouveau cours, enseigné l'année dernière par Pr Benmansour, Dispo drive promo",
          "cssClass": "obs-badge obs-badge-prof",
          "bg": "bg-purple-50 dark:bg-purple-950/40",
          "textCol": "text-purple-700 dark:text-purple-300",
          "border": "border-purple-200 dark:border-purple-800"
        }
      ],
      "questions": 25,
      "weight": 1.12,
      "rawTitle": "Paralysie faciale (nouveau cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "paralysie_faciale",
      "observation": "Nouveau cours, enseigné l'année dernière par Pr Benmansour, Dispo drive promo"
    },
    {
      "id": "c_056",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Ridal",
      "title": "Les angines",
      "badges": [],
      "questions": 16,
      "weight": 0.72,
      "rawTitle": "Les angines",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "angines",
      "observation": ""
    },
    {
      "id": "c_057",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Ridal",
      "title": "Nodules thyroidiens",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 20,
      "weight": 0.9,
      "rawTitle": "Nodules thyroidiens",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "nodules_thyroidiens",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_058",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Ouatassi",
      "title": "Les surdités",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 22,
      "weight": 0.99,
      "rawTitle": "Les surdités",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "surdites",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_059",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Ouatassi",
      "title": "La rhinite allergique",
      "badges": [
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "tooltip": "Nouveau cours",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        }
      ],
      "questions": 13,
      "weight": 0.58,
      "rawTitle": "La rhinite allergique",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "rhinite_allergique",
      "observation": "Nouveau cours"
    },
    {
      "id": "c_060",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Laamarti",
      "title": "Les vertiges",
      "badges": [],
      "questions": 41,
      "weight": 1.84,
      "rawTitle": "Les vertiges (cours changé)",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "vertiges",
      "observation": ""
    },
    {
      "id": "c_061",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Zaki",
      "title": "SAOS",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "new_course",
          "category": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "tooltip": "Nouveau cours, Dispo drive promo",
          "cssClass": "obs-badge obs-badge-new",
          "bg": "bg-blue-50 dark:bg-blue-950/40",
          "textCol": "text-blue-700 dark:text-blue-300",
          "border": "border-blue-200 dark:border-blue-800"
        }
      ],
      "questions": 1,
      "weight": 0.04,
      "rawTitle": "SAOS (nouveau cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "saos",
      "observation": "Nouveau cours, Dispo drive promo"
    },
    {
      "id": "c_062",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Zaki",
      "title": "Les cancers du cavum et des voies aéro-digestives sup",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 35,
      "weight": 1.57,
      "rawTitle": "Les cancers du cavum et des voies aéro-digestives sup",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cavum_vads",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_063",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Kamal",
      "title": "Les cellulites cervico-faciales",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 9,
      "weight": 0.4,
      "rawTitle": "Les cellulites cervico-faciales",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cellulites_cervico_faciales",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_064",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Kamal",
      "title": "Les traumatismes maxillo-faciaux",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 4,
      "weight": 0.18,
      "rawTitle": "Les traumatismes maxillo-faciaux",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "traumatismes_maxillo_faciaux",
      "observation": "Cours inchangé, Dispo drive promo"
    },
    {
      "id": "c_065",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "Epidémiologie générale",
      "badges": [],
      "questions": 20,
      "weight": 0.9,
      "rawTitle": "Epidémiologie générale",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "21/09/2026",
      "key": "epidemiologie_generale",
      "observation": ""
    },
    {
      "id": "c_066",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "Les indicateurs de santé",
      "badges": [],
      "questions": 14,
      "weight": 0.63,
      "rawTitle": "Les indicateurs de santé",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "indicateurs_sante",
      "observation": ""
    },
    {
      "id": "c_067",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "Les enquêtes épidémiologiques",
      "badges": [],
      "questions": 39,
      "weight": 1.75,
      "rawTitle": "Les enquêtes épidémiologiques",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "enquetes_epidemiologiques",
      "observation": ""
    },
    {
      "id": "c_068",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "les sources d'erreurs et de biais en épidémiologie",
      "badges": [],
      "questions": 9,
      "weight": 0.4,
      "rawTitle": "les sources d'erreurs et de biais en épidémiologie",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "sources_erreurs_biais",
      "observation": ""
    },
    {
      "id": "c_069",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "principes de la surveillance épidémioloique",
      "badges": [],
      "questions": 13,
      "weight": 0.58,
      "rawTitle": "principes de la surveillance épidémioloique",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "surveillance_epidemiologique",
      "observation": ""
    },
    {
      "id": "c_070",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "épidémiologie et prophylaxie des ISTs",
      "badges": [],
      "questions": 11,
      "weight": 0.49,
      "rawTitle": "épidémiologie et prophylaxie des ISTs",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "ists",
      "observation": ""
    },
    {
      "id": "c_071",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Benmaamar",
      "title": "épidémiologie et prophylaxies des hépatites virales",
      "badges": [],
      "questions": 4,
      "weight": 0.18,
      "rawTitle": "épidémiologie et prophylaxies des hépatites virales",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "hepatites_virales",
      "observation": ""
    },
    {
      "id": "c_072",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "L’assurance Maladie au Maroc",
      "badges": [],
      "questions": 11,
      "weight": 0.49,
      "rawTitle": "L’assurance Maladie au Maroc",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "assurance_maladie",
      "observation": ""
    },
    {
      "id": "c_073",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Introduction aux systèmes de santé",
      "badges": [],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Introduction aux systèmes de santé",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "systemes_sante_intro",
      "observation": ""
    },
    {
      "id": "c_074",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Le système de santé au maroc",
      "badges": [],
      "questions": 28,
      "weight": 1.26,
      "rawTitle": "Le système de santé au maroc",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "systeme_sante_maroc",
      "observation": ""
    },
    {
      "id": "c_075",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Mesure de l’état de santé:La transition epidémiologique",
      "badges": [],
      "questions": 33,
      "weight": 1.48,
      "rawTitle": "Mesure de l’état de santé:La transition epidémiologique",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "transition_epidemiologique",
      "observation": ""
    },
    {
      "id": "c_076",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Epidémiologie et prophylaxie des cancers",
      "badges": [],
      "questions": 10,
      "weight": 0.45,
      "rawTitle": "Epidémiologie et prophylaxie des cancers",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "cancers_prophylaxie",
      "observation": ""
    },
    {
      "id": "c_077",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Introduction à l'economie de santé",
      "badges": [],
      "questions": 35,
      "weight": 1.57,
      "rawTitle": "Introduction à l'economie de santé",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "economie_sante",
      "observation": ""
    },
    {
      "id": "c_078",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Epidémiologie et prévention des maladies transmissibles",
      "badges": [],
      "questions": 11,
      "weight": 0.49,
      "rawTitle": "Epidémiologie et prévention des maladies transmissibles",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "maladies_transmissibles_prevention",
      "observation": ""
    },
    {
      "id": "c_079",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Programmes de lutte contre les maladies transmissibles: Leishmaniose",
      "badges": [],
      "questions": 1,
      "weight": 0.04,
      "rawTitle": "Programmes de lutte contre les maladies transmissibles: Leishmaniose",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "leishmaniose",
      "observation": ""
    },
    {
      "id": "c_080",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Prophylaxie de la tuberculose au maroc",
      "badges": [],
      "questions": 5,
      "weight": 0.22,
      "rawTitle": "Prophylaxie de la tuberculose au maroc",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "tuberculose",
      "observation": ""
    },
    {
      "id": "c_081",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "Investigation d'un episode epidermique",
      "badges": [],
      "questions": 3,
      "weight": 0.13,
      "rawTitle": "Investigation d'un episode epidermique",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "investigation_epidemie",
      "observation": ""
    },
    {
      "id": "c_082",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Tachfouti",
      "title": "La prévention et le depistage",
      "badges": [],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "La prévention et le depistage",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "prevention_depistage",
      "observation": ""
    },
    {
      "id": "c_083",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. El Harch",
      "title": "Epidémiologie et surveillance de la grippe",
      "badges": [],
      "questions": 0,
      "weight": 0,
      "rawTitle": "Epidémiologie et surveillance de la grippe",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "grippe",
      "observation": ""
    },
    {
      "id": "c_084",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "Santé Publique",
      "prof": "Pr. Oumokhtar",
      "title": "Santé et environnement",
      "badges": [],
      "questions": 39,
      "weight": 1.75,
      "rawTitle": "Santé et environnement",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "sante_environnement",
      "observation": ""
    },
    {
      "id": "c_085",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Bouazzaoui",
      "title": "Infections associées aux soins",
      "badges": [
        {
          "type": "changed_course",
          "category": "changed",
          "text": "Cours modifié",
          "icon": "file-edit",
          "tooltip": "Cours changé",
          "cssClass": "obs-badge obs-badge-changed",
          "bg": "bg-amber-50 dark:bg-amber-950/40",
          "textCol": "text-amber-700 dark:text-amber-300",
          "border": "border-amber-200 dark:border-amber-800"
        }
      ],
      "questions": 8,
      "weight": 0.36,
      "rawTitle": "Infections associées aux soins",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "ias",
      "observation": "Cours changé"
    },
    {
      "id": "c_086",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Bouazzaoui",
      "title": "Introduction à l’anesthésie",
      "badges": [
        {
          "type": "changed_course",
          "category": "changed",
          "text": "Cours modifié",
          "icon": "file-edit",
          "tooltip": "Cours changé",
          "cssClass": "obs-badge obs-badge-changed",
          "bg": "bg-amber-50 dark:bg-amber-950/40",
          "textCol": "text-amber-700 dark:text-amber-300",
          "border": "border-amber-200 dark:border-amber-800"
        }
      ],
      "questions": 7,
      "weight": 0.31,
      "rawTitle": "Introduction à l’anesthésie",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "anesthesie_intro",
      "observation": "Cours changé"
    },
    {
      "id": "c_087",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Bouazzaoui",
      "title": "Arrêt cardiaque chez l’adulte",
      "badges": [
        {
          "type": "changed_course",
          "category": "changed",
          "text": "Cours modifié",
          "icon": "file-edit",
          "tooltip": "Cours changé",
          "cssClass": "obs-badge obs-badge-changed",
          "bg": "bg-amber-50 dark:bg-amber-950/40",
          "textCol": "text-amber-700 dark:text-amber-300",
          "border": "border-amber-200 dark:border-amber-800"
        }
      ],
      "questions": 11,
      "weight": 0.49,
      "rawTitle": "Arrêt cardiaque chez l’adulte (NOUVEAU cours)",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "arret_cardiaque",
      "observation": "Cours changé"
    },
    {
      "id": "c_088",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Kechna",
      "title": "Pancréatite aiguë grave",
      "badges": [
        {
          "type": "drive",
          "category": "drive",
          "text": "Drive Promo",
          "icon": "hard-drive",
          "tooltip": "Support disponible sur le Drive Promo",
          "cssClass": "obs-badge obs-badge-drive",
          "bg": "bg-indigo-50 dark:bg-indigo-950/40",
          "textCol": "text-indigo-700 dark:text-indigo-300",
          "border": "border-indigo-200 dark:border-indigo-800"
        },
        {
          "type": "changed_course",
          "category": "changed",
          "text": "Cours modifié",
          "icon": "file-edit",
          "tooltip": "Cours changé, Dispo drive promo",
          "cssClass": "obs-badge obs-badge-changed",
          "bg": "bg-amber-50 dark:bg-amber-950/40",
          "textCol": "text-amber-700 dark:text-amber-300",
          "border": "border-amber-200 dark:border-amber-800"
        }
      ],
      "questions": 19,
      "weight": 0.85,
      "rawTitle": "Pancréatite aiguë grave",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "pancreatite_aigue",
      "observation": "Cours changé, Dispo drive promo"
    },
    {
      "id": "c_089",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Houari",
      "title": "Les états de choc: généralités",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 3,
      "weight": 0.13,
      "rawTitle": "Les états de choc: généralités",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "choc_generalites",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_090",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Houari",
      "title": "L’état de choc anaphylactique",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 6,
      "weight": 0.27,
      "rawTitle": "L’état de choc anaphylactique",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "choc_anaphylactique",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_091",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Houari",
      "title": "L'état de choc septique",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 12,
      "weight": 0.54,
      "rawTitle": "L'état de choc septique",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "choc_septique",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_092",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Houari",
      "title": "L'état de choc hémorragique",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 9,
      "weight": 0.4,
      "rawTitle": "L'état de choc hémorragique",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "choc_hemorragique",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_093",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Houari",
      "title": "L’état de choc cardiogénique",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 3,
      "weight": 0.13,
      "rawTitle": "L’état de choc cardiogénique",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "choc_cardiogenique",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_094",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Boukatta",
      "title": "Insuffisance respiratoire aiguë chez l’adulte",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 15,
      "weight": 0.67,
      "rawTitle": "Insuffisance respiratoire aiguë chez l’adulte",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "ira_adulte",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_095",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Boukatta",
      "title": "Ventilation artificielle",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 2,
      "weight": 0.09,
      "rawTitle": "Ventilation artificielle",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026",
      "key": "ventilation_artificielle",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_096",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Les déséquilibres acido-basiques",
      "badges": [],
      "questions": 16,
      "weight": 0.72,
      "rawTitle": "Les déséquilibres acido-basiques",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "desequilibres_acido_basiques",
      "observation": ""
    },
    {
      "id": "c_097",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Les déséquilibres glycémiques",
      "badges": [],
      "questions": 3,
      "weight": 0.13,
      "rawTitle": "Les déséquilibres glycémiques",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "desequilibres_glycemiques",
      "observation": ""
    },
    {
      "id": "c_098",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Les dyskaliémies",
      "badges": [],
      "questions": 8,
      "weight": 0.36,
      "rawTitle": "Les dyskaliémies",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "dyskaliemies",
      "observation": ""
    },
    {
      "id": "c_099",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Les dyscalcémies",
      "badges": [],
      "questions": 8,
      "weight": 0.36,
      "rawTitle": "Les dyscalcémies",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "dyscalcemies",
      "observation": ""
    },
    {
      "id": "c_100",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Hémorragique en obstétrique",
      "badges": [],
      "questions": 6,
      "weight": 0.27,
      "rawTitle": "Hémorragique en obstétrique",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "urgences_obstetricales_hemorragie",
      "observation": ""
    },
    {
      "id": "c_101",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Les pathologies hypertensives au cours de la grossesse",
      "badges": [],
      "questions": 3,
      "weight": 0.13,
      "rawTitle": "Les pathologies hypertensives au cours de la grossesse",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "urgences_obstetricales_hta",
      "observation": ""
    },
    {
      "id": "c_102",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Les dysnatrémies",
      "badges": [],
      "questions": 20,
      "weight": 0.9,
      "rawTitle": "Les dysnatrémies",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "dysnatremies",
      "observation": ""
    },
    {
      "id": "c_103",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "Obstruction grave des voies aériennes chez l’enfant",
      "badges": [],
      "questions": 4,
      "weight": 0.18,
      "rawTitle": "Obstruction grave des voies aériennes chez l’enfant",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "obstruction_voies_aeriennes",
      "observation": ""
    },
    {
      "id": "c_104",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "CAT devant un coma non traumatique",
      "badges": [],
      "questions": 6,
      "weight": 0.27,
      "rawTitle": "CAT devant un coma non traumatique",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "coma_non_traumatique",
      "observation": ""
    },
    {
      "id": "c_105",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Harandou",
      "title": "La douleur",
      "badges": [],
      "questions": 2,
      "weight": 0.09,
      "rawTitle": "La douleur",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "douleur",
      "observation": ""
    },
    {
      "id": "c_106",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Berdai",
      "title": "L’intubation orotrachéale",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 1,
      "weight": 0.04,
      "rawTitle": "L’intubation orotrachéale",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "intubation_orotracheale",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_107",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Berdai",
      "title": "Les abords vasculaires en urgence et en réanimation",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 1,
      "weight": 0.04,
      "rawTitle": "Les abords vasculaires en urgence et en réanimation",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "abords_vasculaires",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_108",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Berdai",
      "title": "Les envenimations scorpioniques",
      "badges": [],
      "questions": 1,
      "weight": 0.04,
      "rawTitle": "Les envenimations scorpioniques",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "envenimations_scorpioniques",
      "observation": ""
    },
    {
      "id": "c_109",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Berdai",
      "title": "Les envenimations ophidiennes",
      "badges": [],
      "questions": 1,
      "weight": 0.04,
      "rawTitle": "Les envenimations ophidiennes",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "envenimations_ophidiennes",
      "observation": ""
    },
    {
      "id": "c_110",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Intoxication aiguë",
      "badges": [
        {
          "type": "changed_course",
          "category": "changed",
          "text": "Modif. mineures",
          "icon": "file-edit",
          "tooltip": "Légères modifications, les anciens Diapos restent valables",
          "cssClass": "obs-badge obs-badge-changed",
          "bg": "bg-amber-50 dark:bg-amber-950/40",
          "textCol": "text-amber-700 dark:text-amber-300",
          "border": "border-amber-200 dark:border-amber-800"
        }
      ],
      "questions": 22,
      "weight": 0.99,
      "rawTitle": "Intoxication aiguë",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "intoxication_aigue",
      "observation": "Légères modifications, les anciens Diapos restent valables"
    },
    {
      "id": "c_111",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Intoxication au monoxyde de carbone",
      "badges": [],
      "questions": 9,
      "weight": 0.4,
      "rawTitle": "Intoxication au monoxyde de carbone",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "intoxication_co",
      "observation": ""
    },
    {
      "id": "c_112",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Intoxication aiguë aux pesticides organophosphorés",
      "badges": [],
      "questions": 6,
      "weight": 0.27,
      "rawTitle": "Intoxication aiguë aux pesticides organophosphorés",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "intoxication_organophosphores",
      "observation": ""
    },
    {
      "id": "c_113",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Intoxication au paracétamol",
      "badges": [],
      "questions": 4,
      "weight": 0.18,
      "rawTitle": "Intoxication au paracétamol",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "intoxication_paracetamol",
      "observation": ""
    },
    {
      "id": "c_114",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Intoxication par le Paraphénylène-Diamine Takaout",
      "badges": [],
      "questions": 5,
      "weight": 0.22,
      "rawTitle": "Intoxication par le Paraphénylène-Diamine Takaout",
      "facultyStatus": "Hors programme",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "intoxication_takaout",
      "observation": ""
    },
    {
      "id": "c_115",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Accidents d'électrisation",
      "badges": [],
      "questions": 7,
      "weight": 0.31,
      "rawTitle": "Accidents d'électrisation",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "electrisation",
      "observation": ""
    },
    {
      "id": "c_116",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Derkaoui",
      "title": "Noyades",
      "badges": [],
      "questions": 0,
      "weight": 0,
      "rawTitle": "Noyades",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "noyades",
      "observation": ""
    },
    {
      "id": "c_117",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Shimi",
      "title": "PEC du traumatisme crânien grave à la phase initiale",
      "badges": [
        {
          "type": "unchanged",
          "category": "unchanged",
          "text": "Cours inchangé",
          "icon": "check-circle-2",
          "tooltip": "Support identique aux années précédentes",
          "cssClass": "obs-badge obs-badge-unchanged",
          "bg": "bg-emerald-50 dark:bg-emerald-950/40",
          "textCol": "text-emerald-700 dark:text-emerald-300",
          "border": "border-emerald-200 dark:border-emerald-800"
        }
      ],
      "questions": 15,
      "weight": 0.67,
      "rawTitle": "PEC du traumatisme crânien grave à la phase initiale",
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "traumatisme_cranien",
      "observation": "Cours inchangé"
    },
    {
      "id": "c_118",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Shimi",
      "title": "Prise en charge du patient polytraumatisé",
      "badges": [],
      "questions": 25,
      "weight": 1.12,
      "rawTitle": "Prise en charge du patient polytraumatisé",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "polytraumatise",
      "observation": ""
    },
    {
      "id": "c_119",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "Urgences - Réanimation",
      "prof": "Pr. Shimi",
      "title": "Prise en charge du brûlé grave à la phase aiguë",
      "badges": [],
      "questions": 3,
      "weight": 0.13,
      "rawTitle": "Prise en charge du brûlé grave à la phase aiguë",
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null,
      "key": "brule_grave",
      "observation": ""
    }
  ]
};

const TOTAL_CORPUS_QUESTIONS = 2227;

const PDF_QUESTION_CATALOG = [
  {
    "key": "uterus_cicatriciel",
    "patterns": [
      "uterus cicatriciel"
    ],
    "questions": 11,
    "page": 24,
    "chapter": "9. Utérus cicatriciel : ( 11 questions )"
  },
  {
    "key": "rciu",
    "patterns": [
      "retard de croissance",
      "rciu"
    ],
    "questions": 18,
    "page": 28,
    "chapter": "11. Retard de croissance intra-utérine : ( 18 questions )"
  },
  {
    "key": "infections_genitales",
    "patterns": [
      "infections genitales"
    ],
    "questions": 36,
    "page": 72,
    "chapter": "5. Infections génitales : ( 36 questions )"
  },
  {
    "key": "toxoplasmose_grossesse",
    "patterns": [
      "toxoplasmose"
    ],
    "questions": 17,
    "page": 19,
    "chapter": "5. Toxoplasmose et grossesse : ( 17 questions )"
  },
  {
    "key": "rubeole_grossesse",
    "patterns": [
      "rubeole"
    ],
    "questions": 7,
    "page": 21,
    "chapter": "6. Rubéole et grossesse : ( 7 questions )"
  },
  {
    "key": "suites_de_couches",
    "patterns": [
      "suites de couches"
    ],
    "questions": 23,
    "page": 52,
    "chapter": "21. Suites de couches normales et pathologiques : ( 23 questions )"
  },
  {
    "key": "infections_urinaires_grossesse",
    "patterns": [
      "infections urinaires"
    ],
    "questions": 26,
    "page": 16,
    "chapter": "4. Infections urinaires et grossesse : ( 26 questions )"
  },
  {
    "key": "streptocoque_b_grossesse",
    "patterns": [
      "streptocoque"
    ],
    "questions": 4,
    "page": 23,
    "chapter": "7. Streptocoque B et grossesse : ( 4 questions )"
  },
  {
    "key": "cancer_vulve",
    "patterns": [
      "cancer de la vulve",
      "vulve"
    ],
    "questions": 8,
    "page": 90,
    "chapter": "11. Cancer de la vulve : ( 8 questions )"
  },
  {
    "key": "rpm",
    "patterns": [
      "rupture prematuree",
      "rpm"
    ],
    "questions": 13,
    "page": 39,
    "chapter": "16. Rupture prématurée des membranes : ( 13 questions )"
  },
  {
    "key": "delivrance",
    "patterns": [
      "delivrance"
    ],
    "questions": 24,
    "page": 48,
    "chapter": "20. Délivrance normale et pathologique : ( 24 questions )"
  },
  {
    "key": "geu",
    "patterns": [
      "grossesse extra-uterine",
      "geu"
    ],
    "questions": 25,
    "page": 63,
    "chapter": "1. Grossesse extra-utérine : ( 25 questions )"
  },
  {
    "key": "maladies_trophoblastiques",
    "patterns": [
      "trophoblastique",
      "maladies trophoblastiques gestationnelles",
      "trophoblastiques"
    ],
    "questions": 31,
    "page": 66,
    "chapter": "2. Maladies trophoblastiques gestationnelles : ( 31 questions )"
  },
  {
    "key": "avortements",
    "patterns": [
      "avortement"
    ],
    "questions": 8,
    "page": 70,
    "chapter": "3. Avortements : ( 8 questions )"
  },
  {
    "key": "cancer_sein",
    "patterns": [
      "cancer du sein",
      "cancers du sein",
      "sein"
    ],
    "questions": 47,
    "page": 92,
    "chapter": "12. Cancers du sein : ( 47 questions )"
  },
  {
    "key": "cancer_ovaire",
    "patterns": [
      "ovaire",
      "tumeurs de l'ovaire",
      "cancer de l'ovaire"
    ],
    "questions": 19,
    "page": 86,
    "chapter": "10. Tumeurs de l’ovaire : ( 19 questions )"
  },
  {
    "key": "diagnostic_grossesse",
    "patterns": [
      "diagnostic et surveillance",
      "surveillance de la grossesse"
    ],
    "questions": 21,
    "page": 7,
    "chapter": "1. Diagnostic et surveillance de la grossesse : ( 21 questions )"
  },
  {
    "key": "hemorragies_3eme_trimestre",
    "patterns": [
      "hemorragies du 3",
      "3eme trimestre"
    ],
    "questions": 29,
    "page": 30,
    "chapter": "12. Hémorragies du 3ème trimestre : ( 29 questions )"
  },
  {
    "key": "presentations_deflechies",
    "patterns": [
      "deflechie",
      "deflechies"
    ],
    "questions": 25,
    "page": 44,
    "chapter": "19. Présentations défléchies et transverses : ( 25 questions )"
  },
  {
    "key": "diabete_grossesse",
    "patterns": [
      "diabete et grossesse"
    ],
    "questions": 24,
    "page": 10,
    "chapter": "2. Diabète et grossesse : ( 24 questions )"
  },
  {
    "key": "pre_eclampsie",
    "patterns": [
      "pre-eclampsie",
      "preeclampsie"
    ],
    "questions": 21,
    "page": 25,
    "chapter": "10. Pré-éclampsie : ( 21 questions )"
  },
  {
    "key": "allo_immunisation",
    "patterns": [
      "allo-immunisation",
      "rhesus"
    ],
    "questions": 18,
    "page": 35,
    "chapter": "14. Allo-immunisations foeto-maternelles : Rhésus : ( 18 questions )"
  },
  {
    "key": "grossesse_gemellaire",
    "patterns": [
      "gemellaire"
    ],
    "questions": 16,
    "page": 13,
    "chapter": "3. Grossesse gémellaire : ( 16 questions )"
  },
  {
    "key": "map",
    "patterns": [
      "menace d'accouchement",
      "map"
    ],
    "questions": 13,
    "page": 38,
    "chapter": "15. Menace d’accouchement prématuré : ( 13 questions )"
  },
  {
    "key": "souffrance_foetale",
    "patterns": [
      "souffrance foetale",
      "sfa",
      "asphyxie"
    ],
    "questions": 6,
    "page": 35,
    "chapter": "13. Souffrance fœtale aiguë (SFA) : ( 6 questions )"
  },
  {
    "key": "accouchement_normal",
    "patterns": [
      "accouchement normal"
    ],
    "questions": 13,
    "page": 41,
    "chapter": "17. Accouchement normal : ( 13 questions )"
  },
  {
    "key": "presentation_siege",
    "patterns": [
      "siege"
    ],
    "questions": 12,
    "page": 43,
    "chapter": "18. Présentation de siège : ( 12 questions )"
  },
  {
    "key": "dysplasies_cervicales",
    "patterns": [
      "dysplasie",
      "dysplasies"
    ],
    "questions": 9,
    "page": 79,
    "chapter": "6. Dysplasies cervicales : ( 9 questions )"
  },
  {
    "key": "fibromes_uterins",
    "patterns": [
      "fibrome",
      "fibromes"
    ],
    "questions": 21,
    "page": 80,
    "chapter": "7. Fibromes utérins : ( 21 questions )"
  },
  {
    "key": "cancer_col_uterin",
    "patterns": [
      "cancer du col"
    ],
    "questions": 27,
    "page": 82,
    "chapter": "8. Cancer du col utérin : ( 27 questions )"
  },
  {
    "key": "cancer_endometre",
    "patterns": [
      "endometre"
    ],
    "questions": 13,
    "page": 85,
    "chapter": "9. Cancer de l’endomètre : ( 13 questions )"
  },
  {
    "key": "endometriose",
    "patterns": [
      "endometriose",
      "endometrioses"
    ],
    "questions": 2,
    "page": 100,
    "chapter": "15. Endométriose : ( 2 questions )"
  },
  {
    "key": "couple_infertile",
    "patterns": [
      "couple infertile",
      "infertile",
      "fertilite"
    ],
    "questions": 4,
    "page": 100,
    "chapter": "14. Abord du couple infertile : ( 4 questions )"
  },
  {
    "key": "vision_anatomie",
    "patterns": [
      "anatomie et physiologie de la vision",
      "anatomie de l'oeil"
    ],
    "questions": 10,
    "page": 215,
    "chapter": "1. Anatomie de l’oeil : ( 10 questions )"
  },
  {
    "key": "ophtalmo_examen",
    "patterns": [
      "examen clinique en ophtalmologie",
      "examen clinique ophtalmo"
    ],
    "questions": 22,
    "page": 216,
    "chapter": "2. Examen clinique en ophtalmologie : ( 22 questions )"
  },
  {
    "key": "oeil_rouge",
    "patterns": [
      "oeil rouge"
    ],
    "questions": 19,
    "page": 219,
    "chapter": "3. CAT devant un Oeil Rouge : ( 19 questions )"
  },
  {
    "key": "bav",
    "patterns": [
      "baisse de l'acuite visuelle",
      "bav"
    ],
    "questions": 19,
    "page": 222,
    "chapter": "4. CAT devant une Baisse de l’acuité visuelle : ( 19 questions )"
  },
  {
    "key": "conjonctivites",
    "patterns": [
      "conjonctivite",
      "conjonctivites"
    ],
    "questions": 10,
    "page": 226,
    "chapter": "5. Conjonctivites : ( 10 questions )"
  },
  {
    "key": "keratites",
    "patterns": [
      "keratite",
      "keratites"
    ],
    "questions": 5,
    "page": 227,
    "chapter": "6. Kératites : ( 5 questions )"
  },
  {
    "key": "uveites",
    "patterns": [
      "uveite",
      "uveites"
    ],
    "questions": 21,
    "page": 264,
    "chapter": "16. Uvéite : ( 21 questions )"
  },
  {
    "key": "diabete_oculaire",
    "patterns": [
      "diabete",
      "manifestations oculaires"
    ],
    "questions": 67,
    "page": 246,
    "chapter": "13. Manifestations oculaires liées au diabète : ( 67 questions )"
  },
  {
    "key": "decollement_retine",
    "patterns": [
      "decollement de la retine",
      "rhegmatogene"
    ],
    "questions": 19,
    "page": 260,
    "chapter": "15. Décollement de la rétine rhegmatogène : ( 19 questions )"
  },
  {
    "key": "dmla",
    "patterns": [
      "maculaire",
      "dmla"
    ],
    "questions": 24,
    "page": 257,
    "chapter": "14. Dégénérescence maculaire liée à l’âge DMLA : ( 24 questions )"
  },
  {
    "key": "strabismes",
    "patterns": [
      "strabisme",
      "strabismes"
    ],
    "questions": 19,
    "page": 271,
    "chapter": "19. Strabismes : ( 19 questions )"
  },
  {
    "key": "glaucomes",
    "patterns": [
      "glaucome",
      "glaucomes"
    ],
    "questions": 30,
    "page": 234,
    "chapter": "10. Glaucomes : ( 30 questions )"
  },
  {
    "key": "leucocorie",
    "patterns": [
      "leucocorie"
    ],
    "questions": 0,
    "page": 214,
    "chapter": "Leucocorie : ( 0 questions disponibles )"
  },
  {
    "key": "traumatismes_oculo_orbitaires",
    "patterns": [
      "traumatismes oculo-orbitaires",
      "oculo-orbitaire"
    ],
    "questions": 17,
    "page": 278,
    "chapter": "21. Traumatismes oculo-orbitaires : ( 17 questions )"
  },
  {
    "key": "exophtalmie",
    "patterns": [
      "exophtalmie"
    ],
    "questions": 26,
    "page": 274,
    "chapter": "20. CAT devant une Exophtalmie : ( 26 questions )"
  },
  {
    "key": "larmoiement",
    "patterns": [
      "larmoiement"
    ],
    "questions": 30,
    "page": 281,
    "chapter": "22. CAT devant un larmoiement : ( 30 questions )"
  },
  {
    "key": "ametropies",
    "patterns": [
      "ametropie",
      "ametropies"
    ],
    "questions": 22,
    "page": 239,
    "chapter": "11. Amétropies : ( 22 questions )"
  },
  {
    "key": "cataractes",
    "patterns": [
      "cataracte",
      "cataractes"
    ],
    "questions": 32,
    "page": 229,
    "chapter": "9. Cataractes : ( 32 questions )"
  },
  {
    "key": "otites_externes_oma",
    "patterns": [
      "otites externes",
      "oma",
      "otites moyennes aigues"
    ],
    "questions": 30,
    "page": 167,
    "chapter": "1. Otites externes (12) + 2. OMA (18)"
  },
  {
    "key": "otites_chroniques",
    "patterns": [
      "otites moyennes chroniques",
      "chroniques"
    ],
    "questions": 25,
    "page": 172,
    "chapter": "3. Otites moyennes chroniques : ( 25 questions )"
  },
  {
    "key": "sinusites",
    "patterns": [
      "sinusite",
      "sinusites"
    ],
    "questions": 26,
    "page": 190,
    "chapter": "8. Sinusite : ( 26 questions )"
  },
  {
    "key": "paralysie_faciale",
    "patterns": [
      "paralysie faciale"
    ],
    "questions": 25,
    "page": 204,
    "chapter": "12. Paralysie faciale périphérique : ( 25 questions )"
  },
  {
    "key": "angines",
    "patterns": [
      "angine",
      "angines"
    ],
    "questions": 16,
    "page": 195,
    "chapter": "9. Angines : ( 16 questions )"
  },
  {
    "key": "nodules_thyroidiens",
    "patterns": [
      "nodules thyroidiens",
      "thyroide"
    ],
    "questions": 20,
    "page": 210,
    "chapter": "15. Nodules thyroïdiens : ( 20 questions )"
  },
  {
    "key": "surdites",
    "patterns": [
      "surdite",
      "surdites"
    ],
    "questions": 22,
    "page": 176,
    "chapter": "4. Surdités : ( 22 questions )"
  },
  {
    "key": "rhinite_allergique",
    "patterns": [
      "rhinite allergique",
      "rhinite"
    ],
    "questions": 13,
    "page": 188,
    "chapter": "7. Rhinite allergique : ( 13 questions )"
  },
  {
    "key": "vertiges",
    "patterns": [
      "vertige",
      "vertiges"
    ],
    "questions": 41,
    "page": 180,
    "chapter": "5. Vertiges : ( 41 questions )"
  },
  {
    "key": "saos",
    "patterns": [
      "saos",
      "troubles respiratoires obstructifs du sommeil"
    ],
    "questions": 1,
    "page": 203,
    "chapter": "11. Troubles Respiratoires Obstructifs du Sommeil : ( 1 question )"
  },
  {
    "key": "cavum_vads",
    "patterns": [
      "cavum",
      "vads",
      "voies aero-digestives"
    ],
    "questions": 35,
    "page": 197,
    "chapter": "10. Cancer du cavum et des voies aéro-digestives supérieures : ( 35 questions )"
  },
  {
    "key": "cellulites_cervico_faciales",
    "patterns": [
      "cellulite",
      "cellulites",
      "cervico-faciale"
    ],
    "questions": 9,
    "page": 207,
    "chapter": "13. Cellulites cervico-faciales : ( 9 questions )"
  },
  {
    "key": "traumatismes_maxillo_faciaux",
    "patterns": [
      "maxillo-faciaux",
      "maxillo"
    ],
    "questions": 4,
    "page": 209,
    "chapter": "14. Traumatismes maxillo-faciaux : ( 4 questions )"
  },
  {
    "key": "epidemiologie_generale",
    "patterns": [
      "epidemiologie generale"
    ],
    "questions": 20,
    "page": 328,
    "chapter": "1. Épidémiologie générale : ( 20 questions )"
  },
  {
    "key": "indicateurs_sante",
    "patterns": [
      "indicateurs de sante"
    ],
    "questions": 14,
    "page": 328,
    "chapter": "Indicateurs de santé (syllabus Benmaamar)"
  },
  {
    "key": "enquetes_epidemiologiques",
    "patterns": [
      "enquetes epidemiologiques",
      "enquete"
    ],
    "questions": 39,
    "page": 331,
    "chapter": "2. Enquêtes épidémiologiques : ( 39 questions )"
  },
  {
    "key": "sources_erreurs_biais",
    "patterns": [
      "erreurs et de biais",
      "biais"
    ],
    "questions": 9,
    "page": 338,
    "chapter": "3. Sources d’erreurs et de biais en épidémiologie : ( 9 questions )"
  },
  {
    "key": "surveillance_epidemiologique",
    "patterns": [
      "surveillance epidemiol",
      "principes de la surveillance epidemioloique",
      "surveillance epidemioloique",
      "surveillance epidemiologique"
    ],
    "questions": 13,
    "page": 339,
    "chapter": "4. Surveillance épidémiologique : ( 13 questions )"
  },
  {
    "key": "ists",
    "patterns": [
      "ists",
      "ist",
      "epidemiologie et prophylaxie des ists",
      "prophylaxie des ists",
      "ists"
    ],
    "questions": 11,
    "page": 311,
    "chapter": "7. Epidémiologie et prévention des maladies transmissibles : ( 11 questions )"
  },
  {
    "key": "hepatites_virales",
    "patterns": [
      "hepatites virales",
      "hepatite"
    ],
    "questions": 4,
    "page": 315,
    "chapter": "13. Epidémiologie et prophylaxie des hépatites virales : ( 4 questions physiques )"
  },
  {
    "key": "assurance_maladie",
    "patterns": [
      "assurance maladie"
    ],
    "questions": 11,
    "page": 316,
    "chapter": "14. L’assurance maladie au Maroc : ( 11 questions )"
  },
  {
    "key": "systemes_sante_intro",
    "patterns": [
      "introduction aux systemes de sante"
    ],
    "questions": 19,
    "page": 292,
    "chapter": "1. Introduction aux systèmes de santé : ( 19 questions )"
  },
  {
    "key": "systeme_sante_maroc",
    "patterns": [
      "systeme de sante au maroc",
      "secteurs de sante"
    ],
    "questions": 28,
    "page": 299,
    "chapter": "3. Système et secteurs de santé au Maroc : ( 28 questions )"
  },
  {
    "key": "transition_epidemiologique",
    "patterns": [
      "transition epidemiologique",
      "mesure de l'etat de sante",
      "mnt"
    ],
    "questions": 33,
    "page": 306,
    "chapter": "6. Mesure de l’état de santé : La transition épidémiologique & PEC des MNT : ( 33 questions )"
  },
  {
    "key": "cancers_prophylaxie",
    "patterns": [
      "prophylaxie des cancers",
      "epidemiologie et prophylaxie des cancers"
    ],
    "questions": 10,
    "page": 313,
    "chapter": "8. Epidémiologie et prophylaxie des cancers : ( 10 questions )"
  },
  {
    "key": "economie_sante",
    "patterns": [
      "economie de sante",
      "economie de la sante"
    ],
    "questions": 35,
    "page": 294,
    "chapter": "2. Introduction à l’économie de la santé : ( 35 questions )"
  },
  {
    "key": "maladies_transmissibles_prevention",
    "patterns": [
      "prevention des maladies transmissibles",
      "epidemiologie et prevention des maladies transmissibles"
    ],
    "questions": 11,
    "page": 311,
    "chapter": "7. Epidémiologie et prévention des maladies transmissibles : ( 11 questions )"
  },
  {
    "key": "leishmaniose",
    "patterns": [
      "leishmaniose"
    ],
    "questions": 1,
    "page": 315,
    "chapter": "11. Prophylaxie des maladies parasitaires - Leishmaniose : ( 1 questions )"
  },
  {
    "key": "tuberculose",
    "patterns": [
      "tuberculose"
    ],
    "questions": 5,
    "page": 314,
    "chapter": "9. Prophylaxie de la tuberculose au Maroc : ( 5 questions )"
  },
  {
    "key": "investigation_epidemie",
    "patterns": [
      "investigation"
    ],
    "questions": 3,
    "page": 306,
    "chapter": "5. Investigation d’un épisode épidémique : ( 3 questions )"
  },
  {
    "key": "prevention_depistage",
    "patterns": [
      "prevention et le depistage",
      "depistage"
    ],
    "questions": 19,
    "page": 303,
    "chapter": "4. La Prévention et le Dépistage : ( 19 questions )"
  },
  {
    "key": "grippe",
    "patterns": [
      "grippe"
    ],
    "questions": 0,
    "page": 315,
    "chapter": "12. Epidémiologie et prophylaxie de la grippe : ( 0 questions disponibles )"
  },
  {
    "key": "sante_environnement",
    "patterns": [
      "environnement",
      "sante et environnement"
    ],
    "questions": 39,
    "page": 317,
    "chapter": "15. Santé et environnement : ( 39 questions )"
  },
  {
    "key": "ias",
    "patterns": [
      "infections associees aux soins",
      "ias"
    ],
    "questions": 8,
    "page": 105,
    "chapter": "2. Infections associées aux soins IAS : ( 8 questions )"
  },
  {
    "key": "anesthesie_intro",
    "patterns": [
      "introduction a l'anesthesie",
      "anesthesie"
    ],
    "questions": 7,
    "page": 104,
    "chapter": "1. Introduction à l’anesthésie : ( 7 questions )"
  },
  {
    "key": "arret_cardiaque",
    "patterns": [
      "arret cardiaque"
    ],
    "questions": 11,
    "page": 115,
    "chapter": "14. Arrêt cardiaque chez l’adulte : ( 11 questions )"
  },
  {
    "key": "pancreatite_aigue",
    "patterns": [
      "pancreatite"
    ],
    "questions": 19,
    "page": 121,
    "chapter": "16. Pancréatite aiguë grave : ( 19 questions )"
  },
  {
    "key": "choc_generalites",
    "patterns": [
      "etats de choc: generalites",
      "etats de choc generalites",
      "choc: generalites"
    ],
    "questions": 3,
    "page": 110,
    "chapter": "9. Etats de choc : Généralités : ( 3 questions )"
  },
  {
    "key": "choc_anaphylactique",
    "patterns": [
      "choc anaphylactique",
      "anaphylactique"
    ],
    "questions": 6,
    "page": 110,
    "chapter": "10. Etat de choc anaphylactique : ( 6 questions )"
  },
  {
    "key": "choc_septique",
    "patterns": [
      "choc septique",
      "septique"
    ],
    "questions": 12,
    "page": 111,
    "chapter": "11. Etat de choc septique : ( 12 questions )"
  },
  {
    "key": "choc_hemorragique",
    "patterns": [
      "choc hemorragique",
      "etat de choc hemorragique"
    ],
    "questions": 9,
    "page": 113,
    "chapter": "13. Etat de choc hémorragique : ( 9 questions physiques )"
  },
  {
    "key": "choc_cardiogenique",
    "patterns": [
      "choc cardiogenique",
      "cardiogenique"
    ],
    "questions": 3,
    "page": 112,
    "chapter": "12. Etat de choc cardiogénique : ( 3 questions )"
  },
  {
    "key": "ira_adulte",
    "patterns": [
      "insuffisance respiratoire aigue",
      "ira"
    ],
    "questions": 15,
    "page": 125,
    "chapter": "18. Insuffisance respiratoire aiguë chez l’adulte : ( 15 questions )"
  },
  {
    "key": "ventilation_artificielle",
    "patterns": [
      "ventilation artificielle"
    ],
    "questions": 2,
    "page": 106,
    "chapter": "3. Ventilation artificielle : ( 2 questions )"
  },
  {
    "key": "desequilibres_acido_basiques",
    "patterns": [
      "acido-basique",
      "acido-basiques"
    ],
    "questions": 16,
    "page": 137,
    "chapter": "24. Les déséquilibres acido-basiques : ( 16 questions )"
  },
  {
    "key": "desequilibres_glycemiques",
    "patterns": [
      "glycemique",
      "glycemiques"
    ],
    "questions": 3,
    "page": 145,
    "chapter": "28. Les déséquilibres glycémiques : ( 3 questions )"
  },
  {
    "key": "dyskaliemies",
    "patterns": [
      "dyskaliemie",
      "dyskaliemies"
    ],
    "questions": 8,
    "page": 143,
    "chapter": "26. Les dyskaliémies : ( 8 questions )"
  },
  {
    "key": "dyscalcemies",
    "patterns": [
      "dyscalcemie",
      "dyscalcemies"
    ],
    "questions": 8,
    "page": 144,
    "chapter": "27. Les dyscalcémies : ( 8 questions )"
  },
  {
    "key": "urgences_obstetricales_hemorragie",
    "patterns": [
      "hemorragique en obstetrique",
      "urgences obstetricales"
    ],
    "questions": 6,
    "page": 158,
    "chapter": "37. Urgences obstétricales : Hémorragie post-partum ( 6 questions )"
  },
  {
    "key": "urgences_obstetricales_hta",
    "patterns": [
      "pathologies hypertensives au cours de la grossesse",
      "pathologies hypertensives"
    ],
    "questions": 3,
    "page": 158,
    "chapter": "37. Urgences obstétricales : HTA / Pré-éclampsie ( 3 questions )"
  },
  {
    "key": "dysnatremies",
    "patterns": [
      "dysnatremie",
      "dysnatremies"
    ],
    "questions": 20,
    "page": 139,
    "chapter": "25. Les dysnatrémies : ( 20 questions )"
  },
  {
    "key": "obstruction_voies_aeriennes",
    "patterns": [
      "obstruction grave des voies aeriennes",
      "voies aeriennes"
    ],
    "questions": 4,
    "page": 160,
    "chapter": "38. Urgences pédiatriques : Corps étranger ( 4 questions )"
  },
  {
    "key": "coma_non_traumatique",
    "patterns": [
      "coma non traumatique",
      "coma"
    ],
    "questions": 6,
    "page": 124,
    "chapter": "17. CAT devant un coma non traumatique : ( 6 questions )"
  },
  {
    "key": "douleur",
    "patterns": [
      "douleur"
    ],
    "questions": 2,
    "page": 107,
    "chapter": "6. La douleur : ( 2 questions )"
  },
  {
    "key": "intubation_orotracheale",
    "patterns": [
      "intubation"
    ],
    "questions": 1,
    "page": 106,
    "chapter": "4. L’intubation orotrachéale : ( 1 question )"
  },
  {
    "key": "abords_vasculaires",
    "patterns": [
      "abords vasculaires"
    ],
    "questions": 1,
    "page": 107,
    "chapter": "5. Abords vasculaires en urgence et en réanimation : ( 1 question )"
  },
  {
    "key": "envenimations_scorpioniques",
    "patterns": [
      "scorpionique",
      "scorpioniques",
      "scorpion"
    ],
    "questions": 1,
    "page": 157,
    "chapter": "36. Envenimations scorpioniques : ( 1 question )"
  },
  {
    "key": "envenimations_ophidiennes",
    "patterns": [
      "ophidienne",
      "ophidiennes",
      "ophidien"
    ],
    "questions": 1,
    "page": 157,
    "chapter": "35. Envenimations ophidiennes : ( 1 question )"
  },
  {
    "key": "intoxication_aigue",
    "patterns": [
      "intoxication aigue"
    ],
    "questions": 22,
    "page": 149,
    "chapter": "30. Intoxications aiguës : ( 22 questions )"
  },
  {
    "key": "intoxication_co",
    "patterns": [
      "monoxyde de carbone",
      "co"
    ],
    "questions": 9,
    "page": 152,
    "chapter": "31. Intoxication au Monoxyde de Carbone : ( 9 questions )"
  },
  {
    "key": "intoxication_organophosphores",
    "patterns": [
      "pesticides organophosphores",
      "organophosphores",
      "pesticides"
    ],
    "questions": 6,
    "page": 154,
    "chapter": "32. Intoxication aiguë aux pesticides organophosphorés : ( 6 questions )"
  },
  {
    "key": "intoxication_paracetamol",
    "patterns": [
      "paracetamol"
    ],
    "questions": 4,
    "page": 155,
    "chapter": "33. Intoxication au paracétamol : ( 4 questions )"
  },
  {
    "key": "intoxication_takaout",
    "patterns": [
      "takaout",
      "paraphenylene"
    ],
    "questions": 5,
    "page": 156,
    "chapter": "34. Intoxication par le Paraphénylène-Diamine Takaout : ( 5 questions )"
  },
  {
    "key": "electrisation",
    "patterns": [
      "electrisation"
    ],
    "questions": 7,
    "page": 135,
    "chapter": "22. Accidents d’électrisation : ( 7 questions )"
  },
  {
    "key": "noyades",
    "patterns": [
      "noyade",
      "noyades"
    ],
    "questions": 0,
    "page": 136,
    "chapter": "23. Noyades : ( Pas de questions disponibles )"
  },
  {
    "key": "traumatisme_cranien",
    "patterns": [
      "traumatisme cranien",
      "cranien"
    ],
    "questions": 15,
    "page": 129,
    "chapter": "19. Prise en charge du traumatisme crânien grave à la phase initiale : ( 15 questions )"
  },
  {
    "key": "polytraumatise",
    "patterns": [
      "polytraumatise"
    ],
    "questions": 25,
    "page": 131,
    "chapter": "20. Prise en charge du patient polytraumatisé : ( 25 questions )"
  },
  {
    "key": "brule_grave",
    "patterns": [
      "brule grave",
      "brule"
    ],
    "questions": 3,
    "page": 135,
    "chapter": "21. Prise en charge du brûlé grave à la phase aiguë : ( 3 questions )"
  }
];

function normalizeCanonicalTitle(t) {
  if (!t || typeof t !== 'string') return '';
  return t
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s*>.*$/g, '')
    .toLowerCase()
    .replace(/’/g, "'")
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâ]/g, 'a')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ûùü]/g, 'u')
    .replace(/ç/g, 'c')
    .replace(/\ufffd/g, 'e')
    .replace(/^(les\s+|la\s+|le\s+|l'|d'|des\s+|du\s+)/, '')
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const PREPARED_CATALOG_PATTERNS = [];
for (const data of PDF_QUESTION_CATALOG) {
  const itemKey = data.key;
  for (const p of data.patterns) {
    const pNorm = normalizeCanonicalTitle(p);
    let priority = 10;
    if (itemKey === 'intoxication_aigue' || itemKey === 'choc_generalites' || itemKey === 'cancers_prophylaxie' || itemKey === 'anesthesie_intro') {
      priority = 1;
    }
    PREPARED_CATALOG_PATTERNS.push({
      key: itemKey,
      questions: data.questions,
      pNorm,
      len: pNorm.length,
      priority
    });
  }
}

PREPARED_CATALOG_PATTERNS.sort((a, b) => {
  if (b.priority !== a.priority) return b.priority - a.priority;
  return b.len - a.len;
});

function resolveCourseQuestions(course) {
  if (!course) return 0;
  if (course.key) {
    const found = PDF_QUESTION_CATALOG.find(d => d.key === course.key);
    if (found) return found.questions;
  }
  const norm = normalizeCanonicalTitle(course.title || course.rawTitle);
  if (!norm) return 0;

  // 1. Exact match against normalized pattern
  for (const item of PREPARED_CATALOG_PATTERNS) {
    if (item.pNorm === norm) {
      course.key = item.key;
      return item.questions;
    }
  }

  // 2. Substring match (longest / highest priority first)
  for (const item of PREPARED_CATALOG_PATTERNS) {
    if (item.len >= 3 && norm.includes(item.pNorm)) {
      course.key = item.key;
      return item.questions;
    }
  }

  // 3. Reverse substring match
  for (const item of PREPARED_CATALOG_PATTERNS) {
    if (norm.length >= 6 && item.pNorm.includes(norm)) {
      course.key = item.key;
      return item.questions;
    }
  }

  return 0;
}

function reindexAllCourses(courses) {
  if (!Array.isArray(courses)) return;
  courses.forEach(c => {
    c.questions = resolveCourseQuestions(c);
    c.weight = Number(((c.questions / TOTAL_CORPUS_QUESTIONS) * 100).toFixed(2));
  });
}


/**
 * Storage Manager for Recensement S9
 * Handles persistence of personal advancement, notes, layers, and settings in localStorage.
 */

const STORAGE_KEYS = {
  PERSONAL_PROGRESS: 'recensement_personal_progress_v1',
  SETTINGS: 'recensement_settings_v1',
  SYNC_META: 'recensement_sync_meta_v1',
  CACHED_COURSES: 'recensement_cached_courses_v3',
  FACULTY_OVERRIDES: 'recensement_faculty_overrides_v1',
  FACULTY_DATES: 'recensement_faculty_dates_v1',
  SEEN_CATCHUP_IDS: 'recensement_seen_catchup_ids_v1',
  THEME: 's9_theme',
  PREFERRED_VIEW: 's9_preferred_view',
  SORT_BY_WEIGHT: 's9_sort_by_weight'
};

const DEFAULT_SETTINGS = {
  theme: 'light', // 'light' | 'dark'
  autoSync: true,
  syncHour: 20,
  syncMinute: 0,
  sheetUrl: 'https://docs.google.com/spreadsheets/d/1MB7Ay2KFM3QEOW-5RMaBr4GQQgBvx76E1NHqB2Mg_74/export?format=csv&gid=0',
  viewMode: 'syllabus', // 'syllabus' | 'table' | 'cards'
  sortByWeight: false,
  enableCouches: true
};

const Storage = {
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
      const parsed = raw ? JSON.parse(raw) : {};
      const theme = localStorage.getItem(STORAGE_KEYS.THEME) || parsed.theme || DEFAULT_SETTINGS.theme;
      const viewMode = localStorage.getItem(STORAGE_KEYS.PREFERRED_VIEW) || parsed.viewMode || DEFAULT_SETTINGS.viewMode;
      const rawWeight = localStorage.getItem(STORAGE_KEYS.SORT_BY_WEIGHT);
      const sortByWeight = rawWeight !== null ? rawWeight === 'true' : (parsed.sortByWeight ?? DEFAULT_SETTINGS.sortByWeight);

      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
        theme,
        viewMode,
        sortByWeight
      };
    } catch (e) {
      return { ...DEFAULT_SETTINGS };
    }
  },

  saveSettings(newSettings) {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...newSettings };
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
      if (updated.theme) localStorage.setItem(STORAGE_KEYS.THEME, updated.theme);
      if (updated.viewMode) localStorage.setItem(STORAGE_KEYS.PREFERRED_VIEW, updated.viewMode);
      if (typeof updated.sortByWeight === 'boolean') localStorage.setItem(STORAGE_KEYS.SORT_BY_WEIGHT, String(updated.sortByWeight));
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
      localStorage.removeItem('recensement_cached_courses_v1');
      localStorage.removeItem('recensement_cached_courses_v2');
      localStorage.removeItem('recensement_s9_courses');
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


/**
 * Sync Manager for Recensement S9
 * Connects to Google Sheets with zero CORS errors using Google Visualization JSONP,
 * with fallbacks for direct CSV and proxy, and schedules daily 20:00 synchronization.
 * Dynamically supports the new "Observation" column and shifted status/layer columns.
 */


const Sync = {
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

    // Tier 2: Try direct CSV fetch with normalized URL
    try {
      const data = await this.fetchDirectCsv(csvExportUrl);
      console.log('[Sync] Direct CSV fetch successful!');
      return { success: true, data };
    } catch (errDirect) {
      console.warn('[Sync] Direct CSV failed, trying Tier 3 proxy:', errDirect.message);
    }

    // Tier 3: Try CORS proxy with normalized URL
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


/**
 * Main Application Controller for Recensement S9 Dashboard
 * 100% Clean Light Medical Theme, Hierarchical Syllabus View by default.
 * All course weights and question counts resolved from canonical PDF catalog.
 */


{ normalizeCanonicalTitle };

function getCourseQuestions(course) {
  return resolveCourseQuestions(course);
}

function getCourseWeight(course) {
  const q = getCourseQuestions(course);
  return Number(((q / TOTAL_CORPUS_QUESTIONS) * 100).toFixed(2));
}

function hydrateCoursesWithWeights(courses) {
  reindexAllCourses(courses);
}

function parseFacultyDate(dStr) {
  if (!dStr) return 0;
  if (typeof dStr === 'number') return dStr;
  const str = String(dStr).trim();
  const parts = str.split(/[/.-]/);
  if (parts.length === 3) {
    if (parts[0].length === 4) {
      return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime();
    }
    return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime();
  }
  const t = Date.parse(str);
  return isNaN(t) ? 0 : t;
}

let activePopoverCourseId = null;

// State Management
const state = {
  courses: [],
  sheetDate: INITIAL_DATA.sheetUpdateDate || '21/09/2026',
  personalProgress: {},
  settings: {},
  filters: {
    tab: 'all',          // 'all' | 'catchup' | 'done' | 'todo'
    module: '',
    submodule: '',
    sortByWeight: false,
    facStatus: '',
    prof: '',
    search: ''
  },
  activeNoteCourseId: null,
  activeView: 'syllabus', // 'syllabus' (default) | 'table' | 'cards'
  activeMainPage: 'courses', // 'courses' | 'exams'
  moduleCollapsed: {
    'GYNECO-OBSTETRIQUE': false,
    'ORL - OPHTALMO': false,
    'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ': false,
    'URGENCES - RÉANIMATION': false
  },
  // Tracks new course IDs displayed during the current session of viewing "À rattraper"
  pendingSeenCatchupIds: new Set()
};

/**
 * Check if a course is marked as studied / done by the student
 */
function isCourseDone(courseId) {
  return !!(state.personalProgress && state.personalProgress[courseId]?.done);
}

/**
 * Check if a course is newly added and should show the green dot:
 * Strictly ONLY when viewing the "À rattraper" tab and the course is not yet studied.
 */
function isNewUnseenCourse(course) {
  if (!course || course.facultyStatus !== 'Effectué') return false;
  if (state.filters.tab !== 'catchup') return false;
  
  // If the user already marked it as done, do not show catchup new indicator
  const progress = state.personalProgress[course.id] || {};
  if (progress.done) return false;

  const seenIds = Storage.getSeenCatchupIds();
  if (seenIds && Array.isArray(seenIds)) {
    return !seenIds.includes(course.id);
  }

  // Baseline 15 courses are considered already seen
  const baselineIds = new Set([
    'c_002', 'c_017', 'c_036', 'c_037', 'c_045', 'c_046',
    'c_052', 'c_055', 'c_088', 'c_089', 'c_090', 'c_091',
    'c_092', 'c_094', 'c_095'
  ]);
  return !baselineIds.has(course.id);
}

/**
 * Commit pending seen IDs so the dot disappears on the next visit
 */
function commitPendingCatchupSeen() {
  if (state.pendingSeenCatchupIds && state.pendingSeenCatchupIds.size > 0) {
    Storage.markCatchupIdsSeen(Array.from(state.pendingSeenCatchupIds));
    state.pendingSeenCatchupIds.clear();
  }
}

/**
 * Reconcile faculty status dates from storage and baseline initial data
 */
function reconcileFacultyDates() {
  const facultyDates = Storage.getFacultyDates();
  const initMap = new Map();
  INITIAL_DATA.courses.forEach(c => initMap.set(c.id, c));

  let datesChanged = false;
  state.courses.forEach(c => {
    if (c.facultyStatus === 'Effectué') {
      if (!c.facultyStatusDate) {
        const initCourse = initMap.get(c.id);
        c.facultyStatusDate = facultyDates[c.id] || initCourse?.facultyStatusDate || (c.id === 'c_038' || c.id === 'c_065' ? '21/09/2026' : '17/09/2026');
      }
      if (facultyDates[c.id] !== c.facultyStatusDate) {
        facultyDates[c.id] = c.facultyStatusDate;
        datesChanged = true;
      }
    } else {
      c.facultyStatusDate = null;
      if (facultyDates[c.id]) {
        delete facultyDates[c.id];
        datesChanged = true;
      }
    }
  });

  if (datesChanged) {
    Storage.saveFacultyDates(facultyDates);
        Storage.setCachedCourses(state.courses);
  }

  // Ensure canonical submodule names on all courses
  state.courses.forEach(c => {
    const s = (c.submodule || '').trim().toUpperCase();
    const m = (c.module || '').trim().toUpperCase();
    if (s.includes('OPHTALMO')) c.submodule = 'Ophtalmologie';
    else if (s === 'ORL' || s.includes('ORL')) c.submodule = 'ORL';
    else if (m.includes('GYNECO') || s.includes('GYNECO')) c.submodule = 'Gynécologie - Obstétrique';
    else if (m.includes('SANTÉ') || m.includes('SANTE') || s.includes('SANTÉ')) c.submodule = 'Santé Publique';
    else if (m.includes('URGENCES') || s.includes('URGENCES')) c.submodule = 'Urgences - Réanimation';
  });
}

function applyFacultyOverrides() {
  const overrides = Storage.getFacultyOverrides();
  const facultyDates = Storage.getFacultyDates();
  let changed = false;
  state.courses.forEach(c => {
    if (overrides[c.id]) {
      if (overrides[c.id] === c.facultyStatus) {
        delete overrides[c.id];
        changed = true;
      } else {
        c.facultyStatus = overrides[c.id];
        c.isCustomStatus = true;
        if (c.facultyStatus === 'Effectué' && !c.facultyStatusDate) {
          c.facultyStatusDate = facultyDates[c.id] || new Date().toLocaleDateString('fr-FR');
          facultyDates[c.id] = c.facultyStatusDate;
        }
      }
    }
  });
  if (changed) {
    try {
      localStorage.setItem('recensement_faculty_overrides_v1', JSON.stringify(overrides));
    } catch (e) {}
  }
}

function setCourseFacultyStatus(courseId, newStatus) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;

  course.facultyStatus = newStatus;
  course.isCustomStatus = true;

  if (newStatus === 'Effectué') {
    const today = new Date().toLocaleDateString('fr-FR');
    course.facultyStatusDate = today;
    Storage.saveFacultyDate(courseId, today);
  } else {
    course.facultyStatusDate = null;
    Storage.saveFacultyDate(courseId, null);
  }

  Storage.saveFacultyOverride(courseId, newStatus);
  Storage.setCachedCourses(state.courses);

  showToast(`Statut faculté mis à jour : ${newStatus}`, 'success');
  renderDashboard();
}

// Module Metadata & Styling
const MODULES_META = {
  'GYNECO-OBSTETRIQUE': {
    id: 'gyneco-obs',
    title: 'Gynécologie - Obstétrique',
    short: 'Gynéco-Obs',
    coeff: '1.0 (Gynéco 0.4 / Obs 0.6)',
    coeffShort: 'Coeff 1.0',
    color: 'text-rose-600 dark:text-rose-400',
    bgLight: 'bg-rose-50 dark:bg-rose-950/40',
    border: 'border-rose-200 dark:border-rose-800/60',
    accentBar: 'bg-rose-500',
    icon: 'baby',
    quickCardBorder: 'hover:border-rose-300 dark:hover:border-rose-700',
    headerBgClass: 'mod-header-gyneco',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800'
  },
  'ORL - OPHTALMO': {
    id: 'orl-ophtalmo',
    title: 'ORL - Ophtalmologie',
    short: 'ORL - Ophtalmo',
    coeff: '2.0 (ORL 1.0 / Ophtalmo 1.0)',
    coeffShort: 'Coeff 2.0',
    color: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-50 dark:bg-amber-950/40',
    border: 'border-amber-200 dark:border-amber-800/60',
    accentBar: 'bg-amber-500',
    icon: 'eye',
    quickCardBorder: 'hover:border-amber-300 dark:hover:border-amber-700',
    headerBgClass: 'mod-header-orl-ophtalmo',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800'
  },
  'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ': {
    id: 'sante-publique',
    title: 'Médecine Sociale & Santé Publique - Économie de Santé',
    short: 'Santé Publique & Éco',
    coeff: '1.0 (Santé Publique 0.8 / Éco 0.2)',
    coeffShort: 'Coeff 1.0',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800/60',
    accentBar: 'bg-emerald-500',
    icon: 'activity',
    quickCardBorder: 'hover:border-emerald-300 dark:hover:border-emerald-700',
    headerBgClass: 'mod-header-sante-publique',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800'
  },
  'URGENCES - RÉANIMATION': {
    id: 'urgences-rea',
    title: 'Urgences - Réanimation',
    short: 'Urgences - Réa',
    coeff: '1.0 (Urgences 0.6 / Réa 0.4)',
    coeffShort: 'Coeff 1.0',
    color: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50 dark:bg-blue-950/40',
    border: 'border-blue-200 dark:border-blue-800/60',
    accentBar: 'bg-blue-500',
    icon: 'siren',
    quickCardBorder: 'hover:border-blue-300 dark:hover:border-blue-700',
    headerBgClass: 'mod-header-urgences-rea',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800'
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
  statMyPercentSub: document.getElementById('statMyPercentSub'),
  statMyCount: document.getElementById('statMyCount'),
  statMyBar: document.getElementById('statMyBar'),
  statFacCount: document.getElementById('statFacCount'),
  statFacPercent: document.getElementById('statFacPercent'),
  statFacLegendPercent: document.getElementById('statFacLegendPercent'),
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
  submoduleNavContainer: document.getElementById('submoduleNavContainer'),
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
  filterObservation: document.getElementById('filterObservation'),
  btnResetFilters: document.getElementById('btnResetFilters'),
  btnToggleWeightSort: document.getElementById('btnToggleWeightSort'),
  weightFilterIndicator: document.getElementById('weightFilterIndicator'),

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
  btnThemeToggle: document.getElementById('btnThemeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  settingThemeToggle: document.getElementById('settingThemeToggle'),
  btnOpenSettings: document.getElementById('btnOpenSettings'),
  settingsModal: document.getElementById('settingsModal'),
  btnCloseSettingsModal: document.getElementById('btnCloseSettingsModal'),
  settingSheetUrl: document.getElementById('settingSheetUrl'),
  settingAutoSync: document.getElementById('settingAutoSync'),
  settingDefaultView: document.getElementById('settingDefaultView'),
  settingRememberWeightSort: document.getElementById('settingRememberWeightSort'),
  btnSaveSettingsModal: document.getElementById('btnSaveSettingsModal'),
  btnResetFacultyOverrides: document.getElementById('btnResetFacultyOverrides'),
  btnExportBackup: document.getElementById('btnExportBackup'),
  importFileInput: document.getElementById('importFileInput'),
  btnResetAllData: document.getElementById('btnResetAllData'),

  // Views & Page Switching
  coursesMainView: document.getElementById('coursesMainView'),
  examsPageView: document.getElementById('examsPageView'),
  btnBackToCourses: document.getElementById('btnBackToCourses'),
  btnBrandHome: document.getElementById('btnBrandHome'),

  // Mobile Bottom Dock
  btnMobileSyllabus: document.getElementById('btnMobileSyllabus'),
  btnMobileCatchup: document.getElementById('btnMobileCatchup'),
  btnMobileModules: document.getElementById('btnMobileModules'),
  btnMobileExams: document.getElementById('btnMobileExams'),
  btnMobileSync: document.getElementById('btnMobileSync'),
  mobileSyncIcon: document.getElementById('mobileSyncIcon'),
  btnMobileSettings: document.getElementById('btnMobileSettings'),
  mobileCatchupBadge: document.getElementById('mobileCatchupBadge'),

  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage'),
  toastIcon: document.getElementById('toastIcon'),

  // Exam Countdown & Calendar Elements
  btnOpenExamsModal: document.getElementById('btnOpenExamsModal'),
  headerExamCountdownPill: document.getElementById('headerExamCountdownPill'),
  examQuickTicker: document.getElementById('examQuickTicker'),
  tickerNextExamName: document.getElementById('tickerNextExamName'),
  tickerCountdownBadge: document.getElementById('tickerCountdownBadge'),
  btnExamYear2027: document.getElementById('btnExamYear2027'),
  btnExamYear2026: document.getElementById('btnExamYear2026'),
  pageExamYearBadge: document.getElementById('pageExamYearBadge'),
  tabBtnCountdown: document.getElementById('tabBtnCountdown'),
  tabBtnCalendar: document.getElementById('tabBtnCalendar'),
  tabBtnPdfTable: document.getElementById('tabBtnPdfTable'),
  examSectionCountdown: document.getElementById('examSectionCountdown'),
  examSectionCalendar: document.getElementById('examSectionCalendar'),
  examSectionPdf: document.getElementById('examSectionPdf'),
  heroExamStatusLabel: document.getElementById('heroExamStatusLabel'),
  heroExamBadgeDate: document.getElementById('heroExamBadgeDate'),
  heroExamTitle: document.getElementById('heroExamTitle'),
  heroExamSubtitle: document.getElementById('heroExamSubtitle'),
  cdDays: document.getElementById('cdDays'),
  cdHours: document.getElementById('cdHours'),
  cdMinutes: document.getElementById('cdMinutes'),
  cdSeconds: document.getElementById('cdSeconds'),
  heroSemesterProgressPercent: document.getElementById('heroSemesterProgressPercent'),
  heroSemesterProgressBar: document.getElementById('heroSemesterProgressBar'),
  examCardsGrid: document.getElementById('examCardsGrid'),
  calendarMonthTitle: document.getElementById('calendarMonthTitle'),
  calendarDaysGrid: document.getElementById('calendarDaysGrid'),
  calendarDayDetail: document.getElementById('calendarDayDetail'),
  detailDayBadge: document.getElementById('detailDayBadge'),
  detailDayNumber: document.getElementById('detailDayNumber'),
  detailDayTitle: document.getElementById('detailDayTitle'),
  detailDayDesc: document.getElementById('detailDayDesc'),
  detailDayActionContainer: document.getElementById('detailDayActionContainer'),
  examTimelineAgendaStream: document.getElementById('examTimelineAgendaStream'),
  officialScheduleTbody: document.getElementById('officialScheduleTbody')
};

/**
 * Initialize Application
 */

/**
 * Dark Theme Management
 */
function initTheme() {
  const savedTheme = localStorage.getItem('s9_theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && systemDark);
  applyTheme(isDark ? 'dark' : 'light', false);

  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('s9_theme')) {
          applyTheme(e.matches ? 'dark' : 'light', false);
        }
      });
    } catch (e) {}
  }
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  const nextTheme = isCurrentlyDark ? 'light' : 'dark';
  localStorage.setItem('s9_theme', nextTheme);
  applyTheme(nextTheme, true);
}

function applyTheme(theme, showNotification = false) {
  const isDark = theme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#090d16');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#ffffff');
  }

  const themeIcons = document.querySelectorAll('.theme-toggle-icon, #themeIcon');
  themeIcons.forEach(icon => {
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  });

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn, #btnThemeToggle');
  toggleBtns.forEach(btn => {
    btn.setAttribute('title', isDark ? 'Activer le mode clair' : 'Activer le mode sombre');
  });

  const settingCheck = document.getElementById('settingThemeToggle');
  if (settingCheck) {
    settingCheck.checked = isDark;
  }

  refreshIcons();

  if (showNotification) {
    showToast(isDark ? 'Mode sombre activé 🌙' : 'Mode clair activé ☀️', 'info');
  }
}

async function init() {
  // Initialize Theme
  initTheme();

  // Load settings (theme, favorite view mode, sort by weight)
  state.settings = Storage.getSettings();
  state.activeView = state.settings.viewMode || 'syllabus';
  state.filters.sortByWeight = !!state.settings.sortByWeight;

  // Load cached courses or initial pre-bundled
  const cached = Storage.getCachedCourses();
  if (cached && Array.isArray(cached) && cached.length > 0) {
    state.courses = cached;
  } else {
    state.courses = INITIAL_DATA.courses;
  }
  // Guarantee questions and weights are populated on every single course
  hydrateCoursesWithWeights(state.courses);
  Storage.setCachedCourses(state.courses);

  // Reconcile faculty dates
  reconcileFacultyDates();

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

  // Theme Toggle Listener
  if (elements.btnThemeToggle) {
    elements.btnThemeToggle.onclick = toggleTheme;
  }
  if (elements.settingThemeToggle) {
    elements.settingThemeToggle.onchange = (e) => {
      applyTheme(e.target.checked ? 'dark' : 'light', true);
    };
  }

  // Keyboard shortcut: Press 'd' when not typing to toggle dark mode
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'd' || e.key === 'D') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
      if (!e.ctrlKey && !e.metaKey && !e.altKey) {
        toggleTheme();
      }
    }
  });

  setupEventListeners();

  // Setup Exam Countdown & Calendar Feature
  initExamsFeature();

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
/**
 * Module & Submodule Color Mapping Helpers
 */
function getCourseSubmoduleClass(course) {
  const sub = (course.submodule || '').toLowerCase();
  const mod = (course.module || '').toUpperCase();
  if (sub.includes('ophtalmo')) return 'mod-ophtalmo';
  if (sub.includes('orl')) return 'mod-orl';
  if (mod.includes('GYNECO') || sub.includes('gynéco')) return 'mod-gyneco';
  if (mod.includes('SANTÉ') || mod.includes('SANTE') || sub.includes('santé')) return 'mod-sante';
  if (mod.includes('URGENCES') || sub.includes('urgences')) return 'mod-urgences';
  return 'mod-urgences';
}

function getSubmoduleBadge(submodule, moduleKey) {
  const sub = (submodule || '').toLowerCase();
  const mod = (moduleKey || '').toUpperCase();

  if (sub.includes('ophtalmo')) {
    return `<span class="badge-submod badge-submod-ophtalmo"><i data-lucide="eye" class="w-3 h-3"></i>Ophtalmo</span>`;
  }
  if (sub.includes('orl')) {
    return `<span class="badge-submod badge-submod-orl"><i data-lucide="ear" class="w-3 h-3"></i>ORL</span>`;
  }
  if (mod.includes('GYNECO') || sub.includes('gynéco')) {
    return `<span class="badge-submod badge-submod-gyneco"><i data-lucide="baby" class="w-3 h-3"></i>Gynéco-Obs</span>`;
  }
  if (mod.includes('SANTÉ') || mod.includes('SANTE') || sub.includes('santé')) {
    return `<span class="badge-submod badge-submod-sante"><i data-lucide="activity" class="w-3 h-3"></i>Santé Publique</span>`;
  }
  if (mod.includes('URGENCES') || sub.includes('urgences')) {
    return `<span class="badge-submod badge-submod-urgences"><i data-lucide="siren" class="w-3 h-3"></i>Urgences-Réa</span>`;
  }
  return `<span class="badge-submod badge-submod-urgences"><i data-lucide="book-open" class="w-3 h-3"></i>${submodule || 'Général'}</span>`;
}

/**
 * 1-Click Submodule Segmented Navigator
 */
function renderSubmoduleNav() {
  if (!elements.submoduleNavContainer) return;
  elements.submoduleNavContainer.innerHTML = '';

  const navItems = [
    { key: 'all', shortLabel: 'Tous', count: state.courses.length, icon: 'layers', activeClass: 'active-all' },
    { key: 'gyneco', shortLabel: 'Gynéco-Obs', module: 'GYNECO-OBSTETRIQUE', submodule: 'Gynécologie - Obstétrique', count: state.courses.filter(c => c.module === 'GYNECO-OBSTETRIQUE').length, icon: 'baby', activeClass: 'active-gyneco' },
    { key: 'ophtalmo', shortLabel: 'Ophtalmologie', module: 'ORL - OPHTALMO', submodule: 'Ophtalmologie', count: state.courses.filter(c => (c.submodule || '').toLowerCase().includes('ophtalmo')).length, icon: 'eye', activeClass: 'active-ophtalmo' },
    { key: 'orl', shortLabel: 'ORL', module: 'ORL - OPHTALMO', submodule: 'ORL', count: state.courses.filter(c => (c.submodule || '').toLowerCase().includes('orl') && !(c.submodule || '').toLowerCase().includes('ophtalmo')).length, icon: 'ear', activeClass: 'active-orl' },
    { key: 'sante', shortLabel: 'Santé Publique', module: 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ', submodule: 'Santé Publique', count: state.courses.filter(c => c.module === 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ').length, icon: 'activity', activeClass: 'active-sante' },
    { key: 'urgences', shortLabel: 'Urgences-Réa', module: 'URGENCES - RÉANIMATION', submodule: 'Urgences - Réanimation', count: state.courses.filter(c => c.module === 'URGENCES - RÉANIMATION').length, icon: 'siren', activeClass: 'active-urgences' }
  ];

  navItems.forEach(item => {
    let isActive = false;
    if (item.key === 'all') {
      isActive = !state.filters.module && !state.filters.submodule;
    } else if (item.submodule) {
      isActive = state.filters.submodule === item.submodule;
    } else {
      isActive = state.filters.module === item.module;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `submod-nav-btn ${isActive ? item.activeClass : ''}`;
    btn.innerHTML = `
      <i data-lucide="${item.icon}" class="w-3.5 h-3.5"></i>
      <span>${item.shortLabel}</span>
      <span class="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">${item.count}</span>
    `;

    btn.onclick = () => {
      if (item.key === 'all' || isActive) {
        state.filters.module = '';
        state.filters.submodule = '';
      } else {
        state.filters.module = item.module || '';
        state.filters.submodule = item.submodule || '';
        if (item.module) {
          state.moduleCollapsed[item.module] = false;
        }
      }

      if (elements.filterModule) {
        elements.filterModule.value = state.filters.module;
      }
      populateProfessors();
      renderDashboard();

      if (state.filters.module && state.activeView === 'syllabus') {
        const meta = MODULES_META[state.filters.module];
        if (meta) {
          setTimeout(() => {
            const el = document.getElementById(`section-${meta.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
        }
      }
    };

    elements.submoduleNavContainer.appendChild(btn);
  });
}


function updateWeightSortButtonUI() {
  if (!elements.btnToggleWeightSort) return;
  if (state.filters.sortByWeight) {
    elements.btnToggleWeightSort.classList.add('is-active');
    if (elements.weightFilterIndicator) {
      elements.weightFilterIndicator.textContent = 'Actif (Trié)';
      elements.weightFilterIndicator.className = 'text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-extrabold';
    }
  } else {
    elements.btnToggleWeightSort.classList.remove('is-active');
    if (elements.weightFilterIndicator) {
      elements.weightFilterIndicator.textContent = '2227 Qs';
      elements.weightFilterIndicator.className = 'text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-extrabold border border-amber-200 dark:border-amber-800';
    }
  }
}

function renderDashboard() {
  updateWeightSortButtonUI();
  populateProfessors();
  updateStats();
  renderSubmoduleNav();
  renderModuleQuickCards();
  renderCoursesView();
  updateExamsCountdown();
  refreshIcons();
}

/**
 * Sub-modules definition matching the S9 curriculum & the tracking Excel file.
 * Divides ORL-Ophtalmo into two distinct sub-modules (ORL and Ophtalmologie),
 * and structures professors cleanly into their sub-disciplines.
 */
const SUBMODULES_ORDER = [
  { name: 'Gynécologie - Obstétrique', module: 'GYNECO-OBSTETRIQUE' },
  { name: 'ORL', module: 'ORL - OPHTALMO' },
  { name: 'Ophtalmologie', module: 'ORL - OPHTALMO' },
  { name: 'Santé Publique', module: 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ' },
  { name: 'Urgences - Réanimation', module: 'URGENCES - RÉANIMATION' }
];

const PROF_TO_SUBMODULE = {
  // Gynécologie - Obstétrique
  'Pr. Bouchikhi': 'Gynécologie - Obstétrique',
  'Pr. Chaara': 'Gynécologie - Obstétrique',
  'Pr. Errarhay': 'Gynécologie - Obstétrique',
  'Pr. Fdili': 'Gynécologie - Obstétrique',
  'Pr. Melhouf': 'Gynécologie - Obstétrique',
  'Pr. S.Jayi': 'Gynécologie - Obstétrique',

  // ORL
  'Pr. Afellah': 'ORL',
  'Pr. Benmansour': 'ORL',
  'Pr. Kamal': 'ORL',
  'Pr. Laamarti': 'ORL',
  'Pr. Ouatassi': 'ORL',
  'Pr. Ridal': 'ORL',
  'Pr. Zaki': 'ORL',

  // Ophtalmologie
  'Pr. Abdellaoui': 'Ophtalmologie',
  'Pr. Benatiya': 'Ophtalmologie',
  'Pr. Chraibi': 'Ophtalmologie',
  'Pr. Moutei': 'Ophtalmologie',

  // Médecine Sociale & Santé Publique
  'Pr. Benmaamar': 'Santé Publique',
  'Pr. El Harch': 'Santé Publique',
  'Pr. Oumokhtar': 'Santé Publique',
  'Pr. Tachfouti': 'Santé Publique',

  // Urgences - Réanimation
  'Pr. Berdai': 'Urgences - Réanimation',
  'Pr. Bouazzaoui': 'Urgences - Réanimation',
  'Pr. Boukatta': 'Urgences - Réanimation',
  'Pr. Derkaoui': 'Urgences - Réanimation',
  'Pr. Harandou': 'Urgences - Réanimation',
  'Pr. Houari': 'Urgences - Réanimation',
  'Pr. Kechna': 'Urgences - Réanimation',
  'Pr. Shimi': 'Urgences - Réanimation'
};

/**
 * Populate professors dropdown
 * Dynamic & sorted by sub-modules:
 * - If a module filter is active (e.g. ORL - OPHTALMO), sub-divide professors into its sub-modules (ORL vs Ophtalmologie).
 * - If "Tous les Modules" is active, group and sort professors by each of the 5 sub-modules.
 */
function populateProfessors() {
  if (!elements.filterProf) return;

  const currentSelectedProf = state.filters.prof || '';
  const selectedModule = state.filters.module || '';
  const selectedSubmodule = state.filters.submodule || '';

  // Get list of courses relevant to the current module & submodule filters
  const relevantCourses = state.courses.filter(c => {
    if (selectedModule && c.module !== selectedModule) return false;
    if (selectedSubmodule && c.submodule !== selectedSubmodule) return false;
    return true;
  });

  // Extract unique professors for the relevant scope
  const relevantProfs = Array.from(new Set(relevantCourses.map(c => c.prof).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

  // Check if current selected prof is still valid in the new scope
  if (currentSelectedProf && !relevantProfs.includes(currentSelectedProf)) {
    state.filters.prof = '';
  }

  // Clear options
  elements.filterProf.innerHTML = '';

  // Top default option
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = `Tous les Enseignants (${relevantProfs.length})`;
  elements.filterProf.appendChild(defaultOpt);

  // Active sub-modules to render
  const activeSubgroups = SUBMODULES_ORDER.filter(sub => {
    if (selectedSubmodule) return sub.name === selectedSubmodule;
    if (selectedModule) return sub.module === selectedModule;
    return true;
  });

  const profsAssigned = new Set();

  activeSubgroups.forEach(subgroup => {
    const groupProfs = relevantProfs.filter(prof => {
      if (PROF_TO_SUBMODULE[prof] === subgroup.name) {
        return true;
      }
      return relevantCourses.some(c => c.prof === prof && c.submodule === subgroup.name);
    }).sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

    if (groupProfs.length > 0) {
      groupProfs.forEach(p => profsAssigned.add(p));

      const groupEl = document.createElement('optgroup');
      groupEl.label = `${subgroup.name} (${groupProfs.length})`;

      groupProfs.forEach(prof => {
        const opt = document.createElement('option');
        opt.value = prof;
        opt.textContent = prof;
        if (prof === state.filters.prof) {
          opt.selected = true;
        }
        groupEl.appendChild(opt);
      });

      elements.filterProf.appendChild(groupEl);
    }
  });

  // Fallback for any professors not assigned to a designated sub-module
  const remainingProfs = relevantProfs.filter(p => !profsAssigned.has(p));
  if (remainingProfs.length > 0) {
    const fallbackGroup = document.createElement('optgroup');
    fallbackGroup.label = `Autres (${remainingProfs.length})`;

    remainingProfs.forEach(prof => {
      const opt = document.createElement('option');
      opt.value = prof;
      opt.textContent = prof;
      if (prof === state.filters.prof) {
        opt.selected = true;
      }
      fallbackGroup.appendChild(opt);
    });

    elements.filterProf.appendChild(fallbackGroup);
  }

  elements.filterProf.value = state.filters.prof;
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
  if (elements.statMyPercentSub) elements.statMyPercentSub.textContent = `${myPercent}%`;
  elements.statMyCount.textContent = myDone;
  elements.statMyBar.style.width = `${myPercent}%`;

  elements.statFacCount.textContent = facDone;
  if (elements.statFacPercent) elements.statFacPercent.textContent = `${facPercent}%`;
  if (elements.statFacLegendPercent) elements.statFacLegendPercent.textContent = `${facPercent}%`;
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
    const facPercent = modTotal > 0 ? Math.round((modFacDone / modTotal) * 100) : 0;

    const isSelected = state.filters.module === modKey;

    const card = document.createElement('div');
    card.className = `light-card rounded-xl p-3 cursor-pointer transition border ${meta.quickCardBorder} ${
      isSelected 
        ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 ring-2 ring-indigo-500/30' 
        : 'hover:border-slate-300 dark:hover:border-slate-700'
    }`;
    
    // Jump and scroll to module or filter
    card.onclick = () => {
      const isSelected = state.filters.module === modKey;
      if (isSelected) {
        state.filters.module = '';
        state.filters.submodule = '';
      } else {
        state.filters.module = modKey;
        state.filters.submodule = '';
        state.moduleCollapsed[modKey] = false;
      }
      if (elements.filterModule) elements.filterModule.value = state.filters.module;
      populateProfessors();
      renderDashboard();

      if (!isSelected && state.activeView === 'syllabus') {
        const targetSection = document.getElementById(`section-${meta.id}`);
        if (targetSection) {
          setTimeout(() => {
            const el = document.getElementById(`section-${meta.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
        }
      }
    };

    card.innerHTML = `
      <div class="flex items-center justify-between mb-1.5">
        <div class="flex items-center gap-1.5">
          <div class="p-1.5 rounded-lg ${meta.bgLight} ${meta.color}">
            <i data-lucide="${meta.icon}" class="w-3.5 h-3.5"></i>
          </div>
          <span class="font-bold text-xs text-slate-800 dark:text-slate-100">${meta.short}</span>
        </div>
        <span class="text-xs font-bold ${percent === 100 ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'}">${percent}%</span>
      </div>

      <div class="space-y-1 mt-2">
        <div class="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 font-medium">
          <span>Moi: <strong class="text-slate-800 dark:text-slate-200">${modMyDone}</strong>/${modTotal}</span>
          <span>Fac: <strong class="text-slate-800 dark:text-slate-200">${modFacDone}</strong>/${modTotal} (<span class="text-emerald-600 dark:text-emerald-400 font-bold">${facPercent}%</span>)</span>
        </div>
        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
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
  const list = state.courses.filter(course => {
    const progress = state.personalProgress[course.id] || {};
    const isDone = !!progress.done;
    const isCatchup = course.facultyStatus === 'Effectué' && !isDone;

    if (state.filters.tab === 'catchup' && !isCatchup) return false;
    if (state.filters.tab === 'done' && !isDone) return false;
    if (state.filters.tab === 'todo' && isDone) return false;

    if (state.filters.module && course.module !== state.filters.module) return false;
    if (state.filters.submodule) {
      const fSub = state.filters.submodule.toLowerCase();
      const cSub = (course.submodule || '').toLowerCase();
      if (fSub.includes('ophtalmo') && !cSub.includes('ophtalmo')) return false;
      else if (fSub === 'orl' && (!cSub.includes('orl') || cSub.includes('ophtalmo'))) return false;
      else if (!fSub.includes('ophtalmo') && fSub !== 'orl' && cSub !== fSub) return false;
    }
    if (state.filters.facStatus && course.facultyStatus !== state.filters.facStatus) return false;
    if (state.filters.prof && course.prof !== state.filters.prof) return false;
    if (state.filters.observation) {
      const oType = state.filters.observation;
      const oLower = (course.observation || '').toLowerCase();
      let match = false;
      if (oType === 'drive' && (oLower.includes('drive promo') || oLower.includes('dispo drive'))) match = true;
      else if (oType === 'new' && oLower.includes('nouveau cours')) match = true;
      else if (oType === 'unchanged' && (oLower.includes('inchang') || oLower.includes('inchange'))) match = true;
      else if (oType === 'changed' && ((oLower.includes('chang') && !oLower.includes('inchang')) || oLower.includes('modifications'))) match = true;
      else if (oType === 'prof' && (oLower.includes('prof') || oLower.includes('enseigné l\'année dernière'))) match = true;
      if (!match) return false;
    }

    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      const matchTitle = (course.title || '').toLowerCase().includes(q);
      const matchRaw = (course.rawTitle || '').toLowerCase().includes(q);
      const matchProf = (course.prof || '').toLowerCase().includes(q);
      const matchModule = (course.module || '').toLowerCase().includes(q);
      const matchSub = (course.submodule || '').toLowerCase().includes(q);
      const matchNote = (progress.note || '').toLowerCase().includes(q);
      const matchBadge = (course.badges || []).some(b => b.text.toLowerCase().includes(q) || (b.tooltip && b.tooltip.toLowerCase().includes(q)));
      const matchObs = (course.observation || '').toLowerCase().includes(q);

      if (!matchTitle && !matchRaw && !matchProf && !matchModule && !matchSub && !matchNote && !matchBadge && !matchObs) {
        return false;
      }
    }

    return true;
  });

  // When sorting by weight: ALWAYS sort descending by number of questions (High-Yield décroissant)
  if (state.filters.sortByWeight) {
    return list.sort((a, b) => {
      const qDiff = getCourseQuestions(b) - getCourseQuestions(a);
      if (qDiff !== 0) return qDiff;
      return (a.id || '').localeCompare(b.id || '');
    });
  }

  // When filtering "À rattraper": sort chronologically by date added/done (latest done first)
  if (state.filters.tab === 'catchup') {
    return list.sort((a, b) => {
      const timeA = parseFacultyDate(a.facultyStatusDate);
      const timeB = parseFacultyDate(b.facultyStatusDate);
      if (timeB !== timeA) return timeB - timeA;

      // If dates are identical: unseen new courses first
      const aUnseen = isNewUnseenCourse(a) ? 1 : 0;
      const bUnseen = isNewUnseenCourse(b) ? 1 : 0;
      if (bUnseen !== aUnseen) return bUnseen - aUnseen;

      return (a.id || '').localeCompare(b.id || '');
    });
  }

  return list;
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

    const emptyTitle = elements.emptyState.querySelector('.text-slate-800');
    const emptyDesc = elements.emptyState.querySelector('p');
    if (emptyTitle && emptyDesc) {
      if (state.filters.tab === 'catchup') {
        emptyTitle.textContent = 'Aucun cours à rattraper 🎉';
        emptyDesc.textContent = 'Félicitations ! Vous êtes à jour avec tous les enseignements dispensés par la faculté.';
      } else if (state.filters.tab === 'done') {
        emptyTitle.textContent = 'Aucun cours marqué comme étudié';
        emptyDesc.textContent = 'Cochez le cercle à gauche d\'un cours dans la liste pour l\'ajouter à vos cours étudiés.';
      } else if (state.filters.tab === 'todo') {
        emptyTitle.textContent = 'Félicitations ! Tout est étudié 🏆';
        emptyDesc.textContent = 'Vous avez étudié tous les cours du programme S9 !';
      } else {
        emptyTitle.textContent = 'Aucun cours trouvé';
        emptyDesc.textContent = 'Aucun cours ne correspond à vos filtres actuels. Modifiez vos critères de recherche ou réinitialisez.';
      }
    }
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

  let modules = Object.keys(MODULES_META);

  // In "À rattraper" tab: order module sections chronologically by their most recent lesson date
  if (state.filters.tab === 'catchup') {
    modules.sort((mA, mB) => {
      const coursesA = filteredCourses.filter(c => c.module === mA);
      const coursesB = filteredCourses.filter(c => c.module === mB);
      const maxA = Math.max(...coursesA.map(c => parseFacultyDate(c.facultyStatusDate)), 0);
      const maxB = Math.max(...coursesB.map(c => parseFacultyDate(c.facultyStatusDate)), 0);
      return maxB - maxA;
    });
  }
  
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
    section.className = `light-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all ${meta.borderAccentClass || ''}`;

    // Module Header Bar (Accordion Trigger)
    const header = document.createElement('div');
    header.className = `p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none ${meta.headerBgClass || ''} hover:opacity-95 border-b ${isCollapsed ? 'border-transparent' : 'border-slate-200 dark:border-slate-800'} transition`;
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
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate tracking-tight">
              ${meta.title}
            </h3>
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-full border ${meta.badgeClass}">
              ${meta.coeffShort}
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            ${modMyDone} sur ${allModCourses.length} cours étudiés (${modPercent}%) • Faculté : ${modFacDone} dispensés (${allModCourses.length > 0 ? Math.round((modFacDone / allModCourses.length) * 100) : 0}%)
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 flex-shrink-0">
        <!-- Mini Progress Pill -->
        <div class="hidden sm:flex items-center gap-2">
          <div class="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <div class="${meta.accentBar} h-2 rounded-full" style="width: ${modPercent}%"></div>
          </div>
          <span class="text-xs font-bold text-slate-700 dark:text-slate-300">${modPercent}%</span>
        </div>

        <!-- Chevron -->
        <div class="p-1 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
          <i data-lucide="${isCollapsed ? 'chevron-down' : 'chevron-up'}" class="w-5 h-5"></i>
        </div>
      </div>
    `;

    section.appendChild(header);

    // Module Body (Lessons grouped by Submodule & Professor)
    if (!isCollapsed) {
      const body = document.createElement('div');
      body.className = 'p-3 sm:p-5 space-y-4 bg-white dark:bg-slate-900';

      if (state.filters.sortByWeight) {
        // Direct High-Yield Ranked List by Weight (Descending)
        modCourses.sort((a, b) => getCourseQuestions(b) - getCourseQuestions(a));

        const rankedHeader = document.createElement('div');
        rankedHeader.className = 'p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300';
        rankedHeader.innerHTML = `
          <div class="flex items-center gap-1.5">
            <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i>
            <span>Classement High-Yield (${modCourses.length} cours classés par nombre de questions)</span>
          </div>
          <span class="text-[11px] opacity-75 font-semibold">Total : ${modCourses.reduce((sum, c) => sum + getCourseQuestions(c), 0)} questions</span>
        `;
        body.appendChild(rankedHeader);

        const rowsList = document.createElement('div');
        rowsList.className = 'space-y-2';

        modCourses.forEach((course, rankIdx) => {
          if (state.filters.tab === 'catchup' && isNewUnseenCourse(course)) {
            state.pendingSeenCatchupIds.add(course.id);
          }
          const row = createCourseRowElement(course);
          rowsList.appendChild(row);
        });

        body.appendChild(rowsList);
        section.appendChild(body);
        elements.coursesSyllabusView.appendChild(section);
        return;
      }

      if (state.filters.tab === 'catchup') {
        // Direct chronological list for "À rattraper" (latest done lesson first)
        modCourses.sort((a, b) => {
          const timeA = parseFacultyDate(a.facultyStatusDate);
          const timeB = parseFacultyDate(b.facultyStatusDate);
          if (timeB !== timeA) return timeB - timeA;
          const aUnseen = isNewUnseenCourse(a) ? 1 : 0;
          const bUnseen = isNewUnseenCourse(b) ? 1 : 0;
          if (bUnseen !== aUnseen) return bUnseen - aUnseen;
          return (a.id || '').localeCompare(b.id || '');
        });

        const rowsList = document.createElement('div');
        rowsList.className = 'space-y-2';

        modCourses.forEach(course => {
          if (isNewUnseenCourse(course)) {
            state.pendingSeenCatchupIds.add(course.id);
          }
          const row = createCourseRowElement(course);
          rowsList.appendChild(row);
        });

        body.appendChild(rowsList);
        section.appendChild(body);
        elements.coursesSyllabusView.appendChild(section);
        return;
      }

      const distinctSubmods = Array.from(new Set(modCourses.map(c => c.submodule).filter(Boolean)));
      const hasMultipleSubmods = distinctSubmods.length > 1;

      if (hasMultipleSubmods) {
        distinctSubmods.forEach(submodName => {
          const submodCourses = modCourses.filter(c => c.submodule === submodName);
          if (submodCourses.length === 0) return;

          const isOphtalmo = submodName.toLowerCase().includes('ophtalmo');
          const isORL = submodName.toLowerCase().includes('orl');
          const dividerClass = isOphtalmo ? 'submod-divider-ophtalmo' : (isORL ? 'submod-divider-orl' : '');
          const badgeHtml = getSubmoduleBadge(submodName, modKey);

          const submodHeader = document.createElement('div');
          submodHeader.className = `p-2.5 rounded-xl flex items-center justify-between gap-2 mt-4 first:mt-0 ${dividerClass}`;
          submodHeader.innerHTML = `
            <div class="flex items-center gap-2">
              ${badgeHtml}
              <span class="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">${submodName}</span>
            </div>
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">${submodCourses.length} cours</span>
          `;
          body.appendChild(submodHeader);

          const seenProfs = new Set();
          submodCourses.forEach(c => {
            const profName = c.prof || 'Enseignants Divers';
            if (!seenProfs.has(profName)) {
              seenProfs.add(profName);
              const profCourses = submodCourses.filter(item => (item.prof || 'Enseignants Divers') === profName);

              const groupBlock = document.createElement('div');
              groupBlock.className = 'space-y-2 mt-2';

              const groupHeader = document.createElement('div');
              groupHeader.className = 'flex items-center gap-2 px-1 pt-1 pb-0.5';
              groupHeader.innerHTML = `
                <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">${profName}</span>
                <span class="text-[11px] text-slate-400 font-medium">(${profCourses.length} cours)</span>
                <div class="h-px bg-slate-100 dark:bg-slate-800 flex-1 ml-2"></div>
              `;
              groupBlock.appendChild(groupHeader);

              const rowsList = document.createElement('div');
              rowsList.className = 'space-y-2';
              profCourses.forEach(course => {
                if (state.filters.tab === 'catchup' && isNewUnseenCourse(course)) {
                  state.pendingSeenCatchupIds.add(course.id);
                }
                const row = createCourseRowElement(course);
                rowsList.appendChild(row);
              });

              groupBlock.appendChild(rowsList);
              body.appendChild(groupBlock);
            }
          });
        });
      } else {
        const seenProfs = new Set();
        modCourses.forEach(c => {
          const profName = c.prof || 'Enseignants Divers';
          if (!seenProfs.has(profName)) {
            seenProfs.add(profName);
            const profCourses = modCourses.filter(item => (item.prof || 'Enseignants Divers') === profName);

            const groupBlock = document.createElement('div');
            groupBlock.className = 'space-y-2';

            const groupHeader = document.createElement('div');
            groupHeader.className = 'flex items-center gap-2 px-1 pt-1 pb-0.5';
            groupHeader.innerHTML = `
              <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
              <span class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">${profName}</span>
              <span class="text-[11px] text-slate-400 font-medium">(${profCourses.length} cours)</span>
              <div class="h-px bg-slate-100 dark:bg-slate-800 flex-1 ml-2"></div>
            `;
            groupBlock.appendChild(groupHeader);

            const rowsList = document.createElement('div');
            rowsList.className = 'space-y-2';
            profCourses.forEach(course => {
              if (state.filters.tab === 'catchup' && isNewUnseenCourse(course)) {
                state.pendingSeenCatchupIds.add(course.id);
              }
              const row = createCourseRowElement(course);
              rowsList.appendChild(row);
            });

            groupBlock.appendChild(rowsList);
            body.appendChild(groupBlock);
          }
        });
      }

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
  const modClass = getCourseSubmoduleClass(course);

  const row = document.createElement('div');
  row.className = `course-row ${modClass} rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
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
          <span class="font-bold text-sm text-slate-900 dark:text-slate-100 leading-snug cursor-pointer ${isDone ? 'line-through text-slate-500 dark:text-slate-500' : ''}" data-id="${course.id}">
            ${isNewUnseenCourse(course) ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5 align-middle" title="Nouvelle leçon dispensée"></span>' : ''}${course.title}
          </span>
          ${state.filters.sortByWeight ? `
            <span class="weight-badge" title="${getCourseQuestions(course)} questions au total (${getCourseWeight(course)}% du corpus)">
              <i data-lucide="help-circle" class="w-3 h-3 text-amber-600 dark:text-amber-400"></i>
              <span>${getCourseQuestions(course)} questions</span>
            </span>
          ` : ''}

          <!-- Title Notes Badges (Nouveau cours, cours changé, etc.) -->
          ${(course.badges || []).map(b => `
            <span class="title-badge ${b.bg} ${b.textCol} ${b.border}">
              <i data-lucide="${b.icon || 'tag'}" class="w-3 h-3"></i>
              ${b.text}
            </span>
          `).join('')}

          <!-- Priority Catchup Badge -->
          ${isCatchup ? `
            <span class="title-badge bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-700 flex items-center gap-1 font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              À rattraper
            </span>
          ` : ''}
        </div>

        <!-- Sub-details (Submodule & Prof) -->
        <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
          ${getSubmoduleBadge(course.submodule, course.module)}
          <span class="font-medium text-slate-700 dark:text-slate-300">${course.prof || 'Enseignant non spécifié'}</span>
          ${course.observation ? `
            <span class="course-obs-note inline-flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/90 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700" title="Observation officielle de la feuille faculté">
              <i data-lucide="info" class="w-3 h-3 text-indigo-500 dark:text-indigo-400 flex-shrink-0"></i>
              <span>${course.observation}</span>
            </span>
          ` : ''}
          ${progress.note ? `
            <span class="text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.2 rounded text-[10px] flex items-center gap-1 font-semibold border border-amber-200 dark:border-amber-800">
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
          <option value="Effectué" class="text-slate-900 bg-white dark:bg-slate-800 dark:text-white font-medium" ${course.facultyStatus === 'Effectué' ? 'selected' : ''}>Effectué</option>
          <option value="En cours" class="text-slate-900 bg-white dark:bg-slate-800 dark:text-white font-medium" ${course.facultyStatus === 'En cours' ? 'selected' : ''}>En cours</option>
          <option value="Non effectué" class="text-slate-900 bg-white dark:bg-slate-800 dark:text-white font-medium" ${course.facultyStatus === 'Non effectué' ? 'selected' : ''}>Non effectué</option>
          <option value="Hors programme" class="text-slate-900 bg-white dark:bg-slate-800 dark:text-white font-medium" ${course.facultyStatus === 'Hors programme' ? 'selected' : ''}>Hors programme</option>
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

  let listToRender = [...courses];
  if (state.filters.sortByWeight) {
    listToRender.sort((a, b) => {
      const qDiff = getCourseQuestions(b) - getCourseQuestions(a);
      if (qDiff !== 0) return qDiff;
      return (a.id || '').localeCompare(b.id || '');
    });
  }

  listToRender.forEach(course => {
    const progress = state.personalProgress[course.id] || { done: false, c1: false, c2: false, note: '' };
    const isDone = !!progress.done;
    const isCatchup = course.facultyStatus === 'Effectué' && !isDone;
    const facStatusClass = getFacultyStatusClass(course.facultyStatus);
    const isUnseen = isNewUnseenCourse(course);

    if (state.filters.tab === 'catchup' && isUnseen) {
      state.pendingSeenCatchupIds.add(course.id);
    }

    const tr = document.createElement('tr');
    tr.className = `hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors ${isDone ? 'bg-indigo-50/30 dark:bg-indigo-950/20' : 'bg-white dark:bg-slate-900'}`;

    tr.innerHTML = `
      <td class="py-3 px-4 text-center">
        <button class="check-toggle-btn toggle-done-btn mx-auto ${isDone ? 'is-checked' : ''}" data-id="${course.id}">
          ${isDone ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : ''}
        </button>
      </td>
      <td class="py-3 px-4">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-bold text-slate-900 dark:text-slate-100 ${isDone ? 'line-through text-slate-500 dark:text-slate-500' : ''}">
            ${isUnseen ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5 align-middle" title="Nouvelle leçon dispensée"></span>' : ''}${course.title}
          </span>
          ${state.filters.sortByWeight ? `
            <span class="weight-badge" title="${getCourseQuestions(course)} questions au total (${getCourseWeight(course)}% du corpus)">
              <i data-lucide="help-circle" class="w-3 h-3 text-amber-600 dark:text-amber-400"></i>
              <span>${getCourseQuestions(course)} questions</span>
            </span>
          ` : ''}
          ${(course.badges || []).map(b => `
            <span class="title-badge ${b.bg} ${b.textCol} ${b.border}">
              ${b.text}
            </span>
          `).join('')}
        </div>
      </td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-600">
        ${getSubmoduleBadge(course.submodule, course.module)}
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

  let listToRender = [...courses];
  if (state.filters.sortByWeight) {
    listToRender.sort((a, b) => {
      const qDiff = getCourseQuestions(b) - getCourseQuestions(a);
      if (qDiff !== 0) return qDiff;
      return (a.id || '').localeCompare(b.id || '');
    });
  }

  listToRender.forEach(course => {
    const progress = state.personalProgress[course.id] || { done: false, c1: false, c2: false, note: '' };
    const isDone = !!progress.done;
    const isCatchup = course.facultyStatus === 'Effectué' && !isDone;
    const meta = MODULES_META[course.module] || { short: 'Module', bgLight: 'bg-indigo-50', color: 'text-indigo-600' };
    const facStatusClass = getFacultyStatusClass(course.facultyStatus);
    const isUnseen = isNewUnseenCourse(course);

    if (state.filters.tab === 'catchup' && isUnseen) {
      state.pendingSeenCatchupIds.add(course.id);
    }

    const card = document.createElement('div');
    const modClass = getCourseSubmoduleClass(course);
    card.className = `light-card course-row ${modClass} rounded-2xl p-4 flex flex-col justify-between border transition ${
      isDone 
        ? 'bg-indigo-50/30 border-indigo-200' 
        : isCatchup 
          ? 'border-amber-300 bg-white shadow-sm' 
          : 'border-slate-200 bg-white'
    }`;

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          ${getSubmoduleBadge(course.submodule, course.module)}
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

        <h4 class="font-bold text-sm text-slate-900 dark:text-slate-100 leading-snug mb-1.5 ${isDone ? 'line-through text-slate-500 dark:text-slate-500' : ''}">
          ${isUnseen ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5 align-middle" title="Nouvelle leçon dispensée"></span>' : ''}${course.title}
        </h4>
        ${state.filters.sortByWeight ? `
            <span class="weight-badge" title="${getCourseQuestions(course)} questions au total (${getCourseWeight(course)}% du corpus)">
              <i data-lucide="help-circle" class="w-3 h-3 text-amber-600 dark:text-amber-400"></i>
              <span>${getCourseQuestions(course)} questions</span>
            </span>
          ` : ''}

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
      const remoteCourses = result.data.courses;

      // Smart reconciliation with faculty overrides:
      // If the faculty updated a course in the sheet to "Effectué" or "En cours",
      // clear any obsolete manual override on that course so it is never suppressed!
      const overrides = Storage.getFacultyOverrides();
      let overridesChanged = false;
      remoteCourses.forEach(rc => {
        if (overrides[rc.id]) {
          // If remote sheet caught up or matches, clear override
          if (rc.facultyStatus === 'Effectué' || overrides[rc.id] === rc.facultyStatus) {
            delete overrides[rc.id];
            overridesChanged = true;
          } else {
            rc.facultyStatus = overrides[rc.id];
            rc.isCustomStatus = true;
          }
        }
      });
      if (overridesChanged) {
        try {
          localStorage.setItem('recensement_faculty_overrides_v1', JSON.stringify(overrides));
        } catch (e) {}
      }

      const diffs = Sync.findDifferences(oldCourses, remoteCourses);

      // Reconcile faculty dates for remote courses
      const facultyDates = Storage.getFacultyDates();
      const todayStr = state.sheetDate || new Date().toLocaleDateString('fr-FR');
      let datesChanged = false;
      const seenIds = Storage.getSeenCatchupIds() || [];
      let seenSet = new Set(seenIds);
      let seenChanged = false;

      remoteCourses.forEach(rc => {
        if (rc.facultyStatus === 'Effectué') {
          if (!facultyDates[rc.id]) {
            facultyDates[rc.id] = todayStr;
            rc.facultyStatusDate = todayStr;
            datesChanged = true;
            // A newly completed course from the sheet is unseen
            if (seenSet.has(rc.id)) {
              seenSet.delete(rc.id);
              seenChanged = true;
            }
          } else {
            rc.facultyStatusDate = facultyDates[rc.id];
          }
        } else {
          rc.facultyStatusDate = null;
        }
      });

      if (datesChanged) {
        Storage.saveFacultyDates(facultyDates);
      }
      if (seenChanged) {
        Storage.saveSeenCatchupIds(Array.from(seenSet));
      }

      // Ensure canonical submodule names on all remote courses
      remoteCourses.forEach(rc => {
        const s = (rc.submodule || '').trim().toUpperCase();
        const m = (rc.module || '').trim().toUpperCase();
        if (s.includes('OPHTALMO')) rc.submodule = 'Ophtalmologie';
        else if (s === 'ORL' || s.includes('ORL')) rc.submodule = 'ORL';
        else if (m.includes('GYNECO') || s.includes('GYNECO')) rc.submodule = 'Gynécologie - Obstétrique';
        else if (m.includes('SANTÉ') || m.includes('SANTE') || s.includes('SANTÉ')) rc.submodule = 'Santé Publique';
        else if (m.includes('URGENCES') || s.includes('URGENCES')) rc.submodule = 'Urgences - Réanimation';
      });

      hydrateCoursesWithWeights(remoteCourses);
      state.courses = remoteCourses;
      state.sheetDate = result.data.sheetUpdateDate;

      Storage.setCachedCourses(remoteCourses);
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
      const currentTab = state.filters.tab;
      const tab = btn.getAttribute('data-tab');

      // If user was looking at catchup and is navigating away, mark them as seen
      if (currentTab === 'catchup' && tab !== 'catchup') {
        commitPendingCatchupSeen();
      }

      document.querySelectorAll('.quick-tab-btn').forEach(b => {
        b.classList.remove('bg-white', 'text-indigo-700', 'shadow-sm');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('bg-white', 'text-indigo-700', 'shadow-sm');
      btn.classList.remove('text-slate-600');

      state.filters.tab = tab;

      // Preserve user's preferred view mode across all tabs
      if (tab === 'catchup') {
        setActiveMobileNav('catchup');
      } else if (tab === 'all') {
        setActiveMobileNav('syllabus');
      }
      renderCoursesView();
      refreshIcons();
    };
  });

  // Mobile Bottom Navigation: Explicit direct handlers for every button
  if (elements.btnMobileSyllabus) {
    elements.btnMobileSyllabus.onclick = () => {
      switchMainPage('courses');
      const allBtn = document.querySelector('.quick-tab-btn[data-tab="all"]');
      if (allBtn) allBtn.click();
      setActiveMobileNav('syllabus');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  if (elements.btnMobileCatchup) {
    elements.btnMobileCatchup.onclick = () => {
      switchMainPage('courses');
      const catchupBtn = document.querySelector('.quick-tab-btn[data-tab="catchup"]');
      if (catchupBtn) catchupBtn.click();
      setActiveMobileNav('catchup');
      const section = document.getElementById('coursesSection');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    };
  }

  if (elements.btnMobileModules) {
    elements.btnMobileModules.onclick = () => {
      switchMainPage('courses');
      setActiveMobileNav('modules');
      const modContainer = document.getElementById('moduleCardsContainer');
      if (modContainer) modContainer.scrollIntoView({ behavior: 'smooth' });
    };
  }

  if (elements.btnMobileExams) {
    elements.btnMobileExams.onclick = () => {
      switchMainPage('exams');
      setActiveMobileNav('exams');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  if (elements.btnMobileSync) {
    elements.btnMobileSync.onclick = () => {
      if (elements.mobileSyncIcon) {
        elements.mobileSyncIcon.classList.add('animate-spin');
      }
      triggerSync(false).finally(() => {
        if (elements.mobileSyncIcon) {
          elements.mobileSyncIcon.classList.remove('animate-spin');
        }
      });
    };
  }

  if (elements.btnMobileSettings) {
    elements.btnMobileSettings.onclick = openSettingsModal;
  }

  // Header Brand & Return shortcuts
  if (elements.btnBackToCourses) {
    elements.btnBackToCourses.onclick = () => switchMainPage('courses');
  }
  if (elements.btnBrandHome) {
    elements.btnBrandHome.onclick = () => switchMainPage('courses');
  }

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
    state.filters.submodule = '';
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
  if (elements.btnToggleWeightSort) {
    elements.btnToggleWeightSort.onclick = () => {
      hydrateCoursesWithWeights(state.courses);
      Storage.setCachedCourses(state.courses);
      state.filters.sortByWeight = !state.filters.sortByWeight;
      updateWeightSortButtonUI();
      renderCoursesView();
      refreshIcons();
      if (state.filters.sortByWeight) {
        showToast('Tri par poids activé : cours classés par nombre de questions 🔥', 'info');
      } else {
        showToast('Ordre standard du programme rétabli', 'info');
      }
    };
  }
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

  // Reset Faculty Overrides
  if (elements.btnResetFacultyOverrides) {
    elements.btnResetFacultyOverrides.onclick = () => {
      Storage.clearFacultyOverrides();
      state.courses.forEach(c => {
        delete c.isCustomStatus;
      });
      triggerSync(false);
      elements.settingsModal.classList.add('hidden');
      showToast('Statuts réalignés avec la feuille Google Sheets !', 'success');
    };
  }

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

  window.addEventListener('beforeunload', () => {
    commitPendingCatchupSeen();
  });
}

function selectModuleFilter(modKey, subKey = '') {
  state.filters.module = modKey;
  state.filters.submodule = subKey;
  if (elements.filterModule) elements.filterModule.value = modKey;
  populateProfessors();
  renderDashboard();
}

function resetAllFilters() {
  if (state.filters.tab === 'catchup') {
    commitPendingCatchupSeen();
  }
  state.filters.tab = 'all';
  setViewMode('syllabus');
  state.filters.module = '';
  state.filters.submodule = '';
  state.filters.facStatus = '';
  state.filters.prof = '';
  state.filters.search = '';

  elements.searchInput.value = '';
  elements.btnClearSearch.classList.add('hidden');
  elements.filterModule.value = '';
  elements.filterFacStatus.value = '';
  state.filters.observation = '';
  if (elements.filterObservation) elements.filterObservation.value = '';
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
  state.settings.viewMode = mode;
  Storage.saveSettings({ viewMode: mode });
  if (elements.settingDefaultView) elements.settingDefaultView.value = mode;

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
  if (elements.settingThemeToggle) {
    elements.settingThemeToggle.checked = document.documentElement.classList.contains('dark');
  }
  if (elements.settingDefaultView) {
    elements.settingDefaultView.value = state.activeView;
  }
  if (elements.settingRememberWeightSort) {
    elements.settingRememberWeightSort.checked = !!state.filters.sortByWeight;
  }
  elements.settingsModal.classList.remove('hidden');
  refreshIcons();
}

function saveSettingsModal() {
  const newUrl = elements.settingSheetUrl.value.trim();
  const newAuto = elements.settingAutoSync.checked;
  const newView = elements.settingDefaultView ? elements.settingDefaultView.value : state.activeView;
  const newWeight = elements.settingRememberWeightSort ? elements.settingRememberWeightSort.checked : state.filters.sortByWeight;
  const newDark = elements.settingThemeToggle ? elements.settingThemeToggle.checked : document.documentElement.classList.contains('dark');

  Storage.saveSettings({
    sheetUrl: newUrl,
    autoSync: newAuto,
    viewMode: newView,
    sortByWeight: newWeight,
    theme: newDark ? 'dark' : 'light'
  });

  if (newView !== state.activeView) {
    setViewMode(newView);
  }

  if (newWeight !== state.filters.sortByWeight) {
    state.filters.sortByWeight = newWeight;
    updateWeightSortButtonUI();
    renderCoursesView();
  }

  applyTheme(newDark ? 'dark' : 'light', false);

  elements.settingsModal.classList.add('hidden');
  showToast('Préférences enregistrées avec succès ! ⭐', 'success');
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

// ==========================================
// EXAM COUNTDOWN & REAL CALENDAR (Janvier 2027 / 2026)
// ==========================================

const S9_EXAMS_CONFIG = {
  2027: {
    year: 2027,
    month: 0, // Janvier
    label: 'Session Normale Janvier 2027',
    periodStart: 6,
    periodEnd: 22,
    exams: [
      {
        id: 'exam_gyneco',
        moduleKey: 'GYNECO-OBSTETRIQUE',
        title: 'Gynécologie - Obstétrique',
        shortTitle: 'Gynéco-Obs',
        dayNumber: 6,
        dayName: 'Mercredi',
        startTime: '12:00',
        endTime: '13:30',
        duration: '1h30',
        periodNote: '1ère épreuve de la Session Normale',
        revisionNote: 'Ouverture de la session',
        color: 'pink',
        accentBorder: 'border-pink-300',
        accentBg: 'bg-pink-50/70',
        badgeBg: 'bg-pink-100 text-pink-800 border-pink-200',
        icon: 'baby'
      },
      {
        id: 'exam_orl_ophtalmo',
        moduleKey: 'ORL - OPHTALMO',
        title: 'Ophtalmologie - ORL',
        shortTitle: 'ORL - Ophtalmo',
        dayNumber: 12,
        dayName: 'Mardi',
        startTime: '14:30',
        endTime: '16:00',
        duration: '1h30',
        periodNote: '2ème épreuve • Horaire 14h30 - 16h00',
        revisionNote: '+ 5 jours de révision après Gynéco-Obs',
        color: 'amber',
        accentBorder: 'border-amber-300',
        accentBg: 'bg-amber-50/70',
        badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
        icon: 'eye'
      },
      {
        id: 'exam_urgences_rea',
        moduleKey: 'URGENCES - RÉANIMATION',
        title: 'Urgences et Réanimation',
        shortTitle: 'Urgences - Réa',
        dayNumber: 18,
        dayName: 'Lundi',
        startTime: '12:00',
        endTime: '13:30',
        duration: '1h30',
        periodNote: '3ème épreuve de la Session',
        revisionNote: '+ 5 jours de révision après ORL-Ophtalmo (inclut férié 14 Janv)',
        color: 'blue',
        accentBorder: 'border-blue-300',
        accentBg: 'bg-blue-50/70',
        badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
        icon: 'siren'
      },
      {
        id: 'exam_sante_publique',
        moduleKey: 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ',
        title: 'Médecine Sociale et Santé Publique - Économie de Santé',
        shortTitle: 'Santé Publique & Éco',
        dayNumber: 22,
        dayName: 'Vendredi',
        startTime: '12:00',
        endTime: '13:30',
        duration: '1h30',
        periodNote: '4ème épreuve • Clôture de la Session Normale',
        revisionNote: '+ 3 jours de révision après Urgences-Réa',
        color: 'emerald',
        accentBorder: 'border-emerald-300',
        accentBg: 'bg-emerald-50/70',
        badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        icon: 'activity'
      }
    ],
    holidays: {
      11: { title: "Manifeste de l'Indépendance", short: "Férié (Indép.)" },
      14: { title: "Nouvel An Amazigh (Yennayer)", short: "Férié (Amazigh)" }
    }
  },
  2026: {
    year: 2026,
    month: 0,
    label: 'Session Normale Janvier 2026 (Réf. PDF)',
    periodStart: 8,
    periodEnd: 22,
    exams: [
      {
        id: 'exam_gyneco',
        moduleKey: 'GYNECO-OBSTETRIQUE',
        title: 'Gynécologie - Obstétrique',
        shortTitle: 'Gynéco-Obs',
        dayNumber: 8,
        dayName: 'Jeudi',
        startTime: '12:00',
        endTime: '13:30',
        duration: '1h30',
        periodNote: '1ère épreuve de la Session Normale',
        revisionNote: 'Ouverture de la session',
        color: 'pink',
        accentBorder: 'border-pink-300',
        accentBg: 'bg-pink-50/70',
        badgeBg: 'bg-pink-100 text-pink-800 border-pink-200',
        icon: 'baby'
      },
      {
        id: 'exam_orl_ophtalmo',
        moduleKey: 'ORL - OPHTALMO',
        title: 'Ophtalmologie - ORL',
        shortTitle: 'ORL - Ophtalmo',
        dayNumber: 13,
        dayName: 'Mardi',
        startTime: '14:30',
        endTime: '16:00',
        duration: '1h30',
        periodNote: '2ème épreuve • Horaire 14h30 - 16h00',
        revisionNote: '+ 4 jours de révision après Gynéco-Obs',
        color: 'amber',
        accentBorder: 'border-amber-300',
        accentBg: 'bg-amber-50/70',
        badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
        icon: 'eye'
      },
      {
        id: 'exam_urgences_rea',
        moduleKey: 'URGENCES - RÉANIMATION',
        title: 'Urgences et Réanimation',
        shortTitle: 'Urgences - Réa',
        dayNumber: 19,
        dayName: 'Lundi',
        startTime: '12:00',
        endTime: '13:30',
        duration: '1h30',
        periodNote: '3ème épreuve de la Session',
        revisionNote: '+ 5 jours de révision après ORL-Ophtalmo',
        color: 'blue',
        accentBorder: 'border-blue-300',
        accentBg: 'bg-blue-50/70',
        badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
        icon: 'siren'
      },
      {
        id: 'exam_sante_publique',
        moduleKey: 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ',
        title: 'Médecine Sociale et Santé Publique - Économie de Santé',
        shortTitle: 'Santé Publique & Éco',
        dayNumber: 22,
        dayName: 'Jeudi',
        startTime: '12:00',
        endTime: '13:30',
        duration: '1h30',
        periodNote: '4ème épreuve • Clôture de la Session Normale',
        revisionNote: '+ 2 jours de révision après Urgences-Réa',
        color: 'emerald',
        accentBorder: 'border-emerald-300',
        accentBg: 'bg-emerald-50/70',
        badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        icon: 'activity'
      }
    ],
    holidays: {
      11: { title: "Manifeste de l'Indépendance", short: "Férié (Indép.)" },
      14: { title: "Nouvel An Amazigh (Yennayer)", short: "Férié (Amazigh)" }
    }
  }
};

let selectedExamYear = 2027;
let activeExamTab = 'countdown';
let selectedCalendarDay = 6;
let examCountdownTimer = null;

function initExamsFeature() {
  if (elements.btnOpenExamsModal) {
    elements.btnOpenExamsModal.addEventListener('click', () => switchMainPage('exams'));
  }
  if (elements.examQuickTicker) {
    elements.examQuickTicker.addEventListener('click', () => switchMainPage('exams'));
  }
  if (elements.btnBackToCourses) {
    elements.btnBackToCourses.addEventListener('click', () => switchMainPage('courses'));
  }

  // Year Toggles
  if (elements.btnExamYear2027) {
    elements.btnExamYear2027.addEventListener('click', () => setExamYear(2027));
  }
  if (elements.btnExamYear2026) {
    elements.btnExamYear2026.addEventListener('click', () => setExamYear(2026));
  }

  // Tab Buttons
  if (elements.tabBtnCountdown) {
    elements.tabBtnCountdown.addEventListener('click', () => switchExamTab('countdown'));
  }
  if (elements.tabBtnCalendar) {
    elements.tabBtnCalendar.addEventListener('click', () => switchExamTab('calendar'));
  }
  if (elements.tabBtnPdfTable) {
    elements.tabBtnPdfTable.addEventListener('click', () => switchExamTab('pdf'));
  }

  // Escape key returns to courses if on exams page
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeMainPage === 'exams') {
      switchMainPage('courses');
    }
  });

  // Render initial schedule table & start timer
  renderOfficialScheduleTable();
  renderExamTimelineStream();
  updateExamsCountdown();
  if (examCountdownTimer) clearInterval(examCountdownTimer);
  examCountdownTimer = setInterval(updateExamsCountdown, 1000);
}

function switchMainPage(pageName) {
  state.activeMainPage = pageName;
  const isExams = pageName === 'exams';

  if (elements.coursesMainView) {
    elements.coursesMainView.classList.toggle('hidden', isExams);
  }
  if (elements.examsPageView) {
    elements.examsPageView.classList.toggle('hidden', !isExams);
  }

  if (isExams) {
    setActiveMobileNav('exams');
    renderExamCards();
    renderCalendarGrid();
    selectCalendarDay(selectedCalendarDay);
    renderExamTimelineStream();
    renderOfficialScheduleTable();
    updateExamsCountdown();
  } else {
    if (state.filters.tab === 'catchup') {
      setActiveMobileNav('catchup');
    } else {
      setActiveMobileNav('syllabus');
    }
    renderCoursesView();
  }
  refreshIcons();
}

function setActiveMobileNav(navName) {
  const buttons = [
    { el: elements.btnMobileSyllabus, name: 'syllabus' },
    { el: elements.btnMobileCatchup, name: 'catchup' },
    { el: elements.btnMobileModules, name: 'modules' },
    { el: elements.btnMobileExams, name: 'exams' },
    { el: elements.btnMobileSync, name: 'sync' },
    { el: elements.btnMobileSettings, name: 'settings' }
  ];

  buttons.forEach(({ el, name }) => {
    if (!el) return;
    if (name === navName) {
      el.classList.add('active');
      if (name === 'exams') {
        el.classList.add('text-amber-600');
        el.classList.remove('text-slate-500', 'text-indigo-600');
      } else {
        el.classList.add('text-indigo-600');
        el.classList.remove('text-slate-500', 'text-amber-600');
      }
    } else {
      el.classList.remove('active', 'text-indigo-600', 'text-amber-600');
      el.classList.add('text-slate-500');
    }
  });
}

function openExamsModal(tab = 'countdown') {
  switchMainPage('exams');
  switchExamTab(tab);
}

function closeExamsModal() {
  switchMainPage('courses');
}

function switchExamTab(tab) {
  activeExamTab = tab;
  const tabButtons = [
    { btn: elements.tabBtnCountdown, name: 'countdown' },
    { btn: elements.tabBtnCalendar, name: 'calendar' },
    { btn: elements.tabBtnPdfTable, name: 'pdf' }
  ];

  tabButtons.forEach(({ btn, name }) => {
    if (!btn) return;
    if (name === tab) {
      btn.className = 'exam-tab-btn px-3 py-1.5 rounded-lg bg-white text-indigo-700 shadow-xs transition flex items-center gap-1.5 active font-bold';
    } else {
      btn.className = 'exam-tab-btn px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5 font-medium';
    }
  });

  if (elements.examSectionCountdown) {
    elements.examSectionCountdown.classList.toggle('hidden', tab !== 'countdown');
  }
  if (elements.examSectionCalendar) {
    elements.examSectionCalendar.classList.toggle('hidden', tab !== 'calendar');
    if (tab === 'calendar') {
      renderCalendarGrid();
      selectCalendarDay(selectedCalendarDay);
      renderExamTimelineStream();
    }
  }
  if (elements.examSectionPdf) {
    elements.examSectionPdf.classList.toggle('hidden', tab !== 'pdf');
  }
  refreshIcons();
}

function setExamYear(year) {
  selectedExamYear = year;
  if (elements.btnExamYear2027) {
    elements.btnExamYear2027.className = year === 2027
      ? 'px-2.5 py-1 rounded-lg bg-white text-indigo-700 shadow-xs transition'
      : 'px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-800 transition';
  }
  if (elements.btnExamYear2026) {
    elements.btnExamYear2026.className = year === 2026
      ? 'px-2.5 py-1 rounded-lg bg-white text-indigo-700 shadow-xs transition'
      : 'px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-800 transition';
  }
  if (elements.pageExamYearBadge) {
    elements.pageExamYearBadge.textContent = 'Janvier ' + year;
  }
  if (elements.calendarMonthTitle) {
    elements.calendarMonthTitle.textContent = 'Janvier ' + year;
  }

  renderExamCards();
  renderCalendarGrid();
  selectCalendarDay(selectedCalendarDay);
  renderExamTimelineStream();
  renderOfficialScheduleTable();
  updateExamsCountdown();
  refreshIcons();
}

function updateExamsCountdown() {
  const config = S9_EXAMS_CONFIG[selectedExamYear] || S9_EXAMS_CONFIG[2027];
  const now = new Date();

  // Find next upcoming exam
  let nextExam = null;
  let nextExamStart = null;
  let nextExamEnd = null;
  let isCurrentlyOngoing = false;

  for (const ex of config.exams) {
    const [sH, sM] = ex.startTime.split(':').map(Number);
    const [eH, eM] = ex.endTime.split(':').map(Number);
    const exStart = new Date(config.year, config.month, ex.dayNumber, sH, sM, 0);
    const exEnd = new Date(config.year, config.month, ex.dayNumber, eH, eM, 0);

    if (now < exEnd) {
      nextExam = ex;
      nextExamStart = exStart;
      nextExamEnd = exEnd;
      if (now >= exStart) {
        isCurrentlyOngoing = true;
      }
      break;
    }
  }

  // If all exams of this year are in the past
  if (!nextExam) {
    if (elements.headerExamCountdownPill) elements.headerExamCountdownPill.textContent = 'Terminé';
    if (elements.tickerCountdownBadge) elements.tickerCountdownBadge.textContent = 'Session passée';
    if (elements.tickerNextExamName) elements.tickerNextExamName.textContent = 'Toutes les épreuves sont terminées';
    if (elements.heroExamStatusLabel) elements.heroExamStatusLabel.textContent = 'Session terminée';
    if (elements.cdDays) elements.cdDays.textContent = '0';
    if (elements.cdHours) elements.cdHours.textContent = '00';
    if (elements.cdMinutes) elements.cdMinutes.textContent = '00';
    if (elements.cdSeconds) elements.cdSeconds.textContent = '00';
    return;
  }

  if (isCurrentlyOngoing) {
    if (elements.headerExamCountdownPill) elements.headerExamCountdownPill.textContent = 'EN COURS';
    if (elements.tickerCountdownBadge) elements.tickerCountdownBadge.textContent = 'En cours';
    if (elements.tickerNextExamName) elements.tickerNextExamName.textContent = nextExam.shortTitle;
    if (elements.heroExamStatusLabel) elements.heroExamStatusLabel.textContent = 'Épreuve en cours !';
    if (elements.heroExamTitle) elements.heroExamTitle.textContent = nextExam.title;
    if (elements.cdDays) elements.cdDays.textContent = '0';
    if (elements.cdHours) elements.cdHours.textContent = '00';
    if (elements.cdMinutes) elements.cdMinutes.textContent = '00';
    if (elements.cdSeconds) elements.cdSeconds.textContent = '00';
    return;
  }

  const diffMs = nextExamStart - now;
  if (diffMs <= 0) return;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  // Update navbar pill & cockpit ticker
  if (elements.headerExamCountdownPill) {
    elements.headerExamCountdownPill.textContent = 'J-' + days;
  }
  if (elements.tickerCountdownBadge) {
    elements.tickerCountdownBadge.textContent = 'Dans ' + days + 'j ' + hours + 'h';
  }
  if (elements.tickerNextExamName) {
    elements.tickerNextExamName.textContent = nextExam.shortTitle;
  }

  // Update Hero box inside modal
  if (elements.heroExamStatusLabel) elements.heroExamStatusLabel.textContent = 'Prochaine Épreuve S9';
  if (elements.heroExamBadgeDate) {
    elements.heroExamBadgeDate.innerHTML = `<i data-lucide="clock" class="w-3.5 h-3.5"></i><span>${nextExam.dayName} ${String(nextExam.dayNumber).padStart(2, '0')} Janvier ${config.year} • ${nextExam.startTime.replace(':', 'h')} - ${nextExam.endTime.replace(':', 'h')}</span>`;
  }
  if (elements.heroExamTitle) elements.heroExamTitle.textContent = nextExam.title;
  if (elements.heroExamSubtitle) {
    const meta = MODULES_META[nextExam.moduleKey];
    elements.heroExamSubtitle.textContent = nextExam.periodNote + ' • ' + (meta?.coeffShort || '');
  }

  if (elements.cdDays) elements.cdDays.textContent = String(days);
  if (elements.cdHours) elements.cdHours.textContent = String(hours).padStart(2, '0');
  if (elements.cdMinutes) elements.cdMinutes.textContent = String(minutes).padStart(2, '0');
  if (elements.cdSeconds) elements.cdSeconds.textContent = String(seconds).padStart(2, '0');

  // Semester progress calculation (15 Septembre -> Exam Date)
  const semesterStart = new Date(config.year - 1, 8, 15, 8, 0, 0);
  const totalDuration = nextExamStart - semesterStart;
  const elapsed = Math.max(0, now - semesterStart);
  const pct = Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100)));
  if (elements.heroSemesterProgressPercent) elements.heroSemesterProgressPercent.textContent = pct + '%';
  if (elements.heroSemesterProgressBar) elements.heroSemesterProgressBar.style.width = pct + '%';

  // Update countdown pills in exam cards if rendered
  config.exams.forEach(ex => {
    const pill = document.getElementById('examCardCountdown_' + ex.id);
    if (!pill) return;
    const [sH, sM] = ex.startTime.split(':').map(Number);
    const exTime = new Date(config.year, config.month, ex.dayNumber, sH, sM, 0);
    const diff = exTime - now;
    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      pill.textContent = 'Dans ' + d + 'j ' + h + 'h';
    } else {
      pill.textContent = 'Terminé';
      pill.className = 'text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500';
    }
  });
}

function renderExamCards() {
  if (!elements.examCardsGrid) return;
  const config = S9_EXAMS_CONFIG[selectedExamYear] || S9_EXAMS_CONFIG[2027];
  const now = new Date();

  elements.examCardsGrid.innerHTML = config.exams.map((exam, index) => {
    const meta = MODULES_META[exam.moduleKey] || {};
    const moduleCourses = state.courses.filter(c => c.module === exam.moduleKey);
    const totalCourses = moduleCourses.length;
    const doneCourses = moduleCourses.filter(c => isCourseDone(c.id)).length;
    const percent = totalCourses > 0 ? Math.round((doneCourses / totalCourses) * 100) : 0;

    const [sH, sM] = exam.startTime.split(':').map(Number);
    const exDate = new Date(config.year, config.month, exam.dayNumber, sH, sM, 0);
    const diff = exDate - now;
    let badgeText = 'Terminé';
    let badgeClass = 'bg-slate-100 text-slate-500';

    if (diff > 0) {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      badgeText = 'Dans ' + d + 'j ' + h + 'h';
      badgeClass = exam.badgeBg;
    }

    return `
      <div class="light-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between border ${exam.accentBorder} bg-white shadow-xs hover:shadow-md transition">
        <div class="space-y-3">
          <!-- Card Header: Number & Tag -->
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
              Épreuve 0${index + 1}
            </span>
            <span id="examCardCountdown_${exam.id}" class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${badgeClass}">
              ${badgeText}
            </span>
          </div>

          <!-- Module Title & Time -->
          <div>
            <h5 class="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <i data-lucide="${exam.icon}" class="w-4 h-4 ${meta.color || 'text-indigo-600'}"></i>
              <span>${exam.title}</span>
            </h5>
            <div class="flex items-center gap-2 text-xs text-slate-600 mt-1 font-medium">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>${exam.dayName} ${String(exam.dayNumber).padStart(2, '0')} Janv • ${exam.startTime.replace(':', 'h')} à ${exam.endTime.replace(':', 'h')} (${exam.duration})</span>
            </div>
            <div class="text-[11px] text-slate-500 mt-0.5">
              <span>${exam.revisionNote}</span>
            </div>
          </div>

          <!-- Student Preparation Progress -->
          <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-600 font-medium">Préparation personnelle :</span>
              <span class="font-extrabold text-slate-900">${doneCourses}/${totalCourses} cours (<span class="text-indigo-600">${percent}%</span>)</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div class="bg-indigo-600 h-1.5 rounded-full transition-all duration-300" style="width: ${percent}%"></div>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] text-slate-400 font-medium">${meta.coeffShort || ''}</span>
          <button type="button" class="btn-filter-exam-module inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 active:scale-95 text-indigo-700 text-xs font-bold transition shadow-2xs" data-module="${exam.moduleKey}">
            <i data-lucide="filter" class="w-3.5 h-3.5"></i>
            <span>Filtrer ce module</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach module filter listeners
  elements.examCardsGrid.querySelectorAll('.btn-filter-exam-module').forEach(btn => {
    btn.addEventListener('click', () => {
      const mod = btn.getAttribute('data-module');
      if (mod) filterByExamModule(mod);
    });
  });

  refreshIcons();
}

function renderCalendarGrid() {
  if (!elements.calendarDaysGrid) return;
  const config = S9_EXAMS_CONFIG[selectedExamYear] || S9_EXAMS_CONFIG[2027];
  const year = config.year;
  const month = config.month; // 0 for Janvier

  // Monday-based offset (0 = Monday, 6 = Sunday)
  const firstDay = new Date(year, month, 1);
  const firstDayOffset = (firstDay.getDay() + 6) % 7;

  // Days in month
  const daysInJan = 31;
  const daysInDec = 31; // Prev month

  const examMap = {};
  config.exams.forEach(ex => { examMap[ex.dayNumber] = ex; });

  const holidayMap = config.holidays || {};

  let cellsHtml = '';

  // 1. Previous month padding cells
  for (let i = 0; i < firstDayOffset; i++) {
    const prevDay = daysInDec - firstDayOffset + 1 + i;
    cellsHtml += `
      <div class="calendar-day-cell is-outside">
        <span class="text-xs font-bold">${prevDay}</span>
      </div>
    `;
  }

  // 2. January days (1 to 31)
  for (let day = 1; day <= daysInJan; day++) {
    const isExam = !!examMap[day];
    const isHoliday = !!holidayMap[day];
    const isPeriod = day >= config.periodStart && day <= config.periodEnd;
    const isSelected = day === selectedCalendarDay;

    let cellClasses = 'calendar-day-cell';
    let cellContent = '';

    if (isSelected) cellClasses += ' is-selected ring-2 ring-indigo-600';

    if (isExam) {
      const ex = examMap[day];
      cellClasses += ` is-exam ${ex.accentBorder} ${ex.accentBg}`;
      cellContent = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-black text-slate-900">${String(day).padStart(2, '0')}</span>
          <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-600 pulse-indicator"></span>
        </div>
        <div class="mt-0.5 sm:mt-1 space-y-0.5">
          <div class="text-[9px] sm:text-[10px] font-black leading-tight text-slate-900 truncate">${ex.shortTitle}</div>
          <div class="hidden sm:block text-[9px] font-bold text-slate-600">${ex.startTime.replace(':', 'h')}-${ex.endTime.replace(':', 'h')}</div>
        </div>
      `;
    } else if (isHoliday) {
      const hol = holidayMap[day];
      cellClasses += ' is-holiday';
      cellContent = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-rose-700">${String(day).padStart(2, '0')}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
        </div>
        <div class="mt-0.5 sm:mt-1">
          <span class="text-[8px] sm:text-[9px] font-bold text-rose-700 truncate block">${hol.short}</span>
        </div>
      `;
    } else if (isPeriod) {
      cellClasses += ' is-period is-revision';
      cellContent = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-700">${String(day).padStart(2, '0')}</span>
        </div>
        <div class="mt-0.5 sm:mt-1">
          <span class="text-[8px] sm:text-[9px] font-medium text-amber-700 truncate block">Rév.</span>
        </div>
      `;
    } else {
      cellContent = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-600">${String(day).padStart(2, '0')}</span>
        </div>
        <div class="text-[9px] text-slate-300"></div>
      `;
    }

    cellsHtml += `
      <div class="${cellClasses}" data-day="${day}" style="cursor: pointer;">
        ${cellContent}
      </div>
    `;
  }

  // 3. Next month padding cells to complete row
  const totalRendered = firstDayOffset + daysInJan;
  const remainingCells = (7 - (totalRendered % 7)) % 7;
  for (let j = 1; j <= remainingCells; j++) {
    cellsHtml += `
      <div class="calendar-day-cell is-outside">
        <span class="text-xs font-bold">${j}</span>
      </div>
    `;
  }

  elements.calendarDaysGrid.innerHTML = cellsHtml;

  // Add click handlers on day cells
  elements.calendarDaysGrid.querySelectorAll('[data-day]').forEach(cell => {
    cell.addEventListener('click', () => {
      const day = parseInt(cell.getAttribute('data-day'), 10);
      if (day) selectCalendarDay(day);
    });
  });

  refreshIcons();
}

function selectCalendarDay(dayNumber) {
  selectedCalendarDay = dayNumber;
  const config = S9_EXAMS_CONFIG[selectedExamYear] || S9_EXAMS_CONFIG[2027];
  const year = config.year;

  // Highlight in grid
  if (elements.calendarDaysGrid) {
    elements.calendarDaysGrid.querySelectorAll('[data-day]').forEach(cell => {
      const d = parseInt(cell.getAttribute('data-day'), 10);
      cell.classList.toggle('is-selected', d === dayNumber);
      cell.classList.toggle('ring-2', d === dayNumber);
      cell.classList.toggle('ring-indigo-600', d === dayNumber);
    });
  }

  if (!elements.calendarDayDetail) return;

  const ex = config.exams.find(e => e.dayNumber === dayNumber);
  const hol = config.holidays ? config.holidays[dayNumber] : null;
  const isPeriod = dayNumber >= config.periodStart && dayNumber <= config.periodEnd;

  // Compute day of week name
  const dayDate = new Date(year, config.month, dayNumber);
  const dayNameLong = dayDate.toLocaleDateString('fr-FR', { weekday: 'long' });
  const dayNameCap = dayNameLong.charAt(0).toUpperCase() + dayNameLong.slice(1);

  if (elements.detailDayNumber) {
    elements.detailDayNumber.textContent = String(dayNumber).padStart(2, '0');
  }

  if (elements.detailDayBadge) {
    elements.detailDayBadge.className = ex
      ? 'w-11 h-11 rounded-xl bg-indigo-600 text-white flex flex-col items-center justify-center font-bold text-sm leading-tight flex-shrink-0 shadow-xs'
      : hol
      ? 'w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex flex-col items-center justify-center font-bold text-sm leading-tight flex-shrink-0'
      : isPeriod
      ? 'w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex flex-col items-center justify-center font-bold text-sm leading-tight flex-shrink-0'
      : 'w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex flex-col items-center justify-center font-bold text-sm leading-tight flex-shrink-0';
  }

  if (ex) {
    const meta = MODULES_META[ex.moduleKey] || {};
    const moduleCourses = state.courses.filter(c => c.module === ex.moduleKey);
    const totalCourses = moduleCourses.length;
    const doneCourses = moduleCourses.filter(c => isCourseDone(c.id)).length;

    elements.detailDayTitle.textContent = `${dayNameCap} ${String(dayNumber).padStart(2, '0')} Janvier ${year} • ${ex.startTime.replace(':', 'h')} à ${ex.endTime.replace(':', 'h')}`;
    elements.detailDayDesc.innerHTML = `<strong class="text-indigo-700 font-extrabold">${ex.title}</strong> • Durée : ${ex.duration} • <span class="text-slate-700 font-medium">Préparation : ${doneCourses}/${totalCourses} cours validés</span> • ${ex.revisionNote}`;
    elements.detailDayActionContainer.innerHTML = `
      <button type="button" class="btn-filter-detail-action px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5" data-module="${ex.moduleKey}">
        <i data-lucide="filter" class="w-3.5 h-3.5"></i>
        <span>Filtrer les cours de ${meta.short || ex.shortTitle}</span>
      </button>
    `;
  } else if (hol) {
    elements.detailDayTitle.textContent = `${dayNameCap} ${String(dayNumber).padStart(2, '0')} Janvier ${year} • Jour Férié Officiel`;
    elements.detailDayDesc.textContent = `${hol.title} — Aucun examen de la faculté n'est programmé ce jour.`;
    elements.detailDayActionContainer.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">
        <i data-lucide="award" class="w-3.5 h-3.5 text-rose-500"></i>
        <span>Fête / Repos officiel</span>
      </span>
    `;
  } else if (isPeriod) {
    // Next upcoming exam after this day
    const nextUpcoming = config.exams.find(e => e.dayNumber > dayNumber);
    const targetModule = nextUpcoming ? nextUpcoming.moduleKey : 'GYNECO-OBSTETRIQUE';
    const targetTitle = nextUpcoming ? nextUpcoming.shortTitle : 'la prochaine épreuve';

    elements.detailDayTitle.textContent = `${dayNameCap} ${String(dayNumber).padStart(2, '0')} Janvier ${year} • Période d'Examens`;
    elements.detailDayDesc.textContent = `Journée de consolidation et révision. Objectif recommandé : focaliser sur ${targetTitle}.`;
    elements.detailDayActionContainer.innerHTML = `
      <button type="button" class="btn-filter-detail-action px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5" data-module="${targetModule}">
        <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
        <span>Réviser ${targetTitle}</span>
      </button>
    `;
  } else {
    elements.detailDayTitle.textContent = `${dayNameCap} ${String(dayNumber).padStart(2, '0')} Janvier ${year}`;
    elements.detailDayDesc.textContent = dayNumber < config.periodStart
      ? "Période de préparation intensive avant le début de la session d'examens S9."
      : "Période post-examens de la session normale.";
    elements.detailDayActionContainer.innerHTML = `
      <span class="text-xs text-slate-400 font-medium">Préparation S9</span>
    `;
  }

  // Hook up detail action button
  const actionBtn = elements.detailDayActionContainer.querySelector('.btn-filter-detail-action');
  if (actionBtn) {
    actionBtn.addEventListener('click', () => {
      const mod = actionBtn.getAttribute('data-module');
      if (mod) filterByExamModule(mod);
    });
  }

  refreshIcons();
}

function renderOfficialScheduleTable() {
  if (!elements.officialScheduleTbody) return;
  const config = S9_EXAMS_CONFIG[selectedExamYear] || S9_EXAMS_CONFIG[2027];

  const rows = [
    {
      date: `${config.exams[0].dayName} 06 Janvier`,
      time: '12h00 à 13h30',
      module: config.exams[0].title,
      moduleKey: config.exams[0].moduleKey,
      duration: '1h30',
      note: '1ère épreuve de la Session Normale',
      isExam: true
    },
    {
      date: `${config.exams[1].dayName} 12 Janvier`,
      time: '14h30 à 16h00',
      module: config.exams[1].title,
      moduleKey: config.exams[1].moduleKey,
      duration: '1h30',
      note: '5 jours d\'intervalle de révision (07 au 11 Janvier • aucun week-end)',
      isExam: true
    },
    {
      date: 'Jeudi 14 Janvier',
      time: 'Toute la journée',
      module: 'Jour férié (Nouvel An Amazigh)',
      moduleKey: '',
      duration: '—',
      note: 'Férié officiel mentionné au calendrier de la faculté',
      isExam: false
    },
    {
      date: `${config.exams[2].dayName} 18 Janvier`,
      time: '12h00 à 13h30',
      module: config.exams[2].title,
      moduleKey: config.exams[2].moduleKey,
      duration: '1h30',
      note: '5 jours d\'intervalle de révision (13 au 17 Janvier • inclut férié 14 Janv)',
      isExam: true
    },
    {
      date: `${config.exams[3].dayName} 22 Janvier`,
      time: '12h00 à 13h30',
      module: config.exams[3].title,
      moduleKey: config.exams[3].moduleKey,
      duration: '1h30',
      note: '3 jours d\'intervalle de révision (19 au 21 Janvier) • Clôture Session Normale',
      isExam: true
    }
  ];

  elements.officialScheduleTbody.innerHTML = rows.map(r => `
    <tr class="hover:bg-slate-50 transition ${r.isExam ? '' : 'bg-rose-50/30'}">
      <td class="px-4 py-3 font-bold text-slate-900 whitespace-nowrap">${r.date}</td>
      <td class="px-4 py-3 font-mono font-medium text-slate-700 whitespace-nowrap">${r.time}</td>
      <td class="px-4 py-3 font-extrabold ${r.isExam ? 'text-indigo-700' : 'text-rose-700'}">${r.module}</td>
      <td class="px-4 py-3 text-slate-600">${r.duration}</td>
      <td class="px-4 py-3 text-slate-500">${r.note}</td>
      <td class="px-4 py-3 text-right">
        ${r.isExam ? `
          <button type="button" class="btn-filter-table-row px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition" data-module="${r.moduleKey}">
            Filtrer
          </button>
        ` : `
          <span class="text-xs text-rose-500 font-semibold">Repos</span>
        `}
      </td>
    </tr>
  `).join('');

  elements.officialScheduleTbody.querySelectorAll('.btn-filter-table-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const mod = btn.getAttribute('data-module');
      if (mod) filterByExamModule(mod);
    });
  });
}

function filterByExamModule(moduleKey) {
  switchMainPage('courses');
  if (elements.filterModule) {
    elements.filterModule.value = moduleKey;
    state.filters.module = moduleKey;
    renderDashboard();
    if (elements.coursesSyllabusView) {
      elements.coursesSyllabusView.scrollIntoView({ behavior: 'smooth' });
    }
    const meta = MODULES_META[moduleKey];
    showToast(`Filtre activé sur : ${meta?.short || moduleKey}`, 'info');
  }
}

function renderExamTimelineStream() {
  if (!elements.examTimelineAgendaStream) return;
  const config = S9_EXAMS_CONFIG[selectedExamYear] || S9_EXAMS_CONFIG[2027];
  const now = new Date();

  const timelineItems = [
    {
      dayNumber: 6,
      dateFormatted: `${config.exams[0].dayName} 06 Janvier`,
      type: 'exam',
      examId: 'exam_gyneco',
      title: 'Épreuve 1 : Gynécologie - Obstétrique',
      time: '12h00 à 13h30 (Durée : 1h30)',
      moduleKey: 'GYNECO-OBSTETRIQUE',
      badge: 'Épreuve 01 • Coeff 2.5',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      icon: 'baby',
      iconBg: 'bg-indigo-600 text-white',
      desc: '1ère épreuve de la Session Normale (Mercredi 06 Janvier). Épreuve majeure du semestre.',
      actionText: 'Filtrer Gynécologie'
    },
    {
      dayNumber: 7,
      dateFormatted: 'Du 07 au 11 Janvier (5 jours)',
      type: 'revision',
      title: 'Intervalle de Révision : ORL - Ophtalmologie',
      time: '5 jours de préparation (aucun week-end d\'examen)',
      moduleKey: 'ORL - OPHTALMO',
      badge: 'Révision Intensive',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: 'book-open',
      iconBg: 'bg-amber-500 text-white',
      desc: "5 jours complets pour consolider l'ORL et l'Ophtalmologie avant la 2ème épreuve.",
      actionText: 'Réviser ORL - Ophtalmo'
    },
    {
      dayNumber: 12,
      dateFormatted: `${config.exams[1].dayName} 12 Janvier`,
      type: 'exam',
      examId: 'exam_orl_ophtalmo',
      title: 'Épreuve 2 : Oto-Rhino-Laryngologie & Ophtalmologie',
      time: '14h30 à 16h00 (Durée : 1h30)',
      moduleKey: 'ORL - OPHTALMO',
      badge: 'Épreuve 02 • Coeff 2.0',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: 'eye',
      iconBg: 'bg-amber-600 text-white',
      desc: '2ème épreuve de la Session Normale (Mardi 12 Janvier • Horaire spécial 14h30-16h00).',
      actionText: 'Filtrer ORL - Ophtalmo'
    },
    {
      dayNumber: 13,
      dateFormatted: 'Du 13 au 17 Janvier (5 jours)',
      type: 'revision',
      title: 'Intervalle de Révision : Urgences - Réanimation',
      time: '5 jours de préparation (inclut férié 14 Janv et repos week-end)',
      moduleKey: 'URGENCES - RÉANIMATION',
      badge: 'Révision Intensive',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: 'book-open',
      iconBg: 'bg-blue-500 text-white',
      desc: "5 jours pour réviser la réanimation, la toxicologie et la prise en charge d'urgences.",
      actionText: 'Réviser Urgences - Réa'
    },
    {
      dayNumber: 14,
      dateFormatted: 'Jeudi 14 Janvier',
      type: 'holiday',
      title: 'Jour Férié Officiel : Nouvel An Amazigh (Yennayer)',
      time: 'Toute la journée',
      moduleKey: null,
      badge: 'Fête & Repos Officiel',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      icon: 'award',
      iconBg: 'bg-rose-500 text-white',
      desc: 'Jour férié officiel mentionné sur la programmation de la faculté. Aucun examen ce jour.',
      actionText: null
    },
    {
      dayNumber: 18,
      dateFormatted: `${config.exams[2].dayName} 18 Janvier`,
      type: 'exam',
      examId: 'exam_urgences_rea',
      title: 'Épreuve 3 : Urgences - Réanimation & Toxicologie',
      time: '12h00 à 13h30 (Durée : 1h30)',
      moduleKey: 'URGENCES - RÉANIMATION',
      badge: 'Épreuve 03 • Coeff 1.0',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: 'siren',
      iconBg: 'bg-blue-600 text-white',
      desc: '3ème épreuve de la Session Normale (Lundi 18 Janvier).',
      actionText: 'Filtrer Urgences - Réa'
    },
    {
      dayNumber: 19,
      dateFormatted: 'Du 19 au 21 Janvier (3 jours)',
      type: 'revision',
      title: 'Intervalle de Révision : Santé Publique & Médecine Légale',
      time: '3 jours de préparation',
      moduleKey: 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ',
      badge: 'Dernière Ligne Droite',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: 'book-open',
      iconBg: 'bg-emerald-500 text-white',
      desc: "3 jours pour mémoriser les notions clés de santé publique, épidémiologie et économie de santé.",
      actionText: 'Réviser Santé Publique'
    },
    {
      dayNumber: 22,
      dateFormatted: `${config.exams[3].dayName} 22 Janvier`,
      type: 'exam',
      examId: 'exam_sante_publique',
      title: 'Épreuve 4 : Santé Publique & Médecine Légale',
      time: '12h00 à 13h30 (Durée : 1h30)',
      moduleKey: 'MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ',
      badge: 'Ultime Épreuve • Coeff 1.0',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: 'activity',
      iconBg: 'bg-emerald-600 text-white',
      desc: '4ème et dernière épreuve de la Session Normale S9 (Vendredi 22 Janvier) !',
      actionText: 'Filtrer Santé Publique'
    }
  ];

  elements.examTimelineAgendaStream.innerHTML = timelineItems.map((item) => {
    let countdownBadgeHtml = '';
    let progressHtml = '';

    if (item.type === 'exam') {
      const ex = config.exams.find(e => e.id === item.examId);
      if (ex) {
        const [sH, sM] = ex.startTime.split(':').map(Number);
        const exDate = new Date(config.year, config.month, ex.dayNumber, sH, sM, 0);
        const diff = exDate - now;
        if (diff > 0) {
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          countdownBadgeHtml = `<span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-900 text-white shadow-2xs">Dans ${d}j ${h}h</span>`;
        } else {
          countdownBadgeHtml = `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Terminé</span>`;
        }
      }
    }

    if (item.moduleKey) {
      const moduleCourses = state.courses.filter(c => c.module === item.moduleKey);
      const totalCourses = moduleCourses.length;
      const doneCourses = moduleCourses.filter(c => isCourseDone(c.id)).length;
      const pct = totalCourses > 0 ? Math.round((doneCourses / totalCourses) * 100) : 0;
      progressHtml = `
        <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span class="text-slate-600 font-medium">Préparation personnelle : <strong>${doneCourses}/${totalCourses}</strong> cours (${pct}%)</span>
          <div class="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div class="bg-indigo-600 h-1.5 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }

    return `
      <div class="timeline-item relative flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition">
        <div class="timeline-stem"></div>
        <div class="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.iconBg} flex items-center justify-center shadow-xs flex-shrink-0">
          <i data-lucide="${item.icon}" class="w-4 h-4 sm:w-5 sm:h-5"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center justify-between gap-1.5 mb-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-xs sm:text-sm font-extrabold text-slate-900">${item.dateFormatted}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}">${item.badge}</span>
            </div>
            ${countdownBadgeHtml}
          </div>

          <h5 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug">${item.title}</h5>
          
          <div class="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
            <span>${item.time}</span>
          </div>

          <p class="text-xs text-slate-600 mt-1 leading-relaxed">${item.desc}</p>

          ${progressHtml}

          ${item.actionText && item.moduleKey ? `
            <div class="mt-2.5 pt-1.5 flex justify-end">
              <button type="button" class="btn-timeline-filter px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 active:scale-95 text-slate-700 hover:text-indigo-700 text-xs font-bold transition flex items-center gap-1.5" data-module="${item.moduleKey}">
                <i data-lucide="filter" class="w-3.5 h-3.5"></i>
                <span>${item.actionText}</span>
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  elements.examTimelineAgendaStream.querySelectorAll('.btn-timeline-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const mod = btn.getAttribute('data-module');
      if (mod) filterByExamModule(mod);
    });
  });

  refreshIcons();
}

document.addEventListener('DOMContentLoaded', init);

// Expose for browser console and programmatic access
if (typeof window !== 'undefined') {
  window.RecensementApp = { state, Storage, Sync, setViewMode, openExamsModal, setExamYear, renderDashboard, populateProfessors, selectModuleFilter, toggleTheme, initTheme };
}


})();
