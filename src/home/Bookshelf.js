import PropTypes from 'prop-types';
import React from 'react';
import BookGrid from '../common/BookGrid';

function Bookshelf( props ) {
    // TODO Add `key` property to <li> elements
    // TODO Update "book grid" and sub-components to work with search results, especially cover images

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ props.displayName }</h2>
            <div className="bookshelf-books">
                <BookGrid books={ props.books }/>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    displayName: PropTypes.string.isRequired
};

export default Bookshelf;
