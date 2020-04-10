import { combineReducers } from "redux";

import booksReducer from "./booksReducer";
import sortReducer from "./sortReducer";
import readLaterReducer from "./readLaterReducer";
import userReducer from "./userReducer";
import homeReducer from "./homeReducer";
import postReducer from "./postsReducer";
import navbarReducer from "./navbarReducer";
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  books: booksReducer,
  sort: sortReducer,
  readLater: readLaterReducer,
  user: userReducer,
  home: homeReducer,
  posts: postReducer,
  navbar: navbarReducer,
});
