import PropTypes from 'prop-types';
import React from 'react';

function Book( props ) {
    // TODO Convert shelf-changer to a React component
    // TODO Make self-changer actually do something
    const bookCoverStyle = {
        backgroundImage: `url("${props.coverUrl}")`,
        height: props.coverHeight,
        width: props.coverWidth
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={bookCoverStyle}/>
                <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{ props.title }</div>
            <div className="book-authors">{ props.author }</div>
        </div>
    );
}

Book.propTypes = {
    author: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    coverHeight: PropTypes.number.isRequired,
    coverWidth: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Book;
