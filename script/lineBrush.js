var LineBrush = function(){

	var down = function(ctx,x,y){
		log("down x="+x + " y="+y);
		ctx.save();
		ctx.beginPath();
		ctx.lineWidth = 1 ; 
    	ctx.strokeStyle = "#005588";
		ctx.moveTo(x,y);
	}

	var move = function(ctx,x,y){
		log("move");
	}

	var up = function(ctx,x,y){
		log("up x="+x + " y="+y);
		ctx.lineTo(x,y);
		ctx.stroke();
		ctx.restore();
	}


	this.down = down ; 
	this.move = move ; 
	this.up = up ;

}