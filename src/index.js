import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import booksReducer from "./reducers/booksReducer";
import sortReducer from "./reducers/sortReducer";
import readLaterReducer from "./reducers/readLaterReducer";

const rootRedcuer = combineReducers({
  booksReducer: booksReducer,
  sortReducer: sortReducer,
  readLaterReducer: readLaterReducer
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
