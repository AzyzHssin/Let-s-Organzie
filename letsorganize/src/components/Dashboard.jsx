    

import React from "react";

const Dashboard = (props) => (
    <li>
    <div className="element" onClick={()=>{props.changeView("Dashboard");console.log(props)}}>
      <i className="zmdi zmdi-view-dashboard"  ></i> Dashboard
    </div>
  </li>
);

export default Dashboard;