# My Reads

Project 1 for [React Nanodegree][1]

[1]: https://www.udacity.com/course/react-nanodegree--nd019

## Installing

Simply clone this repository and run `npm install` to install the required dependencies.

## Launching

After installing, just run `npm start` to launch the application. This will start the application server and open the app in a new browser tab.

## Structure

Working from the [starter template][2], here's how I organized my files:

[2]: https://github.com/udacity/reactnd-project-myreads-starter

```
+-- public/             : ...as in the starter template    
+-- src/
  +-- common/           : Components that are used across multiple routes or pages
  +-- home/             : Components for the Main Page
  +-- icons/            : ...as in the starter template
  +-- search/           : Components for the Search Page
  +-- App.js            : Main application component
  +-- App.css           : ...as in the starter template
  +-- App.test.js       : ...as in the starter template 
  +-- BooksAPI.js       : ...as in the starter template 
  +-- index.js          : Modified to use the <BrowserRouter> component from React Router
  +-- index.css         : ...as in the starter template
+-- .gitignore          : ...as in the starter template
+-- package.json        : npm package manager file, updated with React Router
+-- package-lock.json   : npm package manager file
+-- README.MD           : This README file.
+-- SEARCH_TERMS.md     : Available search terms
```

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 
