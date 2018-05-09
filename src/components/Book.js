import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Item, Input } from 'reactstrap';

class WantToRead extends Component {
  static propTypes = {
    onChangeBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    // shelfName: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  }

  // TODO: call a method live in the controleur component
  onChange = (e) => {
    this.props.onChangeBook(e.target.value);
  }

  render() {
    const	{
      onChangeBook, books, children,
    } = this.props;
    console.log(books);

    // TODO: filter the book to match with the shelf
    // const booksWantToRead = books !== '' &&
    // books.filter(book => book.shelf === shelfName);

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{children}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.map(element =>
                  (
                    <li key={element.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: element.imageLinks.thumbnail ? `url(${element.imageLinks.thumbnail})` : 'url(//via.placeholder.com/128x192)',
                            }}
                          />
                          <div className="book-shelf-changer">
                            <select
                              name="select"
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
                        <div className="book-authors">{element.authors[0] ? element.authors[0] : ''}</div>
                      </div>
                    </li>
                  ), // render end
                ) // map end
              } {/* JSX end */}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default WantToRead;
