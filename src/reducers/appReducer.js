import { SET_IS_INITIALIZED } from "./../actions/actionTypes";

const initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_INITIALIZED: {
      return {
        isInitialized: true,
      };
    }
    default: {
      return state;
    }
  }
};
export default appReducer;
