

import React from "react";
class AdminAuth extends React.Component{
    constructor(props){
        super(props)
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {

      username:"",
      password:""
    };
    }
    handleChangeUsername(event) {
      
         this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
      }
    handleChangePassword(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }

     handleSubmit(event) {
    
      event.preventDefault(); 
      this.props.VerifyAdmin(this.state)
      console.log(this.state,'data')
     }
    
    render(){
        return ( 
            <div className="adminContainer">
       <h1>Admin Dashboard </h1>
       <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" id="username" className=".input-box"onChange={this.handleChangeUsername}></input>
      <label className="userlabel">Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" id ="password" className=".input-box" onChange={this.handleChangePassword}></input>
      <label className="passwordlabel">Password</label>
    </div>
    
    <a onClick={()=>{props.VerifyAdmin}} >
      
      Submit
    </a>
  </form>
</div>
        
</div>
        )
    }
   
}
export default AdminAuth;












