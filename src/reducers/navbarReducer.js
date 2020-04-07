import { SLIDE_NAVBAR } from "../actions/actionTypes";

const initialState = {
  navIsOpen: false,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDE_NAVBAR: {
      return {
        navIsOpen: !state.navIsOpen,
      };
    }
    default: {
      return state;
    }
  }
};

export default navbarReducer;
