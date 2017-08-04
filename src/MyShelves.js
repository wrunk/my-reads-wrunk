import React, {Component} from 'react'
import BooksGrid from './BooksGrid'
import { Link } from 'react-router-dom'

// This component will be the app's main page
// and will render the three different shelves

class MyShelves extends Component {
  state = {
  }

  // TODO do we need to sort in any way?
  //
  render(){
    const {books, updateBook} = this.props // Passed in, state maintained in
    // App.js

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BooksGrid books={books} updateBook={updateBook}/>
              </div>
            </div>
          </div>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BooksGrid books={books} updateBook={updateBook}/>
              </div>
            </div>
          </div>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BooksGrid books={books} updateBook={updateBook}/>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default MyShelves
