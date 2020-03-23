import {
  SET_SUBMITTED_INPUT,
  SORT_READ_LATER_BOOKS,
  LOAD_BOOKS,
  LOAD_BOOKS_ON_SCROLL,
  SET_TOTAL_FETCHED_BOOKS,
  SET_ERROR_MESSAGE,
  ADD_TO_READ_LATER,
  REMOVE_FROM_READ_LATER,
  SET_IS_FETCHING
} from "./actionTypes";

import { handleFetch } from "./api";

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

export const setIsFetching = bool => {
  return {
    type: SET_IS_FETCHING,
    bool
  };
};

//---- REDUX THUNK ---- async actions

export const getBooks = userInput => {
  if (!userInput.trim()) {
    throw Error;
  }
  return (dispatch, getState) => {
    const { errorMessage } = getState().booksReducer;
    dispatch(setSubmittedInput(userInput)); //store first userInput so that on scroll appropriate books will be loaded
    dispatch(setIsFetching(true));
    handleFetch(userInput, 0)
      .then(data => {
        if (data.totalItems === 0) {
          dispatch(setIsFetching(false));
          dispatch(setErrorMessage("No Books Found."));
          dispatch(setTotalFetchedBooks(0));
          dispatch(loadBooks([]));
        } else {
          errorMessage && dispatch(setErrorMessage(""));
          dispatch(setTotalFetchedBooks(data.totalItems));
          dispatch(loadBooks(data.items));
          dispatch(setIsFetching(false));
        }
      })
      .catch(err => {
        dispatch(setIsFetching(false));
        console.log(err);
      });
  };
};

export const getBooksOnScroll = (books, submittedInput) => {
  return (dispatch, getState) => {
    const { isFetching } = getState().booksReducer;
    if (isFetching || books.length < 20) {
      /*
       prevent invoking if:
      waiting for server response or if
      there is nothing to load
      */
      return;
    }
    //---BELOW--- check if last book at the bottom of the page
    let lastLi = document.querySelector(".books li:last-child");
    let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastLiOffset) {
      //---ABOVE--- check if last book at the bottom of the page
      dispatch(setIsFetching(true));
      handleFetch(submittedInput, books.length).then(data => {
        dispatch(loadBooksOnScroll(data.items)); //load first 20 books + 20 books each time when scrolled to the bottom
        dispatch(setIsFetching(false));
      });
    }
  };
};
