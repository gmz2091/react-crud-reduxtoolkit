// Slicess redux toolkit store with congigureStore

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

// eslint-disable-next-line consistent-return
export const fetAllUser = () => async (dispatch) => {
  try {
    const res = await axios.get('https://reqres.in/api/users?per_page=12');
    const { data } = res.data;
    dispatch(setUserList(data));
  } catch (error) {
    console.log(error);
  }
};
