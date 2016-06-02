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
	var processingInstance = new Processing(canvas, sketchProc);
	
	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", function(e) {
		//console.log(createjs.Ticker.getMeasuredFPS());
		stage.update();
		console.log("tick");
		if (selectionTool) {
			console.log("selectionTool");
			if (selectionTool.started) {
				console.log("started");
				//selectionTool.draw();
				var shape = new createjs.Shape();
				shape.alpha = 0.5;
				shape.graphics.beginFill("#FFFF00").drawRect(
						selectionTool.start.x, selectionTool.start.y, 
						selectionTool.finish.x - selectionTool.start.x, 
						selectionTool.finish.y - selectionTool.start.y);
			}
		}
	});
};