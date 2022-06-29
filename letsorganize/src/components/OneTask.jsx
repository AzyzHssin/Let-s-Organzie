import React from "react";

const OneTask = (props) => (
    <div className="TaskBox">
        <div>FirstName : {props.data.firstname}</div>
        <div>LastName : {props.data.lastName}</div>
        <div>Email : {props.data.email}</div>
        <div>Phone : {props.data.Phone}</div>
        <div>Adresse :{props.data.adresse}</div>
        <div>Description :{props.data.description}</div>
    </div>
);

export default OneTask;
//remove item 