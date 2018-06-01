var express = require("express");
var app = express();

var path = require("path");
var http = require('http');

setInterval(function () {
  http.get("https://au-chris-1308.herokuapp.com/");
}, 600000);

var HTTP_PORT = process.env.PORT || 8080;

// setup the static folder 
app.use(express.static("p")); 

// handle "404" errors
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/p/index.html"));
    
});

// Start the server
app.listen(HTTP_PORT, function(){
    console.log("Server listening on port: " + HTTP_PORT);
});