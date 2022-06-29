
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import FavoritePage from './components/FavoritePage';
import OverviewPage from './components/OverviewPage';
import axios from "axios"
import BuyYourItemPage from './components/BuyYourItemPage';
import AdminPage from './components/AdminPage';
import AdminAuth from './components/AdminAuth';
import FormPage from './components/FormPage';
class App extends React.Component {
  constructor(props) {
    
    super(props);
    
   
    this.state = {
      FavoriteData:[],
      view: "",
      bigdata:[],
      

      }; 
      
      this.fetchingdata()
     
     /*  this.changeViewSearch=this.changeViewSearch.bind(this) */
    this.changeView = this.changeView.bind(this);
    this.addToFavorite= this.addToFavorite.bind(this);
    
    }
    /* ------------------------------------------------------------ */
   componentDidUpdate(){
    this.fetchingFavoritedata()
   }
    fetchingdata(){
      axios.get("http://localhost:3001/overview").then(result=>{
        console.log(result.data,"fetch")
        this.setState({
            bigdata:result.data
        })
    })
     }
     fetchingFavoritedata(){
      axios.get("http://localhost:3001/favorites").then(result=>{
        
        this.setState({
            FavoriteData:result.data
        })
    })
     }

     sendingClothe(state){
      axios.post("http://localhost:3001/favorites",state).then(result=>{
       console.log("added to favorite data base")
      })
     }

     
     deleteClothe(id){
      console.log("delete is invoked from the button")
      axios.delete(`http://localhost:3001/deleteFavorite/${id}`).then(result=>{
        console.log(result)
       })
       
     }  
     VerifyAdmin(username,password){
      //when you hundle in express just check rakia and aziz
      
       if((username=="AzizHssin" && password=="TOMORROWLAND2018")||(username=="Rakia" && password=="12345")){
        this.changeView("AdminPage")
       }
       else{
        alert("You are Not Allowed To Access Admin Panel Check your Username or Password again")
       }
      }
     

    Facture(){
      var total=0
      this.state.FavoriteData.forEach(element => {
        
        total+=Number(element.price);
      });
      this.state.money=total
      return total
    }

    deleteItem(id){
      axios.delete(`http://localhost:3000/api/${id}`).then(result=>{
    console.log(result)

   })
    }
  
  changeView(view) {
    this.setState({
      view: view,
      
    });
  }

  addToFavorite(article){
    var filtered=this.state.FavoriteData.filter((element)=>element.id===article.id)
    console.log(filtered)
    
      this.sendingClothe(article)
      
    
  }
addTask(task){
  axios.post("http://localhost:3001/Task",task).then(result=>{
    console.log("added to Tasks database")
   })
}
  

  renderView() {
    if(this.state.view===""){
      return(
       <h1 className='home' >Welcome to our showroom</h1>
       
       
      )
      }
   if(this.state.view==="Favorite"){
    return(
      <FavoritePage data={this.state.FavoriteData} deleteClothe={this.deleteClothe}/>
    )
    }

  else if(this.state.view==="Overview"){
      return(
        <OverviewPage data={this.state.bigdata} addToFavorite={this.addToFavorite}/>
      )
   }
   
 else if(this.state.view==="BuyYourItem"){
 
  return(
    <BuyYourItemPage data={this.state.FavoriteData} total={this.Facture()} changeView={this.changeView}/>
  )
  
}
else if(this.state.view==="AdminAuth"){
 
  return(
    <AdminAuth  changeView={this.changeView} VerifyAdmin={this.VerifyAdmin}/>
  )
 }
 else if(this.state.view==="AdminPage"){
 
  return(
    <AdminPage  />
  )
 }
 else if(this.state.view==="form"){
 
  return(
    <FormPage addTask={this.addTask} money={this.state.money} />
  )
 }
}

  render() {
    return (
      <div>
        <Navbar changeView={this.changeView} fetchingdata={this.fetchingdata} />
        <div className='middle'>
          {this.renderView()}

        </div>
      </div>
      
    )
    }
}

export default App;