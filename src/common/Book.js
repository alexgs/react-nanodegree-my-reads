import PropTypes from 'prop-types';
import React from 'react';
import ShelfChanger from './ShelfChanger';

function Book( props ) {
    const bookCoverStyle = {
        backgroundImage: `url("${props.coverUrl}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: 200,
        width: 128
    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={ bookCoverStyle }/>
                <ShelfChanger
                    bookId={ props.id }
                    currentShelf={ props.currentShelf }
                    updateShelf={ props.updateShelf }
                />
            </div>
            <div className="book-title">{ props.title }</div>
            <div className="book-authors">{ props.author }</div>
        </div>
    );
}

Book.propTypes = {
    author: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired,
    currentShelf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Book;
