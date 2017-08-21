import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'

function SearchPage( props ) {
    // TODO Display search results
    // TODO Separate "book grid" from Bookshelf component
    // TODO Update "book grid" and sub-components to work with search results, especially cover images
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={ props.query }
                        onChange={ event => props.updateQuery( event.target.value )}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
    );
}

SearchPage.propTypes = {
    query: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired,
    updateQuery: PropTypes.func.isRequired
};

export default SearchPage;
