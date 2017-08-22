import PropTypes from 'prop-types';
import React from 'react';

function ShelfChanger( props ) {
    return (
        <div className="book-shelf-changer">
            <select onChange={ event => props.updateShelf( props.bookId, event.target.value ) }>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

ShelfChanger.propTypes = {
    bookId: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default ShelfChanger;
