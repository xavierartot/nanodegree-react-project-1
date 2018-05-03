import React from 'react';
import { Route, Link } from 'react-router-dom';

import * as BooksAPI from '../server/BooksAPI';
import '../styles/App.css';
import Search from './Search';

import WantToRead from './WantToRead';
import Read from './Read';
import CurrentlyReading from './CurrentlyReading';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()//fetchind the data from remote server
      .then((books) => { //with the answer we're calling setState
        this.setState(() => ({
          books: books
        }));
      });
  }
  clickBackSearch = () => {
    this.setState(() => ({
      showSearchPage : false
    }));
    console.log(4);
  }
  handleChange = (e) => {
    e.target;
  }
  render() {
    console.log( this.state.books);
    return (
      <div className="app">
        <Route
          exact
          path='/search'
          render={() => (
            <Search 
              onClickBackSearch={this.clickBackSearch} 
              books={this.state.books}
              onHandleChange={() => this.handleChange()}
            />
          )}
        />
        <div className="list-books">
          {
            this.state.showSearchPage === false ? (
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div> 
            ) :
            () =>this.setState({ showSearchPage: true })
          }
          <div className="list-books-content">
            <div>
              <Route
                exact
                path='/' 
                render={() => (
                  <div>
                    <WantToRead onBookWantToRead='' />
                    <CurrentlyReading onBookCurrentlyReading='' />
                    <Read onBookRead='' />
                  </div>
               )}
              />
            </div>
          </div>
          <div className="open-search">
            <Link
              to={{
              pathname: '/search',
            }}
              onClick={() => this.setState(() => ({
              showSearchPage : true
            }))
             } 
            >
              Add a book
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
