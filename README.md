# 🩺 Recensement S9 - Dashboard Médical (Thème Clair & Vue Syllabus)

Application web médicale moderne, fluide et responsive (optimisée pour mobiles et ordinateurs) conçue pour les étudiants en médecine du S9 (Neuvième Semestre) :
- **Gynécologie - Obstétrique** (Coeff 1.0)
- **ORL - Ophtalmologie** (Coeff 2.0)
- **Médecine Sociale & Santé Publique - Économie de la Santé** (Coeff 1.0)
- **Urgences - Réanimation** (Coeff 1.0)

---

## 🚀 Comment lancer l'application

1. **Option 1 (Directe sans serveur - Double-clic)** :
   Double-cliquez simplement sur `Open_Recensement_S9.bat` ou sur `index.html` ! L'application s'ouvre immédiatement dans votre navigateur par défaut (Chrome, Edge, Safari, Firefox).
2. **Option 2 (Serveur local ou mobile sur même Wi-Fi)** :
   Dans le dossier `recensement-s9`, lancez :
   ```bash
   python -m http.server 8080
   ```
   Puis ouvrez `http://localhost:8080` sur votre PC ou `http://<IP-DE-VOTRE-PC>:8080` sur votre smartphone.
3. **Option 3 (Hébergement en ligne gratuit)** :
   Déployez ce dossier sur **GitHub Pages**, **Vercel**, ou **Netlify** pour y avoir accès partout depuis n'importe quel smartphone ou tablette.

---

## 🌟 Nouveautés & Caractéristiques

1. **☀️ Thème Clair Médical (100% Light Theme)** :
   - Fond blanc pur et gris doux (`#f8fafc`), typographie haute lisibilité ardoise (`#0f172a`), bordures nettes et badges pastels apaisants pour les yeux pendant les longues sessions de révision.

2. **📚 Vue Syllabus Organisée par Défaut (Adieu la grille désordonnée !)** :
   - Les cours sont regroupés proprement par **Module** (4 sections claires avec accordéons dépliables).
   - Au sein de chaque module, les cours sont ordonnés par **Discipline / Professeur** (ex: *Pr. Errarhay*, *Pr. Bouchikhi*, *Pr. Fdili*...) dans des lignes de checklist clinique claires et espacées.
   - Bouton d'accès rapide en haut pour sauter directement à un module en 1 clic.

3. **🏷️ Détection Intelligente des Mentions & Notes dans les Titres** :
   - Le titre du cours est nettoyé et mis en valeur.
   - Les annotations de la feuille de calcul sont isolées sous forme de badges professionnels dédiés :
     - `✨ Nouveau cours` (badge bleu)
     - `⚠️ Cours changé` (badge ambre)
     - `📌 Note: [détail]` (badge violet)

4. **🔄 Synchronisation Faculté (Google Sheets)** :
   - Connecté directement à la feuille : [Recensement S9 2026/2027](https://docs.google.com/spreadsheets/d/1MB7Ay2KFM3QEOW-5RMaBr4GQQgBvx76E1NHqB2Mg_74/edit?gid=0#gid=0).
   - **Synchro quotidienne automatique programmée chaque soir à 20:00**.
   - Rattrapage automatique en tâche de fond si l'application est ouverte après 20:00.
   - Bouton de **synchronisation manuelle instantanée** (avec détection des nouveaux cours dispensés).

5. **⚡ File Prioritaire « À Rattraper »** :
   - Accès immédiat en 1 clic aux cours que les professeurs ont déjà dispensés (`Effectué`), mais que vous n'avez pas encore étudiés !

6. **🎯 Tours de Révision (Couches C1 & C2)** :
   - Boutons d'activation rapide pour suivre vos passages (1er tour C1, consolidation C2).

7. **📝 Notes Personnelles & Rappels QCM** :
   - Chaque cours dispose d'un espace de notes privées sauvegardé automatiquement dans votre navigateur.

8. **💾 Sauvegarde & Restauration (JSON)** :
   - Exportez votre progression sous forme de fichier JSON à tout moment.
   - Restaurez-la sur un autre appareil en 1 seconde.
