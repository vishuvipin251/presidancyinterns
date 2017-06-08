var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end('<p><font size ="100">Here is a paragraph of <strong>HTML</strong>!</font></p>');
});
server.listen(8081);