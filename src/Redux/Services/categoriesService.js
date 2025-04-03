import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'apiCategories',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_STORE_API }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'products/categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
