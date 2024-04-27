import { useState } from "react";
import Home from "./Home";
import Contactus from "./Contactus";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Loginpage from "./Loginpage";
import Success from "./Success";
import Fail from "./Fail";


export default function App() {


  return (
    <div>

      <Routes>
        <Route path="" element={<Loginpage/>} />
        <Route path="home" element={<Home />} />
        <Route path="success" element={<Success />} />
        <Route path="fail" element={<Fail />} />
        <Route path="contactus" element={<Contactus />} />
      </Routes>  
    
    
    </div>
  );
}

 function Header(props){

   return(

    <div className="row">
        Header is in {props.colorname} color
        <button className="col-md-2" onClick={props.changeconstcolor}>Click constcolor</button>
        <button className="col-md-2" onClick={()=>props.changevariablecolor("blue")}>Click variablecolor</button>
        <div className="col-md-2"> col3</div> 
        <div className="col-md-2"> col4</div> 
    </div>

   );

}

