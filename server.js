require("dotenv").config();
var { response } = require("express");
var express = require("express");
var bodyParser = require('body-parser')

var urlEncodedParser = bodyParser.urlencoded({extended: false})

var hostname = "127.0.0.1";
var port = process.env.PORT || 3000;

var app = express()

app.use(express.static('public'))

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html")
})

app.get('/getProcess', (req, res) => {
    response = {
        firstName: req.query.firstName,
        lastName: req.query.lastName
    }

    console.log(response)
    res.end(JSON.stringify(response))
})

app.post('/postProcess', urlEncodedParser, (req, res) => {
    response = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    res.end(JSON.stringify(response))
})

app.delete('/deleteUser', (req, res) => {
    console.log("This is a delete request")
    res.send('Hello delete')
})

app.get('/userList', (req, res) => {
    console.log('Got a get request')
    res.send('Page Pattern Match')
})

var server = app.listen(port, () => {
    var host = server.address().address
    var port = server.address().port

    console.log('Example App listening to http://%s%s', host, port)
})