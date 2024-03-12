import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../feauters/fetchslice";


let store=configureStore({
    reducer:{
        unsplash:fetchReducer,
        
    }
})
export default store;