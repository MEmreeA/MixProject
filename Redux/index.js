// reducers/index.js.js

import { combineReducers } from 'redux';
import XReducer from './XReducer';

const rootReducer = combineReducers({
  user: XReducer,
});

export default rootReducer;
