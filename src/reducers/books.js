import * as constants from "./../constants/books";

const initialState = {
  search: "",
  books: [],
  page: 1,
  fetching: false
};

export default function(state = initialState, action) {
  const actions = {
    [constants.changeSearchValue]() {
      return {
        ...state,
        search: action.value,
        books: []
      };
    },

    [constants.storeBooks]() {
      if (action.search !== state.search) return state;

      return {
        ...state,
        books: action.books
      };
    },

    [constants.addBooks]() {
      if (action.search !== state.search) return state;

      return {
        ...state,
        books: state.books.concat(action.books),
        page: state.page + 1
      };
    },

    [constants.fetching]() {
      return {
        ...state,
        fetching: true
      };
    },

    [constants.fetchEnd]() {
      if (action.search !== state.search) return state;

      return {
        ...state,
        fetching: false
      };
    },

    default() {
      return state;
    }
  };

  return (actions[action.type] || actions.default)();
}
