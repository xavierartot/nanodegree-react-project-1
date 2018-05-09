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
      bookId = e.target.id;
    // console.log(e.target.value);


    BooksAPI.update({ bookId }, value)// TODO: update BooksAPI
      .then((obj) => {
        this.setState(prev => ({// TODO: update state bookSelected
          bookSelected: prev.value,
        }));

        // TODO: update books in the state
        const res = this.state.books.map((book) => {
          if (book.id === bookId) { book.shelf = value; }
          return book;
        });
        this.setState(() => ({
          books: res,
        }));
      });
  }

  render() {
    const { books } = this.state,
      shelves = [ // TODO: property for <Book>
        { id: 0, shelf: 'wantToRead', title: 'Want to Read' },
        { id: 1, shelf: 'currentlyReading', title: 'Currently Reading' },
        { id: 2, shelf: 'read', title: 'Read' },
      ];
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
                    {
                      // map <Book and pass props
                      shelves.map(shelfCollect =>
                        (<Book
                          key={shelfCollect.id}
                          onChangeBook={this.handleChangeBook}
                          books={books.filter(book => book.shelf === shelfCollect.shelf)}
                        >
                          {shelfCollect.title}
                         </Book>))
                    }
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
