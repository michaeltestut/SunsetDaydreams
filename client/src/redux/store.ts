import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./page/pageSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";
import productReducer from "./product/productSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    cart: cartReducer,
    order: orderReducer,
    product: productReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

