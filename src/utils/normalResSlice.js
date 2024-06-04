import { createSlice } from "@reduxjs/toolkit";
import { addRes } from "./topResSlice";

const normalResSlice=createSlice({
    name:"normalRes",
    initialState:[],
    reducers:{
        addRes:(state,action)=>{return action.payload},
        
    }
})

export default normalResSlice.reducer
export const {addNormalRes}=normalResSlice.actions