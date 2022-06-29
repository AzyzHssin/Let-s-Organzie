import React from "react";

const Items = (props) => (
    
    <div className="container3">
        <img src={props.dataelement.imageUrl}/>
        <p className="name">{props.dataelement.name}</p>
        <p className="price">{props.dataelement.price} DT</p>
        <p className="instock">{props.dataelement.inStock}</p>
        <p className="articleLeft">{props.dataelement.articleLeft} article left</p>
    <button className="deletButton" onClick={()=>{props.deleteClothe(props.dataelement.idcolthes)}}>Remove Article</button>
        
</div>
);

export default Items;
//remove item 