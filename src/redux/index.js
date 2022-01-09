/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
// Config redux toolkit store with congigureStore

import { configureStore } from '@reduxjs/toolkit';
import userSessionSlice from './slices/auth';
import users from './slices/users';
// import userSessionSlice from './slices/auth';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    users,
    sessions: userSessionSlice,
  },
});
