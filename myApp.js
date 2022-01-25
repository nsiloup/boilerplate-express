require('dotenv').config()
var express = require('express');
var app = express();

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
)

module.exports = app;