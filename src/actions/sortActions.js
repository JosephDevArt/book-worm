import { ROTATE_SORT_ICON, SET_SELECT_VALUE } from "./actionTypes";

export const rotateSortIcon = () => {
  return {
    type: ROTATE_SORT_ICON
  };
};

export const setSelectValue = value => {
  return {
    type: SET_SELECT_VALUE,
    value
  };
};
