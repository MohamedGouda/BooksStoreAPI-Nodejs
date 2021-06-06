var express = require('express')
var cors = require('cors');
var bodyparser = require('body-parser')
var storeRouter = require('./Routes/storeRoute')
var bookRouter = require('./Routes/bookRoute')



var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors());


app.get('/' , function(req, res){
    res.send("Welcome In Home Page....");
})

app.use('/api' , storeRouter);
app.use('/api',bookRouter)

app.listen(3000,()=>{
    console.log("server started..........");
})