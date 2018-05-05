import React, { Component } from 'react';

class WantToRead extends Component {

  onChange = (e, id) => {
    this.props.onChangeBook(e.target.value, id);
    console.log(e.target);
  }
  render() {
    //console.log( books);
    //BooksAPI.get('IOejDAAAQBAJ').then(data => {
      //console.log(data);
      //[data].map( (element) => {
        //return console.log(element.shelf, element.id)
      //})
    //})
    const booksWantToRead = this.props.books !== '' && 
      this.props.books.filter( element => element.shelf === 'wantToRead')
      
    console.log(booksWantToRead) 

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
                          <select onChange={ this.props.onChangeBook} id={element.id}>
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
                )
                })
                }


              </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default WantToRead;
