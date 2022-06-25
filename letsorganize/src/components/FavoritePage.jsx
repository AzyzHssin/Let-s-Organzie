    

import React from "react";
import Items from "./Items"
const FavoritePage = (props) => (
  <div> <h1 className="headpage">Your favorite clothes</h1>
   {
      props.data.map(element=>{
         let key=element.id
      return(  
          
      <Items dataelement={element} key={key} /* addToFavorite={props.addToFavorite} */ />
      )
       })
}
</div>
);


export default FavoritePage;