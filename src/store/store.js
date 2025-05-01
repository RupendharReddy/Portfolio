// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../reducers/contactReducer';
import visitorReducer from '../reducers/visitorReducer';
import authReducer from '../reducers/authReducer'; // ✅ Import the missing reducer

const store = configureStore({
  reducer: {
    contact: contactReducer,
    visitor: visitorReducer,
    auth: authReducer, // ✅ Add it here
  },
});

export default store;
