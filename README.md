# blog-frontend
Projektteilnehmer: Muhammed Ermistekin (565958), Usama Ahmad (578786)

Thema: Wir erstellen ein Online-Blog in dem Nutzer ihre Blogbeiträge posten und löschen können.

Funktion: 
-um das frontend zu starten müssen sie "npm run start" eingeben.
-die Seite "https://webtech-blog-frontend.herokuapp.com/" ruft die deploy Seite auf.
Beim Aufrufen der option "Blog" könnte es ein wenig dauern das die Seite komplett geladen wird und alles erscheint.

-beim Navigationsbalken kann man die option "Home" oder "Blog" auswählen.
-wenn  man die Option "Home" augewählt hat wird man bei der Startseite weiter geleitet.
-wenn  man die Option "Blog" augewählt hat wird man bei der Blog Seite weiter geleitet oder man drückt bei der Startseite auf "andere Blogs entdecken und neuen erstellen".
-Bei der Blog Seite kann man sein Blog erstellen und Blog löschen.

Option: Blog
-unter "Create new Blog" erscheint ein Formular wo man sein Username, Titel, Kategorie, und den Text ein gibt, nachdem ausfüllen des Formulars kann man unter "Create" sein blog erstellen,
unter "Reset" löscht man die eingaben in den Formular, wenn man ohne etwas eingibt und auf "create" drückt erscheint die fehlermeldung Bitte geben Sie was ein.
-Beim formular wenn man unter Kategorie Music, Travel, Sport und Technology eingibt erscheinen passende Bilder alle andere Kategorien bekommen ein blaues Standart Bild.
- unter "Delete" kann man sein Blog löschen ,aber nachdem Sie auf "Delete" gedrückt haben müssen Sie die Seite aktualiesieren damit der Blog auch endgültig gelöscht wird.

Frontend-Test:
-blog.Spec.js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
