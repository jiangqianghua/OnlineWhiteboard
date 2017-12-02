var MySocket = function(){

	var _whiteboard ; 
	var socket ;

	var mousedown = function(data){
		_whiteboard.start(data.x,data.y);
	}

	var mousemove = function(data){
		_whiteboard.move(data.x,data.y);
	}

	var mouseup = function(data){
		_whiteboard.end(data.x,data.y);
	}

	var brushtype = function(data){
		_whiteboard.setBrushType(data);
	}

	var initEvent = function(){
		socket.on("mousedown",mousedown);
		socket.on("mousemove",mousemove);
		socket.on("mouseup",mouseup);
		socket.on("brushtype",brushtype);
	}

	var start = function(x,y){
		var data = {x:x , y:y};
		socket.emit("mousedown",data);
	}

	var move = function(x,y){
		var data = {x:x , y:y};
		socket.emit("mousemove",data);
	}

	var end = function(x,y){
		var data = {x:x , y:y};
		socket.emit("mouseup",data);
	}

	var setBrushType = function(type)
	{
		socket.emit("brushtype",type);
	}

	var init = function(_canvas){
		socket = io('ws://localhost:30000') ;
		_whiteboard = new whiteboard();
		_whiteboard.init(_canvas);
		initEvent();
	}


	this.start = start ; 
	this.move = move ; 
	this.end = end ;
	this.init = init ;
	this.setBrushType = setBrushType;




}