const express = require("express");

let app=express() ;
const PORT=3000
var cors = require('cors')
var json = require('express-json')
var db = require('./database/index.js')
app.use(cors());
app.use(express.json())  

app.use(express.urlencoded({extended:true}))


  var login=require("./routers/login")

app.use('/api/auth',login)



const server = app.listen(PORT, function(){
    console.log('server is running at %s', server.address().port);
});

