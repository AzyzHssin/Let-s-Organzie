    

import React from "react";
import OneItem from "./OneItem";
const OverviewPage = (props) => (
   <div>
      <h1 className="headpage">Overview</h1>
      
      {
      props.data.map(element=>{
         let key=element.id
      return(      
      <OneItem dataelement={element} key={key} addToFavorite={props.addToFavorite} />
      )
       })
}
   </div>
   
);

export default OverviewPage;