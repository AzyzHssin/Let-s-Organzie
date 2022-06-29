    

import React from "react";
import Items from "./Items"
const FavoritePage = (props) => (
  <div> <h1 className="headpage">Your favorite clothes</h1>
   {
      props.data.map(element=>{
         let key=element.id
      return(  
          
      <Items dataelement={element} key={key} addToFavorite={props.addToFavorite} deleteClothe={props.deleteClothe}/>
      )
       })
}
</div>
);


export default FavoritePage;