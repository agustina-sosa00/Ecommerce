import { createSlice } from '@reduxjs/toolkit';

export const productsState = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsByCat: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductsByCategory: (state, action) => {
      state.productsByCat = action.payload;
    },
  },
});

export default productsState.reducer;
export const { setProducts, getProductsByCategory } = productsState.actions;
