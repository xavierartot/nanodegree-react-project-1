import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Search extends Component {
  // TODO: init search state
  state = {
    query: '',
  }
  static propTypes = {
    onChangeBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }
	updateQuery = (event) => {
	  // console.log(event);
	  this.setState(() => ({
	    query: event.trim(),
	  }))
	};

	render() {
	  // TODO: destruture objects
	  const { query } = this.state,
	    { books, onChangeBook } = this.props

	  // console.log(books);

	  // TODO: filter the search by title book or authors
	  const updateBook = (query.length !== 0) ?
	    books.filter(book =>
	      book.title.toLowerCase().includes(query.toLowerCase())
        || book.authors[0].toLowerCase().includes(query.toLowerCase()))
	    : [] // book search empty

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
	          {query === '' ? query : ''}
	          <ol className="books-grid">
	            {
	              // TODO: map books filtered
	              updateBook.map(element => (
	                <li key={element.id}>
	                  <div className="book">
	                    <div className="book-top">
	                      <div
	                        className="book-cover"
	                        style={{
	                          width: 128,
	                          height: 192,
	                          backgroundImage: element.imageLinks.thumbnail ? `url(${element.imageLinks.thumbnail})` : 'url(//via.placeholder.com/128x192)',
	                        }}
	                      />
	                      <div className="book-shelf-changer">
	                        <select
	                          onChange={e => onChangeBook(e)}
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
	                    <div className="book-authors">
	                      <div className="book-authors">{element.authors[0] ? element.authors[0] : ''}</div>
	                    </div>
	                  </div>
	                </li>
	              ))
	            }
	          </ol>
	        </div>
	      </div>
	    </div>
	  )
	}
}

