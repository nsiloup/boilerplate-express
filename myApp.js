require('dotenv').config()
var express = require('express');
var app = express();

let path =(rel)=> __dirname + rel;

app.use("/public", express.static(path("/public")));
app.get('/', (req, res) => {
    res.sendFile(path("/views/index.html"))
})


app.get('/json', (req, res)=>{
    let myMsg = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": `${myMsg.toUpperCase()}`})
    }else{
        res.json({"message": `${myMsg}`})
    }
})

module.exports = app;