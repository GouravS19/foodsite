import { createSlice } from "@reduxjs/toolkit";
import { deepEqual } from "./objEqul";
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            // state.pop(action.payload)


            // console.log(action.payload)
            // const ind=state.indexOf(action.payload)
            // state.splice(ind,1)
            for(let i=0;i<state.length;i++){
                let orgIdis=action.payload.card.info.id 
                let iterativeIdis=state[i].card.info.id
                if(orgIdis==iterativeIdis){
                    state.splice(i,1)
                    return state
                    
                }
                // return state
            }
            
            // for(let i=0;i<state.length-1;i++){
            //     let val=deepEqual(state[i],action.payload)
            //     if(val){
            //         let ind=state.indexOf(action.payload)
            //         state.splice(ind,1)
            //         break
            //     }
            // }
            // return state
        },
        clearCart:(state,action)=>{
            return []
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem,clearCart}=cartSlice.actions