var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello awesome World!  Dude this is totally awesmoe!!! My first web server!!!!');

    var buffer = fs.readFileSync("index.html");
    var len = buffer.length;
    response.send (buffer.toString('utf8',0, len));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
