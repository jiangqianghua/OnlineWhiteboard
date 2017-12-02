var RectBrush = function(){
	var startx ,starty;
 	var down = function(ctx,x,y){
		log("down");
		ctx.save();
		ctx.lineWidth = 1 ; 
    	ctx.strokeStyle = "#005588";
		startx = x ; 
		starty = y ;
	}

	var move = function(ctx,x,y){
		log("move");
	}

	var up = function(ctx,x,y){
		log("up");

		var w = Math.abs(startx - x);
		var h = Math.abs(starty - y);
		var minx = Math.min(startx,x); 
		var miny = Math.min(starty,y);
		ctx.rect(minx,miny,w,h);
		ctx.fill();
		ctx.restore();
	}


	this.down = down ; 
	this.move = move ; 
	this.up = up ;
}