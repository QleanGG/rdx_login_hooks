import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginSlice from '../features/login/loginSlice';
import prodSlice from '../features/products/productsSlicer';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    products: prodSlice
  },
});
