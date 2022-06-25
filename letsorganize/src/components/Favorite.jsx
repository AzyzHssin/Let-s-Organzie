    

import React from "react";

const Favorite = (props) => (
    <li>
    <div className="element" onClick={()=>{props.changeView("Favorite")}}>
      <i className="zmdi zmdi-view-dashboard"  ></i> Favorite
      
    </div>
  </li>
);

export default Favorite;