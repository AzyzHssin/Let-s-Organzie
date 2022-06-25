import React from "react";

const Items = (props) => (
    
    <div className="container">
        <img src={props.data.imageUrl}/>
        <p className="name">{props.data.name}</p>
        <p className="price">{props.data.price} DT</p>
        <p className="instock">{props.data.inStock}</p>
        <p className="articleLeft">{props.data.articleLeft} article left</p>
    
        
</div>
);

export default Items;
//remove item 