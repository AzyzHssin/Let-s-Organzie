const express = require('express');
const cors = require('cors')
//Create an Express App
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
const  clothesRoute= require('./routes/clothes');
app.use("/",clothesRoute)






let port = 3001;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app; // export the express app.