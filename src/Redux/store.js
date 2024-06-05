import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './UserSlice';

const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});

export default store;
