require('dotenv').config();
const express = require('express');
const sslRedirect = require("heroku-ssl-redirect");


const app = express();
app.use(sslRedirect());
const PORT = process.env.PORT || 8000



if(process.env.NODE_ENV === "production"){
    app.use(express.static( "rocket-trading-frontend/build"));
  
    app.get("*", (req,res) => {
      res.sendFile(path.join(__dirname, "rocket-trading-frontend", "build", "index.html"))
    })
  }
  
  
  app.listen(PORT, () => {
    console.log(`server has started successfully on ${PORT}`);
  });