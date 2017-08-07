import React, {Component} from 'react'
import BooksGrid from './BooksGrid'
import { Link } from 'react-router-dom'

// This component will be the app's main page
// and will render the three different shelves

class MyShelves extends Component {
  state = {
  }

  render(){
    const {books, updateBook} = this.props // Passed in, state maintained in
    // App.js

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Mystical Sage's Archive</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Active Tomes</h2>
              <div className="bookshelf-books">
                <BooksGrid books={books.filter((b) => b.shelf === 'currentlyReading' )} updateBook={updateBook}/>
              </div>
            </div>
          </div>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Next Level Scrolls</h2>
              <div className="bookshelf-books">
                <BooksGrid books={books.filter((b) => b.shelf === 'wantToRead' )} updateBook={updateBook}/>
              </div>
            </div>
          </div>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Mastered Spells</h2>
              <div className="bookshelf-books">
                <BooksGrid books={books.filter((b) => b.shelf === 'read' )} updateBook={updateBook}/>
              </div>
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>

      </div>
    )
  }
}

export default MyShelves
