import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

function Bookshelf( props ) {
    // TODO Add `key` property to <li> elements
    const bookList = props.books.map( book => (
        <li>
            <Book
                author={ book.author }
                coverUrl={ book.coverUrl }
                coverHeight={ parseInt( book.coverHeight, 10 ) }
                coverWidth={ parseInt( book.coverWidth, 10 ) }
                title={ book.title }/>
        </li>
    ) );

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ props.displayName }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">{ bookList }</ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    displayName: PropTypes.string.isRequired
};

export default Bookshelf;
