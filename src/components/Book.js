import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WantToRead extends Component {

  static propTypes = {
    onChangeBook : PropTypes.func.isRequired,
    books        : PropTypes.array.isRequired,
    title        : PropTypes.string.isRequired,
    titleHTML    : PropTypes.string.isRequired,
  }

  onChange = (e) => {
    this.props.onChangeBook(e.target.value);
    console.log(e.target.value);
  }

  render() {
    const	{onChangeBook, books, title, titleHTML} = this.props
    const booksWantToRead = books !== '' &&
      books.filter( element => element.shelf === title)

    //console.log(booksWantToRead)
    //console.log('books', books)
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{titleHTML}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
              booksWantToRead.map( (element) => {
                return (
                  <li key={element.id}>
                    <span>{element.shelf}</span>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${element.imageLinks.thumbnail})`
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select onChange={ (e) => onChangeBook(e) } id={element.id} value={element.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>

                        </div>
                      </div>
                      <div className="book-title">{element.title}</div>
                      <div className="book-authors">{element.authors[0]}</div>
                    </div>
                  </li>
                )//render end
              }) //map end
            } {/* JSX end */}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default WantToRead;
