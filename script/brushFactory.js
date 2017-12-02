// 画笔工厂
var BrushFactory = function(){
	//画笔类型

}

BrushFactory.prototype.create = function(type)
{
	var brush ;
	switch(type){
		case brushType_pen:
			brush = new PenBrush();
			break;
		case brushType_line:
			brush = new LineBrush();
			break;
		case brushType_rect:
			brush = new RectBrush();
			break;
	}

	return brush;
}