import PropTypes from 'prop-types';
import React from 'react';

function ShelfChanger( props ) {
    // TODO Make self-changer actually do something
    return (
        <div className="book-shelf-changer">
            <select>
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

};

export default ShelfChanger;
