import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/Slice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
