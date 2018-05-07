import React, { Component } from 'react';

class WantToRead extends Component {

  onChange = (e) => {
    this.props.onChangeBook(e.target.value);
    console.log(e.target);
  }

  render() {
    const booksWantToRead = this.props.books !== '' && 
      this.props.books.filter( element => element.shelf === 'wantToRead')

    console.log(booksWantToRead) 

    console.log('books', this.props.books)
const	{onChangeBook} = this.props

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
              booksWantToRead.map( (element) => {
                return (
                  <li key={element.id}>
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
                          {
                          element.shelf 
                          }
                          <select onChange={ () => onChangeBook} id={element.id}>
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
