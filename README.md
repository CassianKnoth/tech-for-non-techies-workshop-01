# tech for non-techies workshop 01

<img src="https://us1.discourse-cdn.com/spiceworks/optimized/4X/6/d/d/6dd8eb23c86dff348865e583498635f8f043003f_2_690x476.jpeg" >

## Themen (input)

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

## 📝 Orga

- Zielgruppe
  - Azubis (Dev optional) --> Erster Durchlauf. Wenn das gut funktioniert, dann gerne mit weiteren Personen, z. B. Ausbilder:innen (die Interesse haben)
- Termin
- Ort (Konfi)
- Catering?
- Equipment (Unsere eigenen Rechner? Sollen die Teilnehmenden einen Git-Account anlegen?)
  - Prep call?
    - Github Account + Git + VSCode (+ prettier default formatter + format on save + live server + git extension)

## 💡 Ideen

- Passende Tech-Memes am Anfang: “Keine Sorge, die werdet ihr am Ende alle verstehen”

Generell: Alles in diesem Repo auf Github mit simpler HTML-Seite, per Netlify deployed + Sanity.io CMS

## 🎯 Konzept/Story

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

### Einleitung + Agenda

- Vorstellung Kunde KoalaCom
  - Status der Website
  - Aufgaben/Ziele, "eure Rolle"
- Agenda
  - "So werdet ihr die Ziele heute erfüllen"

### HTML

- 📚 Theorie
  - Vergleich mit MS Word
    - Eine Software, die bestimmte Dateiformate versteht, mit denen man dann arbeiten kann
    - Word versteht z. B. .docx, zeigt die Dateien an und bietet passende Funktionalität
    - Im Web ist das Programm der Browser und die Dateien HTML, CSS und JS (das ist, was der Browser versteht)
    - Eine Funktion ist z. B. Headlines zu markieren, Fließtext, Listen, etc. --> Wie geht sowas in HTML?
  - Einstieg mit HTML
    - Wie sieht das als Datei aus?
      - Elemente/Tags mit Attributen und Content, verschachtelbar
    - Wie ist das Resultat?
      - unstyled Seite im Browser

- ✋ Hands on!
  - Wir geben ein paar HTML-Snippets vor, die der gezeigten Seite zugeordnet werden sollen + Review + Erklärung

- 📚 Theorie
  - Wir zeigen die gestylte Seite --> Wie kommt man zu diesem Ergebnis? --> CSS
  - Elemente dorekt ansprechen oder Attribute in Form von Klassen und IDs
  - Wenn HTML die Architektur des Hauses ist, dann ist CSS der Anstrich

- ✋ Hands on!
  - Spielt mit den Klassen bzw. Properties rum

- ✋ Hands on!
  - Kunde möchte folgendes auf der Seite umgesetzt haben: Hero Image, Headline, Teaser-Text

### JavaScript

- 📚 Theorie
  - Wenn HTML die Architektur des Hauses ist und CSS der Anstrich, dann bringt JS Leben in die Bude

- ✋ Hands on!
  - simples Thema: z. B. ein Button, der per Click das `src` Attribut des Hero `<img />` ändert (`Math.random` für zufälligen index eines string arrays mit den URLs)
  - Der ganze Code existiert bereits, er wird nur eingebunden/einkommentiert und erklärt

### Deployment

- 📚 Theorie
  - Der Browser versteht nur HTML, CSS und JS
  - Aktuell laden wir das lokal
  - Deployment heißt im Grunde, diese Dateien offen erreichbar für andere bereitzustellen
    - Hosting und Deployment kann man sich vorstellen wie eine Party
      - Location
        - On-premise: Mir gehört der Raum, in dem die Party stattfindet
        - Gemietet: Ich miete eine Event-Location
      - Ausstattung
        - Ich brauche Möbel, Lichter, Musik, Essen, Getränke, etc.
        - --> Meine Dateien und Ressourcen
      - Die Gäste sind meine Besucher, der URL die Adresse
      - Deployment ist der Aufbau
        - Möbel müssen geliefert und aufgebaut werden, etc.
      - Updates
        - Vielleicht ändert sich das Wetter, jetzt brauchen wir Pavillons im Außenbereich oder müssen den schließen --> Updates und Features, Bugfixes etc.
    - Client-Server Modell
    - Wir haben das aktuell ganz einfach gemacht --> Unsere Dateien liegen bei Github und lassen sich über Netlify hosten
  - URL/Domain erklären
  - ... Überleitung zu Git(hub) ...

### Git(hub)

- 📚 Theorie
  - Git ist ein Programm zur sog. Versionskontrolle
    - Es tracked Änderungen im sog. Repository
    - Diese Änderungen können commited werden
      - Daraus ergibt sich im Projekt eine Commit-History, welche die schrittweise Veränderung des Projekts festhält
      - Commits lassen sich vergleichen, um Änderungen nachzuvolliehen

- ✋ Hands on!
  - Schaut doch mal bei auch in VSCode bei den Changes
  - Was haltet ihr vom Diff?

- 📚 Theorie
  - Lokal vs Remote
    - Eure Änderungen liege bei euch auf dem Rechner und nicht auf Github
    - Github als zentraler Speicherort
      - Gitlab ist einfach anderer Anbieter
      - Bietet viele nützliche Tools, z. B. Workflows/Actions oder Pull Requests

