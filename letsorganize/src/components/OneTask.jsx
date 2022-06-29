import React from "react";

const OneTask = (props) => {
    {   var x="red"
        if(props.data.Description==="YES"){
            x="green"
    }
    }
  return(  <div id={x} className="TaskBox">
        
        <div>FirstName : {props.data.firstname}</div>
        <div>LastName : {props.data.lastname}</div>
        <div>Email : {props.data.email}</div>
        <div>Phone : {props.data.phone}</div>
        <div>Adresse :{props.data.adresse}</div>
        
        <button id="deletemail" onClick={()=>{console.log(props.data.id);props.deletetask(props.data.id)}}>Remove</button>
        <button id="updatemail" onClick={()=>{props.UpdateTask(props.data.id)}}>Done</button>
    </div>)
}

export default OneTask;
//remove item 