import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import slideReducer from "./slideSlice"
import topReducer from "./topResSlice"
import normalResReducer from "./normalResSlice"
import cartReducer from './cartSlice'

export const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            slider:slideReducer,
            topRes:topReducer,
            normalRes:normalResReducer,
            cart:cartReducer,
        }
    }
)