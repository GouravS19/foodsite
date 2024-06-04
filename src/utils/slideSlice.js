import { createSlice } from "@reduxjs/toolkit";
import { SlideData } from "./mockData/forSlide";

const slideSlice=createSlice(
    {
        name:"slide",
        initialState:SlideData,
        reducers:{
            addSliceRes:(state,action)=>{
                return action.payload
            }
        }
    }
)

export default slideSlice.reducer
export const {addSliceRes} =slideSlice.actions