import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import booksReducer from "./reducers/booksReducer";
import sortReducer from "./reducers/sortReducer";
import readLaterReducer from "./reducers/readLaterReducer";
import userReducer from "./reducers/userReducer";
import homeReducer from "./reducers/homeReducer";
import postReducer from "./reducers/postsReducer";
import navbarReducer from "./reducers/navbarReducer";
const rootRedcuer = combineReducers({
  books: booksReducer,
  sort: sortReducer,
  readLater: readLaterReducer,
  user: userReducer,
  home: homeReducer,
  posts: postReducer,
  navbar: navbarReducer,
});

const store = createStore(
  rootRedcuer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
