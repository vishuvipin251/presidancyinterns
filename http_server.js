//require function takes the HTTP module
var http = require('http'); 
//Create the server. Function passed as parameter is called on every request made
//req variable holds all the request parameters
//res variable allows you to do anything with the response sent to the client
http.createServer(function (req, res) {
//Write headers to the response 
//200 is the HTTP status code. (This one means success)
//We are sending html text, so the Content-Type should be text/html
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1><font style ="verdana" color = "DarkMagenta">Aparna and Sam page</font></h1>');
//Send data and end response
    res.end('Hello Arun!');
}).listen(8080);
