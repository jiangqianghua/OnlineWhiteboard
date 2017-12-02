// 引入js
include('penBrush.js');
include('lineBrush.js');
include('rectBrush.js');
include('brushFactory.js');
var whiteboard = function(){
	var canvas ; 
	var context ;
	var paintBrush ;


	var brushType = brushType_line ;

	var setBrushType = function(type)
	{
		brushType = type ;
		log("set type = " + type);
		paintBrush = BrushFactory.prototype.create(type);
	}


	var initEvent = function(){
	
	}

	var init = function(_canvas){
		canvas = _canvas ;
		context = canvas.getContext('2d');
		brushFactory = new BrushFactory();
		paintBrush = BrushFactory.prototype.create(brushType);
		isBegin = false ;
		initEvent();
	}

	
	var start = function(x,y){
		paintBrush.down(context,x,y);
	}

	var move = function(x,y){
		paintBrush.move(context,x,y);
	}

	var end = function(x,y){
		paintBrush.up(context,x,y);
	}

	this.setBrushType = setBrushType;
	this.init = init;
	this.start = start ; 
	this.move = move ; 
	this.end = end ;


}






