import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './home/MainPage';
import SearchPage from './search/SearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
    // TODO Use the API instead of hard-coding books
    state = {
        books: {
            currentlyReading: [
                {
                    author: 'Harper Lee',
                    coverUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhU' +
                        'eDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
                    coverWidth: 128,
                    coverHeight: 193,
                    title: 'To Kill a Mockingbird'
                },
                {
                    author: 'Orson Scott Card',
                    coverUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbc' +
                        'Ucs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
                    coverWidth: '128',
                    coverHeight: '188',
                    title: 'Ender\'s Game'
                }
            ],
            wantToRead: [
                {
                    author: 'David McCullough',
                    coverUrl: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJ' +
                        's8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
                    coverWidth: 128,
                    coverHeight: 193,
                    title: '1776'
                },
                {
                    author: 'J.K. Rowling',
                    coverUrl: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-m' +
                        'ZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
                    coverWidth: 128,
                    coverHeight: 192,
                    title: 'Harry Potter and the Sorcerer\'s Stone'
                }
            ],
            read: [
                {
                    author: 'J.R.R. Tolkien',
                    coverUrl: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbf' +
                        'Q45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
                    coverWidth: 128,
                    coverHeight: 192,
                    title: 'The Hobbit'
                },
                {
                    author: 'Seuss',
                    coverUrl: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leI' +
                        'NsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
                    coverWidth: 128,
                    coverHeight: 174,
                    title: 'Oh, the Places You\'ll Go!'
                },
                {
                    author: 'The Adventures of Tom Sawyer',
                    coverUrl: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&im' +
                        'gtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8Wa' +
                        'Kmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api',
                    coverWidth: 128,
                    coverHeight: 192,
                    title: 'Mark Twain'
                }
            ]
        },
        query: '',
        searchResults: []
    };

    updateQuery( query ) {
        this.setState( { query: query.trim() } );
        BooksAPI.search( query )
            .then( results => {
                const books = results.map( result => ( {
                    author: result[ 'authors' ] ? result[ 'authors' ].join() : '',
                    coverUrl: result[ 'imageLinks' ][ 'smallThumbnail' ],
                    id: result[ 'id' ],
                    title: result[ 'title' ]
                } ) );
                this.setState( { searchResults: books } );
            } );
    }

    render() {
        return (
            <div className="app">
                <Route path="/" exact render={ () => <MainPage shelves={ this.state.books }/>  } />
                <Route
                    path="/search"
                    render={ () => (
                        <SearchPage
                            query={ this.state.query}
                            searchResults={ this.state.searchResults }
                            updateQuery={ this.updateQuery.bind( this ) }
                        />
                    ) }
                />
            </div>
        )
    }
}

export default BooksApp
