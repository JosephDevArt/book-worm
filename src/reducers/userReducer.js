import { SET_IS_AUTHORIZED } from "../actions/actionTypes";

const initialState = {
  isAuthorized: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: action.isAuthorized,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
