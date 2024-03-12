import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let intailState={
    value:'',
    loading:false,
    data:[],
    err:[],
}

let fetchdata=createSlice({
    name:"unsplash",
    initialState:intailState,
    reducers:{
      data:(state,action)=>{state.value=action.payload},
        apistart:(state,action)=> {state.loading=true},
      
        apisecuss:(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.err=[]
        },
        apifailure:(state,action)=>{
            state.loading=false
            state.data=[]
            state.err=action.payload
        }

    }
})


export const {data ,apistart,apisecuss,apifailure}=fetchdata.actions;

export function fetchposts(){
     return async(dispatch)=>{
        dispatch(apistart());
        try{
        let respose=await axios.get()
        dispatch(apisecuss(respose.data));
        }
        catch(err){
            dispatch(apifailure(err))
        }


    }


}
const fetchReducer=fetchdata.reducer;
export default fetchReducer;