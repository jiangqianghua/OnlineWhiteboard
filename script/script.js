var _whiteboard ;
var isBegin = false ;
var mysocket ;
var canvas;

var penClickEvent = function(e){
	_whiteboard.setBrushType(brushType_pen);
	mysocket.setBrushType(brushType_pen);

}

var lineClickEvent = function(e){
	_whiteboard.setBrushType(brushType_line);
	mysocket.setBrushType(brushType_line);
}

var rectangleClickEvent = function(e){
	_whiteboard.setBrushType(brushType_rect);
	mysocket.setBrushType(brushType_rect);
}

	var mousedownEvent = function(e){
		isBegin = true ;
		var pos = getPointOnCanvas(canvas,e.pageX,e.pageY);
		_whiteboard.start(pos.x,pos.y);
		mysocket.start(pos.x,pos.y);
	}

	var mousemoveEvent = function(e){
		if(isBegin){
			var pos = getPointOnCanvas(canvas,e.pageX,e.pageY);
			_whiteboard.move(pos.x,pos.y);
			mysocket.move(pos.x,pos.y);
		}
	}

	var mouseupEvent = function(e){
		if(isBegin){
			var pos = getPointOnCanvas(canvas,e.pageX,e.pageY);
			_whiteboard.end(pos.x,pos.y);
			mysocket.end(pos.x,pos.y);
		}
		isBegin = false ;
	}

var clickData = [
	{name:'pen',fun:penClickEvent},
	{name:'line',fun:lineClickEvent},
	{name:'rectangle',fun:rectangleClickEvent}
];
// 程序执行入口
window.onload = function(){
	init();
	initData();
	initEvent();
}
// 初始化
var init = function(){
	canvas = e('maincanvas') ;
	_whiteboard = new whiteboard();
	_whiteboard.init(canvas);	

	mysocket = new MySocket();
	mysocket.init(canvas);
}

var initData = function(){

}

//初始化事件
var initEvent = function(){

	canvas.addEventListener('mousedown',mousedownEvent,false);
	canvas.addEventListener('mousemove',mousemoveEvent,false);
	canvas.addEventListener('mouseup',mouseupEvent,false);

	for(i in clickData){
		e(clickData[i].name).addEventListener('click',clickData[i].fun,false);
	}
}


