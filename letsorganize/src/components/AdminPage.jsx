


import React from "react";
import OneTask from "./OneTask";
class AdminPage extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        
     
    };
    
    }
    
  
    
    render(){
      return(  <div className="mailBox">
        { this.props.tasks.map((element,index)=>{
          
         
          return   <OneTask data={element} key={index} deletetask={this.props.deletetask} UpdateTask={this.props.UpdateTask}/>
        })
    }
    </div>)
    }
   
}
export default AdminPage;












