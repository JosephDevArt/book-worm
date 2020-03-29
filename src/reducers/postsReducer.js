import { LOAD_POSTS } from "../actions/actionTypes";

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    default:
      return {
        ...state
      };
  }
};

export default postReducer;
