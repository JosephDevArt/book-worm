import { SET_IS_AUTHORIZED, RENDERED } from "../actions/actionTypes";

const initialState = {
  isAuthorized: false,
  rendered: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: action.isAuthorized
      };
    }
    case RENDERED: {
      return {
        ...state,
        rendered: state.rendered + 1
      };
    }
    default:
      return state;
  }
};

export default userReducer;
