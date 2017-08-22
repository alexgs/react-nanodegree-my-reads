import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './home/MainPage';
import SearchPage from './search/SearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

const mapBooksApiData = function( book ) {
    return {
        author: book[ 'authors' ] ? book[ 'authors' ].join( ', ' ) : '',
        coverUrl: book[ 'imageLinks' ][ 'smallThumbnail' ],
        id: book[ 'id' ],
        shelf: book[ 'shelf' ],
        title: book[ 'title' ]
    };
};

class BooksApp extends Component {
    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        },
        query: '',
        searchResults: []
    };

    componentDidMount() {
        this.updateStateOfAllBooks();
    }

    updateShelf( bookId, shelf ) {
        BooksAPI.update( { id: bookId }, shelf )
            .then( this.updateStateOfAllBooks.bind( this ) );
    }

    updateStateOfAllBooks() {
        const newState = {
            books: {
                currentlyReading: [],
                wantToRead: [],
                read: []
            },
            localBookData: []
        };
        BooksAPI.getAll()
            .then(books => {
                books.forEach( rawData => {
                    const book = mapBooksApiData( rawData );
                    newState[ 'books' ][ book.shelf ].push( book );
                });
                this.setState( newState );
            } );
    }

    updateQuery( query ) {
        this.setState( { query: query.trim() } );
        BooksAPI.search( query )
            .then( results => {
                const books = results.map( mapBooksApiData );
                this.setState( { searchResults: books } );
            } );
    }

    render() {
        return (
            <div className="app">
                <Route
                    path="/" exact
                    render={ () => (
                        <MainPage
                            shelves={ this.state.books }
                            updateShelf={ this.updateShelf.bind( this ) }
                        />
                    ) }
                />
                <Route
                    path="/search"
                    render={ () => (
                        <SearchPage
                            query={ this.state.query}
                            searchResults={ this.state.searchResults }
                            updateQuery={ this.updateQuery.bind( this ) }
                            updateShelf={ this.updateShelf.bind( this ) }
                        />
                    ) }
                />
            </div>
        )
    }
}

export default BooksApp
