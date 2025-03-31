import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'apiProducts',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_STORE_API }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products/',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
