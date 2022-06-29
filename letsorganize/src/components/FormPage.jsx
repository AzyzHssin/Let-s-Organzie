


import React from "react";

class FormPage extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        firstname:"",
        lastname:"",
        password:"",
        email:"",
        phone:"",
        adresse:"",
        Description:"NO",
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAdresse = this.handleChangeAdresse.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    
    }
    handleChangeUsername(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleChangeLastname(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleChangeEmail(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleChangePhone(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleChangeAdresse(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleChangeDescription(event){
        this.setState({[event.target.id] : event.target.value});
        
        console.log(this.state)
    }
    handleSubmit(event){
        event.preventDefault(); 
        
    }
    render(){
       return( <div>
    
<div className="container">
  <div id="Checkout" className="inline">
      <h1>Pay Invoice</h1>
      <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
      </div>
      <form>
          <div className="form-group">
              <label for="PaymentAmount">Payment amount</label>
              <div className="amount-placeholder">
                  <span>$</span>
                  <span>{this.props.money}</span>
              </div>
          </div>
          <div className="form-group">
              <label or="firstname">First Name</label>
              <input id="firstname" className="form-control" type="text" maxlength="255" onChange={this.handleChangeUsername}></input>
          </div>
          <div className="form-group">
              <label for="lastname">Last Name</label>
              <input id="lastname" className="form-control" type="text" onChange={this.handleChangeLastname}></input>
          </div>
          
          <div className="form-group">
              <label for="email">Email</label>
              <input id="email" className="form-control" type="text" onChange={this.handleChangeEmail}></input>
          </div>
          <div className="form-group">
              <label for="phone">Phone</label>
              <input id="phone" className="form-control" type="text" onChange={this.handleChangePhone}></input>
          </div>
          <div className="form-group">
              <label for="Adresse">Address</label>
              <input id="adresse" className="form-control" type="text" onChange={this.handleChangeAdresse}></input>
          </div>
          
          
          
          <div class="zip-code-group form-group">
              <label for="ZIPCode">ZIP/Postal code</label>
              <div class="input-container">
                  <input id="ZIPCode" class="form-control" type="text" maxlength="10"></input>
                  <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
              </div>
          </div>
          <button id="PayButton" class="btn btn-block btn-success submit-button" type="submit" onClick={()=>{this.props.addTask(this.state);alert("Your Clothes will be sended to you soon");}}>
              <span class="submit-button-lock"></span>
              <span class="align-middle">Pay {this.props.money}</span>
          </button>
      </form>
  </div>
</div>
</div>)
    }
   
}
export default FormPage;
































