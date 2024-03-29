import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import { updateCart } from "../../utils/cartUtils";







const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : {
  cartItems: [],
  itemsPrice: 0,
  shippingAddress: {},
  paymentMethod: '',
};



//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x: any) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x: any) => x._id === existItem._id ? item : x)
      } else {
        state.cartItems = [...state.cartItems, item]
      }

      return updateCart(state)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x: any) => x._id !== action.payload)
      return updateCart(state)
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    }


  },
});

export const { addToCart, removeFromCart, saveShippingAddress } = cartSlice.actions

export default cartSlice.reducer;
