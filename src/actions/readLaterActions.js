import {
  ADD_TO_READ_LATER,
  REMOVE_FROM_READ_LATER,
  LOAD_READ_LATER_BOOKS
} from "./actionTypes";

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

export const loadReadLaterBooks = sortedBooks => {
  return {
    type: LOAD_READ_LATER_BOOKS,
    sortedBooks
  };
};
