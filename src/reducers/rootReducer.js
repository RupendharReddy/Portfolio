import { combineReducers } from '@reduxjs/toolkit';
import contactReducer from './contactReducer';
import visitorReducer from './visitorReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
  visitor: visitorReducer,
  auth: authReducer,
});

export default rootReducer;
