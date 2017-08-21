import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf';

function MainPage( props ) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf books={ props.shelves.currentlyReading } displayName="Currently Reading" />
                    <Bookshelf books={ props.shelves.wantToRead} displayName="Want to Read"/>
                    <Bookshelf books={ props.shelves.read} displayName="Read"/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

MainPage.propTypes = {
    shelves: PropTypes.object.isRequired
};

export default MainPage;
