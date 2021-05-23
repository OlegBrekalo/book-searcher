function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

class Api {
  constructor(url = 'https://openlibrary.org/search.json') {
    this.url = url;
  }

  getBooksByTitle(title) {
    return fetch(`${this.url}?title=${title}`, {
      method: 'GET',
    }).then((res) => getResponseData(res));
  }
}

export default new Api();
