// Slicess redux toolkit store with congigureStore

import { createSlice } from '@reduxjs/toolkit';

export const userSessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    session: true,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    login: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.session = true;
    },
    logoutSession: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.session = action.false;
    },
  },
});

export const { login } = userSessionSlice.actions;

export default userSessionSlice.reducer;
