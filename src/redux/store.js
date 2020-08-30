import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './test-reducer';

const store = configureStore({
  reducer: {
    api: imagesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
