import React from "react";
import { useSelector } from "react-redux";

const Displaydata=()=>{
useSelector((state)=>{console.log(state)})
    let userData=useSelector((state)=>state.unsplash.value)
    console.log(userData)
        return(
<div>
    {userData&&(<h1>{userData}</h1>)}
</div>
        )
   
}
export default Displaydata;