import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './phonebook/slice';

export const store = configureStore({
  reducer: {
    phonebook: phoneBookSlice.reducer,
  },
});
