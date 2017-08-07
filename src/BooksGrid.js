// import React, {Component} from 'react'
import React from 'react'
import Book from './Book'


// This component will return a simple, filtered, sorted list of books
// to be used inside another component wrapper
// like the main page which has three lists.

function BooksGrid({books, updateBook}){
  return (
    <ol className="books-grid">
    {books.sort((a, b) =>{
      if( a.title < b.title) {
        return -1
      }
      if( a.title > b.title) {
        return 1
      }
      // Default/equal case
      return 0
    }).map((book) => (
      <Book
        key={book.id}
        book={book}
        updateBook={updateBook}
      />
    ))}
    </ol>
  )
}
export default BooksGrid
