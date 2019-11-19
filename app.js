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

app.get("/dynamic", function(req, res) {
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>dynamic</title>
    </head>
    <body>
        <h1>Hello Dynamic!</h1>
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
  </html>
  `;
  res.send(output);
});

app.listen(3000, function() {
  console.log("Connected 3000 port");
});
