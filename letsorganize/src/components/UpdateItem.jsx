import React from "react";

const UpdateItem = (props) => (
    <li>
    <div className="element" onClick={()=>props.changeView("UpdateYourItem")}>
      <i className="zmdi zmdi-widgets"></i> Update Item
    </div>
  </li>
);

export default UpdateItem;