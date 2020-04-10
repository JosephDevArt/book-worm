import {
  LOAD_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_FOLLOWING_USERS,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  followingUsers: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case FOLLOW_USER: {
      const followedUser = state.users.find(
        (user) => user.id === action.userId
      );
      return {
        ...state,
        followingUsers: [...state.followingUsers, followedUser],
      };
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        followingUsers: [
          ...state.followingUsers.filter((user) => user.id != action.userId),
        ],
      };
    }
    case SET_FOLLOWING_USERS: {
      return {
        ...state,
        followingUsers: action.followingUsers,
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
