import {
  ROTATE_SORT_ICON,
  SET_SELECT_VALUE,
  SORT_READ_LATER_BOOKS
} from "../actions/actionTypes";

const initialState = {
  selectedValue: "averageRating",
  sortIconRotated: false,
  totalFetchedBooks: 0,
  readLaterBooks: []
};
const sortReducer = (state = initialState, action) => {
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

    case SORT_READ_LATER_BOOKS: {
      return {
        ...state,
        readLaterBooks: [...action.sortedBooks]
      };
    }

    default:
      return state;
  }
};

export default sortReducer;
