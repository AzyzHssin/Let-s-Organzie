
import React from "react";
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import RemoveItem from "./RemoveItem";
import SellYourItem from "./SellYourItem";
import UpdateItem from "./UpdateItem";


const Navbar = (props) => (
  <div className="">
    { 
    <div id="sidebar">
    <header>
      <a href="#">Tunisia ShowRoom</a>
    </header>
    <ul className="nav">
      
      <Dashboard changeView={props.changeView}/>
      <Overview changeView={props.changeView} BringClothes={props.BringClothes}/>
      <SellYourItem changeView={props.changeView}/>
      <RemoveItem changeView={props.changeView}/>
      <UpdateItem changeView={props.changeView}/>
      
      
      
    
    </ul>
  </div>

    }
    

  </div>
);

export default Navbar;

