import {
  LOAD_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_FOLLOWING_USERS,
} from "./actionTypes";

export const loadUsers = (users) => ({ type: LOAD_USERS, users });

export const setFollowingUsers = (followingUsers) => ({
  type: SET_FOLLOWING_USERS,
  followingUsers,
});

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });

export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });

// ---- REDUX THUNK ---- async actions

export const getUsers = () => (dispatch) => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch(loadUsers(data)));
};
