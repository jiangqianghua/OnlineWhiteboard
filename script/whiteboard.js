// 引入js
include('penBrush.js');
include('lineBrush.js');
include('rectBrush.js');
include('brushFactory.js');

var whiteboard = function(){
	var canvas ; 
	var context ;
	var paintBrush ;
	var isBegin = false ;


	var brushType = brushType_line ;

	var setBrushType = function(type)
	{
		brushType = type ;
		log("set type = " + type);
		paintBrush = BrushFactory.prototype.create(type);
	}


	var mousedownEvent = function(e){
		isBegin = true ;
		var pos = getPointOnCanvas(canvas,e.pageX,e.pageY);
		paintBrush.down(context,pos.x,pos.y);
	}

	var mousemoveEvent = function(e){
		if(isBegin){
			var pos = getPointOnCanvas(canvas,e.pageX,e.pageY);
			paintBrush.move(context,pos.x,pos.y);
		}
	}

	var mouseupEvent = function(e){
		if(isBegin){
			var pos = getPointOnCanvas(canvas,e.pageX,e.pageY);
			paintBrush.up(context,pos.x,pos.y);
		}
		isBegin = false ;
	}

	var initEvent = function(){
		canvas.addEventListener('mousedown',mousedownEvent,false);
		canvas.addEventListener('mousemove',mousemoveEvent,false);
		canvas.addEventListener('mouseup',mouseupEvent,false);
	}

	var init = function(_canvas){
		canvas = _canvas ;
		context = canvas.getContext('2d');
		brushFactory = new BrushFactory();
		paintBrush = BrushFactory.prototype.create(brushType);
		isBegin = false ;
		initEvent();
	}
	this.setBrushType = setBrushType;
	this.init = init;
}






