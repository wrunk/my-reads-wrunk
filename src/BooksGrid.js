// import React, {Component} from 'react'
import React from 'react'
import Book from './Book'


// This component will return a simple, filtered list of books
// to be used inside another component wrapper
// like the main page which has three lists.
// Read, reading, want to read

function BooksGrid(props){
  return (
    <ol className="books-grid">
    {props.books.map((book) => (
      <Book title={book.title} authors={book.authors} imageURL={book.imageURL}/>
    ))}
    </ol>
  )
}
export default BooksGrid
