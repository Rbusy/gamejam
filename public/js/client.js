console.log("Ok");



var Client = {};

Client.socket = io.connect("http://localhost:3000")

Client.askNewPlayer = function(){
	console.log("kebab");
	Client.socket.emit('newplayer');
};

Client.socket.on('test', function(data)
{
	Game.addNewPlayer(data.id,data.x,data.y);
});