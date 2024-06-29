import { createSlice } from "@reduxjs/toolkit";
import slideSlice from "./slideSlice";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.remove(action.payload)
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem}=cartSlice.actions