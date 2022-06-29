

import React from "react";

const Overview = (props) => (
    <li>
    <div className="element" onClick={()=>{props.changeView("Overview") ;/* props.fetchingdata() */ }}>
      <i className="zmdi zmdi-widgets" ></i> Overview
    </div>
  </li>
);

export default Overview;