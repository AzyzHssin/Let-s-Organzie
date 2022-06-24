import React from "react";

const SellYourItem = (props) => (
    <li>
    <div className="element" onClick={()=>props.changeView("SellYourItem")}>
      <i className="zmdi zmdi-widgets"></i> Sell Your Item
    </div>
  </li>
);

export default SellYourItem;