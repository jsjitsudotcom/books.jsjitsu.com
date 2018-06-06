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
  searchBooks({ query, limit = 10, page }) {
    const limitParams = limit ? `&limit=${limit}` : "";
    const pageParams = limit ? `&page=${page}` : "";
    
    return this.fetch(`search.json?q=${query}${limitParams}${pageParams}`);
  }
};
