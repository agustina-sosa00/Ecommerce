import { createSlice } from '@reduxjs/toolkit';

export const productsState = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productsState.reducer;
export const { setProducts } = productsState.actions;
