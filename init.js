var canvas, stage, exportRoot;
var selectionTool;//from logic.js
var addWizard = function(x, y) {
	exportRoot = new lib.wizardus();
	exportRoot.scaleX = 0.1;
	exportRoot.scaleY = 0.1;
	exportRoot.x = x;
	exportRoot.y = y;
	stage.addChild(exportRoot);
	return exportRoot;
};

function init() {
	canvas = document.getElementById("canvas");
	//exportRoot = new lib.wizardus();
	//exportRoot.scaleX = 0.1;
	//exportRoot.scaleY = 0.1;
	
	stage = new createjs.Stage(canvas);
	//stage.addChild(exportRoot);
	stage.update();
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var processingInstance = new Processing(canvas, sketchProc);
	/*var createCircles = function(){
		var context = canvas.getContext('2d');
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		var radius = 70;
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = '#003300';
		context.stroke();
	}();*/
	
	createjs.Ticker.setFPS(24);
	//createjs.Ticker.addEventListener("tick", stage);
	createjs.Ticker.addEventListener("tick", function(e) {
		//console.log(createjs.Ticker.getMeasuredFPS());
		stage.update();
		if (selectionTool) {
			if (selectionTool.started) {
				selectionTool.draw();
			}
		}
	});
	/*canvas.onmousedown = function(e) {
		onLMBPressed();
	};
	canvas.onmouseup = function(e) {
		onLMBReleased();
	};
	canvas.onclick = function(e) {
		var isRightMB;
		e = e || window.event;
		if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
			isRightMB = e.which == 3; 
		else if ("button" in e)  // IE, Opera 
			isRightMB = e.button == 2; 
		isRightMB?onLMBClicked():onRMBClicked();
	};*/
	/*canvas.onclick = function(e) {
		console.log("clicked on canvas");
		var wiz1 = new lib.wizardus();
		wiz1.x = e.clientX;
		wiz1.y = e.clientY;
		wiz1.scaleX = -0.1;
		wiz1.scaleY = 0.1;
		//wiz1.snapToPixel = true;
		wiz1.cache(wiz1.x, wiz1.y, wiz1.width, wiz1.height);
		stage.addChild(wiz1);
	};*/
	/*keyboardJS.bind('e', function(e) {
		exportRoot.scaleX *= 0.9;
		exportRoot.scaleY = exportRoot.scaleX;
		console.log(exportRoot.scaleX);
	});
	keyboardJS.bind('w', function(e) {
		exportRoot.y -= 1;
		console.log('w is pressed');
	});
	keyboardJS.bind('a', function(e) {
		exportRoot.x -= 1;
		console.log('a is pressed');
	});
	keyboardJS.bind('s', function(e) {
		exportRoot.y += 1;
		console.log('s is pressed');
	});
	keyboardJS.bind('d', function(e) {
		exportRoot.x += 1;
		console.log('d is pressed');
	});*/
};