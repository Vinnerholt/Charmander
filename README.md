﻿# DAT256 Software engineering project (Grupp Charmander)
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
cd webbsite
npm install
npm start
```
Efter detta bör webbsidan öppnas upp i din webbläsare, annars kan du navigera till localhost:3000.

# git
### Komma igång
1. Klona repositorien till din dator
```
git clone https://github.com/Vinnerholt/Charmander.git
```
2. Klart!

## git

### Vanliga git-kommandon :computer:
```
git status
git add
git commit
```

#### Hjälp
Använd kommandot "--help" eller "-h" för att få en utförlig förklaring av ett git-kommando och hur det används.

Detta kommer att öppna dokumentationen för det aktuella kommandot.
```
git *kommando* --help
```

Detta kommer att skriva ut dokumentationen direkt i terminalen, så att du kan fortsätta hacka asap!
```
git *kommando* -h
```

**Exempel**

```
$ git help -h
usage: git help [--all] [--guides] [--man | --web | --info] [<command>]

    -a, --all             print all available commands
    -g, --guides          print list of useful guides
    -m, --man             show man page
    -w, --web             show manual in web browser
    -i, --info            show info page   
    
    
```
***
### Tips & tricks

#### git commit
Om du vill stagea och commita alla dina ändringar med ett kommando, look no further! Följande kommando gör exakt detta.
```
git commit -am "ditt meddelande"
```
#### Pull request
- Ha allt committat i din lokala branch och stå i den. (kallar den branch1 som exempel)
```
 > git fetch origin
 > git rebase origin/master
```
- Hantera om konflikter uppstår och comitta
```
 > git push
```
- Gå in på github (i webbläsaren) och gå in på branch1 -> tryck på den gröna knappen " Create pull request "
- Om det går så välj Rebase, men annars Merge. Om det har blivit konflikter verkar inte rebase fungera.
#### Desperata åtgärder

##### Quitting Vim
Om du råkade commita utan meddelande kommer git att kasta in dig i den fruktade text-editorn Vim ([relevant meme](https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/)). För att ta dig ur Vim, tryck på "esc"-knappen tills du är säker på att du inte befinner dig i "insert mode". Skriv sedan in  `:wq` och tryck "enter".


##### Återställa lokal repo
Om du gjort lokala ändringar men vill uppdatera till senaste branchen kan det hända att du blir nekad av git med ett felmeddelande. 
```
error: Your local changes to the following files would be overwritten by merge:
someFolder/someSubFolder/changedFile.extension
Please, commit your changes or stash them before you can merge.
```
För att komma runt detta kan du tvinga git att skriva över din lokala kodbas och uppdatera branchen.
```
git fetch origin | git reset --hard origin/master
```
***
### Användabara länkar för att komma igång med git 🐱‍💻

* [git på 20 minuter (video)](https://www.youtube.com/watch?v=0fKg7e37bQE)
* [git - the simple guide](http://rogerdudler.github.io/git-guide/)
* [Dokumentation](https://git-scm.com/docs)
* [Att tänka på kring Commits](https://www.freshconsulting.com/atomic-commits/)
* [Visuell Övning](https://learngitbranching.js.org/)
* [Cheat sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)

>Pusha gitten
