var	express = require('express');
var	app = express();
var	server = require('http').Server(app);
var	io = require('socket.io').listen(server);
var	path = require('path');

app.use(express.static(path.join(__dirname, './public/')));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});



io.sockets.on('connection', function(socket){
	socket.emit('paix', "et amour");
	socket.on('msg', function () { 
		socket.emit('msg', "message");
	});
	socket.on('newplayer', function(socket) {
		console.log(socket.id);
	});
//	console.log('apres');
});

server.listen(3000,function(){ // Listens to port 8081
	console.log('Listening on '+server.address().port);
});
