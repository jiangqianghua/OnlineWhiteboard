var brushType_pen = 1 ; 
var brushType_line= 2 ; 
var brushType_rect = 3 ;
// 获取鼠标在canvas相对的位置
var getPointOnCanvas = function(canvas, x, y) { 
	var bbox =canvas.getBoundingClientRect(); 
	return { 
		 x: parseInt(x- bbox.left *(canvas.width / bbox.width)), 
		 y: parseInt(y - bbox.top * (canvas.height / bbox.height)) 
		//x: x - bbox.left, 
		//y: y - bbox.top
	}; 
} 
// 根据id获取元素
var e = function(id){
	return document.getElementById(id);
}
// 打印日志
var log = function(s){
	console.log(s);
}
// js导入js代码
var include = function(jsname){
	document.write("<script type='text/javascript' src='script/"+jsname+"'></script>");
}