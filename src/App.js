import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './home/MainPage';
import SearchPage from './search/SearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
    // TODO Add other "default" books to state
    // TODO Use the API instead of hard-coding books
    state = {
        currentlyReading: [
            {
                author: 'Harper Lee',
                coverUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1' +
                    '&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBV' +
                    'hUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
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
        wantToRead: [],
        read: []
    };

    render() {
        return (
            <div className="app">
                <Route path="/" exact render={ () => <MainPage shelves={ this.state }/>  } />
                <Route path="/search" render={ () => <SearchPage/> } />
            </div>
        )
    }
}

export default BooksApp
