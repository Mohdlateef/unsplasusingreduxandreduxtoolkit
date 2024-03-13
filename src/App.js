import React from "react";
import TakeInput from "./components/takeInput";
import Displaydata from "./components/displaydata";
import { Route,Routes } from "react-router-dom";
import Home from "./components/home";
const App=()=>{
  return(
    <div>
      <TakeInput/>
      {/* <Displaydata/> */}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="/" element={<Displaydata/>}></Route>
      </Routes>
    </div>

  )
}

export default App;
