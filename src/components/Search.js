import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// API
import * as BooksAPI from '../server/BooksAPI'
import Book from './Book'
import Rating from './Rating'

const DEFAULT_QUERY = ''

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksSearch: null,
      searchTerm: DEFAULT_QUERY,
    }
  }
  static propTypes = {
    books: PropTypes.array,
  }


  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchBook(searchTerm)
	  console.log('cdm', searchTerm)
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
        console.log(booksSearch)
	    })
	    .catch(error => this.setState(() => ({ error })))
  }

	updateQuery = (e) => {
	  this.fetchSearchBook(e)
	  this.setState(() => ({
	    searchTerm: e.trim(),
	  }))
	  console.log('update: ', this.state.searchTerm, e)
	}

	render() {
	  const { booksSearch } = this.state
	  console.log('render', booksSearch)

	  return (
	    <div>
	      <div className="search-books">
	        <div className="search-books-bar">
	          <Link
	            to="/"
	            className="close-search"
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
	            {
	              booksSearch !== null && booksSearch ?
	                <Book
	                  onChangeBook={this.props.onChangeBookSearch}
	                  books={booksSearch}
	                />
	                : ''
	            }
	          </div>
	        </div>
	      </div>
	    </div>
	  )
	}
}
