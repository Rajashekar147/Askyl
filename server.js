var fs	 = require("fs");
var net  = require("net");

var net = require("net");
vat fs  = require("fs");
net.createServer(function(socket){
	socket.write("server \n");
	socket.pipe(socket);
	});
server.listen(OPENSHIFT_NODEJS_PORT,OPENSHIFT_NODEJS_IP);
