# DAT256 Software engineering project (Grupp Charmander)
Under kursen DAT256 Software engineering project VT19 har vi i grupp Charmander utvecklat en app som inspiration till Blomsterlandet.

## Innehåll
* [Projektet](#projektet)
  * [Appen](#appen)
  * [Webbsidan](#webbsidan)
* [git](#git)
    * [Komma igång](#komma-igång)
  * [Hjälp](#hjälp)
  * [Tips & tricks](#tips--tricks)
  * [Länkar](#användabara-länkar-för-att-komma-igång-med-git-)

# Projektet
 Under projektet har vi utvecklat en Android-app i react-native för att ge inspiration till Blomsterlandet med inriktning mot yngre användare. Vi har också haft ett fokus på transport och hållbarhet.
 För att leverera värde ur ett transport- och hållbarhetsperspektiv har vi utvecklat funktionalitet för att möjliggöra utskick av varor i konsoliderade transporter.
 Exempelvis skulle en användare kunna placera en order i appen - och Blomsterlandet se detta på webbplatsen. På webbplatsen är ordrarna sorterade efter postnummer, och därför kommer ordrar ifrån samma postnummer hamna tillsammans. En möjlig utveckling skulle vara att skicka ut notiser till användare i ett område om någon av deras grannar lagt en beställning - så att de vet att det kommer skickas ut en beställning kl xx-xx en viss dag och då kan välja att beställa något samtidigt.
 
 ### Scrum
 Under projektet har vi arbetat agilt med Scrum. Det har varit väldigt spännande och vi har lärt oss mycket. Vi fattade tidigt tycke för parprogrammering och har sedan kursens början fortsatt med det. För varje Sprint har vi skrivit en team-reflection efter att vi genomfört Sprint Review och Sprint Retrospective. Vi har blivit bättre på att skriva User Stories, Tasks, Acceptance Criterias, Acceptance Tests, och mycket mer.
 ### Huvudsakliga teknologier som använts under utvecklingen:
 * react-native
 * git
 * npm
 * React
 * javascript
 * firebase
   * firestore
   * cloud notifications
 * Redux
 * React-redux
## Appen
För att starta appen använder du dig av npm och react-native cli:
```
cd blomsterLandet
npm install
```
Starta efter detta din Android Virtual Device eller koppla in din Android-mobil med debug-läge på i datorn.
```
react-native run-android
```
Får en error i stil med 
```
Failed to capture fingerprint of output files for task  ...
```
kan en prova 
```
cd android

./gradlew clean
```

## Webbsidan
För att starta webbsidan använder du dig av npm:
```
cd website
npm install
npm start
```
Efter detta bör webbsidan öppnas upp i din webbläsare, annars kan du navigera till localhost:3000.
