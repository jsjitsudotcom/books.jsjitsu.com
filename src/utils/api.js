import config from "./../config";

export default {
  /**
   * Permet de faire une requete vers l'API
   * @param {*} path - Le chemin d'appel
   */
  fetch(path) {
    return fetch(`${config.API_ENDPOINT}/${path}`).then(response => {
      if (response.ok) return response.json();
      return response.json().then(e => Promise.reject(e));
    });
  },
  /**
   * Permet de rechercher des livres
   * @param {*} params
   * @param {string} params.query - Le nom du livre
   * @param {number} params.limit - Le nombre de livre à récupérer
   * @param {number} params.page - La pagination
   */
  searchBooks({ query, limit = 50, page }) {
    const limitParams = limit ? `&limit=${limit}` : "";
    const pageParams = page ? `&page=${page}` : "";

    return this.fetch(`search.json?q=${query}${limitParams}${pageParams}`)
      .then(response => response.docs)
      .then(this.cleanBooks)
      .then(this.normalizeBooks);
  },
  /**
   * Permet de supprimer les livres qui n'ont pas toutes les informations
   * @param {*} books
   */
  cleanBooks(books) {
    return books.filter(book => book.title && book.author_name);
  },
  /**
   * Permet de transformer la donnée dans un schéma plus simple à utiliser
   * @param {*} books
   */
  normalizeBooks(books) {
    return books.map(book => ({
      title: book.title,
      author: book.author_name[0],
      date: book.first_publish_year,
      link: `https://openlibrary.org${book.key}`,
      cover: book.cover_i
        ? `http://covers.openlibrary.org/b/id/${book.cover_i}.jpg`
        : "https://www.parkablogs.com/sites/default/files/images/no-cover-image.jpg"
    }));
  }
};
