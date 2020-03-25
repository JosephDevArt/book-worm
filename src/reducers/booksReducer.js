import {
  LOAD_BOOKS,
  LOAD_BOOKS_ON_SCROLL,
  SET_TOTAL_FETCHED_BOOKS,
  SET_ERROR_MESSAGE,
  SET_IS_FETCHING,
  SET_SUBMITTED_INPUT
} from "../actions/actionTypes";
const initialState = {
  submittedInput: "",
  books: [],
  totalFetchedBooks: 0,
  errorMessage: "",
  isFetching: false
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBMITTED_INPUT: {
      return {
        ...state,
        submittedInput: action.submittedInput
      };
    }
    case LOAD_BOOKS: {
      return {
        ...state,
        books: [...action.books]
      };
    }
    case LOAD_BOOKS_ON_SCROLL: {
      return {
        ...state,
        books: [...state.books, ...action.newBooks]
      };
    }
    case SET_TOTAL_FETCHED_BOOKS: {
      return {
        ...state,
        totalFetchedBooks: action.totalFetchedBooks
      };
    }

    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }

    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.bool
      };
    }

    default:
      return state;
  }
};

export default booksReducer;
