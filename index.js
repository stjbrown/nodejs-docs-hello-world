var http = require('http');

var server = http.createServer(function(request, response) {
    var datetime = new Date();
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure!<br /><br />" + datetime);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
