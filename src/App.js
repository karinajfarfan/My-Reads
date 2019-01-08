import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import BookSearch from './BookSearch';
import './App.css';

class BooksApp extends Component {
  state = {
    allBooks: [],
    filteredBooks: []
  }

  // gets all the books
  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({allBooks: books})
      })
  }

  // for searching books
  bookSearch = (query) => {
    if (query) {
      BooksAPI
        .search(query)
        .then((result) => {
          this.updateSearchedResult(result)
          if (result.error !== 'empty query') {
            this.setState({filteredBooks: result})
          } else {
            this.setState({filteredBooks: []})
          }
        })
    } else {
      this.setState({filteredBooks: []})
    }
  }

  // update shelf placement
  updateShelf = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(updated => (BooksAPI.getAll().then((books) => {
        this.setState({allBooks: books})
        this.updateSearchedResult(this.state.filteredBooks)
      })))
  }

  // update state of the book in shelf
  updateSearchedResult = (values) => {
    for (let value of values) {
      for (let book of this.state.allBooks) {
        if (value.id === book.id) {
          value.shelf = book.shelf
        }
      }
    }
    this.setState({filteredBooks: values})
  }

  render() {
    return (
      <div className="app">

        <Switch>
          <Route
            exact
            path="/"
            render={() => (<BookList
            books={this.state.allBooks}
            updateOption={(book, shelf) => this.updateShelf(book, shelf)}/>)}/>

          <Route
            path="/search"
            render={() => (
            <div >
              <BookSearch
                filteredBooks={this.state.filteredBooks}
                bookSearch={(query) => this.bookSearch(query)}
                updateOption={(book, shelf) => this.updateShelf(book, shelf)}/>
            </div>
          )}/>
		//error page
          <Route
            component={function NoMatch() {
            return (
              <div className="errorPage">
                <h1>404</h1>
                <h3>Page not Found</h3>
              </div>
            )
          }}/>

        </Switch>
      </div>
    )
  }
}

export default BooksApp
