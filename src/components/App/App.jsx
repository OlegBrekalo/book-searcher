import React, { useState } from 'react';

import styles from './App.module.css';

import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  const [mainContentType, setMainContentType] = useState('search');
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Aside
          mainContentType={mainContentType}
          setMainContentType={setMainContentType}
        />
        <Main mainContentType={mainContentType} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
