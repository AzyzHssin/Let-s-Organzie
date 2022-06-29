import React from "react";
import BoughtItems from "./BoughtItems"
const BuyYourItemPage= (props) => (
   <div>
   <h1>Do you want to buy these?</h1>

{
props.data.map(element=>{
   let key=element.id
return(      
<BoughtItems dataelement={element} key={key}  />
)
 })
}
<div className="TotalBox">
   <p className="totalmessage">Payment amount <p>{props.total}</p> </p>
   <button className="send" onClick={()=>{props.changeView("form");}}>Buy Now</button>
   </div>
</div>
);

export default BuyYourItemPage;