- ✋ Hands on!
  - Changes, Staging, Commit, Push
    - Ein Team commited die Changes und pushed sie zum Remote
      - Großartig! Die Changes sind auf Github und sogar direkt live!
    - Das andere Team versucht ebenfalls zu pushen
      - Oh oh! Wieso geht das nicht?
      - Vielleicht pullen?
      - Geht auch nicht, was nun?
    - Wieder auf einen gemeinsamen Nenner kommen
      - Rebase
        - Weil ihr an derselben Stellen gearbeitet habt, kann Git das nicht automatischen resolven
          - Hättet ihr an unterschiedlichen Stellen gearbeitet, wäre das kein Problem, dann hätte Git gesagt: "Okay ich habe hier oben Änderung A und hier unten Änderung B, die kann ich zusammenfassen"
          - Aber jetzt gibt es zwei unterschiedliche Vorschläge für dieselbe Stelle, da sagt Git: "Das kann ich nicht für dich entscheiden, da muss du jetzt auswählen, was tatsächlich die Wahrheit sein soll"
      - Weil es nur ein Übungsszenario ist, können wir an dieser Stelle auch entscheiden, dass die Änderungen vom anderen Team schon da sind und auch gut sind. Wir verwerfen einfach unsere Änderungen und pullen dann
      - Pull
        - Tada! Jetzt haben wir die Änderungen der anderen bzw. vom Remote auch bei uns! Alles sind auf demselben Stand!
    - Jetzt ändert Team B nochmal etwas und pushed es
      - Der Kunde möchte doch ein anderes Teaserbild, hier ist die URL (was die Teilnehmenden nicht wissen, die URL ist kaputt)
        - Wisst ihr noch, wo ihr das HTML anpassen müsst?
        - Wisst ihr noch die Schritte bis zum Push? (add, commit, push)
      - Hey cool, ihr habt gepushed!
      - Ihr anderen könnt jetzt gerne mal pullen!
      - Wir schauen auf die Live-Seite und... ups! Das Bild ist ja kaputt!!!
      - Es ist keine gute Idee einfach direkt auf Main/Live zu pushen...

- 📚 Theorie
  - Branches
    - Ihr habt 1. auf demselben Branch gearbeitet und 2. auf dem Main
      - Der Main sollte immer eine stabile Version des Projekts darstellen (fehlerfrei und kein work-in-progress)
    - Man kann von jedem Commit aus neu abzweigen und z. B. so lange isoliert an einem Feature arbeiten, bis es bereit ist. Dann kann es in den Main gemerged werden.
      - voll gut, weil:
        - parallel verschiedene Themen bearbeiten
        - work-in-progress
          - Was ist, wenn ihr an einem Feature arbeitet und es vor Feierabend nicht fertig stellt?
            - Kein Problem, ihr könnt es einfach nicht mergen und morgen weiter machen... Aber was ist, wenn ihr morgen z. B. krank werdet? Aber der Sprint läuft und das Feature soll in diesem Sprint fertig werden.
              - Das ist okay, ihr habt Kolleg:innen, die das Feature fertigstellen können. Sie brauchen nur Zugriff auf euren Stand. Aber wenn ihr auf Main pushed, dann wäre ja work-in-progress live... Also erstellt immer einen Branch und pushed diesen Branch, sodass jeder immer an allem arbeiten kann.
        - nicht ggf. Fehler auf live zu mergen
  - Pull Requests
    - Wie wird jetzt ein fertiger Branch in den Main gemerged und sichergestellt, dass keine Fehler vorliegen?
    - Auf Grundlage eines Branches kann man einen sog. Pull-Request erstellen
      - Hier sieht man u. a. die Commit-History des Branches und die Änderungen im Vergleich zum aktuellen Main
        - Der PR zeigt immer an, ob er problemlos gemerged werden kann oder ob er outdated ist. Und selbst dann gibt er dir die einfache Option zu rebasen (wenn automatisch möglich) oder weist dich daraufhin, dass es einen Konflikt gibt, den du dann lösen musst
      - Man kann außerdem automatisierte Tests darauf laufen lassen, anhand denen mindestens die rgöbsten Fehlerquellen ausgeschlossen sein sollten
      - Essentiell ist vor allem die Review.
        - Ein anderes Teammitglied "pulled" den PR-Branch und überprüft die Arbeit
          - Funktioniert alles lokal?
          - Sind die Änderungen sinnvoll und bugfrei? Lässt sich ggf. etwas optimieren?
        - Am Ende braucht es das Approval des reviewnden Teammitglieds, damit der Merge gestattet wird

### CMS und JavaScript

- Blog
  - es gibt eine post.html Seite, die einen URL-Parameter für den Blog-Artikel Index besitzt

Ablauf

- Beginn 10:00
- Einleitung + Agenda (15min)
- HTML (+CSS)
  - (10min) ✋ "Was fällt euch zu HTML ein?" Brainstorm --> oder anderer Brainteaser
  - (10min) 📚 Theorie 1 (soft and simple)
  - (30min) ✋ Name-that-Element-Figjam
  - (15min) 📚 Theorie 2 (Tags)
  - (20min) ✋ Tatsächliche Tags zuordnen
  - (20min) ✋ Teile der Website bauen

- Mittag 12:00–13:00

## 📄 Notes

- HTML
  - simple Koala Seite
  - Theorie 1 (soft and small)
  - Hands-on
    - Name that Element (in Figjam)
      - Wir zeigen Bild der Seite, die Teilnehmenden sollen mit farblichen Post-its verschiedene (teils wiederkehrende) Elemente markieren
      - Sie können die Elemente selbst sinnvoll benennen
      - Wir geben die tatsächlichen Tag-Names zur Überarbeitung
    - Theorie 2 (tatsächliche Tags, semantisches HTML etc.)
    - Teile der Seite gemäß Design und Content bauen
      - CSS-Klassen stehen bereitet
