import React from "react";

const OneItem = (props) => (
    
    <div className="container">
        <img src={props.dataelement.imageUrl}/>
        <p className="name">{props.dataelement.name}</p>
        <p className="price">{props.dataelement.price} DT</p>
        <p className="instock">{props.dataelement.inStock}</p>
        <p className="articleLeft">{props.dataelement.articleLeft} article left</p>
        <div class="button" onClick={props.addToFavorite(props.dataelement)}><span class="heart" ></span></div>
        
</div>
);

export default OneItem;