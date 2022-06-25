import React from "react";

const BuyYourItem = (props) => (
    <li>
    <div className="element" onClick={()=>props.changeView("BuyYourItem")}>
      <i className="zmdi zmdi-widgets"></i> Sell Your Item
    </div>
  </li>
);

export default BuyYourItem;