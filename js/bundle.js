/**
 * Recensement S9 - Bundled JavaScript
 * Single file bundle containing initialData, Storage, Sync, and App logic.
 * Generated on 2026-09-21
 */
(function() {
/**
 * Pre-bundled initial dataset from Recensement S9 Google Sheet
 * Auto-generated with intelligent title note extraction.
 */
const INITIAL_DATA = {
  "sheetUpdateDate": "21/09/2026",
  "generatedAt": "2026-09-21T19:47:56.888Z",
  "courses": [
    {
      "id": "c_001",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Uterus cicatriciel",
      "title": "Uterus cicatriciel",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_002",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Le retard de croissance intra-utérine RCIU",
      "title": "Le retard de croissance intra-utérine RCIU",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_003",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "les infections génitales",
      "title": "les infections génitales",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_004",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Cancer de la vulve",
      "title": "Cancer de la vulve",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_005",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Infections urinaires et grossesse",
      "title": "Infections urinaires et grossesse",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_006",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Toxoplasmose et grossesse",
      "title": "Toxoplasmose et grossesse",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_007",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Rubéole et grossesse",
      "title": "Rubéole et grossesse",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_008",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Streptocoque B et grossesse",
      "title": "Streptocoque B et grossesse",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_009",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Errarhay",
      "rawTitle": "Les suites de couches normales et pathologiques",
      "title": "Les suites de couches normales et pathologiques",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_010",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "Cancer du sein",
      "title": "Cancer du sein",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_011",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "Cancer de l'ovaire",
      "title": "Cancer de l'ovaire",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_012",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "Grossesse extra-utérine",
      "title": "Grossesse extra-utérine",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_013",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "Les Maladies trophoblastiques Gestationnelles",
      "title": "Les Maladies trophoblastiques Gestationnelles",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_014",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "Les avortements",
      "title": "Les avortements",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_015",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "La rupture prématurée des membranes",
      "title": "La rupture prématurée des membranes",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_016",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Bouchikhi",
      "rawTitle": "La délivrance normale et pathologique",
      "title": "La délivrance normale et pathologique",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_017",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Fdili",
      "rawTitle": "Diagnostic et surveillance de la grossesse",
      "title": "Diagnostic et surveillance de la grossesse",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_018",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Fdili",
      "rawTitle": "Hémorragies du 3ème trimestre",
      "title": "Hémorragies du 3ème trimestre",
      "badges": [],
      "facultyStatus": "En cours",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_019",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Fdili",
      "rawTitle": "Présentations défléchies",
      "title": "Présentations défléchies",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_020",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Chaara",
      "rawTitle": "Diabète et grossesse",
      "title": "Diabète et grossesse",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_021",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Chaara",
      "rawTitle": "Pré-éclampsie",
      "title": "Pré-éclampsie",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_022",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Chaara",
      "rawTitle": "Allo-immunisations foeto-maternelles: Rhésus",
      "title": "Allo-immunisations foeto-maternelles: Rhésus",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_023",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Chaara",
      "rawTitle": "La grossesse gémellaire",
      "title": "La grossesse gémellaire",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_024",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Chaara",
      "rawTitle": "La menace d’accouchement prématuré",
      "title": "La menace d’accouchement prématuré",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_025",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Chaara",
      "rawTitle": "La souffrance foetale aiguë > devenue asphyxie +++",
      "title": "La souffrance foetale aiguë",
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
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_026",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Melhouf",
      "rawTitle": "Accouchement normal",
      "title": "Accouchement normal",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_027",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Melhouf",
      "rawTitle": "presentation de siege",
      "title": "presentation de siege",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_028",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Melhouf",
      "rawTitle": "Dysplasies cervicales",
      "title": "Dysplasies cervicales",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_029",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Melhouf",
      "rawTitle": "Les fibromes utérins",
      "title": "Les fibromes utérins",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_030",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Melhouf",
      "rawTitle": "Cancer du col uterin",
      "title": "Cancer du col uterin",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_031",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. Melhouf",
      "rawTitle": "Le cancer de l'endomètre",
      "title": "Le cancer de l'endomètre",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_032",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. S.Jayi",
      "rawTitle": "Endometrioses",
      "title": "Endometrioses",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_033",
      "module": "GYNECO-OBSTETRIQUE",
      "submodule": "",
      "prof": "Pr. S.Jayi",
      "rawTitle": "Abord du couple infertile",
      "title": "Abord du couple infertile",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_034",
      "module": "ORL - OPHTALMO",
      "submodule": "OPHTALMO",
      "prof": "Pr. Moutei",
      "rawTitle": "Anatomie et physiologie de la vision",
      "title": "Anatomie et physiologie de la vision",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_035",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Moutei",
      "rawTitle": "Examen clinique en ophtalmologie",
      "title": "Examen clinique en ophtalmologie",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_036",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Moutei",
      "rawTitle": "Conduite à tenir devant un oeil rouge",
      "title": "Conduite à tenir devant un oeil rouge",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_037",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Moutei",
      "rawTitle": "Conduite à tenir devant une baisse de l’acuité visuelle",
      "title": "Conduite à tenir devant une baisse de l’acuité visuelle",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_038",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Chraibi",
      "rawTitle": "Les conjonctivites",
      "title": "Les conjonctivites",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "21/09/2026"
    },
    {
      "id": "c_039",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Chraibi",
      "rawTitle": "Les kératites",
      "title": "Les kératites",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_040",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Abdellaoui",
      "rawTitle": "Les manifestations oculaires liées au diabète",
      "title": "Les manifestations oculaires liées au diabète",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_041",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Abdellaoui",
      "rawTitle": "Le décollement de la rétine rhegmatogène",
      "title": "Le décollement de la rétine rhegmatogène",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_042",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Abdellaoui",
      "rawTitle": "La dégénérescence maculaire liées à l'âge",
      "title": "La dégénérescence maculaire liées à l'âge",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_043",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Abdellaoui",
      "rawTitle": "L’uvéite",
      "title": "L’uvéite",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_044",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Abdellaoui",
      "rawTitle": "Les strabismes",
      "title": "Les strabismes",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_045",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "Leucocorie",
      "title": "Leucocorie",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_046",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "Les traumatismes oculo-orbitaires",
      "title": "Les traumatismes oculo-orbitaires",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_047",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "CAT devant une exophtalmie",
      "title": "CAT devant une exophtalmie",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_048",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "CAT devant un larmoiement",
      "title": "CAT devant un larmoiement",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_049",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "Les amétropies",
      "title": "Les amétropies",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_050",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "Les cataractes",
      "title": "Les cataractes",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_051",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benatiya",
      "rawTitle": "Les glaucomes",
      "title": "Les glaucomes",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_052",
      "module": "ORL - OPHTALMO",
      "submodule": "ORL",
      "prof": "Pr. Benmansour",
      "rawTitle": "Otites externes et otites moyennes aigues (nouveau cours)",
      "title": "Otites externes et otites moyennes aigues",
      "badges": [
        {
          "type": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "bg": "bg-blue-50",
          "textCol": "text-blue-700",
          "border": "border-blue-200"
        }
      ],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_053",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benmansour",
      "rawTitle": "otites moyennes chroniques",
      "title": "otites moyennes chroniques",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_054",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Benmansour",
      "rawTitle": "paralysie faciale",
      "title": "paralysie faciale",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_055",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Ridal",
      "rawTitle": "Les sinusites (nouveau cours)",
      "title": "Les sinusites",
      "badges": [
        {
          "type": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "bg": "bg-blue-50",
          "textCol": "text-blue-700",
          "border": "border-blue-200"
        }
      ],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_056",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Ridal",
      "rawTitle": "Les angines",
      "title": "Les angines",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_057",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Ridal",
      "rawTitle": "Nodules thyroidiens",
      "title": "Nodules thyroidiens",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_058",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Ouatassi",
      "rawTitle": "Les surdités",
      "title": "Les surdités",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_059",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Ouatassi",
      "rawTitle": "La rhinite allergique",
      "title": "La rhinite allergique",
      "badges": [],
      "facultyStatus": "En cours",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_060",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Laamarti",
      "rawTitle": "Les vertiges (cours changé)",
      "title": "Les vertiges",
      "badges": [
        {
          "type": "changed",
          "text": "Cours changé",
          "icon": "alert-circle",
          "bg": "bg-amber-50",
          "textCol": "text-amber-800",
          "border": "border-amber-200"
        }
      ],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_061",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Afellah",
      "rawTitle": "SAOS (nouveau cours)",
      "title": "SAOS",
      "badges": [
        {
          "type": "new",
          "text": "Nouveau cours",
          "icon": "sparkles",
          "bg": "bg-blue-50",
          "textCol": "text-blue-700",
          "border": "border-blue-200"
        }
      ],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_062",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Zaki",
      "rawTitle": "Les cancers du cavum et des voies aéro-digestives sup",
      "title": "Les cancers du cavum et des voies aéro-digestives sup",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_063",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Kamal",
      "rawTitle": "Les cellulites cervico-faciales",
      "title": "Les cellulites cervico-faciales",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_064",
      "module": "ORL - OPHTALMO",
      "submodule": "",
      "prof": "Pr. Kamal",
      "rawTitle": "Les traumatismes maxillo-faciaux",
      "title": "Les traumatismes maxillo-faciaux",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_065",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "Epidémiologie générale",
      "title": "Epidémiologie générale",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "21/09/2026"
    },
    {
      "id": "c_066",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "Les indicateurs de santé",
      "title": "Les indicateurs de santé",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_067",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "Les enquêtes épidémiologiques",
      "title": "Les enquêtes épidémiologiques",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_068",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "les sources d'erreurs et de biais en épidémiologie",
      "title": "les sources d'erreurs et de biais en épidémiologie",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_069",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "principes de la surveillance épidémioloique",
      "title": "principes de la surveillance épidémioloique",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_070",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "épidémiologie et prophylaxie des ISTs",
      "title": "épidémiologie et prophylaxie des ISTs",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_071",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Benmaamar",
      "rawTitle": "épidémiologie et prophylaxies des hépatites virales",
      "title": "épidémiologie et prophylaxies des hépatites virales",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_072",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "L’assurance Maladie au Maroc",
      "title": "L’assurance Maladie au Maroc",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_073",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Introduction aux systèmes de santé",
      "title": "Introduction aux systèmes de santé",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_074",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Le système de santé au maroc",
      "title": "Le système de santé au maroc",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_075",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Mesure de l’état de santé:La transition epidémiologique",
      "title": "Mesure de l’état de santé:La transition epidémiologique",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_076",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Epidémiologie et prophylaxie des cancers",
      "title": "Epidémiologie et prophylaxie des cancers",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_077",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Introduction à l'economie de santé",
      "title": "Introduction à l'economie de santé",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_078",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Epidémiologie et prévention des maladies transmissibles",
      "title": "Epidémiologie et prévention des maladies transmissibles",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_079",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Programmes de lutte contre les maladies transmissibles: Leishmaniose",
      "title": "Programmes de lutte contre les maladies transmissibles: Leishmaniose",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_080",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Prophylaxie de la tuberculose au maroc",
      "title": "Prophylaxie de la tuberculose au maroc",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_081",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "Investigation d'un episode epidermique",
      "title": "Investigation d'un episode epidermique",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_082",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Tachfouti",
      "rawTitle": "La prévention et le depistage",
      "title": "La prévention et le depistage",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_083",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. El Harch",
      "rawTitle": "Epidémiologie et surveillance de la grippe",
      "title": "Epidémiologie et surveillance de la grippe",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_084",
      "module": "MÉDECINE SOCIALE ET SANTÉ PUBLIQUE - ECONOMIE DE SANTÉ",
      "submodule": "",
      "prof": "Pr. Oumokhtar",
      "rawTitle": "Santé et environnement",
      "title": "Santé et environnement",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_085",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Bouazzaoui",
      "rawTitle": "Infections associées aux soins",
      "title": "Infections associées aux soins",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_086",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Bouazzaoui",
      "rawTitle": "Introduction à l’anesthésie",
      "title": "Introduction à l’anesthésie",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_087",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Kechna",
      "rawTitle": "Pancréatite aiguë grave",
      "title": "Pancréatite aiguë grave",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_088",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Houari",
      "rawTitle": "Les états de choc: généralités",
      "title": "Les états de choc: généralités",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_089",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Houari",
      "rawTitle": "L’état de choc anaphylactique",
      "title": "L’état de choc anaphylactique",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_090",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Houari",
      "rawTitle": "L'état de choc septique",
      "title": "L'état de choc septique",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_091",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Houari",
      "rawTitle": "L'état de choc hémorragique",
      "title": "L'état de choc hémorragique",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_092",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Houari",
      "rawTitle": "L’état de choc cardiogénique",
      "title": "L’état de choc cardiogénique",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_093",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Boukatta",
      "rawTitle": "Arrêt cardiaque chez l’adulte",
      "title": "Arrêt cardiaque chez l’adulte",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_094",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Boukatta",
      "rawTitle": "Insuffisance respiratoire aiguë chez l’adulte",
      "title": "Insuffisance respiratoire aiguë chez l’adulte",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_095",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Boukatta",
      "rawTitle": "Ventilation artificielle",
      "title": "Ventilation artificielle",
      "badges": [],
      "facultyStatus": "Effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": "17/09/2026"
    },
    {
      "id": "c_096",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Les déséquilibres acido-basiques",
      "title": "Les déséquilibres acido-basiques",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_097",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Les déséquilibres glycémiques",
      "title": "Les déséquilibres glycémiques",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_098",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Les dyskaliémies",
      "title": "Les dyskaliémies",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_099",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Les dyscalcémies",
      "title": "Les dyscalcémies",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_100",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Hémorragique en obstétrique",
      "title": "Hémorragique en obstétrique",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_101",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Les pathologies hypertensives au cours de la grossesse",
      "title": "Les pathologies hypertensives au cours de la grossesse",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_102",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Les dysnatrémies",
      "title": "Les dysnatrémies",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_103",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "Obstruction grave des voies aériennes chez l’enfant",
      "title": "Obstruction grave des voies aériennes chez l’enfant",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_104",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "CAT devant un coma non traumatique",
      "title": "CAT devant un coma non traumatique",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_105",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Harandou",
      "rawTitle": "La douleur",
      "title": "La douleur",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_106",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Berdai",
      "rawTitle": "L’intubation orotrachéale",
      "title": "L’intubation orotrachéale",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_107",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Berdai",
      "rawTitle": "Les abords vasculaires en urgence et en réanimation",
      "title": "Les abords vasculaires en urgence et en réanimation",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_108",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Berdai",
      "rawTitle": "Les envenimations scorpioniques",
      "title": "Les envenimations scorpioniques",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_109",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Berdai",
      "rawTitle": "Les envenimations ophidiennes",
      "title": "Les envenimations ophidiennes",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_110",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Intoxication aiguë",
      "title": "Intoxication aiguë",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_111",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Intoxication au monoxyde de carbone",
      "title": "Intoxication au monoxyde de carbone",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_112",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Intoxication aiguë aux pesticides organophosphorés",
      "title": "Intoxication aiguë aux pesticides organophosphorés",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_113",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Intoxication au paracétamol",
      "title": "Intoxication au paracétamol",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_114",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Intoxication par le Paraphénylène-Diamine Takaout",
      "title": "Intoxication par le Paraphénylène-Diamine Takaout",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_115",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Accidents d'électrisation",
      "title": "Accidents d'électrisation",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_116",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Derkaoui",
      "rawTitle": "Noyades",
      "title": "Noyades",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_117",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Shimi",
      "rawTitle": "PEC du traumatisme crânien grave à la phase initiale",
      "title": "PEC du traumatisme crânien grave à la phase initiale",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_118",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Shimi",
      "rawTitle": "Prise en charge du patient polytraumatisé",
      "title": "Prise en charge du patient polytraumatisé",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    },
    {
      "id": "c_119",
      "module": "URGENCES - RÉANIMATION",
      "submodule": "",
      "prof": "Pr. Shimi",
      "rawTitle": "Prise en charge du brûlé grave à la phase aiguë",
      "title": "Prise en charge du brûlé grave à la phase aiguë",
      "badges": [],
      "facultyStatus": "Non effectué",
      "sheetC1": false,
      "sheetC2": false,
      "facultyStatusDate": null
    }
  ]
};


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


/**
 * Sync Manager for Recensement S9
 * Connects to Google Sheets with zero CORS errors using Google Visualization JSONP,
 * with fallbacks for direct CSV and proxy, and schedules daily 20:00 synchronization.
 */


const Sync = {
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



/**
 * Main Application Controller for Recensement S9 Dashboard
 * 100% Clean Light Medical Theme, Hierarchical Syllabus View by default.
 */


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
  },
  // Tracks new course IDs displayed during the current session of viewing "À rattraper"
  pendingSeenCatchupIds: new Set()
};

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
  btnResetFacultyOverrides: document.getElementById('btnResetFacultyOverrides'),
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
  const list = state.courses.filter(course => {
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

  // When filtering "À rattraper": sort chronologically by date added (newest first)
  if (state.filters.tab === 'catchup') {
    return list.sort((a, b) => {
      // Unseen new courses first
      const aUnseen = isNewUnseenCourse(a) ? 1 : 0;
      const bUnseen = isNewUnseenCourse(b) ? 1 : 0;
      if (bUnseen !== aUnseen) return bUnseen - aUnseen;

      // Parse date DD/MM/YYYY
      const parseD = (dStr) => {
        if (!dStr) return 0;
        const parts = dStr.split('/');
        return parts.length === 3 ? new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime() : 0;
      };
      const timeA = parseD(a.facultyStatusDate);
      const timeB = parseD(b.facultyStatusDate);
      if (timeB !== timeA) return timeB - timeA;

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
          if (state.filters.tab === 'catchup' && isNewUnseenCourse(course)) {
            state.pendingSeenCatchupIds.add(course.id);
          }
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
            ${isNewUnseenCourse(course) ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5 align-middle" title="Nouvelle leçon dispensée"></span>' : ''}${course.title}
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
    const facStatusClass = getFacultyStatusClass(course.facultyStatus);
    const isUnseen = isNewUnseenCourse(course);

    if (state.filters.tab === 'catchup' && isUnseen) {
      state.pendingSeenCatchupIds.add(course.id);
    }

    const tr = document.createElement('tr');
    tr.className = `hover:bg-slate-50/80 transition-colors ${isDone ? 'bg-indigo-50/30' : 'bg-white'}`;

    tr.innerHTML = `
      <td class="py-3 px-4 text-center">
        <button class="check-toggle-btn toggle-done-btn mx-auto ${isDone ? 'is-checked' : ''}" data-id="${course.id}">
          ${isDone ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : ''}
        </button>
      </td>
      <td class="py-3 px-4">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-bold text-slate-900 ${isDone ? 'line-through text-slate-500' : ''}">
            ${isUnseen ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5 align-middle" title="Nouvelle leçon dispensée"></span>' : ''}${course.title}
          </span>
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
    const isUnseen = isNewUnseenCourse(course);

    if (state.filters.tab === 'catchup' && isUnseen) {
      state.pendingSeenCatchupIds.add(course.id);
    }

    const card = document.createElement('div');
    card.className = `light-card rounded-2xl p-4 flex flex-col justify-between border transition ${
      isDone 
        ? 'bg-indigo-50/30 border-indigo-200' 
        : isCatchup 
          ? 'border-amber-300 bg-white shadow-sm' 
          : 'border-slate-200 bg-white'
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
          ${isUnseen ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5 align-middle" title="Nouvelle leçon dispensée"></span>' : ''}${course.title}
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

function selectModuleFilter(modKey) {
  state.filters.module = modKey;
  elements.filterModule.value = modKey;
  renderDashboard();
}

function resetAllFilters() {
  if (state.filters.tab === 'catchup') {
    commitPendingCatchupSeen();
  }
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

})();
