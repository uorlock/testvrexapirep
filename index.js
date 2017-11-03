const express = require('express');

// set up express app
const app = express();

// initialize router
app.use('/api', require('./routes/api'));

// app listen port process.env.PORT
process.env.PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, function(){
  console.log("Server listening port " + (process.env.PORT));
});
//comment
