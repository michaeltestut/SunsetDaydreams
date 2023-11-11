import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    name: "", 
    email:"",
    password:""
}

export const adminSlice = createSlice({
    name: "admin",
    initialState: {value:initialState},
    reducers: {

    }
})

export default adminSlice.reducer;