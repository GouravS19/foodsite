import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import slideReducer from "./slideSlice"

export const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            slider:slideReducer,
        }
    }
)