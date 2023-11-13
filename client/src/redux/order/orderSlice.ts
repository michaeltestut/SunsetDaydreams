import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  shippingAddress: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState: { value: initialState },
  reducers: {},
});

export default orderSlice.reducer;
