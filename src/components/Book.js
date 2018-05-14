import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import Rating from './Rating'


const fadeInAnim = keyframes`${fadeIn}`
const FadeInAnim = styled.div`
 animation: 1s ${fadeInAnim};
 `

class Book extends Component {
  static propTypes = {
    // onChangeBook: PropTypes.func.isRequired,
    // books: PropTypes.array,
    children: PropTypes.string,
  }

  // TODO: call a method live in the controleur component
  onChange = (e) => {
    this.props.onChangeBook(e.target.value)
  }

  render() {
    const	{
      onChangeBook, books, children,
    } = this.props

    // TODO: filter the book to match with the shelf
    // const booksWantToRead = books !== '' &&
    // books.filter(book => book.shelf === shelfName);
    console.log(books)
    books.map(element => console.log(element.id))
    if (!books) { return null }
    console.log(books)
    return (
      <div>
        <div className="bookshelf">
          {children ?
            <h2 className="bookshelf-title">
              {children}
            </h2>
            : ''}
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books ?
                  books.map(element =>
                    (
                      <FadeInAnim key={element.id}>
                        <li>
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
                            <div className="book-authors">{element.authors[0] !== 0 && element.authors[0] !==
                              null ? element.authors[0] : ''}
                            </div>
                            <Rating average={element.averageRating} />
                          </div>
                        </li>
                      </FadeInAnim>
                    ), // render end
                  ) // map end
                  : ''
              } {/* JSX end */}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default Book
