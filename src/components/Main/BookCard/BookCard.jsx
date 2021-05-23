import React from 'react';
import PropTypes from 'prop-types';

import styles from './BookCard.module.css';
import noCover from '../../../img/no-cover.png';

function BookCard({
  searchIndex,
  setSelectedIndexDetailBook,
  coverI,
  title,
  author = 'Неизвестный автор',
  onSaveBookmark,
}) {
  return (
    <div
      role="presentation"
      className={styles.bookCard}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) {
          setSelectedIndexDetailBook(searchIndex);
        }
      }}
    >
      <img
        className={styles.cover}
        src={
          coverI
            ? `https://covers.openlibrary.org/b/id/${coverI}-M.jpg`
            : noCover
        }
        alt={`Обложка книги ${title}`}
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.author}>{author}</p>
      {onSaveBookmark && (
        <button
          type="button"
          aria-label="save-bookmark"
          className={styles['save-icon']}
          onClick={(evt) => {
            evt.stopPropagation();
            onSaveBookmark();
          }}
          title="Сохранить в закладки"
        />
      )}
    </div>
  );
}

export default BookCard;

BookCard.propTypes = {
  searchIndex: PropTypes.number.isRequired,
  setSelectedIndexDetailBook: PropTypes.func.isRequired,
  coverI: PropTypes.number,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  onSaveBookmark: PropTypes.func,
};

BookCard.defaultProps = {
  coverI: null,
  author: 'Неизвестный автор',
  onSaveBookmark: null,
};
