import React from 'react'
import { Route, Link } from 'react-router-dom'
// API
import * as BooksAPI from '../server/BooksAPI'
// CSS
import '../styles/App.css'
// COMPONENT
import Header from './Header'
import Book from './Book'
import Search from './Search'

export default class BooksApp extends React.Component {
  // init state
  state = {
    books: [],
    error: null,
  }

  handleBooks = (books) => {
    this.setState(() => ({
      books,
    }))
  }

  componentDidMount() { // TODO: fetch data after the component mouted
    BooksAPI.getAll()// fetchind the data from remote server
      .then((books) => { // with the answer we're calling setState
        this.handleBooks(books)// update state then recall the render method
      })
      .catch(error =>
        this.setState(() => ({ error })))
  }

  handleChangeBook = (e) => { // TODO: update a <select> element and the states
    const value = e.target.value,
      id = e.target.id
    // console.log(value, id, e)

    BooksAPI.update({ id }, value)// TODO: update BooksAPI
      .then((obj) => {
        // TODO: update books in the state
        const books = this.state.books.map((book) => {
          if (book.id === id) { book.shelf = value }
          return book
        })
        this.handleBooks(books)// TODO: update state then recall the render method
      })
      .catch(error => this.setState(() => ({ error })))
  }// end handleChangeBook(target)

  // random id to use with shelves
  randomId = () => Math.random().toString(6).substr(-8)

  render() {
    const { books, error } = this.state,
      shelves = [ // TODO: property for <Book>
        { id: this.randomId(), shelf: 'wantToRead', title: 'Want to Read' },
        { id: this.randomId(), shelf: 'currentlyReading', title: 'Currently Reading' },
        { id: this.randomId(), shelf: 'read', title: 'Read' },
      ]
    return (
      <div className="app">
        <Route
          path="/"
          component={Header}
        />
        {error
          ? <div className="interactions">
            <p>Something went wrong.</p>
          </div>
          :
          (<div>
            <Route
              exact
              path="/search"
              render={() => (
                (books &&
                <Search
                  onChangeBookSearch={this.handleChangeBook}
                />
                ) || null // the render is called before componentDidMount(), setState reload render()
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <div className="list-books">
                  <div className="list-books-content">
                    <div>
                      <div>
                        {
                          (books &&
                      // map <Book and pass props
                      shelves.map(shelfCollect =>
                        (<Book
                          key={shelfCollect.id}
                          onChangeBook={this.handleChangeBook}
                          books={books.filter(book => book.shelf === shelfCollect.shelf)}
                        >
                          {shelfCollect.title}
                         </Book>))
                          ) || null // the render is called before componentDidMount(), setState reload render()
                        }
                      </div>
                    </div>
                  </div>
                  <div className="open-search">
                    <Link to="/search">
                  Add a book
                    </Link>
                  </div>
                </div>
              )} // render Route END
            />
           </div>)}
      </div>
    )
  }
}
