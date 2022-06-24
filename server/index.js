const express = require('express');
const cors = require('cors')
//Create an Express App
const app = express();
const conn=require("../database/index")
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/clothes",(req,res)=>{
    let sql='SELECT * FROM `clothes`;'
    conn.query(sql, function (error, results, fields) {
            if(error) res.status(500).send(error);
            else res.json(results)
                                                    })
        
      });





let port = 1128;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app; // export the express app.