import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";
import type { RootState } from "../store";

const initialState = {
  cart: [] as Product[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: initialState },
  reducers: {},
});

export default cartSlice.reducer;
