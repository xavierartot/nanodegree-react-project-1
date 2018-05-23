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
    onChangeBook: PropTypes.func.isRequired,
    // books: PropTypes.array,
    children: PropTypes.string,
  }

  // TODO: call a method live in the controleur component App/
  onChange = (e) => {
    // console.log(e.target.value)
    this.props.onChangeBook(e.target.value)
  }

  handleUpdateRating = (e) => {
    const list = [...e.target.classList].map(element => element)
    console.log(list, list[0], list[1])
  }
  selectShelf = (elementId) => {
    const	{
      booksSameShelf,
    } = this.props
    // console.log(booksSameShelf.length, booksSameShelf)
    for (let j = 0, l = booksSameShelf.length; j < l; j++) {
      if (elementId === booksSameShelf[j].id) {
        return booksSameShelf[j].shelf
      }
    }
  }

  render() {
    const	{
      onChangeBook, children, books,
    } = this.props

    if (!books || books.error === 'empty query') { return null }
    // console.log('1', books, '2', books, '3', error)
    // if (books.error === 'empty query') { return null }
    // console.log('empty', books.error)

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
	              books !== null && books && books !== 0 ?
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
                                  backgroundImage:
                                  element.imageLinks !== null && element.imageLinks !== 0 && element.imageLinks
                                    ? `url(${element.imageLinks.thumbnail})`
                                    : 'url(//via.placeholder.com/128x192)',
                                }}
                              />

                              <div className="book-shelf-changer">
                                <select
                                  name="select"
                                  onChange={e => onChangeBook(e)} // this.props.onChangeBook
                                  id={element.id}
                                  value={element.shelf ? element.shelf : this.selectShelf(element.id)}
                                >
                                  <option value="none">Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{element.title}</div>
                            <div className="book-authors">{element.authors && element.authors[0] !== 0 && element.authors[0] !==
                          null ? element.authors[0] : ''}
                            </div>
                            <Rating
                              average={element.averageRating}
                              onClickRating={this.handleUpdateRating}
                              idBook={element.id}
                              nameShelf={element.shelf === '' ? 'none' : element.shelf}
                            />
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
