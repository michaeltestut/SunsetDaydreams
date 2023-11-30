import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./page/pageSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    cart: cartReducer,
    order: orderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


