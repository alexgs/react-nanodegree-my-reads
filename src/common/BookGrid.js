import PropTypes from 'prop-types';
import React from 'react';
import Book from "./Book";

function BookGrid( props ) {
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
        <ol className="books-grid">{ bookList }</ol>
    );
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired
};

export default BookGrid;
