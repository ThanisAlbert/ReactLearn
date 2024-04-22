import { useState } from "react";
import Home from "./Home";
import Contactus from "./Contactus";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";

export default function App() {

  const[color, setColor]=useState("yellow")

  const changeconstcolor = ()=>{   
    setColor("red")
  }

  const changevariablecolor = (colorname)=>{   
    setColor(colorname)
  }

  return (
    <div>

<Header changevariablecolor={changevariablecolor}   changeconstcolor={changeconstcolor} colorname={color}></Header>     
   

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contactus" element={<Contactus />} />
      </Routes>  
    
    <Footer></Footer>
    
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

