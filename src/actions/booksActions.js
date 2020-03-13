import { ADD_TO_READ_LATER, ROTATE_SORT_ICON } from "./actionTypes";

export const addToReadLater = () => {
  return {
    type: ADD_TO_READ_LATER
  };
};

export const rotateSortIcon = () => {
  return {
    type: ROTATE_SORT_ICON
  };
};
