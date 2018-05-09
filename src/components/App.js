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
    console.log(value, id, e);


    BooksAPI.update({ id }, value)// TODO: update BooksAPI
      .then((obj) => {
        console.log(obj);
        this.setState(prev => ({// TODO: update state bookSelected
          bookSelected: prev.value,
        }));

        // TODO: update books in the state
        const books = this.state.books.map((book) => {
          if (book.id === id) { book.shelf = value; }
          return book;
        });

        this.setState(() => ({
          books,
        }));
      }).then(() => {
      });
  }

  render() {
    const { books } = this.state,
      shelves = [ // TODO: property for <Book>
        { id: Math.random().toString(10).substr(-8), shelf: 'wantToRead', title: 'Want to Read' },
        { id: Math.random().toString(10).substr(-8), shelf: 'currentlyReading', title: 'Currently Reading' },
        { id: Math.random().toString(10).substr(-8), shelf: 'read', title: 'Read' },
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
