import {
  ADD_TO_READ_LATER,
  REMOVE_FROM_READ_LATER,
  LOAD_READ_LATER_BOOKS,
} from "../actions/actionTypes";

const initialState = {
  readLaterBooks: [],
};

const readLaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_READ_LATER: {
      if (state.readLaterBooks.some((book) => book === action.addedBook)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        readLaterBooks: [...state.readLaterBooks, action.addedBook],
      };
    }
    case REMOVE_FROM_READ_LATER: {
      const filteredBooks = state.readLaterBooks.filter(
        (book) => book !== action.removedBook
      );
      return {
        ...state,
        readLaterBooks: [...filteredBooks],
      };
    }

    case LOAD_READ_LATER_BOOKS: {
      return {
        ...state,
        readLaterBooks: [...action.sortedBooks],
      };
    }

    default:
      return state;
  }
};

export default readLaterReducer;
