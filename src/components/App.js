import React from 'react';
import { Route, Link } from 'react-router-dom';

// API
import * as BooksAPI from '../server/BooksAPI';
// CSS
import '../styles/App.css';
// COMPONENT
import Header from './Header';
import Book from './Book';
import Search from './Search';

export default class BooksApp extends React.Component {
  // init state
  state = {
    books: [],
    bookSelected: '', // use with select form
  }

  componentDidMount() { // TODO: fetch data after the component mouted
    BooksAPI.getAll()// fetchind the data from remote server
      .then((books) => { // with the answer we're calling setState
        this.setState(() => ({
          books,
        }));
      });
  }


  handleChangeBook = (e) => { // TODO: update a <select> element the states
    const value = e.target.value,
      id = e.target.id;
    console.log(e.target);


    this.setState(prev => ({// TODO: update state bookSelected
      bookSelected: prev.value,
    }));


    BooksAPI.update({ id }, value)// TODO: update BooksAPI
      .then((obj) => {
        // console.log(obj);
      });

    // TODO: update books in the state
    BooksAPI.getAll()// fetchind the data from remote server
      .then((books) => { // with the answer we're calling setState
        this.setState(() => ({
          books,
        }));
      });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          path="/"
          authenticated="sss"
          component={Header}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              books={books}
              onChangeBook={this.handleChangeBook}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-content">
                <div>
                  <div>
                    <Book
                      onChangeBook={this.handleChangeBook}
                      books={books}
                      title="wantToRead"
                      titleHTML="Want To Read"
                    />
                    <Book
                      onChangeBook={this.handleChangeBook}
                      books={books}
                      title="currentlyReading"
                      titleHTML="Currently Reading"
                    />
                    <Book
                      onChangeBook={this.handleChangeBook}
                      books={books}
                      title="read"
                      titleHTML="Read"
                    />
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )} // render Route END
        />
      </div>
    );
  }
}

