import React from 'react';
import PropTypes from 'prop-types';

import styles from './DetailPopup.module.css';
import noCover from '../../../img/no-cover.png';

function DetailPopup({
  coverI,
  title,
  author,
  ISBN,
  firstPublishYear,
  publisher,
  closePopup,
}) {
  return (
    <div
      role="presentation"
      className={styles.popup}
      onClick={(evt) => {
        if (evt.target === evt.currentTarget) {
          closePopup();
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles['cover-wrap']}>
          <img
            className={styles.cover}
            src={
              coverI
                ? `https://covers.openlibrary.org/b/id/${coverI}-L.jpg`
                : noCover
            }
            alt={`Обложка книги ${title}`}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.year}>{firstPublishYear}</p>
          <p className={styles.author}>
            <span className={styles.subtitle}>Автор: </span>
            {author}
          </p>
          <p className={styles.publisher}>
            <span className={styles.subtitle}>Издатель: </span>
            {publisher}
          </p>
          <p className={styles.isbn}>
            <span className={styles.subtitle}>ISBN: </span>
            {ISBN}
          </p>
        </div>
        <button
          type="button"
          aria-label="close-popup"
          className={styles['close-icon']}
          onClick={closePopup}
        />
      </div>
    </div>
  );
}

export default DetailPopup;

DetailPopup.propTypes = {
  coverI: PropTypes.number,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  ISBN: PropTypes.string,
  firstPublishYear: PropTypes.number,
  publisher: PropTypes.string,
  closePopup: PropTypes.func.isRequired,
};

DetailPopup.defaultProps = {
  coverI: null,
  author: 'Неизвестный автор',
  ISBN: 'Нет информации',
  firstPublishYear: 'Нет информации',
  publisher: 'Нет информации',
};
