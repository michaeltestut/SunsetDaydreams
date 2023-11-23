import { createSlice } from "@reduxjs/toolkit";
import { TOGGLE_DARKTHEME } from "./pageConstants";

type pageState ={
  isDarkMode:boolean;
  isAdmin: boolean
}

//initial state
const initialState = {
  isDarkMode: false,
  isAdmin:false
};

//actions
export const toggleDarkTheme = () => ({
  type: TOGGLE_DARKTHEME,
});
//reducers

//slice
export const pageSlice = createSlice({
  name: "page",
  initialState: { value: initialState },
  reducers: {
    toggleDarkMode: (state) => {
      //@ts-ignore
      state.isDarkMode = !state.isDarkMode;
    },

  },
});

export const {toggleDarkMode} = pageSlice.actions

export default pageSlice.reducer;
