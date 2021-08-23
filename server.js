require("dotenv").config();
const express = require("express");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

var app = express()

app.get('/', (req, res) => {
    res.send('Hello GET')
})

var server = app.listen(port, () => {
    var host = server.address().address
    var port = server.address().port

    console.log('Example App listening to http://%s%s', host, port)
})