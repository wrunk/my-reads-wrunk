import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class SearchPage extends Component {
  state = {
    searchResults: [],
    errorMsg: 'Please type at least two characters'
  }

  handleChange = (e) => {
    // If we have any value, make the server request, fill the list
    // If empty, setState clear books
    if(e.target.value.length < 2 ){
      this.setState({searchResults: [], errorMsg: 'Please type at least two characters'})
      return
    }
    BooksAPI.search(e.target.value).then((searchResults) => {
      if(searchResults.error || searchResults.length === 0){
        console.log(`Error or no results! ${searchResults.error}`)
        this.setState({searchResults: [], errorMsg: 'No results'})
        return
      }

      // NOTE for some reason the api will return duplicate results
      // (AKA books with the same id field which react doesn't like)
      // While we're de-duping, overlay our core app books list
      // to maintain the shelf value
      let mm = new Map()
      let sr = []
      for(const o of searchResults){
        if(mm.has(o.id)){
          console.log(`found dup search result ${o.id}`)
        } else {
          mm.set(o.id, true)
          for(const b of this.props.books){
            if(o.id === b.id){
              o.shelf = b.shelf
            }
          }
          sr.push(o)
        }
      }

      this.setState({searchResults: sr, errorMsg: ''})
    })
  }
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
              <input type="text" autoFocus placeholder="Search by title or author" onChange={this.handleChange}/>

            </div>
          </div>
          <div className="search-books-results">
            <p>{this.state.errorMsg}</p>
            <BooksGrid books={this.state.searchResults} updateBook={this.props.updateBook}/>
          </div>
        </div>
      )
  }
}
export default SearchPage
