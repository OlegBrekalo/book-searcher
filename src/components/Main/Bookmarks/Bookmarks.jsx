/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import objectHash from 'object-hash';
import store from '../../../store';
import BookCard from '../BookCard/BookCard';
import DetailPopup from '../DetailPopup/DetailPopup';

import styles from './Bookmarks.module.css';
import mainStyles from '../Main.module.css';

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedIndexDetailBook, setSelectedIndexDetailBook] = useState(null);

  useEffect(() => {
    setBookmarks(store.getState().bookmarks);
  }, []);

  return (
    <section className={mainStyles.content}>
      <h2 className={styles.title}>
        {bookmarks.length === 0 ? 'У вас пока нет закладок' : 'Ваши закладки'}
      </h2>
      <div className={mainStyles['cards-section']}>
        {bookmarks &&
          bookmarks.map((el, index) => (
            <BookCard
              key={objectHash(el)}
              searchIndex={index}
              setSelectedIndexDetailBook={setSelectedIndexDetailBook}
              coverI={el.cover_i}
              title={el.title}
              author={el.author_name && el.author_name[0]}
            />
          ))}
      </div>
      {selectedIndexDetailBook !== null && (
        <DetailPopup
          closePopup={() => {
            setSelectedIndexDetailBook(null);
          }}
          coverI={bookmarks[selectedIndexDetailBook].cover_i}
          title={bookmarks[selectedIndexDetailBook].title}
          author={
            bookmarks[selectedIndexDetailBook].author_name &&
            bookmarks[selectedIndexDetailBook].author_name[0]
          }
          ISBN={
            bookmarks[selectedIndexDetailBook].isbn &&
            bookmarks[selectedIndexDetailBook].isbn[0]
          }
          firstPublishYear={
            bookmarks[selectedIndexDetailBook].first_publish_year
          }
          publisher={
            bookmarks[selectedIndexDetailBook].publisher &&
            bookmarks[selectedIndexDetailBook].publisher[0]
          }
        />
      )}
    </section>
  );
}

export default Bookmarks;
