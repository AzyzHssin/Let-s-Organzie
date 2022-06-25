import React from "react";

const BoughtItems = (props) => (
    
    <div className="container2">
        <img className="img2" src={props.dataelement.imageUrl}/>
        <p className="name">{props.dataelement.name}</p>
        <p className="price2">{props.dataelement.price} DT</p>
        <p className="instock2">{props.dataelement.inStock}</p>
        
    
        
</div>
);

export default BoughtItems;
//remove item 