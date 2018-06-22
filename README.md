# WebDev-JS-Frameworks
Final task - react app

Gedankliche Aufzählung an ToDos:

- React-App
- Datenhaltung auf Server - Datenbank auf GraphCool für Notizen & Links
- Komponente zum Datenmanagement - Redux, Store
- N:M Beziehung (Viele zu Viele) - Veranstaltungen:Notizen/Links
- sinnvolle Navigation zw. einzelnen Komponenten - Routing
- Smartphone- und Desktop-Implementierung (responsive)
- Authentifizierung - Email-Passwort/Auth0
- Schlagworte für Veranstaltungen
- Notizen/Links erstellen, bearbeiten und löschen, mehrere Schlagworte
- Anzeige nach Schlagwort
- Zugriff & Anzeige der Veranstaltungsinfos aus Intranet

React App erstellen:
$ create-react-app final_app
$ cd final_app
$ npm start

Graphcool Framework nutzen:
$ npm install -g graphcool
Bei Graphcool registrieren.
$ graphcool init calories-tracker
$ cd calories-tracker
$ graphcool deploy
Cluster: Enter -> shared-eu-west-1
target name prod: Enter 

Wir erhalten GraphQL Endpoints: 
Simple API:         https://api.graph.cool/simple/v1/cjippx9id2r1f017966wzguk2 
Relay API:          https://api.graph.cool/relay/v1/cjippx9id2r1f017966wzguk2
Subscriptions API:  wss://subscriptions.graph.cool/v1/cjippx9id2r1f017966wzguk2 

Querys erstellen:
types.graphql Datei bearbeiten.
Querys vom Typ Calories erstellen.
Code - @ BUDGER

$ graphcool deploy --force
Playground öffnen.
Querys und Mutations erstellen.
Code - @ BUDGER

Remote-Zugraiff auf GraphQL Endpoint mit Redux in calories.js im Ordner actions:
Code - @BUDGER

Routing mit Redux implementiert.
Zeichnung + Erklärung -> Kathi
Funktionen Add, Update, !!!Delete erläutern.
Code files - @BEIDE

Verknüpfung Routing mit GraphCool
Delete Funktion zum Laufen bringen
Notizen hinzufügen
Neue Daten in GraphCool übernehmen
Authentifizierung
Desktop und Mobile Ansichten 
Schlagworte
