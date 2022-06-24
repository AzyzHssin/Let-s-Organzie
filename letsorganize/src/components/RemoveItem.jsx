import React from "react";

const RemoveItem = (props) => (
    <li>
    <div className="element" onClick={()=>props.changeView("RemoveItem")}>
      <i className="zmdi zmdi-widgets"></i> Remove Item
    </div>
  </li>
);

export default RemoveItem;