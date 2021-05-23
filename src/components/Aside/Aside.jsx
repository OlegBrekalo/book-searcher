import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import logo from '../../img/logo brow.svg';

import styles from './Aside.module.css';

function Aside({ mainContentType, setMainContentType }) {
  return (
    <aside className={styles.content}>
      <img className={styles.logo} src={logo} alt="Логотип" />
      <button
        type="button"
        className={cn(styles.button, styles.search, {
          [styles.brow]: mainContentType === 'search',
        })}
        onClick={() => {
          setMainContentType('search');
        }}
      >
        <span
          className={cn(styles.icon, styles.search, {
            [styles.brow]: mainContentType === 'search',
          })}
        />
        Поиск
      </button>
      <button
        type="button"
        className={cn(styles.button, styles.bookmark, {
          [styles.brow]: mainContentType === 'bookmark',
        })}
        onClick={() => {
          setMainContentType('bookmark');
        }}
      >
        <span
          className={cn(styles.icon, styles.bookmark, {
            [styles.brow]: mainContentType === 'bookmark',
          })}
        />
        Закладки
      </button>
    </aside>
  );
}

export default Aside;

Aside.propTypes = {
  mainContentType: PropTypes.oneOf(['search', 'bookmark']).isRequired,
  setMainContentType: PropTypes.func.isRequired,
};
