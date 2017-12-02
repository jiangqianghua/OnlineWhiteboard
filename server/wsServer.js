var app = require('http').createServer();
var io = require('socket.io')(app);

var PORT = 30000;

var clientCount = 0 ;

var socketMap = {};

app.listen(PORT);

var bindListener = function(socket,event)
{
	socket.on(event,function(data){
		for(var i in socketMap){
			if(i != socket.num)
				socketMap[i].emit(event,data);
		}
	});
}

io.on('connection',function(socket){
	clientCount = clientCount + 1 ; 
	socket.num = clientCount ; 
	socketMap[clientCount] = socket ;
	bindListener(socket,"mousedown");
	bindListener(socket,"mousemove");
	bindListener(socket,"mouseup");
	bindListener(socket,"brushtype");
});

console.log('webSocket listening on port ' + PORT);