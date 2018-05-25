var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;






function dust(){
	var parent = document.getElementById("menu");
	var node = parent.querySelectorAll("div");
	var parentStyle = window.getComputedStyle(parent);
	var x = parseFloat(parentStyle.marginLeft);
	var temp = parseFloat(parentStyle.height)/5;
	var y = 0;
	console.log("x:", x);
	console.log("temp:", temp);
	console.log("y:", y);

	for (i = 0; i < node.length; i++) {
		y = y + temp;
		ctx.beginPath();
		ctx.arc(x, y - 80, 5,50,0,2*Math.PI);
		ctx.stroke();
		console.log(i + ":", y);
		ctx.beginPath();
		ctx.arc(x-10, y - 70, 5,50,0,2*Math.PI);
		ctx.stroke();
		console.log(i + ":", y);
		ctx.beginPath();
		ctx.arc(x-20, y - 60, 5,50,0,2*Math.PI);
		ctx.stroke();
		console.log(i + ":", y);
	}

	console.log(y);

}


window.onresize = function(event) {
    var canvas = document.getElementById('canvas');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    // dust(); 
};
