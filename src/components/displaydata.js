import React from "react";
import { useSelector } from "react-redux";
import { Link,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Displaydata=()=>{
    const Navigate=useNavigate();
    
useSelector((state)=>{console.log(state)})
    let userData=useSelector((state)=>state.unsplash.value)
    console.log(userData)
        return(
<div>
    <Link to="home" >Home</Link>
    {userData&&(<h1>{userData}</h1>)}
    <button onClick={()=>{Navigate("home")}}>gotohome</button>
</div>
        )
   
}
export default Displaydata;