import React from "react";

const Items = (props) => (
    
    <div className="container">
        <img src={props.dataelement.imageUrl}/>
        <p className="name">{props.dataelement.name}</p>
        <p className="price">{props.dataelement.price} DT</p>
        <p className="instock">{props.dataelement.inStock}</p>
        <p className="articleLeft">{props.dataelement.articleLeft} article left</p>
    
        
</div>
);

export default Items;
//remove item 