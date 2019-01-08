import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './BookShelves';

//renders search page
class BookSearch extends Component {
  
  render() {
    const {filteredBooks, bookSearch, updateOption} = this.props

    return (
      <div>

        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              className='search-books-results'
              type='text'
              placeholder='Search books..'
              onChange={(event) => bookSearch(event.target.value)}/>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map(book => (<Shelf book={book} key={book.id} updateOption={updateOption}/>))}
          </ol>
        </div>

      </div>
    )
  }
}

export default BookSearch;
