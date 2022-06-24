const clothes = require("../models/clothes")

module.exports={
    getAllclothes:function(req,res){
        console.log("hello")
        
            console.log("i m inside the express")
              clothes.getAll(function(err,results){
                if(error) console.log(error);
                      else res.json(results)
              })
                
                
    }
}