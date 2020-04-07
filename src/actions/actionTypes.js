//---- HEADER ----

export const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED";

export const SET_FOLLOWING_USERS = "SET_FOLLOWING_USERS";

//---- NAV ----
export const SLIDE_NAVBAR = "SLIDE_NAVBAR";

//---- HOME ----

export const LOAD_USERS = "LOAD_USERS";

export const FOLLOW_USER = "FOLLOW_USER";

export const UNFOLLOW_USER = "UNFOLLOW_USER";
//---- BOOKS  ----

export const SET_SUBMITTED_INPUT = "SET_SUBMITTED_INPUT";

export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const LOAD_BOOKS = "LOAD_BOOKS";

export const LOAD_BOOKS_ON_SCROLL = "FETCH_BOOKS_ON_SCROLL";

export const SET_TOTAL_FETCHED_BOOKS = "SET_TOTAL_BOOKS";

export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

// ---- SORT  ----

export const ROTATE_SORT_ICON = "ROTATE_SORT_ICON";

export const SET_SELECT_VALUE = "SET_SELECT_VALUE";

//---- READ_LATER  ----

export const ADD_TO_READ_LATER = "ADD_TO_READ_LATER";

export const REMOVE_FROM_READ_LATER = "REMOVE_FROM_READ_LATER";

export const LOAD_READ_LATER_BOOKS = "LOAD_READ_LATER_BOOKS";

//---- POSTS ----
export const LOAD_POSTS = "LOAD_POSTS";

export const RENDERED = "RENDERED";

export const rendered = () => ({ type: RENDERED });
