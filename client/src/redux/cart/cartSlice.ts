import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";


const initialState = {
  cart: [] as Product[],
};

//Actions

//Reducer

//Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: initialState },
  reducers: {},
});

export default cartSlice.reducer;
