require("dotenv").config();
var { response } = require("express");
var express = require("express");
var fs = require("fs");
var multer = require("multer");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

var multer = require("multer");
multer({ dest: "/tmp/" });

app.get("/index.htm", function (req, res) {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.post("/fileUpload", (req, res) => {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  var file = __dirname + "/" + req.files.file.name;

  fs.readFile(req.files.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploaded successfully",
          filename: req.files.file.name,
        };
      }

      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

var server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example App listening to http://%s%s", host, port);
});
