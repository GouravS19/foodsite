import { combineSlices, createSlice } from "@reduxjs/toolkit";

const topResSlice=createSlice({
    name:"topRes",
    initialState:[],
    reducers:{
        addRes:(state,action)=>{
            return action.payload 
        }
    }
})

export default topResSlice.reducer
export const {addRes}=topResSlice.actions