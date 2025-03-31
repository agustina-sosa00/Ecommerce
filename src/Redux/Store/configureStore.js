import { configureStore } from '@reduxjs/toolkit';
import { categoriesState } from './categoriesSlice';
import { categoriesApi } from '../Services/categoriesService';
import { productsApi } from '../Services/productsServices';
import { productsState } from './productsSlice';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    categories: categoriesState.reducer,
    products: productsState.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(productsApi.middleware),
});

// middleware debe devolver un unico array, es decir que al ejecutar getDefaultMiddleware se obtiene un array. Por lo cual debe ser ejecutado solo una vez y luego concatenar el middleware para cada api
