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
import Loading from './Loading'
// UTILITIES
import { randomId } from '../../src/Utilities.js'

export default class BooksApp extends React.Component {
  state = {
    books: [],
    error: null,
    isLoading: false,
  }
  handleBooks = (books) => {
    this.setState({
      books,
    })
    // console.log(books, this.state.books)
  }

  getAllBooksAPI = () => {
    BooksAPI.getAll()// fetchind the data from remote server
      .then((books) => { // with the answer we're calling setState
        this.handleBooks(books)// update state then recall the render method
        this.setState(() => ({
          isLoading: false,
        }))
      })
      .catch(error =>
        this.setState(() => ({ error })))
  }

  componentDidMount() { // TODO: fetch data after the component mouted
    this.setState(() => ({
      isLoading: true,
    }))
    this.getAllBooksAPI()
  }

  handleChangeBook = (e) => { // TODO: update a <select> element and the states
    const value = e.target.value,
      id = e.target.id
    BooksAPI.update({ id }, value)// TODO: update BooksAPI
      .then(() => {
        this.getAllBooksAPI() // reload books state
      })
      .catch((error) => {
        this.setState(() => ({ error }))
        console.log(error)
      })
  }// end handleChangeBook(target)

  render() {
    const { books, error, isLoading } = this.state,
      shelves = [ // TODO: property for <Book>
        { id: randomId(), shelf: 'wantToRead', title: 'Want to Read' },
        { id: randomId(), shelf: 'currentlyReading', title: 'Currently Reading' },
        { id: randomId(), shelf: 'read', title: 'Read' },
      ]
    // console.log('state', error)
    return (
      <div className="app">
        <Route
          path="/"
          component={Header}
        />
        {
          isLoading ? <Loading /> :
            error
              ? <div className="interactions">
                <p>Something went wrong.</p>
                </div>
              :
              (<div>
                <Route
                  exact
                  path="/search"
                  render={() => (
                    (books && books !== null &&
                <Search
                  onChangeBookSearch={this.handleChangeBook}
                  books={books}
                  error={error}
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
