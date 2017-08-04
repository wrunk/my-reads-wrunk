import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MyShelves from './MyShelves'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [
      {title: "Wello Horld", authors: ["Don", "JaggleSon"], status: '', imageURL: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'}
    ]
  }

  updateBook(){

  }

  componentDidMount(){
    console.log("Shit mounted yo!")
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
            <SearchPage/>
          )}
        />

      </div>

    )
  }
}

export default BooksApp
