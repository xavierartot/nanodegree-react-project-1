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
        const res = this.state.books.map((element) => {
          if (element.id === bookId) { element.shelf = value; }
          return element;
          // console.log(element.id, bookId, element.shelf, value);
        });
        console.log(res);
        this.setState(() => ({
          books: res,
        }));

        // // TODO: update books in the state with getAll()
        // BooksAPI.getAll()// fetchind the data from remote server
        // .then((books) => { // with the answer we're calling setState
        // this.setState(() => ({
        // books,
        // }));
        // // console.log('getAll', books);
        // });


        // other solution than to call the server again, it's to update books state only
        // console.log(obj, obj.id);
        // const result =
        // this.state.books.filter(b => b.id.includes(obj.currentlyReading))
        // .concat(b => b.id.includes(obj.wantToRead))
        // .concat(b => b.id.includes(obj.read));

        // console.log('result', result);
        // this.setState(() => ({
        // books: result,
        // })
        // );
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
