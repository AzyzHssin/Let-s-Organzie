    

import React from "react";
import OneItem from "./OneItem";
const OverviewPage = (props) => (
   <div>
      <h1>OverviewPage</h1>

      {
      props.data.map(element=>{
      return(   
      <OneItem data={element} />
      )
       })
}
   </div>
   
);

export default OverviewPage;