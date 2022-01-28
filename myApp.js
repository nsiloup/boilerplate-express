require('dotenv').config()
let bodyParser = require("body-parser"); //Use body-parser to Parse POST Requests
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({"extended": false}));//Use body-parser to Parse POST Requests


let logger = (req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}
app.use(logger)



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

app.get('/now', (req, res, next)=>{
    req.time =  new Date().toString();
    next()
    },
    
    (req, res)=>{
        res.send({"time" : req.time})
    },
);

//Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res)=>{
    let wrd = req.params.word;
    res.json({"echo":wrd})
})

//Get Query Parameter Input from the Client
app.get('/name', (req, res)=>{
    let {first:firstName, last:lastName} = req.query;
    res.json({"name":`${firstName} ${lastName}`});
})

//Use body-parser to Parse POST Requests


module.exports = app;