import {
  ADD_TO_READ_LATER,
  ROTATE_SORT_ICON,
  SET_SELECT_VALUE,
  LOAD_BOOKS,
  LOAD_BOOKS_ON_SCROLL,
  SET_TOTAL_FETCHED_BOOKS,
  SET_SUBMITTED_INPUT,
  SET_ERROR_MESSAGE,
  SORT_READ_LATER_BOOKS,
  REMOVE_FROM_READ_LATER,
  SET_IS_FETCHING
} from "../actions/actionTypes";
const initialState = {
  userInput: "",
  submittedInput: "", //store first userInput so that on scroll appropriate books will be loaded
  selectedValue: "averageRating",
  sortIconRotated: false,
  books: [],
  totalFetchedBooks: 0,
  errorMessage: "",
  readLaterBooks: [],
  isFetching: false
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROTATE_SORT_ICON:
      return {
        ...state,
        sortIconRotated: !state.sortIconRotated
      };
    case SET_SELECT_VALUE: {
      return {
        ...state,
        selectedValue: action.value
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
    case SET_SUBMITTED_INPUT: {
      return {
        ...state,
        submittedInput: action.submittedInput
      };
    }
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }
    case ADD_TO_READ_LATER: {
      if (state.readLaterBooks.some(book => book === action.addedBook)) {
        return {
          ...state
        };
      }
      return {
        ...state,
        readLaterBooks: [...state.readLaterBooks, action.addedBook]
      };
    }
    case REMOVE_FROM_READ_LATER: {
      const filteredBooks = state.readLaterBooks.filter(
        book => book != action.removedBook
      );
      return {
        ...state,
        readLaterBooks: [...filteredBooks]
      };
    }
    case SORT_READ_LATER_BOOKS: {
      return {
        ...state,
        readLaterBooks: [...action.sortedBooks]
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
