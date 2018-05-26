var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var parent = document.getElementById("menu");
var node = parent.querySelectorAll("div");

for (i = 0; i < node.length; i++) {
	node[i].addEventListener("click",
		function() {
			var eventTarget = event.target;
			var dataID = eventTarget.getAttribute('data-info');
			expandContent(dataID);
		}
	);
}


var closeBtns  = document.querySelectorAll(".close.icon");


for (i = 0; i < closeBtns.length; i++) {

	closeBtns[i].addEventListener("click",
		function() {
			console.log("yes")
			var eventTarget = event.target;
			console.log("eventtarget:", eventTarget);
			var dataID = eventTarget.getAttribute('data-info');
			closeContent(dataID);
		}
	);
}



function expandContent(id) {
	var chapter = document.getElementById(id);
	var parent = chapter.parentNode;
	var gallery = document.getElementById("gallery");
	parent.style.display = "block";
	id = id + "_IMG";
	var chapImg = document.getElementById(id);
	gallery.style.display = "block";
	chapImg.style.display = "block";
	gallery.style.zIndex = "3";
}

function closeContent(id) {
	var chapter = document.getElementById(id);
	console.log(id);
	var parent = chapter.parentNode;
	parent.style.display = "none";
}













// function dust(){
// 	var parent = document.getElementById("menu");
// 	var node = parent.querySelectorAll("div");
// 	var parentStyle = window.getComputedStyle(parent);
// 	var x = parseFloat(parentStyle.marginLeft);
// 	var temp = parseFloat(parentStyle.height)/5;
// 	var y = 0;
// 	console.log("x:", x);
// 	console.log("temp:", temp);
// 	console.log("y:", y);
//
// 	for (i = 0; i < node.length; i++) {
// 		y = y + temp;
// 		ctx.beginPath();
// 		ctx.arc(x, y - 80, 5,50,0,2*Math.PI);
// 		ctx.stroke();
// 		console.log(i + ":", y);
// 		ctx.beginPath();
// 		ctx.arc(x-10, y - 70, 5,50,0,2*Math.PI);
// 		ctx.stroke();
// 		console.log(i + ":", y);
// 		ctx.beginPath();
// 		ctx.arc(x-20, y - 60, 5,50,0,2*Math.PI);
// 		ctx.stroke();
// 		console.log(i + ":", y);
// 	}
//
// 	console.log(y);
//
// }


// window.onresize = function(event) {
//     var canvas = document.getElementById('canvas');
//     c.width = window.innerWidth;
//     c.height = window.innerHeight;
// };
