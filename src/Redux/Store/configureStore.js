import { configureStore } from '@reduxjs/toolkit';
import { categoriesState } from './categoriesSlice';
import { categoriesApi } from '../Services/categoriesService';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    categories: categoriesState.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});
