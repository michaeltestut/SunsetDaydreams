
import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  products:[],
}

export const productSlice = createSlice({
  name: "product",
  initialState: { value: initialState },
 reducers:{
 },
});
export default productSlice.reducer;