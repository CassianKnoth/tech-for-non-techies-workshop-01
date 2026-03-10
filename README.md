# tech for non-techies workshop 01

<img src="https://us1.discourse-cdn.com/spiceworks/optimized/4X/6/d/d/6dd8eb23c86dff348865e583498635f8f043003f_2_690x476.jpeg" >

Themen

- Pull Request (PR)
- Commit
- Branch
- Merge / Merge-Konflikt
- Repository (Repo)
- Git / GitHub / GitLab
- Deployment / Deploy
- Hotfix

- Frontend vs. Backend
- CMS
- Hosting
- Domain
- Caching

- HTML
- JavaScript

Orga

- Zielgruppe
  - Azubis (Dev optional)
  - Ausbilder:innen (die Interesse haben)
- Termin
- Ort (Konfi)
- Catering?
- Equipment (Unsere eigenen Rechner? Sollen die Teilnehmenden einen Git-Account anlegen?)
  - Prep call?
    - Github Account + Git + VSCode (+ prettier default formatter + format on save)

Ideen

- Passende Tech-Memes am Anfang: “Keine Sorge, die werdet ihr am Ende alle verstehen”

Ablauf

- Generell: Alles in diesem Repo auf Github mit simpler HTML-Seite, per Netlify deployed + Sanity.io CMS

- Konzept/Story
  - Die Teilnehmenden sind neu auf dem Projekt und werden eingearbeitet
  - Kunde ist KoalaCom
  - KoalaCom möchte die Homepage umgesetzt haben
  - Dazu gehören Inhalte, Design und ganz wichtig: Blogartikel
  - Ein Repo existiert bereits
  - Zunächst sollen die Teilnehmenden die zu verwendenden/verfügbaren Technologien verstehen
  - Dann sollen sie sie anwenden
  - Erstmal wird das existierende Design bzw. der existierende Content gehardcoded
  - Die Zusammenarbeit per Git(hub) wird geschult
  - Dann gibt es Optimierungen mit JavaScript und mit der Anbindung eines CMS

- HTML
  - simple Koala Seite
  - Theorie
  - Hands-on
    - Name that Element (in Figjam)
      - Wir zeigen Bild der Seite, die Teilnehmenden sollen mit farblichen Post-its verschiedene (teils wiederkehrende) Elemente markieren
      - Sie können die Elemente selbst sinnvoll benennen
      - Wir geben die tatsächlichen Tag-Names zur Überarbeitung
    - Teile der Seite gemäß Design und Content bauen
      - CSS-Klassen stehen bereitet
- JavaScript
  - simples Thema: z. B. ein Button, der per onclick die Farbe eines anderen Elements ändert. Oder etwas mit Mathe, um simpel Variablen und soetwas anzureißen?
  - Der ganze Code existiert bereits, er wird nur eingebunden/einkommentiert und erklärt

- Blog
  - es gibt eine post.html Seite, die einen URL-Parameter für den Blog-Artikel Index besitzt

- Git
  - Theorie
  - Lokal
    - Changes, Staging, Commit
  - Remote
    - Github als zentraler Speicherort
      - Repository
      - Gitlab ist einfach anderer Anbieter
    - Push und Pull —> Konflikt (jemand pushed etwas direkt auf main)
    - Branches
      - voll gut, weil: nicht ggf. Fehler auf live zu mergen, parallele Themen bearbeiten, Pull Requests erstellen
    - Pull Requests
      ...
