
import React from "react";
import Favorite from "./Favorite";
import Overview from "./Overview";
import RemoveItem from "./RemoveItem";
import BuyYourItem from "./BuyYourItem";
import UpdateItem from "./UpdateItem";


const Navbar = (props) => (
  <div className="">
    { 
    <div id="sidebar">
    <header>
      <a href="#">Tunisia ShowRoom</a>
    </header>
    <ul className="nav">
      
      <Favorite changeView={props.changeView}/>
      <Overview changeView={props.changeView}  /* BringClothes={props.BringClothes} *//>
      <BuyYourItem changeView={props.changeView}/>
      
      
      
      
    
    </ul>
  </div>

    }
    

  </div>
);

export default Navbar;

