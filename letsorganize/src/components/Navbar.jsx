
import React from "react";
import Favorite from "./Favorite";
import Overview from "./Overview";
import BuyYourItem from "./BuyYourItem";
const Navbar = (props) => (
  <div className="">
    { 
    <div id="sidebar">
    <header>
      <div className="elementAdmin" onClick={()=>{props.changeView("AdminAuth")}}>Tunisia ShowRoom</div>
    </header>
    <ul className="nav">
      
      <Favorite changeView={props.changeView}/>
      <Overview changeView={props.changeView} fetchingdata={props.fetchingdata}  /* BringClothes={props.BringClothes} *//>
      <BuyYourItem changeView={props.changeView}/>
      
      
      
      
    
    </ul>
  </div>

    }
    

  </div>
);

export default Navbar;

