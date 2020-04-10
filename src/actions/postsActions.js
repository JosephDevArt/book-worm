import { LOAD_POSTS } from "./actionTypes";

export const loadPosts = (posts) => ({ type: LOAD_POSTS, posts });

// ---- REDUX THUNK ---- async actions

export const getPosts = () => (dispatch) => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => dispatch(loadPosts(data)));
};
