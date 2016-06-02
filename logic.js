console.log("logic.js");
setup = function() {
	console.log("logic.js setup()");
	size(window.innerWidth, window.innerHeight);
	//background(255, 255, 255);
	units.push(new Unit(100, 100));
	units.push(new Enemy(300, 300));
	var selectionTool = new SelectionTool();
};
setup();
//simple point in cartesian coordinates
var Point = function(x, y) {
    this.x = x;
    this.y = y;
};
//clone point to pass by the value, not by the reference
Point.prototype.clone = function() {
    return new Point(this.x, this.y);
};
//add value to x and to y
Point.prototype.add = function(val) {
    this.x += val;
    this.y += val;
};
//checks if point equals another point
Point.prototype.equals = function(point2) {
    if (point2.x === this.x && point2.y === this.y) {
        return true;
    }
    return false;
};
var polarToCartesian = function(radius, angle) {
	var cartesian = new Point(0, 0);
	cartesian.x = radius * Math.cos(angle);
	cartesian.y = radius * Math.sin(angle);
	return cartesian;
};
//by Unit I mean moveable character
var Unit = function(x, y) {
    this.x = x;
    this.y = y;
    this.selected = false;
    //this.draw();
    this.maxSpeed = 1;
    this.health = random(50, 100);
    this.hpShown = false;
	addWizard(x, y);
};
//draws Unit as yellow circle if selected or green if not
Unit.prototype.draw = function() {
    if (this.hpShown) {
        fill(255, 0, 0);
        arc(this.x, this.y, 20, 20, 0, 3.6 * this.health);
    }
    var circleColor = this.selected?color(255, 255, 0):color(0, 179, 0);
    fill(circleColor);
    //noStroke();
    ellipse(this.x, this.y, 10, 10);
};
//immediately change location of Unit
Unit.prototype.teleportTo = function(x, y) {
    this.x = x;
    this.y = y;
};
Unit.prototype.select = function() {
    this.selected = true;
    //this.draw();
};
Unit.prototype.diselect = function() {
    this.selected = false;
    //this.draw();
};
Unit.prototype.showHP = function() {
    this.hpShown = true;
    //this.draw();
};
Unit.prototype.hideHP = function() {
    this.hpShown = false;
    //this.draw();
};
Unit.prototype.countNextMove = function(destination) {
	var vec = new Point(this.x - destination.x, this.y - destination.y);
	var distance = dist(this.x, this.y, destination.x, destination.y);
	var angle = Math.atan2(vec.y, vec.x);
	var moveVec = new Point(0, 0);
	if (distance > this.maxSpeed) {
		moveVec = polarToCartesian(this.maxSpeed, angle);
	} else {
		moveVec = polarToCartesian(distance, angle);
	}
	var nextMove = new Point(this.x - moveVec.x, this.y - moveVec.y);
	return nextMove;
};
Unit.prototype.update = function() {
	if (!this.destination) {
		return null;
	}
	if (this.destination.equals(new Point(this.x, this.y))) {
		this.destination = null;
	} else {
        var loc = this.countNextMove(this.destination);
		this.teleportTo(loc.x, loc.y);
	}
};
Unit.prototype.send = function(destination) {
    this.destination = destination;
};
var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.maxSpeed = 1;
    this.health = random(50, 100);
    this.hpShown = false;
};
Enemy.prototype = Object.create(Unit.prototype);
Enemy.prototype.draw = function() {
    if (this.hpShown) {
        fill(255, 0, 0);
        arc(this.x, this.y, 20, 20, 0, 3.6 * this.health);
    }
    var circleColor = color(255, 0, 0);
    fill(circleColor);
    //noStroke();
    ellipse(this.x, this.y, 10, 10);
};
Enemy.prototype.select = function(){};
Enemy.prototype.diselect = function(){};
var units = [];
//checks if units are in rectangle between start and finish points
var checkSelection = function(start, finish) {
    for (var i = 0; i < units.length; i++) {
        if (units[i].x > start.x && units[i].x < finish.x && 
            units[i].y > start.y && units[i].y < finish.y) {
            units[i].select();
        } else {
            units[i].diselect();
        }
    }
};
//rectangle selection tool
var SelectionTool = function() {
    this.start = new Point(0, 0);
    this.finish = new Point(0, 0);
    this.started = false;
};
//make "start" upper left point and "finish" - bottom right
SelectionTool.prototype.normalize = function() {
    if (this.start.x > this.finish.x) {
        var startX = this.finish.x;
        var finishX = this.start.x;
        this.start.x = startX;
        this.finish.x = finishX;
    }
    if (this.start.y > this.finish.y) {
        var startY = this.finish.y;
        var finishY = this.start.y;
        this.start.y = startY;
        this.finish.y = finishY;
    }
};
//draws rectangle of selection
SelectionTool.prototype.draw = function() {
    var c = color(255, 255, 0, 128);
    fill(c);
    rect(this.start.x, this.start.y, this.finish.x - this.start.x, this.finish.y - this.start.y);
};
SelectionTool.prototype.onStart = function() {
    this.start.x = mouseX;
    this.start.y = mouseY;
	this.finish = this.start.clone();
	this.started = true;
};
SelectionTool.prototype.onChange = function() {
    this.finish.x = mouseX;
    this.finish.y = mouseY;
    //this.draw();
};
SelectionTool.prototype.clean = function() {
    this.started = false;
    this.start.x = 0;
    this.start.y = 0;
    this.finish.x = 0;
    this.finish.y = 0;
};
SelectionTool.prototype.onFinish = function() {
    this.normalize();
    checkSelection(this.start, this.finish);
    this.clean();
};
var checkOver = function() {
    if (selectionTool.started) {
        return null;
    }
    var oneUnitSelected = false;
    for (var i = 0; i < units.length; i++) {
	    if (!oneUnitSelected) {
            if (dist(units[i].x, units[i].y, mouseX, mouseY) <= 8) {
                units[i].showHP();
                oneUnitSelected = true;
            } else {
                units[i].hideHP();
            }
        } else {
            units[i].hideHP();
	    }
    }
};
draw = function() {
    checkOver();
    if (selectionTool.started) {
        selectionTool.onChange();
    }
    //background(255, 255, 255);
    for (var i = 0; i < units.length; i++) {
        units[i].update();
        //units[i].draw();
    }
    //if (selectionTool.started) {
        //selectionTool.draw();
    //}
};
mousePressed = function() {
    if (!selectionTool.started && mouseButton === LEFT) {
        selectionTool.onStart();
    }
};
mouseReleased = function() {
    if (selectionTool.started && mouseButton === LEFT) {
        if (selectionTool.start.equals(selectionTool.finish)) {
            selectionTool.clean();
        } else {
            selectionTool.onFinish();
        }
    }
};
mouseClicked = function() {
    if (mouseButton === RIGHT) {
        var destination = new Point(mouseX, mouseY);
	    var row = 0, column = 0;
		for (var i = 0; i < units.length; i++) {
		    if (units[i].selected) {
		        var dest = destination.clone();
		        dest.x += column % 4 * 18;
		        dest.y += row * 18;
		        units[i].send(dest);
		        column++;
		        if (column % 4 === 0) {
		            row++;
		        }
		    }
		}
    } else if (mouseButton === LEFT) {
        var oneUnitSelected = false;
		for (var i = 0; i < units.length; i++) {
		    if (!oneUnitSelected) {
                if (dist(units[i].x, units[i].y, mouseX, mouseY) <= 8) {
                    units[i].select();
                    oneUnitSelected = true;
                } else {
                    units[i].diselect();
                }
            } else {
                units[i].diselect();
		    }
		}
    }
};