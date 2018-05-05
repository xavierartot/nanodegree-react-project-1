import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Search extends Component {
  static propTypes = {
    onClickBackSearch: PropTypes.func.isRequired,
  }
  state = {
    query: '',
  }
	updateQuery = (event) => {
		console.log(event);
    this.setState(() => ({
      query : event.trim()
    }))
	};
  render() {
    const { query} = this.state;
    const { books} = this.props;
    const empty = []

    const updateBook = query !== '' ? books.filter( (book) => {
      return book.title.toLowerCase().includes(query.toLowerCase())
    }) : empty 

    console.log(updateBook);
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className="close-search"
              onClick={() => this.props.onClickBackSearch()}
            >
              Close
            </Link>
            {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
            <div className="search-books-input-wrapper">

              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}

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
                updateBook.map( book => (
                  <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                      <div className="book-cover"
                        style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url( ${book.imageLinks.thumbnail} )`
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select onSubmit={this.submitBook}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
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
export default Search;
