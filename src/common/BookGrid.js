import PropTypes from 'prop-types';
import React from 'react';
import Book from "./Book";

function BookGrid( props ) {
    const bookList = props.books.map( book => (
        <li key={ book.id }>
            <Book
                author={ book.author }
                coverUrl={ book.coverUrl }
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
