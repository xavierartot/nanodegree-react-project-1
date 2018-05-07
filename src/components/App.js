import React from 'react';
import { Route, Link } from 'react-router-dom';

//API
import * as BooksAPI from '../server/BooksAPI';
//CSS
import '../styles/App.css';
//COMPONENT
import Search from './Search';
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    books: [],
    bookSelected : '',
  }
  componentDidMount() {
    BooksAPI.getAll()//fetchind the data from remote server
      .then((books) => { //with the answer we're calling setState
        this.setState(() => ({
          books
        }));
      });
  }

  handleChangeBook = (e) => {
    const value = e.target.value, 
      id = e.target.id;
    console.log(e.target);

    this.setState((prev) => ({
      bookSelected : prev.value
    }))

    BooksAPI.update({id}, value)
      .then( (obj) => { 
        //console.log(obj);
      });

    //update books in the state
    BooksAPI.getAll()//fetchind the data from remote server
      .then((books) => { //with the answer we're calling setState
        this.setState(() => ({
          books
        }));
      });
  }

  render() {
    const {books} = this.state;
    return (
      <div className="app">
        <Route
          exact
          path='/search'
          render={() => (
            <Search 
              books={books}
              onChangeBook={this.handleChangeBook}
            />
          )}
        />
        <Route
          exact path='/'
          render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <div>
                    <Book
                      onChangeBook={this.handleChangeBook}
                      books={books}
                      title='wantToRead'
                      titleHTML='Want To Read'
                    />
                    <Book
                      onChangeBook={this.handleChangeBook}
                      books={books}
                      title='currentlyReading'
                      titleHTML='Currently Reading'
                    />
                    <Book
                      onChangeBook={this.handleChangeBook}
                      books={books}
                      title='read'
                      titleHTML='Read'
                    />
                  </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                Add a book
              </Link>
            </div>
          </div> //render end
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
