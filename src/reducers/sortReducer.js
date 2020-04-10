import { ROTATE_SORT_ICON, SET_SELECT_VALUE } from "../actions/actionTypes";

const initialState = {
  selectedValue: "averageRating",
  sortIconRotated: false,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROTATE_SORT_ICON:
      return {
        ...state,
        sortIconRotated: !state.sortIconRotated,
      };
    case SET_SELECT_VALUE: {
      return {
        ...state,
        selectedValue: action.value,
      };
    }

    default:
      return state;
  }
};

export default sortReducer;
