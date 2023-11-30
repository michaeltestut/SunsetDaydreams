import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "../api/apiSlice";
import { Product } from "../../types/Product";




// const initialState = {
//   products:[],
// }

export const productSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    getProducts: builder.query<Product[],void>({
        query: () => PRODUCTS_URL
      }),
      getOneProduct: builder.query<Product,{url_slug: string }>({
        query:(url_slug)=> `${PRODUCTS_URL}/${url_slug}`
    })
  })
})

export const { useGetProductsQuery, useGetOneProductQuery } = productSlice