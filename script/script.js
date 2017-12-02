var _whiteboard ;

var penClickEvent = function(e){
	_whiteboard.setBrushType(brushType_pen);

}

var lineClickEvent = function(e){
	_whiteboard.setBrushType(brushType_line);
}

var rectangleClickEvent = function(e){
	_whiteboard.setBrushType(brushType_rect);
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
	_whiteboard = new whiteboard();
	_whiteboard.init(e('maincanvas'));	
}

var initData = function(){

}

//初始化事件
var initEvent = function(){
	for(i in clickData){
		e(clickData[i].name).addEventListener('click',clickData[i].fun,false);
	}
}


