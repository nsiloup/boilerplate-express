var express = require('express');
var app = express();

let path =(rel)=> __dirname + rel;

app.use("/public", express.static(path("/public")));
app.get('/', (req, res) => {
    res.sendFile(path("/views/index.html"))
})


app.get('/json', (req, res)=>res.json({"message": "Hello json"}))

module.exports = app;