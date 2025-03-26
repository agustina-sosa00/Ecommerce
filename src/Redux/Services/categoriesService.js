import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'apiCategories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
