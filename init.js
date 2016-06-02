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
	stage = new createjs.Stage(canvas);
	stage.update();
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var ctx = canvas.getContext("2d");
	var processingInstance = new Processing(canvas, sketchProc);
	
	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", function(e) {
		//console.log(createjs.Ticker.getMeasuredFPS());
		ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,canvas.width,canvas.height);
		stage.update();
		if (selectionTool) {
			if (selectionTool.started) {
				selectionTool.draw();
			}
		}
	});
};