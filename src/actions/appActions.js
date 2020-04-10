import { SET_IS_INITIALIZED } from "./actionTypes";

import { getPosts } from "./postsActions";
import { getUsers } from "./homeActions";

export const setIsInitialized = () => ({ type: SET_IS_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  //initialize App after posts and users have been fetched
  dispatch(getPosts());
  dispatch(getUsers());

  let posts = dispatch(getPosts());
  let users = dispatch(getUsers());

  Promise.all([posts, users]).then(() => {
    dispatch(setIsInitialized());
  });
};
