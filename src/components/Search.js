import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// API
import * as BooksAPI from '../server/BooksAPI'
import Book from './Book'

const DEFAULT_QUERY = ''

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksSearch: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
    }
  }
  static propTypes = {
    books: PropTypes.array,
  }


  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchBook(searchTerm)
    // console.log('cdm', searchTerm)
    // console.log(booksSearch)
  }

  setSearchBook = (booksSearch) => {
    this.setState(() => ({
      booksSearch, // call render method
    }))
  }
  fetchSearchBook = (e) => {
	  BooksAPI.search(e)// TODO: update BooksAPI
	    .then((booksSearch) => {
        this.setSearchBook(booksSearch)
	    })
	    .catch(error => this.setState(() => ({ error })))
  }

	updateQuery = (e) => {
	  this.fetchSearchBook(e)
	  this.setState(() => ({
	    searchTerm: e.trim(),
	  }))
	  // console.log('update: ', this.state.searchTerm, e)
	}

	render() {
	  const { booksSearch, error } = this.state,
	    { books } = this.props
	  let booksSameShelf = '',
	    bookUpdateShelf = []

	  // find the shelf share in the search and App
	  if (booksSearch !== undefined && booksSearch !== null) {
	    for (let i = 0, len = books.length; i < len; i++) {
	      for (let j = 0, l = booksSearch.length; j < l; j++) {
	        if (books[i].id === booksSearch[j].id) {
	          bookUpdateShelf.push(books[i])
	        }
	      }
	    }
	  }
	  console.log(booksSearch)
	  if (!Array.isArray(booksSearch)) {
	    if (booksSearch !== undefined) {
	    console.log(booksSearch.error)
	    } else {
	    console.log(booksSearch)
	    }
	    // return null
	  } else {
	    console.log(booksSearch)
	  }

	  return (
	    <div>
	      <div className="search-books">
	        <div className="search-books-bar">
	          <Link
	            className="close-search"
	            to={{
	              pathname: '/',
	            }}
	          >
          Close btn back to Home
	          </Link>
	          <div className="search-books-input-wrapper">
	            <input
	              type="text"
	              placeholder="Search by title"
	              onChange={event => this.updateQuery(event.target.value)}
	            />
	          </div>
	        </div>
	        <div className="search-books-results">
	          <div className="bookshelf-books">
	            {Array.isArray(booksSearch) && booksSearch !== undefined
	              ?
	                <Book
	                  onChangeBook={this.props.onChangeBookSearch}
	                  error={error}
	                  books={booksSearch}
	                  booksSameShelf={bookUpdateShelf}
	                />
	              :
	              Array.isArray(booksSearch) === false ?
	                '  ' :
	              <div className="interactions">
	                <p>wrong search</p>
	              </div>
	            }
	          </div>
	        </div>
	      </div>
	    </div>
	  )
	}
}
