import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginSlice from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
