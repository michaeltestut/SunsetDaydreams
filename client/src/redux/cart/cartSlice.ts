import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";






const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : {
  cartItems:[],
itemsPrice:0};
  
const addDecimals = (num:number) =>{
  return Math.round((num*100)/100).toFixed(2)
}


//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state,action)=>{
      const item = action.payload;
   
      const existItem = state.cartItems.find((x:any)=>x._id === item._id);

      if(existItem){
        state.cartItems = state.cartItems.map((x:any)=>x._id === existItem._id ? item : x)
      } else {
        state.cartItems = [...state.cartItems, item]
      }

      // calculate items price
      state.itemsPrice = addDecimals(state.cartItems.reduce((acc:number,item:any)=>acc + item.price * item.qty, 0));

      state.shippingPrice = addDecimals(state.itmesPrice>100 ? 0 : 10)

      state.taxPrice = addDecimals(Number((0.1 * state.itemsPrice).toFixed(2)))

      state.totalPrice = (
        Number(state.itemsPrice)+
        Number(state.shippingPrice)+
        Number(state.taxPrice)).toFixed(2)
      
      localStorage.setItem('cart', JSON.stringify(state))
    }

  },
});

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer;
