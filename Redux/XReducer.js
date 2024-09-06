// reducers/XXXReducer.js
import { TOGGLE_DARK_MODE } from './Actions/types';

const initialState = {
  darkMode: false
};

const XReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};

export default XReducer;
