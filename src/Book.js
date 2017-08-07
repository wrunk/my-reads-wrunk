// import React, {Component} from 'react'
import React from 'react'


function getImageURL(book){
  // Of course our API *sometimes* provides image thumbnails
  if(book.imageLinks && book.imageLinks.thumbnail){
    return book.imageLinks.thumbnail
  }
  return '' // It would be better to return a url to some placeholder image
}

function Book(props){
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
              backgroundImage: `url("${getImageURL(props.book)}")` }}></div>
          <div className="book-shelf-changer">
            <select value={props.book.shelf} onChange={(event) => {
                props.updateBook(props.book, event.target.value)
              }}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Active Tomes</option>
              <option value="wantToRead">Next Level Scrolls</option>
              <option value="read">Mastered Spells</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ props.book.title }</div>

        <div className="book-authors">{ props.book.authors ? props.book.authors.join(', '): "N/A"}</div>
      </div>
    </li>
  )
}

export default Book
