

import axios from "axios";
import React from "react";
import OneTask from "./OneTask";
class AdminPage extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        tasks:[]
     
    };
    this.GetCommands()
    }
    GetCommands(){
        axios.get("http://localhost:3001/admin").then(result=>{
        console.log(result.data,"test")
        this.setState({
            tasks:result.data
        })
    })
    }
    
    render(){
        <div>
        { this.state.tasks.map((element,index)=>{
          console.log(element, "inside the map of tasks")
         
          return   <OneTask data={element} key={index} />
        })
    }
    </div>
    }
   
}
export default AdminPage;












