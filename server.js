require("dotenv").config();
const http = require("http");
var fs = require("fs");
var url = require("url");
// const express = require("express");
// const { response } = require("express");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received.`);

    fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
        console.log(err);

        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain

        res.writeHead(404, { "Content-Type": "text/html" });
      } else {
        //Page found
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(data.toString());

        // Write the content of the file to res body
      }

      res.end();
    });
  }).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
