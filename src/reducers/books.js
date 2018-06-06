import * as constants from "./../constants/books";

const initialState = {
  search: "",
  books: [],
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
