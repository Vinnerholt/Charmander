# DAT256 Software engineering project (Grupp Charmander)
Under kursen DAT256 Software engineering project VT19 har vi i grupp Charmander utvecklat en app som inspiration till Blomsterlandet.

## Innehåll
* [Intro](#intro)
  * [Namnförtydligande](#namnförtydligande)
  * [Vad ligger vart](#vad-ligger-vart)
  * [Demos](#demos)
* [Projektet](#projektet)
  * [Scrum](#scrum)
  * [Huvudsakliga teknologier som använts under utvecklingen](#huvudsakliga-teknologier-som-använts-under-utvecklingen)
  * [Appen](#appen)
  * [Webbsidan](#webbsidan)

# Intro
## Namnförtydligande
(Riktigt namn: github-user)
* Andrea Wester: andreawester
* Aron Sjöberg: AronSeamountain, Aron Sjöberg
* Benjamin Vinnerholt: Vinnerholt
* Caroline Jönsson: ilcarolineJonsson, Caroline Jönsson
* Gustav Häger: hagerg
* Jonathan Köre: JonathanKore, Jonathan Köre
* Liwia Larsson: liwialarsson
* Malin Ramström: malinramstrom

Här är en Screenshot från gitinspector. Då vi arbetat med parprogrammering under hela projektet så anser vi att gitinspector är missvisande.
Programmeringsparen var:
* Andrea Wester, Benjamin Vinnerholt
* Aron Sjöberg, Caroline Jönsson
* Malin Ramström, Gustav Häger
* Jonathan Köre, Liwia Larsson

![An image of the gitinspector for the project](https://github.com/Vinnerholt/Charmander/blob/master/Deliverables/gitinspector%20Charmander.png)

## Vad ligger vart
I Deliverables återfinns:
* final report
* de individuella reflektionerna, som har en mapp per person i gruppen
* team reflections
* en version av Acceptansflödet
* Business model Canvas
* en version av mockup
* en screenshot av gitinspector

[Här är en länk till Trello.](https://trello.com/invite/b/qjjAUtbW/c4ef5e9462e65ab8b3fd0ed6aee292ce/projectupdated)

[Här är en länk till vår Google Drive.](https://drive.google.com/drive/folders/12bnt-R1mBYcD_Dz36Fxzx5llZF2U73Kh?usp=sharing)

## Demos
En demo av att lägga till, och sedan ta bort en växt

![A gif showing how to add and remove a plant](https://github.com/Vinnerholt/Charmander/blob/master/demo/make_delete.gif)

En demo av att lägga en order ifrån en rekommendationsnotis

![A gif showing a user placing an order](https://github.com/Vinnerholt/Charmander/blob/master/demo/order_from_notification.gif)

En demo av att vattna alla plantor samtidigt

![A gif showing a user watering all the plants at the same time](https://github.com/Vinnerholt/Charmander/blob/master/demo/water_all_plants.gif)

Här är en screenshot ifrån webbplatsen som visar ordrar sorterade efter postnummer. Man kan bland annat se ordern som lades i en av gif:sen ovan

![A screenshot of the orders website](https://github.com/Vinnerholt/Charmander/blob/master/demo/website.png)
  
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
 * React Navigation
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
