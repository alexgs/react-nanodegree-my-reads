import PropTypes from 'prop-types';
import React from 'react';
import Book from "./Book";

function BookGrid( props ) {
    const bookList = props.books.map( book => (
        <li key={ book.id }>
            <Book
                author={ book.author }
                coverUrl={ book.coverUrl }
                id={ book.id }
                title={ book.title }
                updateShelf={ props.updateShelf }
            />
        </li>
    ) );
    return (
        <ol className="books-grid">{ bookList }</ol>
    );
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default BookGrid;
