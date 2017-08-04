// import React, {Component} from 'react'
import React from 'react'



// I feel like this component should really be a static, computed
// FUNCTIONAL component that doesnt need to hold state, rather renders from props
// only

// Props:
// imageURL
// status
// title
// authors

function Book(props){
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageURL}")` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ props.title }</div>
        <div className="book-authors">{ props.authors}</div>
      </div>
    </li>
  )
}

// UNUSED... for NOW.
/*
class Book extends Component {
  state = {
    title: '',
    authors: []
  }

  render(){
    return (

    )
  }
}
*/
export default Book
