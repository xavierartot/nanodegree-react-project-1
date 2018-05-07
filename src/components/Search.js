import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
	  }));
	};
	render() {
	  // TODO: destruture objects
	  const { query } = this.state,
	    { books, onChangeBook } = this.props;

	  // TODO: filter the search
	  const updateBook = query !== '' ? books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())) : [];

	  // console.log(updateBook);
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
	              placeholder="Search by title or author"
	              onChange={event => this.updateQuery(event.target.value)}
	            />
	          </div>
	        </div>
	        <div className="search-books-results">
	          <ol className="books-grid">
	            {
	              // TODO: map books filtered
	              updateBook.map(book => (
	                <li key={book.id}>
	                  <div className="book">
	                    <div className="book-top">
	                      <div
	                        className="book-cover"
	                        style={{
	                          width: 128,
	                          height: 192,
	                          backgroundImage: `url( ${book.imageLinks.thumbnail} )`,
	                        }}
	                      />
	                      <div className="book-shelf-changer">
	                        <select
	                          onChange={e => onChangeBook(e)}
	                          id={book.id}
	                          value={book.shelf}
	                        >
	                          <option value="none" disabled>Move to...</option>
	                          <option value="currentlyReading">Currently Reading</option>
	                          <option value="wantToRead">Want to Read</option>
	                          <option value="read">Read</option>
	                        </select>
	                      </div>
	                    </div>
	                    <div className="book-title">{book.title}</div>
	                    <div className="book-authors">{book.authors[0]}</div>
	                  </div>
	                </li>
	              ))
	            }
	          </ol>
	        </div>
	      </div>
	    </div>
	  );
	}
}

