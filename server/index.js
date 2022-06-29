const express = require('express');
const cors = require('cors')
//Create an Express App
const {connection} = require("./database/index")
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/overview', (req, res) => {  
  
  const sqlget=`select * from clothes;`
  connection.query(sqlget,function(err,result){
    if(err){res.status(500).send(error);}
    else{
      res.json(result)
    }
  })
});
app.post("/overview",function(req,res){
  console.log(req.body)
  const sqlpost=`insert into clothes(name,price,imageUrl,inStock,articleLeft)  values(?,?,?,?,?);`
  connection.query(sqlpost,[req.body.name,req.body.price,req.body.imageUrl,req.body.inStock,req.body.articleLeft],function(error,results,fields){
    if(error){
      res.status(500).send(error);
    }
    else{
      res.send("Clothes was added to database successfully")
    }
  })
})
/* ------------------------------------------------------------------------------- */
app.post("/favorites",function(req,res){
  console.log(req.body)
  const sqlpost=`insert into favorites(name,price,imageUrl,inStock,articleLeft)  values(?,?,?,?,?);`
  connection.query(sqlpost,[req.body.name,req.body.price,req.body.imageUrl,req.body.inStock,req.body.articleLeft],function(error,results,fields){
    if(error){
      res.status(500).send(error);
    }
    else{
      res.send("Clothes was added to database successfully")
    }
  })
})

app.get('/favorites', (req, res) => {  
  
  const sqlget=`select * from favorites;`
  connection.query(sqlget,function(err,result){
    if(err){res.status(500).send(error);}
    else{
      res.json(result)
    }
  })
});

app.delete("/deleteFavorite/:id",(req,res)=>{
  console.log(req.params.id,"the id to delete")

  const sqldelete =`DELETE FROM favorites WHERE idcolthes=${req.params.id};`
  connection.query(sqldelete,function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("Clothes was deleted successfully")
    }
  })
})
app.post("/Task",function(req,res){
  console.log(req.body)
  const sqlpost=`insert into Tasks(firstname,lastname,email,phone,adresse,Description)  values(?,?,?,?,?,?);`
  connection.query(sqlpost,[req.body.firstname,req.body.lastname,req.body.email,req.body.phone,req.body.adresse,req.body.Description],function(error,results,fields){
    if(error){
      res.status(500).send(error);
    }
    else{
      res.json("the delivery will be send to in in less than 48 hours")
    }
  })
})
app.delete("/task/:id",function(req,res){
  console.log(req.params.id,"the id to delete")

  const sqldelete =`DELETE FROM Tasks WHERE id=${req.params.id};`
  connection.query(sqldelete,function(err,result){
    if(err){res.status(500).send(error);}
    else{
      res.json(result)
    }
  })
})

app.get("/Task",function(err,res){
  const sqlget=`select * from Tasks;`
  connection.query(sqlget,function(err,result){
    if(err){res.status(500).send(error);}
    else{
      res.json(result)
    }
  })
})
app.put("/Tasks/:id",(req,res)=>{
  console.log(req.body)
  console.log(req.params)
  console.log("im inside update")
  const sqlupdate =`UPDATE Tasks SET Description = "YES" WHERE id=${req.params.id};`
  connection.query(sqlupdate,function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("Todo was updated successfully")
    }
  })
})


let port = 3001;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app; // export the express app.