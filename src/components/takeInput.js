import React,{useState} from "react";
import { data } from "../redux/feauters/fetchslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

let TakeInput=()=>{
    let dispatch=useDispatch();
    const navigate=useNavigate();
let[text,settext]=useState('')

    function getData(e){
        e.preventDefault();
     dispatch(data(text));
     settext("")
     navigate("/")

    }
    return(
        <div>
            <form onSubmit={getData}>
                <input type='text' placeholder="Search Here" onChange={(e)=>{
                    settext(e.target.value)
}} value={text}></input>
                <button>Search</button>
            </form>
        </div>
    )
}
export default TakeInput;