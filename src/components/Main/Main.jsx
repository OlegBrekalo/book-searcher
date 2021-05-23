import React from 'react';

import Search from './Search/Search';
import Bookmarks from './Bookmarks/Bookmarks';

function Main({ mainContentType }) {
  const mainContent = {
    search: <Search />,
    bookmark: <Bookmarks />,
  };
  return mainContent[mainContentType];
}

export default Main;
