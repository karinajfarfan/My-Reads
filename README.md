# MyReads Project

The starter template provided by Udacity's React Fundamentals course can be found at: https://github.com/udacity/reactnd-project-myreads-starter. The app required the addition of React interactivity by refactoring the static code. 

"Good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed."

## To get started:

* download the files
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Organzes and calls components. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookList.js # Component for the main page.
    ├── BookSearch.js # Component for the search page. 
    ├── BookShelves.js # Component to render books individually from the shelves.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    ├── icons # Helpful images in the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # DOM rendering only.
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
