
import './App.css';
import Navbar from './components/Navbar';
import React from "react";

import DashboardPage from './components/DashboardPage';
import OverviewPage from './components/OverviewPage';
import RemoveItemPage from './components/RemoveItemPage';
import SellYourItemPage from './components/SellYourItemPage';
import UpdateItemPage from './components/UpdateItemPage';
import axios from "axios"
class App extends React.Component {
  constructor(props) {
    
    super(props);
    
   
    this.state = {
      
      view: "OverView",
      data:[],
      

      }; 
     /*  this.changeViewSearch=this.changeViewSearch.bind(this) */
    this.changeView = this.changeView.bind(this);
    this.BringClothes=this.BringClothes.bind(this)
    }
BringClothes(){
  console.log("bringcolthes is invoked")
  axios.get("/clothes").then((error ,response)=>{
    if(error){
      console.log(error)
    }
    else{

      this.setState({Data:response.data})
    }
  })
}
 
  
 

  changeView(view) {
    this.setState({
      view: view,
      
    });
  }

  

  

  renderView() {
   if(this.state.view==="Dashboard"){
    return(
      <DashboardPage/>
    )
    }

  else if(this.state.view==="Overview"){
      return(
        <OverviewPage data={this.state.data}/>
      )
   }
   else if(this.state.view==="RemoveItem"){
    return(
      <RemoveItemPage/>
    )
 }
 else if(this.state.view==="SellYourItem"){
  return(
    <SellYourItemPage/>
  )
}
else if(this.state.view==="UpdateYourItem"){
  return(
    <UpdateItemPage/>
  )
}

  }

  render() {
    return (
      <div>
        <Navbar changeView={this.changeView} BringClothes={this.BringClothes}/>
        <div className='middle'>
          {this.renderView()}

        </div>
      </div>
      
    )
    }
    

}

export default App;