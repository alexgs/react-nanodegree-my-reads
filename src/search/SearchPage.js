import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import BookGrid from "../common/BookGrid";

function SearchPage( props ) {
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
                <BookGrid books={ props.searchResults } />
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
