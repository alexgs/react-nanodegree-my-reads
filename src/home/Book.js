import PropTypes from 'prop-types';
import React from 'react';
import ShelfChanger from './ShelfChanger';

function Book( props ) {
    // TODO Make self-changer actually do something
    const bookCoverStyle = {
        backgroundImage: `url("${props.coverUrl}")`,
        height: props.coverHeight,
        width: props.coverWidth
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={ bookCoverStyle }/>
                <ShelfChanger/>
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
