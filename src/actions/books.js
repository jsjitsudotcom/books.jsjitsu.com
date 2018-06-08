import * as types from "../constants/books";
import Api from "./../utils/api";

/**
 * Permet de changer la valeur de la recherche
 * @param {string} value
 */
export const changeSearchValue = value => ({
  type: types.changeSearchValue,
  value
});

/**
 * Permet de changer la valeur de la recherche
 * @param {string} value
 */
export const storeBooks = ({ search, books }) => ({
  type: types.storeBooks,
  search,
  books
});

/**
 * Permet d'ajouter de nouveaux livre aux livre actuel
 * @param {Array<*>} books - Les livre à ajouter
 */
export const addBooks = ({ books, search }) => ({
  type: types.addBooks,
  books,
  search
});

/**
 * Permet de dire que la recherche est lancée
 * @param {string} search - La valeur recherchée
 */
export const fetching = search => ({
  type: types.fetching,
  search
});

/**
 * Permet de dire que la recherche est terminée
 * @param {string} search - La valeur recherchée
 */
export const fetchEnd = search => ({
  type: types.fetchEnd,
  search
});

/**
 * Permet d'ajouter des feeds à une source
 * @param {string} name - Le nom de la source
 * @param {object} feeds - La liste des feeds
 */
export const changeSearchAndFetch = value => (dispatcher, getState) => {
  dispatcher(changeSearchValue(value));
  dispatcher(fetching(value));

  return Api.searchBooks({ query: value, page: 1 }).then(books => {
    dispatcher(fetchEnd(value));
    return dispatcher(storeBooks({ search: value, books }));
  });
};

/**
 * Permet de récupérer des nouveaux livres
 */
export const fetchMore = () => (dispatcher, getState) => {
  const { books: { search, page } } = getState();
  dispatcher(fetching(search));

  return Api.searchBooks({ query: search, page: page + 1 }).then(books => {
    dispatcher(fetchEnd(search));
    return dispatcher(addBooks({ books, search }));
  });
};
