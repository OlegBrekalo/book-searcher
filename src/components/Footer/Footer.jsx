import React from 'react';

import styles from './Footer.module.css';
import githubLogo from '../../img/github-logo.png';
import hhLogo from '../../img/hh-logo.png';

function Footer() {
  return (
    <footer className={styles.content}>
      <p className={styles.info}>
        {'Тестовое задание на '}
        <a className={styles.link} href="https://hh.ru/vacancy/44596124">
          вакансию
        </a>
        {' стажера'}
      </p>
      <nav className={styles.nav}>
        <p> Олег Брекало, 2021</p>
        <a href="https://github.com/OlegBrekalo">
          <img
            className={styles.icon}
            src={githubLogo}
            alt="Ссылка на гитхаб"
          />
        </a>
        <a href="https://hh.ru/resume/71909ecfff08ecc11e0039ed1f437173364e78">
          <img className={styles.icon} src={hhLogo} alt="Ссылка на резюме" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
