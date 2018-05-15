import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// API
import * as BooksAPI from '../server/BooksAPI'
// import Book from './Book'
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
	            <ol className="books-grid">
	              {
	                booksSearch !== null && booksSearch ?
	                  booksSearch.map(element =>
	                    (
	                      <li key={element.id}>
	                        <div className="book">
	                          <div className="book-top">
	                            <div
	                              className="book-cover"
	                              style={{
	                                width: 128,
	                                height: 193,
	                                backgroundImage:
                                  element.imageLinks !== null && element.imageLinks !== 0 && element.imageLinks
                                    ? `url(${element.imageLinks.smallThumbnail})`
                                    : 'url(//via.placeholder.com/128x192)',
	                              }}
	                            />
	                            <div className="book-shelf-changer">
	                              <select
	                                name="select"
	                                onChange={e => this.props.onChangeBook(e)}
	                                id={element.id}
	                                value={element.shelf}
	                              >
	                                <option value="none" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                              </select>
	                            </div>
	                          </div>
	                          <div className="book-title">{element.title}</div>
	                          <div className="book-authors">{element.authors && element.authors[0] !== 0 && element.authors[0] !==
                          null ? element.authors[0] : ''}
	                          </div>
	                          <Rating average={element.averageRating} />
	                        </div>
	                      </li>
	                    ), // render end
	                  ) // map end
	                  : ''
	              } {/* JSX end */}
	            </ol>
	          </div>
	        </div>
	      </div>
	    </div>
	  )
	}
}
