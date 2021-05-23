/* eslint-disable operator-linebreak,comma-dangle */
import React, { useState, useEffect, useRef } from 'react';
import objectHash from 'object-hash';

import styles from './Search.module.css';
import mainStyles from '../Main.module.css';

import API from '../../../utils/API';
import BookCard from '../BookCard/BookCard';
import DetailPopup from '../DetailPopup/DetailPopup';
import Store from '../../../store';
import { ADD_BOOK_TO_BOOKMARK } from '../../../utils/actions';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [bookCards, setBookCards] = useState(null);
  const [selectedIndexDetailBook, setSelectedIndexDetailBook] = useState(null);
  const defaultCountRenderedBooks = 12;
  const [countRenderedBooks, setCountRenderedBooks] = useState(
    defaultCountRenderedBooks
  );
  const [allSearchResult, setAllSearchResult] = useState(null);
  const [pageContentState, setPageContentState] = useState('tooltip');
  const searchInputRef = useRef(null);

  useEffect(() => {
    setCountRenderedBooks(defaultCountRenderedBooks);
    setBookCards(null);
    if (searchInput === '') {
      setPageContentState('tooltip');
    } else {
      setPageContentState('spinner');
    }

    setTimeout(() => {
      if (
        searchInput === searchInputRef.current.value &&
        searchInputRef.current
      ) {
        if (searchInput) {
          API.getBooksByTitle(searchInput)
            .then((booksData) => {
              if (booksData.numFound) {
                setSearchResult(booksData.docs);
                setAllSearchResult(booksData.numFound);
              } else {
                setPageContentState('noResult');
              }
            })
            .catch((err) => {
              console.log(
                `Error on getBooksByTitle in Search comp. ErrMsg -> ${err}`
              );
            });
        }
      }
    }, 1000);
  }, [searchInput]);

  useEffect(() => {
    if (searchResult) {
      const tempBookCards = [];
      for (let i = 0; i < countRenderedBooks; i += 1) {
        if (searchResult[i]) {
          tempBookCards.push(
            <BookCard
              key={objectHash(searchResult[i])}
              searchIndex={i}
              setSelectedIndexDetailBook={setSelectedIndexDetailBook}
              coverI={searchResult[i].cover_i}
              title={searchResult[i].title}
              author={
                searchResult[i].author_name && searchResult[i].author_name[0]
              }
              onSaveBookmark={() => {
                Store.dispatch({
                  type: ADD_BOOK_TO_BOOKMARK,
                  payload: searchResult[i],
                });
              }}
            />
          );
        }
      }
      setBookCards(tempBookCards);
      setPageContentState('searchResult');
    } else {
      setPageContentState('tooltip');
    }
  }, [searchResult, countRenderedBooks]);

  const pageContent = {
    tooltip: (
      <p className={styles.tooltip}>
        Вводите название книги на английском языке
      </p>
    ),
    searchResult: (
      <>
        <div className={mainStyles['cards-section']}>{bookCards}</div>
        {countRenderedBooks < allSearchResult && (
          <button
            type="button"
            className={styles['show-more-button']}
            onClick={() => {
              setCountRenderedBooks(countRenderedBooks + 6);
            }}
          >
            <p className={styles['button-text']}>
              {`Всего результатов ${allSearchResult}`}
            </p>
            <p className={styles['button-text']}>Показать еще?</p>
          </button>
        )}
      </>
    ),
    noResult: (
      <p className={styles.tooltip}>
        {`Нет результатов по запросу "${searchInput}"`}
      </p>
    ),
    spinner: <div className={styles.spinner} />,
  };

  return (
    <section className={mainStyles.content}>
      <form
        className={styles['search-form']}
        onSubmit={(evt) => {
          evt.preventDefault();
        }}
      >
        <label htmlFor="search-line" className={styles['search-input-wrap']}>
          <input
            id="search-line"
            className={styles['search-input']}
            placeholder="Начнем поиск"
            value={searchInput}
            onChange={(el) => {
              setSearchInput(el.target.value);
            }}
            ref={searchInputRef}
          />
        </label>
      </form>
      {pageContent[pageContentState]}
      {selectedIndexDetailBook != null && (
        <DetailPopup
          closePopup={() => {
            setSelectedIndexDetailBook(null);
          }}
          coverI={searchResult[selectedIndexDetailBook].cover_i}
          title={searchResult[selectedIndexDetailBook].title}
          author={
            searchResult[selectedIndexDetailBook].author_name &&
            searchResult[selectedIndexDetailBook].author_name[0]
          }
          ISBN={
            searchResult[selectedIndexDetailBook].isbn &&
            searchResult[selectedIndexDetailBook].isbn[0]
          }
          firstPublishУear={
            searchResult[selectedIndexDetailBook].first_publish_year
          }
          publisher={
            searchResult[selectedIndexDetailBook].publisher &&
            searchResult[selectedIndexDetailBook].publisher[0]
          }
        />
      )}
    </section>
  );
}

export default Search;
