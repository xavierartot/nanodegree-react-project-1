# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. 
We have a shelf book, it allow the user to add books by priority, such as
I Want To Read, I Read, I'm Currently Reading.
However you can search a book and add it to your library.

## How to Start
This project is based on CRA (create react app)

### Install and Run
* install all project dependencies with `yarn`
* start the development server with `yarn start`

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


