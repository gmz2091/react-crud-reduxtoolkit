/* eslint-disable consistent-return */
// Products slice

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    productsB: [],
  },
  reducers: {
    setProductsList: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = action.payload;
    },
    setProducts: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.productsB = action.payload;
    },
  },
});

export const { setProductsList, setProducts } = productsSlice.actions;

export default productsSlice.reducer;

// eslint-disable-next-line consistent-return
export const fetAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
    const { data } = res;
    dispatch(setProductsList(data));
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (body, token) => async (dispatch) => {
  try {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/products`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body,
    });
    dispatch(setProducts({ ...body }));
    dispatch(fetAllProducts());

    // const data = res.json();
    // console.log(await data);
    // return res;
    // const res = await axios.post({
    //   url: 'http://localhost:3000/products',
    //   data: body,
    // });
  } catch (error) {
    console.log(error);
  }
};
