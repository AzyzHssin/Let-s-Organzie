
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import $ from "jquery"
import FavoritePage from './components/FavoritePage';
import OverviewPage from './components/OverviewPage';
import RemoveItemPage from './components/RemoveItemPage';
import SellYourItemPage from './components/SellYourItemPage';
import UpdateItemPage from './components/UpdateItemPage';
import axios from "axios"
class App extends React.Component {
  constructor(props) {
    
    super(props);
    
   
    this.state = {
      FavoriteData:[],
      view: "OverView",
      bigdata:[
        {"id":1000,"name":"Black Tshirt","price":40.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/800/e8df891e9dda9a5adf50189c326ff3d7-2695880800_2_13_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":11,"categorie":"Tshirt"},{"id":111,"name":"Black Hoodie","price":80.9,"imageUrl":"https://static.bershka.net/4/photos2/2022/V/0/2/p/2234/498/800/b86d18c854e20950cbfd4c18855df34a-2234498800_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":17,"categorie":"hoodies"},
      {"id":222,"name":"Purple Hoodie","price":80.9,"imageUrl":"https://static.bershka.net/4/photos2/2022/V/0/2/p/2233/478/612/8427cbb56ca137f787c15f5e53c55dd7-2233478612_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":4,"categorie":"hoodies"},
      
     
      {"id":1006,"name":"Long sand color Coat","price":399.0,"imageUrl":"https://static.zara.net/photos///2022/V/0/1/p/5070/470/711/2/w/437/5070470711_1_1_1.jpg?ts=1640100119607","inStock":"InStock","articleLeft":4,"categorie":"Coat"},
      
      {"id":555,"name":"Jean Carrot fit","price":150.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/0530/251/428/623245582ee84ac368ad9adb4fb49174-0530251428_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium","inStock":"InStock","articleLeft":9,"categorie":"Trousers"},
      {"id":666,"name":"Jean Slim","price":99.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/0530/251/433/32a730b8e58bbc9a06ba775b289e927c-0530251433_2_19_0.jpg?imwidth=850&impolicy=bershka-itxmedium","inStock":"InStock","articleLeft":20,"categorie":"Trousers"},
      {"id":333,"name":"Pink Hoodie","price":80.9,"imageUrl":"https://static.bershka.net/4/photos2/2022/V/0/2/p/7325/498/902/11f29a395362d27bb622e3b575417d55-7325498902_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":12,"categorie":"hoodies"},
      {"id":777,"name":"Super Skinny Jean","price":70.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/5416/534/401/d90b430ef55cf75abd58c76166c968fa-5416534401_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow","inStock":"InStock","articleLeft":14,"categorie":"Trousers"},
      {"id":888,"name":"Black carrot fit Jean","price":120.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/0548/388/800/f206beb485021841c7280b9ed893dede-0548388800_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium","inStock":"InStock","articleLeft":10,"categorie":"Trousers"},
      {"id":999,"name":"Skinny Light Jeans","price":130.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/5416/534/428/3487822cbca23c21fda9629b815a0dbc-5416534428_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow","inStock":"Out of Stock","articleLeft":0,"categorie":"Trousers"},
      
      {"id":1001,"name":"Purple Tshirt","price":40.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/611/22a68b8704498e275e846de37e73284e-2695880611_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":21,"categorie":"Tshirt"},
      
      {"id":1003,"name":"White Tshirt","price":40.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/250/9b86b880691ae2dffd103d6d4e384887-2695880250_2_13_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":16,"categorie":"Tshirt"},
      {"id":1004,"name":"Long grey Coat","price":399.0,"imageUrl":"https://static.zara.net/photos///2022/V/0/1/p/5070/470/802/2/w/437/5070470802_2_1_1.jpg?ts=1640680894592","inStock":"InStock","articleLeft":3,"categorie":"Coat"},
      
      {"id":444,"name":"Orange Hoodie","price":80.9,"imageUrl":"https://static.bershka.net/4/photos2/2022/V/0/2/p/7325/498/615/91270ad09cd090591a33c1076dc06ee5-7325498615_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":25,"categorie":"hoodies"},{"id":1005,"name":"Long black Coat","price":399.0,"imageUrl":"https://static.zara.net/photos///2022/V/0/2/p/4155/413/801/2/w/750/4155413801_1_1_1.jpg?ts=1639558775742","inStock":"InStock","articleLeft":1,"categorie":"Coat"},
      {"id":1002,"name":"Light Blue Tshirt","price":40.0,"imageUrl":"https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/106/57dadf3740bc7e247fdc942e0e5d4dc9-2695880106_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium","inStock":"InStock","articleLeft":8,"categorie":"Tshirt"},
    
    ],
      

      }; 
     /*  this.changeViewSearch=this.changeViewSearch.bind(this) */
    this.changeView = this.changeView.bind(this);
    this.addToFavorite= this.addToFavorite.bind(this);
    /* this.BringClothes=this.BringClothes.bind(this) */
    }
/* BringClothes(){
  console.log("bringcolthes is invoked")
  $.ajax({
    type: 'GET',
    url:"http://localhost:3001/getAll",
    dataType:"json",
    success: (err,res)=>{console.log(res)}
    })   
  } */
  
  changeView(view) {
    this.setState({
      view: view,
      
    });
  }

  addToFavorite(article){
    var filtered=this.state.FavoriteData.filter((element)=>element.id===article.id)
    if(filtered.length==0){

      this.state.FavoriteData.push(article)
    }
  }

  

  renderView() {
   if(this.state.view==="Favorite"){
    return(
      <FavoritePage data={this.state.FavoriteData}/>
    )
    }

  else if(this.state.view==="Overview"){
      return(
        <OverviewPage data={this.state.bigdata} addToFavorite={this.addToFavorite}/>
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