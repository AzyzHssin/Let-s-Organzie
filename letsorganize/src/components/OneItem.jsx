import React from "react";

const OneItem = (props) => (
    
    <div className="container">
        <img src={props.data.imageUrl}/>
        <p className="name">{props.data.name}</p>
        <p className="price">{props.data.price} DT</p>
        <p className="instock">{props.data.inStock}</p>
        <p className="articleLeft">{props.data.articleLeft} article left</p>
        <button class="button"><span class="heart" onClick={props.addToFavorite(props.data)}></span></button>
        
</div>
);

export default OneItem;