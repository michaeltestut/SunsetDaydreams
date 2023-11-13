import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../types/Product'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: builder => ({
      getProducts: builder.query<Product[],void>({
        query: () => '/products'
      })
    })
  })

  export const { useGetProductsQuery } = apiSlice