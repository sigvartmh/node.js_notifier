var server = require('http').createServer(handler);
var io = require('socket.io')(server);
var Notification = require('node-notifier');
var fs = require('fs')

var notfier = new Notification();

server.listen(8080);

function handler(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
	if(err){
	  console.log(err);
	  res.writeHead(500);
	  return res.end('Error loading test.html');
	 }
	 res.writeHead(200);
	 res.end(data);
	 });
}

console.log("Starting socket");

io.on('connection', function(socket){
	console.log("User connected");
	notfier.notify({
		title: "User",
		message: "User connected",
	});
	
	socket.on('disconnect', function(){	
		notfier.notify({
			title: "User",
			message: "User disconnected",
		});
	});

	socket.on('message', function(msg){
		console.log("Message from website: " + msg);
		notfier.notify({
			title: "From webpage",
			message: msg,
		});
		io.emit('chat message', msg);
	});
	
	socket.on('rickroll', function(){
		notfier.notify({
			title: "Rick roll!",
			message: "Never gonna run around and desert you!!!",
			sound: true,
			wait: true
		}, function (err, response){});
	});

	socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
		notfier.notify({
			title: "From webpage",
			message: msg,
		});
		io.emit('chat message', msg);
	});
});

notfier.notify({
	title: "My awesome title",
	message: "Hello from node",
});
