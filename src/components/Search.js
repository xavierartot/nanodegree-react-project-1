import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import _ from 'lodash'
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
    if (this.input) {
      this.input.focus()
    }
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
	    }).then(() =>
        this.setState(() => ({
          searchTerm: e.trim(),
        })))
	    .catch(error => this.setState(() => ({ error })))
  }

	updateQuery = (e) => {
	  this.fetchSearchBook(e)
	  // console.log('update: ', this.state.searchTerm, e)
	}

	render() {
	  const { booksSearch, error, searchTerm } = this.state,
	    { books } = this.props
	     const bookUpdateShelf = []

	  // find the shelf share in the search and App
	  if (booksSearch !== undefined && booksSearch !== null) {
	    if (booksSearch) {
	      books.forEach(element => booksSearch.map((ele) => {
	        if (element.id === ele.id) {
	          return bookUpdateShelf.push(element)
	        } return false
	      }))
	      // bookUpdateShelf = books.map(element => element.id)
	      // .filter(elementId =>
	      // booksSearch.some(ele => ele.id === elementId))
	    }
	    console.log(bookUpdateShelf)
	  }

	  // if (!Array.isArray(booksSearch)) {
	  // if (booksSearch !== undefined) {
	  // console.log(booksSearch.error)
	  // } else {
	  // console.log(booksSearch)
	  // }
	  // // return null
	  // } else if (Array.isArray(booksSearch).length > 0) {
	  // console.log(booksSearch)
	  // }

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
	              ref={(node) => { this.input = node }}
	              onChange={event => this.updateQuery(event.target.value)}
	            />
	          </div>
	        </div>
	        <div className="search-books-results">
	          <div className="bookshelf-books">
	            {Array.isArray(booksSearch) === true && booksSearch !== undefined
	              ?
	                <Book
	                  onChangeBook={this.props.onChangeBookSearch}
	                  error={error}
	                  books={booksSearch}
	                  booksSameShelf={bookUpdateShelf}
	                />
	              :
	              searchTerm !== '' ?
	              <div className="interactions">
	                <p>wrong search: No books is found related to <span className="font-weight-bold">{searchTerm }</span>  </p>
	              </div>
	                : ''
	            }
	          </div>
	        </div>
	      </div>
	    </div>
	  )
	}
}
