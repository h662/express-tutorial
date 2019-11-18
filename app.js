var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.send("Hello home page");
});

app.get("/login", function(req, res) {
  res.send("<h1>Login please</h1>");
});

app.get("/1", function(req, res) {
  res.send("Hello, <img src='/1.png'>");
});

app.listen(3000, function() {
  console.log("Connected 3000 port");
});
