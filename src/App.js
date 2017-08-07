import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MyShelves from './MyShelves'
import { Route } from 'react-router-dom'

// Primary component for our shelves app

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // I think functions need to be declared like this in order to use 'this' var
  // declaring like `updateBook(book, selected_val) {` causes 'this' to not work
  updateBook = (book, selectedVal) => {
    BooksAPI.update(book, selectedVal).then((resp => {
      book.shelf = selectedVal

      // I had major problems getting this to work correctly and im
      // still not totally sure what I was doing wrong. Previously I couldn't
      // get the home page to re-render when adding a new book from the search
      // page
      this.setState((state) => {
        // To make this easier, just remove the damn book to start with
        let newBooks = state.books.filter((b) => b.id !== book.id)

        if(book.shelf !== 'none'){ // Add'er back in!
          newBooks.push(book)
        }
        return {books: newBooks}
      })
    }))
  }

  componentDidMount(){
    // App has mounted, load our books data from the server.
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })

  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MyShelves
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )}/>

        <Route exact path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              updateBook={this.updateBook}
              />
          )}
        />

      </div>

    )
  }
}

export default BooksApp
