import { ADD_TO_READ_LATER, ROTATE_SORT_ICON } from "../actions/actionTypes";

const initialState = {
  sortIconRotated: false,
  readLaterAmount: 0
};

const booksReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case ROTATE_SORT_ICON:
      return {
        sortIconRotated: !state.sortIconRotated,
        readLaterAmount: state.readLaterAmount + 1
      };
    default:
      return state;
  }
};

export default booksReducer;
