import {
  SET_USER_INPUT,
  SET_SUBMITTED_INPUT,
  SORT_READ_LATER_BOOKS,
  LOAD_BOOKS,
  LOAD_BOOKS_ON_SCROLL,
  SET_TOTAL_FETCHED_BOOKS,
  SET_ERROR_MESSAGE,
  ROTATE_SORT_ICON,
  SET_SELECT_VALUE,
  ADD_TO_READ_LATER,
  REMOVE_FROM_READ_LATER
} from "./actionTypes";

export const setUserInput = input => {
  return {
    type: SET_USER_INPUT,
    input
  };
};

export const setSubmittedInput = submittedInput => {
  return {
    type: SET_SUBMITTED_INPUT,
    submittedInput
  };
};

export const setTotalFetchedBooks = totalFetchedBooks => {
  return {
    type: SET_TOTAL_FETCHED_BOOKS,
    totalFetchedBooks
  };
};

export const setErrorMessage = errorMessage => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage
  };
};

export const loadBooks = books => {
  return {
    type: LOAD_BOOKS,
    books
  };
};

export const loadBooksOnScroll = newBooks => {
  return {
    type: LOAD_BOOKS_ON_SCROLL,
    newBooks
  };
};

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

export const addToReadLater = addedBook => {
  return {
    type: ADD_TO_READ_LATER,
    addedBook
  };
};

export const removeFromReadLater = removedBook => {
  return {
    type: REMOVE_FROM_READ_LATER,
    removedBook
  };
};

export const sortReadLaterBooks = sortedBooks => {
  return {
    type: SORT_READ_LATER_BOOKS,
    sortedBooks
  };
};
