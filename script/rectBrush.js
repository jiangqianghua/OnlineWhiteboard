var RectBrush = function(){
	var down = function(ctx,x,y){
		log("down");
		ctx.save();
		ctx.lineWidth = 1 ; 
    	ctx.strokeStyle = "#005588";
		ctx.moveTo(x,y);
	}

	var move = function(ctx,x,y){
		log("move");
		//ctx.lineTo(x,y);
		//context.stroke();
	}

	var up = function(ctx,x,y){
		log("up");
		ctx.lineTo(x,y);
		cxt.restore();
	}


	this.down = down ; 
	this.move = move ; 
	this.up = up ;
}