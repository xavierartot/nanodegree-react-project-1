import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// API
import * as BooksAPI from '../server/BooksAPI'
import Book from './Book'


export default class Search extends Component {
  // TODO: init search state
  state = {
    booksSearch: [],
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  setSearchBook = (booksSearch) => {
    this.setState(() => ({
      booksSearch,
    }))
  }
  searchQueryBook = (e) => {
	  BooksAPI.search(e)// TODO: update BooksAPI
	    .then((result) => {
        this.setSearchBook(result)
        console.log(result)
	    })
	    .catch(error => this.setState(() => ({ error })))
  }
  componentDidMount() {
    const { booksSearch } = this.state
    this.searchQueryBook(booksSearch)
	  console.log('cdm', booksSearch)
  }

	updateQuery = (value) => {
	  const { booksSearch } = this.state
	  this.searchQueryBook(value)
	  console.log('update', booksSearch)
	}


	render() {
	  // TODO: destruture objects
	  const { booksSearch } = this.state,
	    { books, onChangeBookSearch } = this.props
	  console.log('render', booksSearch)
	  // TODO: filter the search by title book or authors
	  // const updateBook = (query.length !== 0) ?
	  // books.filter(book =>
	  // book.title.toLowerCase().includes(query.toLowerCase())
	  // || book.authors[0].toLowerCase().includes(query.toLowerCase()))
	  // : [] // book search empty

	  // console.log(`query:  ${query.trim()}`, typeof query, updateBook, books);
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
	          {booksSearch ?
	          <Book
	            onChangeBook={onChangeBookSearch}
	            books={booksSearch}
	          /> : null}
	        </div>
	      </div>
	    </div>
	  )
	}
}

