import { createSlice } from '@reduxjs/toolkit';

export const categoriesState = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categoriesState.reducer;
export const { setCategories } = categoriesState.actions;
