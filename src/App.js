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
    // TODO Update README.md
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

    updateQuery( query ) {
        query = query.trim();
        this.setState( { query } );
        if ( query ) {
            BooksAPI.search( query )
                .then( results => {
                    const books = results && results.map ? results
                        .map( mapBooksApiData )
                        .map( this.updateSearchResultsWithShelves.bind( this ) ) : [];
                    this.setState( { searchResults: books } );
                } );
        } else {
            this.setState( { searchResults: [] } );
        }
    }

    updateShelf( bookId, shelf ) {
        BooksAPI.update( { id: bookId }, shelf )
            .then( this.updateStateOfAllBooks.bind( this ) );
    }

    updateSearchResultsWithShelves( searchedBook ) {
        const shelves = Object.keys( this.state[ 'books' ] );
        shelves.forEach( shelf => {
            const matches = this.state[ 'books' ][ shelf ].filter( shelvedBook => shelvedBook.id === searchedBook.id );
            // Assume book IDs are unique and there is at most one match
            if ( matches.length === 1 ) {
                const shelvedBook = matches[ 0 ];
                searchedBook[ 'shelf' ] = shelvedBook[ 'shelf' ];
            }
            // If there's no match, do nothing; setting the shelf to 'none' can undo successful matches
        } );
        return searchedBook;
    }

    updateStateOfAllBooks() {
        const newState = {
            books: {
                currentlyReading: [],
                wantToRead: [],
                read: []
            }
        };
        BooksAPI.getAll()
            .then( books => {
                books.forEach( rawData => {
                    const book = mapBooksApiData( rawData );
                    newState[ 'books' ][ book.shelf ].push( book );
                });
                this.setState( newState, () => {
                    const searchResults = this.state[ 'searchResults' ]
                        .map( this.updateSearchResultsWithShelves.bind( this ) );
                    this.setState( { searchResults } );
                } );
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
