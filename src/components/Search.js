import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// API
import * as BooksAPI from '../server/BooksAPI'
// import Book from './Book'
// import Rating from './Rating'

const DEFAULT_QUERY = 'Android'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksSearch: null,
      searchTerm: DEFAULT_QUERY,
    }
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  fetchSearchBook = (e) => {
	  BooksAPI.search(e)// TODO: update BooksAPI
	    .then((booksSearch) => {
        this.setSearchBook(booksSearch)
        console.log(booksSearch)
	    })
	    .catch(error => this.setState(() => ({ error })))
  }

  setSearchBook = (booksSearch) => {
    this.setState(() => ({
      booksSearch, // call render method
    }))
    console.log(booksSearch)
  }
  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchBook(searchTerm)
	  console.log('cdm', searchTerm)
    // console.log(booksSearch)
  }

	updateQuery = (e) => {
	  const { searchTerm } = this.state
	  this.setState(() => ({
	    searchTerm: e,
	  }))
	  this.fetchSearchBook(searchTerm)
	  console.log('update', searchTerm)
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
          Close
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
	            <ol className="books-grid">
	              {

	                booksSearch ?
	                booksSearch.map(e =>
	                  (
	                    <li key={e.id}>
	                      {e.id}
	                    </li>
	                  ), // render end
	                ) // map end
	                  : null
	              } {/* JSX end */}
	            </ol>
	          </div>
	        </div>
	      </div>
	    </div>
	  )
	}
}
