var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello awesome World!  Dude this is totally awesmoe!!! My first web server!!!!');

    var data = fs.readFileSync("index.html", "utf8");
    response.send (data);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
