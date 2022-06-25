const clothes = require("../models/clothes")

module.exports={
    getAllclothes:function(req,res){
      res.send("hello")
        /* console.log("hello")
  console.log("i m inside the express")
              clothes.getAll(function(err,results){
                if(err){console.log(err); } 
                else{res.json(results) } 
              })
                 */
                
    }
}