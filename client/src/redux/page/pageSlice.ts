import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const pageSlice = createSlice({
  name: "page",
  initialState: { value: initialState },
  reducers: {},
});

export default pageSlice.reducer;
