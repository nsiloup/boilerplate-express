var express = require('express');
var app = express();

let path =(rel)=> __dirname + rel;

app.get('/', (req, res) => {
    res.sendFile(path("/views/index.html"))
})
app.use("/public", express.static(path("/public")));

module.exports = app;