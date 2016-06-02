(function (lib, img, cjs) {
console.log("wizardus.js");
var p; // shortcut to reference prototypes

// stage content:
(lib.wizardus = function() {
	this.initialize();
	
	// Слой 1
	this.instance = new lib.Walk();
	this.instance.setTransform(114,157,1,1,0,0,0,248,178);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.9,14.5,202.4,285);


// symbols:
(lib.Walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEPvyQBPD0gDDuIk5DnIACC2QACDcANDIQANDJAIDCQAJDBiJEcIhFAfQBljeAQiPQAPiPAPlOQAQlNhVlZIkrjEQgCgmAGg6QALh0AohmQB/lGFjg7IAZA1QAeBEAZBMg");
	this.shape.setTransform(267.7,191.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6.7,1,1).p("AOGkqQBZBwAQCSQAOB4giDFIj9CbIgfGuIgYFEQgrAkhOAtQhGAojJBQQjJBPiUhXQiVhWkJg9QkKg8i7gQIA3rPIiHjAQgFheAOiPQAdkdBgj3QCGlbD7jbQCeiLDIhUQA1gWA4gSQCVgyCtgVIAzAtQAMAMANAOQAQATARAVQAfApAeAwQC0EmAyHUIBBAmQBOA0A8BKgAPZAfQAACRhCBnQhCBnhdAAQhcAAhChnQhChnAAiRQAAiOBChnQBChnBcAAQBdAABCBnQBCBnAACOgAk7M0QACAAADABQBjASBXh+QBXh/AZjHQAEgfACgeQACgSAAgSQACg9gGg3QgGgwgLgtQgGgYgIgWQgHgUgHgPQgxh1hUgTIgHgBQhGgMhCA/QgYAXgXAiQgvBDgdBZQgIAXgGAYQgOA4gIBAQgaDGA1CaQAoB5BFAmQAFADAFACQANAFAOAFgAlWMqQAFACAEACQAIADAKADAtqG1QCVCJBhBGQBiBGCyBb");
	this.shape_1.setTransform(248,178);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AJLhGQAAA5gaAnQgaApgkAAQglAAgZgpQgagnAAg5QAAg6AagoQAZgpAlAAQAkAAAaApQAaAoAAA6gAnThfQAoAIAXAzQAXAwgIBAQgHA1gZAkQgFAGgFAGQgjAogngIQgjgHgWglQgDgHgEgHQgXgyAIg/QAIg+AigoQAjgnAoAIg");
	this.shape_2.setTransform(279.3,178.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("An5DRQgjgHgWglIgHgOQgXgyAIg/QAIg+AigoQAjgnAoAIQAoAIAXAzQAXAwgIBAQgHA1gZAkIgKAMQgdAhgfAAIgOgBgAG1AaQgagnAAg5QAAg6AagoQAZgpAlAAQAkAAAaApQAaAoAAA6QAAA5gaAnQgaApgkAAQglAAgZgpg");
	this.shape_3.setTransform(279.3,178.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000033").s().p("AoqI4IgFgBIgagJIgKgGQhFgmgph4Qg0iaAZjHQAIg+APg4QAGgYAHgWQAdhaAwhFQAXghAYgYQBBg+BHALIAGACQBUATAyB0IANAlQAIAXAGAYQAMAsAFAwQAGA4gBA6IgCAlQgCAdgEAfQgZDIhXB+QhNBuhVAAQgMAAgNgCgAnYkzQgjAngIBAQgHA/AXAyIAHAOQAVAmAjAGQAoAJAigoIAKgNQAagkAGg1QAJhAgYgyQgWgygogIIgOgCQghAAgcAhgAFmAaQhBhkAAiRQAAiRBBhnQBChmBdAAQBdAABCBmQBBBnAACRQAACRhBBkQhCBnhdAAQhdAAhChngAH6mcQgaApAAA5QAAA6AaAoQAaApAkAAQAkAAAagpQAagoAAg6QAAg5gagpQgagogkAAQgkAAgaAog");
	this.shape_4.setTransform(272.4,203.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("Ag+VjQiVhWkJg9QkKg8i7gQIA3rPIiHjAQgFheAOiPQAdkdBgj3QCGlbD7jbQCeiLDIhUQA1gWA4gSQCVgyCtgVIAzAtIAZAaIAhAoQAfApAeAwQC0EmAyHUIBBAmQBOA0A8BKQBZBwAQCSQAOB4giDFIj9CbIgfGuIgYFEQgrAkhOAtQhGAojJBQQhgAmhUAAQhdAAhMgugAhequQgoBlgLB1QgGA6ACAmIEpDDQBXFZgQFOQgQFNgQCPQgQCPhlDeIBFgfQCKkbgIjCQgIjBgNjJQgNjJgCjeIgCizIE5joQADjthPj0QgZhNgehDIgZg1QllA6h9FHgAlJhWQgYAXgXAiQgvBDgdBZQgIAXgGAYQgOA4gIBAQgaDGA1CaQAoB5BFAmIAKAFIAJAEIASAGIAFABQBjASBXh+QBXh/AZjHQAEgfACgeIACgkQACg9gGg3QgGgwgLgtQgGgYgIgWIgOgjQgxh1hUgTIgHgBQgLgCgLAAQg6AAg4A1gAp0KEQBiBGCyBbQiyhbhihGQhhhGiViJQCVCJBhBGgAJajWQhCBnAACOQAACRBCBnQBCBnBcAAQBdAABChnQBChnAAiRQAAiOhChnQhChnhdAAQhcAAhCBng");
	this.shape_5.setTransform(248,178);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgINLQAPiPAPlOQAQlNhVlZIkrjDQgCgnAGg6QALh0AohlQB/lHFjg7IAZA1QAeBEAZBMQBPD0gDDuIk5DnIACC2QACDcANDIQANDJAIDCQAJDBiJEcIhFAfQBljeAQiPg");
	this.shape_6.setTransform(267.7,191.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AEPv1QBPD1gDDuIk5DoIACC3QACDcAQDJQAPDKAXDCQAYDDisEcIhFAfQCFj/AIiJQAJiKAAk+QABk/hJlmIkrjEQgCgmAGg7QALh1AohlQB/lIFjg7IAZA1QAeBEAZBNg");
	this.shape_7.setTransform(267.7,191.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AJLhHQAAA6gaAnQgaApgkAAQglAAgZgpQgagnAAg6QAAg5AagpQAZgpAlAAQAkAAAaApQAaApAAA5gAnThfQAoAIAXAyQAXAxgIBAQgHA1gZAkQgFAHgFAGQgjAogngJQgjgGgWgmQgDgGgEgIQgXgyAIg/QAIg/AignQAjgnAoAIg");
	this.shape_8.setTransform(279.3,178.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(6.7,1,1).p("AOGknQBZBwAQCTQAOB4giDGIj9CcIgfGwIgYFFQhBAjhSArQhSAri2BQQi2BPitiBQiuiBj1gkQj2glixAUIA3rRIiHjBQgFheAOiQQAdkdBgj4QCGldD7jcQCeiLDIhUQA1gWA4gTQCVgxCtgWIAzAuQAMAMANANQAQAUARAVQAfApAeAwQC0EnAyHVIBBAnQBOA0A8BKgAPZAkQAACRhCBnQhCBnhdAAQhcAAhChnQhChnAAiRQAAiPBChoQBChnBcAAQBdAABCBnQBCBoAACPgAk7M7QACAAADABQBjASBXh+QBXh/AZjJQAEgfACgdQACgTAAgSQACg9gGg3QgGgxgLgsQgGgYgIgXQgHgUgHgRQgxhzhUgTIgHgBQhGgMhCA/QgYAXgXAiQgvBDgdBaQgIAXgGAYQgOA4gIBAQgaDHA1CbQAoB5BFAmQAFADAFACQANAFAOAFgAlWMxQAFACAEACQAIADAKADAtqG7QCVCJBiBGQBhBHCyBb");
	this.shape_9.setTransform(248,177.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("An5DRQgjgGgWgmIgHgOQgXgyAIg/QAIg/AignQAjgnAoAIQAoAIAXAyQAXAxgIBAQgHA1gZAkIgKANQgdAhgfAAIgOgCgAG1AaQgagnAAg6QAAg5AagpQAZgpAlAAQAkAAAaApQAaApAAA5QAAA6gaAnQgaApgkAAQglAAgZgpg");
	this.shape_10.setTransform(279.3,178.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000033").s().p("AoqI6IgFgBIgagJIgKgGQhFgmgph5Qg0iaAZjHQAIg/APg4QAGgYAHgXQAdhZAwhGQAXghAYgYQBBg/BHAMIAGACQBUATAyB0IANAmQAIAWAGAYQAMAtAFAwQAGA4gBA7IgCAkQgCAegEAfQgZDIhXB/QhNBuhVAAQgMAAgNgCgAnYk0QgjAngIBBQgHA/AXAyIAHAOQAVAmAjAGQAoAJAigoIAKgNQAagkAGg1QAJhAgYgzQgWgygogIIgOgCQghAAgcAhgAFmAaQhBhkAAiSQAAiRBBhnQBChnBdAAQBdAABCBnQBBBnAACRQAACShBBkQhCBohdAAQhdAAhChogAH6mdQgaApAAA5QAAA6AaApQAaApAkAAQAkAAAagpQAagpAAg6QAAg5gagpQgagpgkAAQgkAAgaApg");
	this.shape_11.setTransform(272.4,202.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AhXVCQiuiBj1gkQj2glixAUIA3rRIiHjBQgFheAOiQQAdkdBgj4QCGldD7jcQCeiLDIhUQA1gWA4gTQCVgxCtgWIAzAuIAZAZIAhApQAfApAeAwQC0EnAyHVIBBAnQBOA0A8BKQBZBwAQCTQAOB4giDGIj9CcIgfGwIgYFFQhBAjhSArQhSAri2BQQhGAehEAAQhvAAhqhQgAheqsQgoBlgLB1QgGA7ACAmIEpDEQBLFmgBE+QAAE+gJCKQgICKiHD/IBFgfQCtkcgXjDQgXjCgQjKQgPjJgCjeIgCi1IE5joQADjuhPj1QgZhNgehEIgZg1QllA7h9FIgAlJhSQgYAXgXAiQgvBDgdBaQgIAXgGAYQgOA4gIBAQgaDHA1CbQAoB5BFAmIAKAFIAJAEIASAGIAFABQBjASBXh+QBXh/AZjJQAEgfACgdIACglQACg9gGg3QgGgxgLgsQgGgYgIgXIgOglQgxhzhUgTIgHgBQgLgCgLAAQg7AAg3A1gApzKKQBhBHCyBbQiyhbhhhHQhihGiViJQCVCJBiBGgAJajTQhCBoAACPQAACRBCBnQBCBnBcAAQBdAABChnQBChnAAiRQAAiPhChoQhChnhdAAQhcAAhCBng");
	this.shape_12.setTransform(248,177.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQMzQAJiJAAk+QABk/hJlmIkrjEQgCgmAGg7QALh1AohlQB/lIFjg7IAZA1QAeBEAZBNQBPD1gDDuIk5DoIACC3QACDcAQDJQAPDKAXDCQAYDDisEcIhFAfQCFj/AIiKg");
	this.shape_13.setTransform(267.7,191.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ADYyMQAeBFAZBMQBPD3gDDwIk5DpIACC3QACDeAlFJQAkFJgRBCQgRBDiFEjIhFAeQCUk2AOh3QAOh4gMk4QgNk3hJlpIkrjFQgCgmAGg7QALh2AohmQB/lJFjg7g");
	this.shape_14.setTransform(267.7,190.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("AIxAaQgaApgkAAQglAAgZgpQgagnAAg6QAAg6AagpQAZgpAlAAQAkAAAaApQAaApAAA6QAAA6gaAngAnThgQAoAIAXAzQAXAxgIBAQgHA1gZAlQgFAHgFAGQgjAogngJQgjgGgWgmQgDgHgEgHQgXgzAIg/QAIg/AigoQAjgnAoAIg");
	this.shape_15.setTransform(279.3,177.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6.7,1,1).p("AOGkuQBZBwAQCUQAOB5giDHIj9CcIgfGyIgYFHQhDAjhhApQhgAqiwBfQivBfiyjAQi0jAjnAMQjnAMixAVIA3rVIiHjCQgFhfAOiQQAdkfBgj5QCGlfD7jdQCeiMDIhUQA1gWA4gTQCVgyCtgVIAzAtQAMAMANAOQAQAUARAVQAfApAeAxQC0EoAyHYIBBAmQBOA1A8BLgAPZAeQAACShCBnQhCBohdAAQhcAAhChoQhChnAAiSQAAiQBChoQBChoBcAAQBdAABCBoQBCBoAACQgAk7M5QACAAADABQBjASBXh/QBXh/AZjKQAEgfACgeQACgSAAgSQACg+gGg3QgGgxgLgtQgGgYgIgXQgHgUgHgPQgxh2hUgTIgHgBQhGgMhCA/QgYAYgXAhQgvBEgdBaQgIAXgGAZQgOA4gIBBQgaDIA1CbQAoB6BFAmQAFADAFACQANAFAOAFgAlWMvQAFACAEACQAIADAKADAtqG3QCVCKBiBHQBhBGCyBc");
	this.shape_16.setTransform(248,177);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("An5DSQgjgGgWgmIgHgOQgXgzAIg/QAIg/AigoQAjgnAoAIQAoAIAXAzQAXAxgIBAQgHA1gZAlIgKANQgdAhgfAAIgOgCgAG1AaQgagnAAg6QAAg6AagpQAZgpAlAAQAkAAAaApQAaApAAA6QAAA6gaAnQgaApgkAAQglAAgZgpg");
	this.shape_17.setTransform(279.3,177.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000033").s().p("AoqI9IgFgBIgagJIgKgGQhFgmgph5Qg0icAZjIQAIg/APg4QAGgYAHgXQAdhaAwhGQAXgiAYgXQBBhABHAMIAGACQBUATAyB1IANAmQAIAWAGAZQAMAsAFAxQAGA4gBA7IgCAlQgCAdgEAgQgZDJhXCAQhNBuhVAAQgMAAgNgCgAnYk2QgjAogIBBQgHA/AXAzIAHAOQAVAmAjAGQAoAJAigoIAKgNQAaglAGg1QAJhAgYgzQgWgzgogIIgOgBQghAAgcAggAFmAbQhBhlAAiTQAAiRBBhpQBChnBdAAQBdAABCBnQBBBpAACRQAACThBBlQhCBohdAAQhdAAhChogAH6mfQgaApAAA6QAAA6AaApQAaApAkAAQAkAAAagpQAagpAAg6QAAg6gagpQgagpgkAAQgkAAgaApg");
	this.shape_18.setTransform(272.4,202.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AhuUfQi0jAjnAMQjnAMixAVIA3rVIiHjCQgFhfAOiQQAdkfBgj5QCGlfD7jdQCeiMDIhUQA1gWA4gTQCVgyCtgVIAzAtIAZAaIAhApQAfApAeAxQC0EoAyHYIBBAmQBOA1A8BLQBZBwAQCUQAOB5giDHIj9CcIgfGyIgYFHQhDAjhhApQhgAqiwBfQg6Afg6AAQh2AAh3iAgAheq2QgoBmgLB2QgGA6ACAnIEpDFQBLFoAME4QANE4gOB3QgOB4iWE2IBFgfQCHkjARhCQARhCgllJQgklJgCjgIgCi2IE5jpQADjwhPj2QgZhNgehEIgZg2QllA7h9FKgAlJhZQgYAYgXAhQgvBEgdBaQgIAXgGAZQgOA4gIBBQgaDIA1CbQAoB6BFAmIAKAFIAJAEIASAGIAFABQBjASBXh/QBXh/AZjKQAEgfACgeIACgkQACg+gGg3QgGgxgLgtQgGgYgIgXIgOgjQgxh2hUgTIgHgBQgLgCgLAAQg7AAg3A1gApzKIQBhBGCyBcQiyhchhhGQhihHiViKQCVCKBiBHgAJajaQhCBoAACQQAACSBCBnQBCBoBcAAQBdAABChoQBChnAAiSQAAiQhChoQhChohdAAQhcAAhCBog");
	this.shape_19.setTransform(248,177);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAlMVQAOh4gMk4QgNk3hJlpIkrjFQgCgmAGg7QALh2AohmQB/lJFjg7IAZA1QAeBFAZBMQBPD3gDDwIk5DpIACC3QACDeAlFJQAkFJgRBDQgRBCiFEjIhFAeQCUk2AOh3g");
	this.shape_20.setTransform(267.7,190.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("AIxAZQgaApgkAAQglAAgZgpQgagmAAg5QAAg5AagoQAZgoAlAAQAkAAAaAoQAaAoAAA5QAAA5gaAmgAnTheQAoAIAXAyQAXAvgIA/QgHA1gZAjQgFAHgFAGQgjAngngIQgjgHgWglQgDgGgEgHQgXgyAIg+QAIg9AignQAjgnAoAIg");
	this.shape_21.setTransform(279.3,175.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AA9PiQhIBKgtCCIhFAfQBKjwAxAAQAwAAAhkZQAhkaifriIkrjIQgCgnAGg7QALh3AohpQB/lOFjg8IAZA2QAeBGAZBOQBPD6gDDzIk5DtIACC6QAcEFAcEZQAcEZgGAe");
	this.shape_22.setTransform(267.7,189.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(6.7,1,1).p("ALbG1IgfGmIgWFIQgqAohsAsQhrAtjJBiQjJBih0jUQh2jUkeAmQkeAmiNgLIgBAAIA6rOIiKiqQgFhpAOiJQAckkBgj9QCHljD6jhQCeiODJhWQA1gXA4gSQCVgzCsgWIA0AuQAMANAMAOQARAUARAVQAfAqAdAxQC0EtAyHfIBCAnQBOA2A7BMQBZByARCWQANB6gYC3IiQBCQgaASgdAHgALbF0QhLgOg3hVQhBhlAAiPQAAiNBBhmQBChlBdAAQBdAABCBlQBBBmAACNQAACPhBBlQgfAvgkAZIg3AZQgSAFgTAAQgPAAgOgDIAABBAjBiKQhHgLhBA+QgYAXgXAhQgwBCgdBYQgHAXgGAXQgPA4gIA/QgZDEA0CYQAnBxBIAsQAEACAEACQAJAFAIAEQAEACAGgBQADABACAAQBjASBYh8QBXh9AZjFQAEgfACgdQABgSABgSQABg8gGg3QgFgvgMgsQgGgYgIgWQgGgUgHgPQgyhzhUgSgAtnGzQCnCYBMAvQBMAvBIAqQA+AkBDAi");
	this.shape_23.setTransform(248.1,175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF99").s().p("An5DOQgjgHgWglIgHgNQgXgxAIg/QAIg9AignQAjgnAoAJQAoAHAXAyQAXAvgIBAQgHA0gZAjIgKANQgcAhggAAIgOgCgAG1AZQgaglAAg6QAAg5AagnQAZgpAlAAQAkAAAaApQAaAnAAA5QAAA6gaAlQgaApgkAAQglAAgZgpg");
	this.shape_24.setTransform(279.3,175.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000033").s().p("AoqIxIgFgBQgFABgFgCIgRgJIgIgEQhIgsgnhxQg0iYAZjEQAIg9APg4QAGgXAHgXQAdhYAwhEQAXghAYgXQBBg+BHALIAGACQBUASAyBzIANAlQAIAWAGAYQAMAsAFAvQAGA3gBA6IgCAkQgCAdgEAfQgZDFhXB9QhNBshVAAQgMAAgNgCgAnYkvQgjAngIA/QgHA+AXAyIAHANQAVAlAjAHQAoAIAignIAKgNQAagjAGg1QAJg/gYgxQgWgygogIIgOgBQghAAgcAggAHoB9QhKgOg4hVQhBhjAAiPQAAiPBBhmQBChlBdAAQBdAABCBlQBBBmAACPQAACPhBBjQgfAvgkAZIg3AZQgSAFgTAAQgPAAgOgDgAH6mXQgaAoAAA5QAAA5AaAoQAaApAkAAQAkAAAagpQAagoAAg5QAAg5gagoQgagogkAAQgkAAgaAog");
	this.shape_25.setTransform(272.4,199.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AhhUUQh2jUkeAmQkeAmiNgLIgBAAIA6rOIiKiqQgFhpAOiJQAckkBgj9QCHljD6jhQCeiODJhWQA1gXA4gSQCVgzCsgWIA0AuIAYAbIAiApQAfAqAdAxQC0EtAyHfIBCAnQBOA2A7BMQBZByARCWQANB6gYC3IiQBCQAkgZAfgvQBBhlAAiPQAAiNhBhmQhChlhdAAQhdAAhCBlQhBBmAACNQAACPBBBlQA3BVBLAOIAABBIgfGmIgWFIQgqAohsAsQhrAtjJBiQg/Afg4AAQh1AAhRiRgABFVeIBFgeQAuiCBKhLQA/h9gLh9QAHgegckZQgckZgckHIgCi4IE5jtQACj0hPj6QgZhOgehFIgZg2QllA7h8FPQgoBogMB3QgGA8ACAnIEqDIQCgLighEZQghEZgxAAIgBAAQgxAAhKDwgAk3MoQBjASBYh8QBXh9AZjFQAEgfACgdIACgkQABg8gGg3QgFgvgMgsQgGgYgIgWIgNgjQgyhzhUgSIgGgCQhHgLhBA+QgYAXgXAhQgwBCgdBYQgHAXgGAXQgPA4gIA/QgZDEA0CYQAnBxBIAsIAIAEIARAJQAEACAGgBIAFABgAp0J6QBMAvBIAqQA+AkBDAiQhDgig+gkQhIgqhMgvQhMgviniYQCnCYBMAvg");
	this.shape_26.setTransform(248.1,175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCPdQAwAAAhkZQAhkaifriIkrjIQgCgnAGg7QALh3AohpQB/lOFjg8IAZA2QAeBGAZBOQBPD6gDDzIk5DtIACC6QAcEFAcEZQAcEZgGAeQALB+hAB9QhIBKgtCCIhFAfQBKjwAxAAg");
	this.shape_27.setTransform(267.7,189.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("ACNPdIg7CsIhwAoQA0iJAdgpQAdgoAQkRQAPkRierbIkrjGQgCgmAGg7QALh2AohnQB/lLFjg7IAZA1QAeBFAZBNQBPD4gDDxIk5DqIACC4QAhEDAmEWQAnEWAIAe");
	this.shape_28.setTransform(267.7,189.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3,1,1).p("AHzBBQglAAgZgoQgaglAAg5QAAg4AagoQAZgnAlAAQAkAAAaAnQAaAoAAA4QAAA5gaAlQgaAogkAAgAnThcQAoAHAXAxQAXAvgIA/QgHA0gZAjQgFAGgFAGQgjAngngIQgjgHgWgkQgDgHgEgHQgXgxAIg9QAIg9AigmQAjgmAoAIg");
	this.shape_29.setTransform(279.3,177.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(6.7,1,1).p("AOFkpQBZBwARCUQANB6gdCvIkECNIgfG2IgWFFQgpAuhoA6QhoA5i+BVQi/BVAgicQAgidnOgXQnQgYhygFIA5rGIiKioQgEhoANiIQAckhBgj6QCHlfD6jfQCeiNDJhVQA1gWA4gTQCVgyCsgVIA0AtQAMAMAMAOQARAUARAVQAfApAdAxQC0EqAyHaIBCAnQBOA1A7BMgALbFmQhKgOg4hUQhBhlAAiNQAAiMBBhkQBChlBdAAQBdAABCBlQBBBkAACMQAACNhBBlQhCBkhdAAQgPAAgOgCIAAArAjBiTQhHgLhBA9QgYAXgXAgQgwBCgdBXQgHAXgGAXQgPA3gIA+QgZDCA0CXQApB2BOArQAJADAIAEQAFACAFgBQADABACAAQBjASBYh7QBXh8AZjDQAEgeACgdQABgSABgSQABg7gGg2QgFgvgMgsQgGgXgIgWQgGgUgHgOQgyhyhUgSgAtnGkQCnCWBUAyQBTAyBJAtQA+AnA7Aa");
	this.shape_30.setTransform(248.1,177.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF99").s().p("An5DMQgjgHgWgkIgHgOQgXgxAIg9QAIg9AigmQAjgmAoAIQAoAHAXAxQAXAvgIA/QgHA0gZAjIgKAMQgcAgggAAIgOgBgAG1AZQgaglAAg5QAAg4AagoQAZgnAlAAQAkAAAaAnQAaAoAAA4QAAA5gaAlQgaAogkAAQglAAgZgog");
	this.shape_31.setTransform(279.3,177.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("AoqIrIgFgBQgFABgFgCIgRgHQhOgrgph2Qg0iXAZjCQAIg8APg3QAGgXAHgXQAdhXAwhEQAXggAYgXQBBg9BHALIAGACQBUASAyByQAHAQAGAUQAIAWAGAXQAMAsAFAvQAGA2gBA5IgCAkQgCAdgEAeQgZDDhXB8QhNBshVAAQgMAAgNgDgAnYksQgjAmgIA/QgHA9AXAxIAHAOQAVAkAjAHQAoAIAignIAKgMQAagjAGg0QAJg/gYgxQgWgxgogHIgOgCQghAAgcAggAHoB8QhKgOg4hUQhBhjAAiNQAAiOBBhkQBChlBdAAQBdAABCBlQBBBkAACOQAACNhBBjQhCBkhdAAQgPAAgOgCgAH6mTQgaAoAAA4QAAA5AaAnQAaAoAkAAQAkAAAagoQAagnAAg5QAAg4gagoQgagngkAAQgkAAgaAng");
	this.shape_32.setTransform(272.4,201);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("ABQU7QAgidnOgXIpCgdIA5rGIiKioQgEhoANiIQAckhBgj6QCHlfD6jfQCeiNDJhVQA1gWA4gTQCVgyCsgVIA0AtIAYAaIAiApQAfApAdAxQC0EqAyHaIBCAnQBOA1A7BMQBZBwARCUQANB6gdCvIkECNIAAgrQAOACAPAAQBdAABChkQBBhlAAiNQAAiMhBhkQhChlhdAAQhdAAhCBlQhBBkAACMQAACNBBBlQA4BUBKAOIAAArIgfG2IgWFFQgpAuhoA6QhoA5i+BVQhDAegoAAQhJAAAVhlgAheq0QgoBogMB1QgGA7ACAnIEqDGQCgLagQERQgQERgcApQgdAog3CJIBygoIA8isIAMjuQgIgegmkWQgnkWggkEIgCi2IE5jrQACjxhPj3QgZhNgehFIgZg2QllA7h8FLgAk3MVQBjASBYh7QBXh8AZjDQAEgeACgdIACgkQABg7gGg2QgFgvgMgsQgGgXgIgWQgGgUgHgOQgyhyhUgSIgGgCQhHgLhBA9QgYAXgXAgQgwBCgdBXQgHAXgGAXQgPA3gIA+QgZDCA0CXQApB2BOArIARAHQAFACAFgBIAFABgApsJsQBTAyBJAtQA+AnA7AaQg7gag+gnQhJgthTgyQhUgyiniWQCnCWBUAygALbGRg");
	this.shape_33.setTransform(248.1,177.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAzP/QAdgoAQkRQAPkRieraIkrjGQgCgnAGg7QALh2AohnQB/lLFjg7IAZA2QAeBEAZBNQBPD4gDDxIk5DqIACC5QAhECAmEWQAnEWAIAeIgNDtIg7CtIhwAoQA0iJAdgpg");
	this.shape_34.setTransform(267.7,189.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("ADAPWIgyClIhyAeQBmiEAMhmQALhngljeQgmjeh9qgIkrjFQgCgmAGg7QALh1AohnQB/lIFjg7IAZA1QAeBFAZBMQBPD2gDDvIk5DqIACC2QAeEAAzELQA0EKAZAt");
	this.shape_35.setTransform(267.7,188.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AHzBBQglAAgZgoQgaglAAg4QAAg4AagoQAZgnAlAAQAkAAAaAnQAaAoAAA4QAAA4gaAlQgaAogkAAgAnThcQAoAHAXAxQAXAvgIA+QgHA0gZAjQgFAGgFAGQgjAngngJQgjgGgWgkQgDgHgEgHQgXgwAIg+QAIg8AigmQAjgmAoAIg");
	this.shape_36.setTransform(279.3,178.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(6.7,1,1).p("ALYGtIB7hCICIhKQAii4gOh5QgQiShZhwQg8hLhOg1IhBgnQgynXi0knQgegxgfgpQgRgVgQgTQgNgOgMgMIgzguQitAWiVAyQg4ASg1AWQjIBVieCLQj7DeiGFdQhgD4gdEfQgNCHAEBnICLCmQCmCWBcA1QBbA1A+AwQA2ApA+AQAlWMaQhPgqgoh1Qg1iVAajBQAIg+AOg2QAGgYAIgWQAdhWAvhBQAXghAYgWQBCg9BGALIAHABQBUATAxBvQAHAQAHAUQAIAWAGAXQALArAGAvQAGA2gCA6QAAASgCARQgCAdgEAeQgZDChXB7QhXB6hjgSQgDAAgCgBQgGABgEgCQgKgBgIgDALbF4QhKgOg3hTQhChkAAiNQAAiKBChkQBChkBcAAQBdAABCBkQBCBkAACKQAACNhCBkQghAygoAZQgnAYgvAAQgPAAgOgCIgDA1IgcGpIgVFCQgrAogRAcQgRAcjNBeQjMBeAFhtQAEhtnugCQnxgBiLhgIA6rC");
	this.shape_37.setTransform(248,176.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF99").s().p("An5DKQgjgGgWgkIgHgOQgXgwAIg+QAIg8AigmQAjgmAoAIQAoAHAXAxQAXAvgIA+QgHA0gZAjIgKAMQgcAgggAAIgOgCgAG1AZQgaglAAg4QAAg4AagoQAZgnAlAAQAkAAAaAnQAaAoAAA4QAAA4gaAlQgaAogkAAQglAAgZgog");
	this.shape_38.setTransform(279.3,178.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000033").s().p("AoqInIgFgBQgFABgFgCIgSgEIABgEQhOgqgph1Qg0iVAZjBQAIg8APg2QAGgYAHgWQAdhWAwhDQAXghAYgWQBBg9BHALIAGABQBUATAyBxQAHAQAGAUQAIAWAGAXQAMArAFAvQAGA2gBA4IgCAjQgCAdgEAeQgZDChXB7QhNBrhVAAQgMAAgNgDgAnYkqQgjAmgIA+QgHA+AXAwIAHAOQAVAkAjAGQAoAJAignIAKgMQAagjAGg0QAJg+gYgxQgWgxgogHIgOgBQghAAgcAfgAHoB7QhKgOg4hTQhBhiAAiNQAAiMBBhkQBChkBdAAQBdAABCBkQBBBkAACMQAACNhBBiQghAygoAZQgoAYguAAQgPAAgOgCgAH6mQQgaAoAAA4QAAA4AaAnQAaAoAkAAQAkAAAagoQAagnAAg4QAAg4gagoQgagngkAAQgkAAgaAng");
	this.shape_39.setTransform(272.4,201.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("ADGVHQAEhtnugCQnxgBiLhgIA6rCQCmCWBcA1QBbA1A+AwQA2ApA+AQQg+gQg2gpQg+gwhbg1Qhcg1imiWIiLimQgEhnANiHQAdkfBgj4QCGldD7jeQCeiLDIhVQA1gWA4gSQCVgyCtgWIAzAuIAZAaIAhAoQAfApAeAxQC0EnAyHXIBBAnQBOA1A8BLQBZBwAQCSQAOB5giC4IiIBKIh7BCIADg1QAOACAPAAQAvAAAngYQAogZAhgyQBChkAAiNQAAiKhChkQhChkhdAAQhcAAhCBkQhCBkAACKQAACNBCBkQA3BTBKAOIgDA1IgcGpIgVFCQgrAogRAcQgRAcjNBeQheAsgyAAQg6AAADg7gAheqaQgoBngLB1QgGA6ACAmIEpDFQB/KhAlDeQAmDegMBmQgLBnhmCEIBygeIAyimQAKhOgIiUQgZgsg0kLQg0kKgdkDIgCi0IE5jpQADjvhPj2QgZhNgehEIgZg1QllA6h9FJgAk2MkQBjASBXh6QBXh7AZjCQAEgeACgdIACgjQACg6gGg2QgGgvgLgrQgGgXgIgWQgHgUgHgQQgxhvhUgTIgHgBQhGgLhCA9QgYAWgXAhQgvBBgdBWQgIAWgGAYQgOA2gIA+QgaDBA1CVQAoB1BPAqIgBAEIASAEQAEACAGgBIAFABg");
	this.shape_40.setTransform(248,176.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ACOOvQALhngljeQgmjeh9qhIkrjEQgCgmAGg6QALh2AohnQB/lIFjg7IAZA1QAeBFAZBMQBPD2gDDvIk5DpIACC3QAeEAAzELQA0EKAZAsQAJCVgLBOIgyCmIhyAdQBmiEAMhmg");
	this.shape_41.setTransform(267.7,188.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("ADUPYIAACRIh3AeQA0iAAHhfQAHhggojZQgojYh+qdIkrjEQgCgmAGg6QALh0AohnQB/lGFjg7IAZA1QAeBEAZBMQBPD1gDDuIk5DoIACC1QAdD/A0EJQA0EJAZAs");
	this.shape_42.setTransform(267.7,188.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(6.7,1,1).p("ALbGOQhKgOg3hTQhChjAAiMQAAiKBChjQBChjBcAAQBdAABCBjQBCBjAACKQAACMhCBjQhCBjhdAAQgPAAgOgCIgEA/ID6iVQAsi4gOh6QgQiPhZhwQg8hKhOg1IhBgmQgynVi0kmQgegwgfgpQgRgVgQgTQgNgOgMgMIgzgtQitAWiVAxQg4ASg1AWQjIBUieCLQj7DciGFcQhgD3gdEdQgNCGAEBmICLCmQCmCVBRA2QBRA3BTAnQA8AcArAWQhEgtglhpQg1iVAajAQAIg9AOg2QAGgXAIgWQAdhWAvhDQAXgeAYgXQBCg8BGALIAHABQBUASAxBvQAHAQAHAUQAIAWAGAWQALArAGAvQAGA2gCA6QAAARgCASQgCAcgEAeQgZDBhXB6QhXB6hjgSQgDAAgCgBQgGABgEgCQgIgEgJgEQgHgEgHgEALXHNIgbGdIgVFAQgXAsgaAPQgaAOiEBAQiEBBgXgYQgYgZoXgUQoagUiUiSIA6q+");
	this.shape_43.setTransform(248,174.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3,1,1).p("AIxijQAaAnAAA4QAAA4gaAlQgaAngkAAQglAAgZgnQgaglAAg4QAAg4AagnQAZgnAlAAQAkAAAaAngAnThcQAoAIAXAwQAXAvgIA+QgHAzgZAjQgFAGgFAGQgjAngngJQgjgGgWgkQgDgHgEgHQgXgwAIg9QAIg8AigmQAjglAoAHg");
	this.shape_44.setTransform(279.3,179);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF99").s().p("An5DJQgjgGgWgkIgHgOQgXgwAIg9QAIg8AigmQAjglAoAHQAoAIAXAwQAXAvgIA+QgHAzgZAjIgKAMQgcAgggAAIgOgCgAG1AZQgaglAAg4QAAg4AagnQAZgnAlAAQAkAAAaAnQAaAnAAA4QAAA4gaAlQgaAngkAAQglAAgZgng");
	this.shape_45.setTransform(279.3,179);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000033").s().p("AoqIlIgFgBQgFABgFgCIgQgJIgPgIQhEgsglhqQg0iUAZjAQAIg7APg3QAGgXAHgWQAdhWAwhDQAXggAYgWQBBg9BHALIAGACQBUASAyBwQAHARAGATQAIAWAGAXQAMArAFAuQAGA2gBA4IgCAjQgCAdgEAeQgZDAhXB7QhNBqhVAAQgMAAgNgCgAnYkoQgjAmgIA+QgHA9AXAwIAHANQAVAkAjAHQAoAIAignIAKgMQAagiAGg0QAJg9gYgxQgWgxgogHIgOgCQghAAgcAggAHoB7QhKgOg4hTQhBhiAAiLQAAiMBBhjQBChkBdAAQBdAABCBkQBBBjAACMQAACLhBBiQhCBjhdAAQgPAAgOgCgAH6mNQgaAnAAA4QAAA3AaAnQAaAoAkAAQAkAAAagoQAagnAAg3QAAg4gagnQgagogkAAQgkAAgaAog");
	this.shape_46.setTransform(272.4,202.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AE9VcQgYgZoXgUQoagUiUiSIA6q+QCmCVBRA2QBRA3BTAnQA8AcArAWIAOAIIARAIQAEACAGgBIAFABQBjASBXh6QBXh6AZjBQAEgeACgcIACgjQACg6gGg2QgGgvgLgrQgGgWgIgWQgHgUgHgQQgxhvhUgSIgHgBQhGgLhCA8QgYAXgXAeQgvBDgdBWQgIAWgGAXQgOA2gIA9QgaDAA1CVQAlBpBEAtQgrgWg8gcQhTgnhRg3QhRg2imiVIiLimQgEhmANiGQAdkdBgj3QCGlcD7jcQCeiLDIhUQA1gWA4gSQCVgxCtgWIAzAtIAZAaIAhAoQAfApAeAwQC0EmAyHVIBBAmQBOA1A8BKQBZBwAQCPQAOB6gsC4Ij6CVIgbGdIgVFAQgXAsgaAPQgaAOiEBAQhgAvgmAAQgPAAgGgGgAhep/QgoBngLB0QgGA6ACAmIEpDEICoN1QAoDZgHBgQgHBfg0CAIB3geIAAiRQAUhkgmh4QgZgsg0kJQg0kJgdkBIgCizIE5joQADjuhPj1QgZhMgehEIgZg1QllA7h9FGgALXHNIAEg/QAOACAPAAQBdAABChjQBChjAAiMQAAiKhChjQhChjhdAAQhcAAhCBjQhCBjAACKQAACMBCBjQA3BTBKAOg");
	this.shape_47.setTransform(248,174.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ACYOnQAHhfgojZIimt1IkrjEQgCgmAGg6QALh0AohnQB/lGFjg7IAZA1QAeBEAZBMQBPD1gDDuIk5DoIACC1QAdD/A0EJQA0EJAZAsQAmB4gUBkIAACRIh3AeQA0iAAHhgg");
	this.shape_48.setTransform(267.7,188.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("ADyPnIAPCIIheAAQAchqgOhXQgOhXgqjXQgqjXh+qbIkrjCQgCgmAGg6QALh0AohmQB/lGFjg6IAZA1QAeBEAZBLQBPD0gDDtIk5DnIACC1QAdD+A0EIQA0EIAjAd");
	this.shape_49.setTransform(267.7,186.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(6.7,1,1).p("APZBRQAACLhCBjQhCBihdAAQgPAAgOgCQhKgNg3hTQhChjAAiLQAAiKBChiQBChkBcAAQBdAABCBkQBCBiAACKgALXHjID/iaQAni3gOh5QgQiPhZhvQg8hKhOg1IhBgmQgynTi0klQgegwgfgoQgRgVgQgUQgNgNgMgMIgzguQitAWiVAxQg4ASg1AXQjIBTieCLQj7DbiGFaQhgD2gdEcQgNCGAEBmICLClIg6K8QBLC1JHgQQJFgQBYAWQBZAWBIgsQBIgsAMgOQAMgPAXgrIAVlAIAbmWIAEhEAi6hQQBUASAxBuQAHARAHATQAIAWAGAWQALArAGAvQAGA1gCA6QAAASgCARQgCAdgEAdQgZDAhXB6QhXB5hjgRQgDgBgCAAQgGABgEgCQgJgEgJgDQhOgrgoh0Qg1iUAai/QAIg9AOg2QAGgXAIgWQAdhWAvhDQAXgdAYgXQBCg8BGALgAtmHcQCmCUBRA1QBSA1BNAqQBCAjA3AY");
	this.shape_50.setTransform(248,173.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3,1,1).p("AJLhDQAAA3gaAlQgaAogkAAQglAAgZgoQgaglAAg3QAAg4AagnQAZgnAlAAQAkAAAaAnQAaAnAAA4gAnThbQAoAIAXAwQAXAvgIA9QgHAzgZAjQgFAGgFAGQgjAmgngIQgjgGgWgkQgDgHgEgHQgXgwAIg8QAIg8AigmQAjglAoAHg");
	this.shape_51.setTransform(279.3,179.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF99").s().p("An5DJQgjgGgWgkIgHgOQgXgwAIg8QAIg8AigmQAjglAoAHQAoAIAXAwQAXAvgIA9QgHAzgZAjIgKAMQgdAfggAAIgNgBgAG1AZQgaglAAg3QAAg4AagnQAZgnAlAAQAkAAAaAnQAaAnAAA4QAAA3gaAlQgaAogkAAQglAAgZgog");
	this.shape_52.setTransform(279.3,179.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000033").s().p("AoqIjIgFgBQgFABgFgCIgRgIQhOgqgph0Qg0iUAZi/QAIg7APg2QAGgXAHgWQAdhWAwhDQAXgfAYgXQBBg8BHALIAGABQBUASAyBwQAHARAGATQAIAWAGAWQAMArAFAvQAGA1gBA4IgCAjQgCAdgEAdQgZDAhXB6QhNBqhVAAQgMAAgNgCgAnYknQgjAmgIA+QgHA8AXAwIAHAOQAVAkAjAGQAoAIAigmIAKgMQAagjAGgzQAJg9gYgxQgWgwgogIIgOgBQghAAgcAfgAHoB6QhKgNg4hTQhBhhAAiLQAAiMBBhiQBChkBdAAQBdAABCBkQBBBiAACMQAACLhBBhQhCBihdAAQgPAAgOgCgAH6mMQgaAnAAA4QAAA3AaAnQAaAoAkAAQAkAAAagoQAagnAAg3QAAg4gagnQgagngkAAQgkAAgaAng");
	this.shape_53.setTransform(272.4,202.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AGPVDQhYgWpFAQQpHAQhLi1IA6q8IiLilQgEhmANiGQAdkcBgj2QCGlaD7jbQCeiLDIhTQA1gXA4gSQCVgxCtgWIAzAuIAZAZIAhApQAfAoAeAwQC0ElAyHTIBBAmQBOA1A8BKQBZBvAQCPQAOB5gnC3Ij/CaIAEhEIgEBEIgbGWIgVFAQgXArgMAPQgMAOhIAsQgwAeg4AAQgbAAgegIgAhepqQgoBmgLB0QgGA6ACAmIEpDDQB/KaAqDXQArDXANBXQAOBXgbBqIBeAAIgPiHQgKhjgciGQgjgdg0kIQg0kJgdj/IgCizIE5jnQADjthPj0QgZhMgehEIgZg0QllA6h9FFgAk2NIQBjARBXh5QBXh6AZjAQAEgdACgdIACgjQACg6gGg1QgGgvgLgrQgGgWgIgWQgHgTgHgRQgxhuhUgSIgHgBQhGgLhCA8QgYAXgXAdQgvBDgdBWQgIAWgGAXQgOA2gIA9QgaC/A1CUQAoB0BOArIASAHQAEACAGgBIAFABgApvKlQBSA1BNAqQBCAjA3AYQg3gYhCgjQhNgqhSg1QhRg1imiUQCmCUBRA1gAJaibQhCBiAACKQAACLBCBjQA3BTBKANQAOACAPAAQBdAABChiQBChjAAiLQAAiKhChiQhChkhdAAQhcAAhCBkg");
	this.shape_54.setTransform(248,173.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ACjRvQAchqgOhXQgOhXgqjXQgqjXh+qbIkrjCQgCgmAGg6QALh0AohmQB/lGFjg6IAZA1QAeBEAZBLQBPD0gDDtIk5DnIACC1QAdD+A0EIQA0EIAjAdQAcCGAKBjIAPCIg");
	this.shape_55.setTransform(267.7,186.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(3,1,1).p("AJLhGQAAA5gaAmQgaApgkAAQglAAgZgpQgagmAAg5QAAg5AagoQAZgoAlAAQAkAAAaAoQAaAoAAA5gApIAlQAIg9AignQAjgnAoAIQAoAIAXAyQAXAvgIA/QgIA+giAnQgjAngngIQgpgIgXgxQgXgyAIg+g");
	this.shape_56.setTransform(279.3,180.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("AEPupQBPDxgDDrIk5DkIACC0QAFDYB4F0QB5F1AKDhIhoAAQBjhGiXnaQiUnagjlrIkrjBQgCglAGg6QALhzAohkQB/lDFjg5IAZA0QAeBDAZBLg");
	this.shape_57.setTransform(267.7,187.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(6.7,1,1).p("APZBUQAACPhCBmQhCBlhdAAQhcAAhChlQhChmAAiPQAAiNBChlQBChmBcAAQBdAABCBmQBCBlAACNgAPvAMQAOB4giDDIj9CZIg3LpQgFAEg1A5QgsAwgcAQQhIgJg+gGQh3gMhRABQkKAEmNAYQmMAYhVi1IA8q8IiMjIQgFhdAOiNQAdkZBgj0QCGlXD7jZQCeiJDIhSQA1gWA4gSQCVgxCtgVIAzAsQAMAMAMAOQARATARAVQAfAnAeAwQC0EiAyHPIBBAlQBOA0A8BJQBZBuAQCPgAk7NfQACAAADABQBjASBXh9QBXh9AZjFQAEgeACgeQACgSAAgSQADhugYhgQgGgXgIgWQgHgUgHgRQgxhxhUgTIgHgBQhGgMhCA+QgYAXgXAfQgvBFgdBYQgZBLgLBZQgaDEA1CZQAoB2BFAmQAFADAFACQANAFAOAFgAlWNVQAFACAEACQAIADAKADAtlHvQB9CGBsBCQBpBACzBZ");
	this.shape_58.setTransform(248,174.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF99").s().p("An5DOQgpgHgXgyQgXgyAIg+QAIg9AignQAjgnAoAIQAoAIAXAyQAXAvgIA/QgIA+giAnQgcAhggAAIgOgCgAG1AaQgagnAAg5QAAg5AagoQAZgoAlABQAkgBAaAoQAaAoAAA5QAAA5gaAnQgaAogkAAQglAAgZgog");
	this.shape_59.setTransform(279.3,180.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000033").s().p("AoqIxIgFgBIgagJIgLgFQhEgmgph3Qg0iYAZjEQAMhYAYhLQAdhYAwhEQAXghAYgXQBBg+BHALIAGACQBUASAyBzIANAlQAIAWAGAYQAZBfgDBtIgCAkQgCAdgEAfQgZDFhXB9QhNBshVAAQgMAAgNgCgAnYkvQgjAngIA/QgHA+AXAyQAWAxApAIQAoAIAignQAjgnAHg+QAJg/gYgxQgWgygogIIgOgBQghAAgcAggAFmAaQhBhjAAiPQAAiPBBhmQBChlBdAAQBdAABCBlQBBBmAACPQAACPhBBjQhCBmhdAAQhdAAhChmgAH6mXQgaAoAAA5QAAA5AaAoQAaApAkAAQAkAAAagpQAagoAAg5QAAg5gagoQgagogkAAQgkAAgaAog");
	this.shape_60.setTransform(272.4,204.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0000FF").s().p("AuhSrIA8q8IiMjIQgFhdAOiNQAdkZBgj0QCGlXD7jZQCeiJDIhSQA1gWA4gSQCVgxCtgVIAzAsIAYAaQARATARAVQAfAnAeAwQC0EiAyHPIBBAlQBOA0A8BJQBZBuAQCPQAOB4giDDIj9CZIg3LpIg6A9QgsAwgcAQQhIgJg+gGQh3gMhRABQkKAEmNAYQguACgqAAQk+AAhLifgAhepxQgoBlgLBzQgGA5ACAmIEpDBQAjFqCWHbQCWHahiBFIBoAAQgKjgh5l1Qh4l1gFjaIgCixIE5jlQADjqhPjxQgZhMgehDIgZg0QllA6h9FCgAlJggQgYAXgXAfQgvBFgdBYQgZBLgLBZQgaDEA1CZQAoB2BFAmIAKAFIAJAEIASAGIAFABQBjASBXh9QBXh9AZjFQAEgeACgeIACgkQADhugYhgQgGgXgIgWIgOglQgxhxhUgTIgHgBQgLgCgLAAQg7AAg3A0gAp8K3QBpBACzBZQizhZhphAQhshCh9iGQB9CGBsBCgAJaieQhCBlAACNQAACPBCBmQBCBlBcAAQBdAABChlQBChmAAiPQAAiNhChlQhChmhdAAQhcAAhCBmg");
	this.shape_61.setTransform(248,174.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AC8RsQBjhFiXnaQiUnagjlrIkrjBQgCgmAGg5QALhzAohkQB/lDFjg5IAZAzQAeBDAZBMQBPDxgDDqIk5DlIACCzQAFDZB4F0QB5F1AKDgg");
	this.shape_62.setTransform(267.7,187.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("ADYxgQAeBEAZBMQBPDygDDtIk5DmIACC1QAFDZBcF8QBdF7giEHIh8AUQBuhshgnrQhenrgjltIkrjDQgCglAGg6QALh0AohlQB/lFFjg6g");
	this.shape_63.setTransform(267.7,189.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(6.7,1,1).p("APZApQAACQhCBmQhCBmhdAAQhcAAhChmQhChmAAiQQAAiOBChnQBChmBcAAQBdAABCBmQBCBnAACOgAPvgeQAOB3giDFIj9CZIg3LvQgFAEg1A6QgsAwgcAQQh4Auh8AfQh7Afh+gfQh8gfmEgKQmEgLhVi2IA8rBIiMjJQgFhdAOiPQAdkbBgj2QCGlZD7jaQCeiKDIhUQA1gWA4gSQCVgxCtgVIAzAsQAMANANANQAQATARAVQAfApAeAwQC0EkAyHSIBBAlQBOA1A8BJQBZBvAQCSgAk7M5QACABADAAQBjASBXh9QBXh+AZjHQAEgeACgeQACgSAAgSQADhwgYhgQgGgYgIgWQgHgUgHgRQgxhyhUgSIgHgCQhGgMhCA/QgYAXgXAhQgvBDgdBZQgZBMgLBaQgaDFA1CaQAoB4BFAlQAFADAFADQANAEAOAFgAlWMwQAFACAEABQAIADAKADAtlHGQB9CIBsBCQBpBACzBa");
	this.shape_64.setTransform(248,177.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3,1,1).p("AIxAaQgaApgkAAQglAAgZgpQgagnAAg5QAAg5AagpQAZgoAlAAQAkAAAaAoQAaApAAA5QAAA5gaAngApIAlQAIg9AignQAjgnAoAIQAoAHAXAzQAXAwgIA/QgIA/giAmQgjAogngIQgpgIgXgyQgXgyAIg/g");
	this.shape_65.setTransform(279.3,179.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF99").s().p("An5DQQgpgIgXgyQgXgyAIg/QAIg9AignQAjgnAoAIQAoAHAXAzQAXAwgIA/QgIA/giAmQgdAhgfAAIgOgBgAG1AaQgagnAAg5QAAg5AagpQAZgoAlAAQAkAAAaAoQAaApAAA5QAAA5gaAnQgaApgkAAQglAAgZgpg");
	this.shape_66.setTransform(279.3,179.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000033").s().p("AoqI1IgFgBIgagJIgKgGQhFglgph4Qg0iaAZjFQAMhYAYhMQAdhZAwhFQAXghAYgXQBBg/BHAMIAGACQBUASAyB0IANAlQAIAWAGAYQAZBggDBuIgCAkQgCAegEAeQgZDHhXB+QhNBuhVAAQgMAAgNgDgAnYkyQgjAngIBAQgHA/AXAyQAWAyApAHQAoAJAigoQAjgnAHg+QAJhAgYgyQgWgygogIIgOgBQghAAgcAggAFmAaQhBhkAAiQQAAiQBBhnQBChmBdAAQBdAABCBmQBBBnAACQQAACQhBBkQhCBmhdAAQhdAAhChmgAH6maQgaAoAAA6QAAA5AaAoQAaApAkAAQAkAAAagpQAagoAAg5QAAg6gagoQgagogkAAQgkAAgaAog");
	this.shape_67.setTransform(272.4,204);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0000FF").s().p("AA4VxQh8gfmEgKQmEgLhVi2IA8rBIiMjJQgFhdAOiPQAdkcBgj1QCGlZD7jaQCeiKDIhUQA1gWA4gSQCVgxCtgWIAzAtIAZAaIAhAoQAfApAeAvQC0ElAyHRIBBAmQBOA1A8BJQBZBvAQCRQAOB4giDEIj9CaIg3LvIg6A+QgsAvgcARQh4Auh8AfQg9APg/AAQg+AAg/gPgAheqhQgoBkgLB1QgGA5ACAmIEpDDQAjFsBgHrQBgHshuBsIB8gUQAikHhdl8Qhcl7gFjbIgCizIE5jnQADjshPjyQgZhNgehDIgZg1QllA6h9FGgAlJhMQgYAXgXAhQgvBDgdBZQgZBMgLBZQgaDGA1CZQAoB4BFAmIAKAFIAJAEIASAGIAFABQBjASBXh9QBXh+AZjHQAEgeACgeIACgkQADhwgYhgQgGgYgIgWIgOglQgxhyhUgSIgHgCQgLgCgLAAQg7AAg3A1gAp8KQQBpBACzBaQizhahphAQhshCh9iIQB9CIBsBCgAJajMQhCBnAACNQAACRBCBmQBCBmBcAAQBdAABChmQBChmAAiRQAAiNhChnQhChmhdAAQhcAAhCBmg");
	this.shape_68.setTransform(248,177.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("ABSI+QhenrgjltIkrjDQgCglAGg6QALh0AohlQB/lFFjg6IAZA0QAeBEAZBMQBPDygDDtIk5DmIACC1QAFDZBcF8QBdF7giEHIh8AUQBuhshgnrg");
	this.shape_69.setTransform(267.7,189.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AEPveQBPD1gDDuIk5DoIACC3QAFDcA2GMQA2GLg0D6IhrAUQByh1g7nxQg5nwgjlxIkrjEQgCgmAGg7QALh1AohmQB/lIFjg6IAZA1QAeBEAZBNg");
	this.shape_70.setTransform(267.7,188.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(3,1,1).p("AJLhGQAAA6gaAmQgaApgkAAQglAAgZgpQgagmAAg6QAAg6AagpQAZgpAlAAQAkAAAaApQAaApAAA6gAnThfQAoAIAXAzQAXAwgIBAQgIA/giAnQgjAogngIQgpgIgXgyQgXgzAIg/QAIg+AigoQAjgnAoAIg");
	this.shape_71.setTransform(279.3,178.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(6.7,1,1).p("AOGk3QBZBwAQCSQAOB4giDHIj9CbIg3L2QgFAEg1A6QgsAxgcAQQjcB7hrAMQhqALjQglQjSgmkPgWQkPgXhVi4IA8rIIiMjLQgFheAOiOQAdkfBgj5QCGlcD7jcQCeiMDIhTQA1gXA4gSQCVgyCtgVIAzAtQAMAMANAOQAQATARAWQAfAoAeAxQC0EmAyHWIBBAnQBOA0A8BLgAPZATQAACRhCBoQhCBnhdAAQhcAAhChnQhChoAAiRQAAiPBChnQBChoBcAAQBdAABCBoQBCBnAACPgAk7MrQACAAADABQBjASBXh/QBXh/AZjIQAEgfACgeQACgSAAgTQADhwgYhhQgGgYgIgWQgHgVgHgPQgxh1hUgTIgHgBQhGgMhCA/QgYAYgXAhQgvBEgdBZQgZBMgLBbQgaDIA1CbQAoB5BFAmQAFADAFACQANAEAOAGgAlWMhQAFACAEACQAIADAKADAtlG0QB9CJBsBDQBpBBCzBb");
	this.shape_72.setTransform(248,178.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF99").s().p("An5DSQgpgIgXgyQgXgzAIg/QAIg+AigoQAjgnAoAIQAoAIAXAzQAXAwgIBAQgIA/giAnQgdAhgfAAIgOgBgAG1AaQgagmAAg6QAAg6AagpQAZgpAlAAQAkAAAaApQAaApAAA6QAAA6gaAmQgaApgkAAQglAAgZgpg");
	this.shape_73.setTransform(279.3,178.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000033").s().p("AoqI7IgFgBIgagKIgKgFQhFgmgph5Qg0ibAZjIQAMhZAYhMQAdhZAwhGQAXghAYgYQBBg/BHAMIAGABQBUATAyB1QAHARAGAVQAIAWAGAYQAZBhgDBuIgCAlQgCAegEAfQgZDIhXB/QhNBvhVAAQgNAAgMgCgAnYk0QgjAngIBAQgHBAAXAyQAWAzApAHQAoAJAigoQAjgnAHhAQAJhAgYgyQgWgzgogHIgOgCQghAAgcAhgAFmAbQhBhmAAiRQAAiRBBhnQBChoBdAAQBdAABCBoQBBBnAACRQAACRhBBmQhCBnhdAAQhdAAhChngAH6meQgaApAAA6QAAA6AaApQAaApAkAAQAkAAAagpQAagpAAg6QAAg6gagpQgagogkAAQgkAAgaAog");
	this.shape_74.setTransform(272.4,203);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0000FF").s().p("AhcWHQjSgmkPgWQkPgXhVi4IA8rIIiMjLQgFheAOiOQAdkfBgj5QCGlcD7jcQCeiMDIhTQA1gXA4gSQCVgyCtgVIAzAtIAZAaIAhApQAfAoAeAxQC0EmAyHWIBBAnQBOA0A8BLQBZBwAQCSQAOB4giDHIj9CbIg3L2Ig6A+QgsAxgcAQQjcB7hrAMQgZACgfAAQhkAAiegcgAheq+QgoBmgLB1QgGA7ACAmIEpDEQAjFxA7HwQA7Hxh0B1IBtgUQA0j6g2mLQg2mMgFjeIgCi1IE5joQADjuhPj1QgZhNgehEIgZg1QllA6h9FIgAlJhjQgYAYgXAhQgvBEgdBZQgZBMgLBbQgaDIA1CbQAoB5BFAmIAKAFIAJAEIASAGIAFABQBjASBXh/QBXh/AZjIQAEgfACgeIACglQADhwgYhhQgGgYgIgWQgHgVgHgPQgxh1hUgTIgHgBQgLgCgKAAQg7AAg4A1gAp8KAQBpBBCzBbQizhbhphBQhshDh9iJQB9CJBsBDgAJajjQhCBnAACPQAACRBCBoQBCBnBcAAQBdAABChnQBChoAAiRQAAiPhChnQhChohdAAQhcAAhCBog");
	this.shape_75.setTransform(248,178.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAtI/Qg5nwgjlxIkrjEQgCgmAGg7QALh1AohmQB/lIFjg6IAZA1QAeBEAZBNQBPD1gDDuIk5DoIACC3QAFDcA2GLQA2GMg0D6IhrAUQByh1g7nxg");
	this.shape_76.setTransform(267.7,188.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("ADYx7QAeBFAZBNQBPD2gDDvIk5DpIACC3QgHDhAeGWQAfGWgrDzIhSAUQBRhwgen8Qgcn8gjlyIkrjFQgCgnAGg6QALh2AohmQB/lJFjg6g");
	this.shape_77.setTransform(267.7,189.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(3,1,1).p("AIxAaQgaApgkAAQglAAgZgpQgagnAAg6QAAg6AagpQAZgpAlAAQAkAAAaApQAaApAAA6QAAA6gaAngAnThfQAoAHAXAzQAXAwgIBBQgIA/giAoQgjAogngJQgpgHgXgzQgXgzAIg/QAIg/AignQAjgnAoAIg");
	this.shape_78.setTransform(279.3,178.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(6.7,1,1).p("AOGk8QBZBwAQCTQAOB5giDHIj9CcQAFFrg8GNQgFAFg1A6QgsAwgcAQQjcB8iEAEQiEAEj7ANQj9ANiihjQiihiimh3IA8rKIiMjMQgFheAOiPQAdkgBgj5QCGleD7jdQCeiMDIhUQA1gWA4gTQCVgxCtgWIAzAtQAMANANANQAQAUARAVQAfApAeAxQC0EnAyHYIBBAmQBOA1A8BLgAPZAQQAACRhCBoQhCBnhdAAQhcAAhChnQhChoAAiRQAAiQBChoQBChoBcAAQBdAABCBoQBCBoAACQgAk7MqQACAAADABQBjASBXh/QBXiAAZjJQAEgfACgeQACgSAAgTQADhwgYhiQgGgXgIgXQgHgTgHgRQgxh1hUgTIgHgCQhGgLhCA/QgYAYgXAhQgvBEgdBaQgZBMgLBbQgaDJA1CbQAoB6BFAmQAFADAFACQANAEAOAGgAlWMgQAFACAEACQAIADAKADAtlGyQB9CJBsBEQBpBACzBc");
	this.shape_79.setTransform(248,178.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF99").s().p("An5DSQgpgHgXgzQgXgzAIg/QAIg/AignQAjgnAoAIQAoAHAXAzQAXAwgIBBQgIA/giAoQgdAhgfAAIgOgCgAG1AaQgagnAAg6QAAg6AagpQAZgpAlAAQAkAAAaApQAaApAAA6QAAA6gaAnQgaApgkAAQglAAgZgpg");
	this.shape_80.setTransform(279.3,178.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000033").s().p("AoqI9IgFgBIgagKIgKgFQhFgmgph6Qg0ibAZjJQAMhZAYhMQAdhaAwhGQAXghAYgYQBBg/BHALIAGACQBUATAyB1QAHARAGAVQAIAXAGAXQAZBigDBuIgCAlQgCAegEAfQgZDJhXCAQhNBvhVAAQgNAAgMgCgAnYk1QgjAngIBBQgHA/AXAzQAWAzApAHQAoAJAigoQAjgoAHg/QAJhBgYgyQgWgzgogHIgOgCQghAAgcAhgAFmAbQhBhmAAiRQAAiSBBhoQBChoBdAAQBdAABCBoQBBBoAACSQAACRhBBmQhCBnhdAAQhdAAhChngAH6mfQgaApAAA6QAAA6AaApQAaApAkAAQAkAAAagpQAagpAAg6QAAg6gagpQgagpgkAAQgkAAgaApg");
	this.shape_81.setTransform(272.4,202.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("ApZVVQiihiimh3IA8rKIiMjMQgFheAOiPQAdkgBgj5QCGleD7jdQCeiMDIhUQA1gWA4gTQCVgxCtgWIAzAtIAZAaIAhApQAfApAeAxQC0EnAyHYIBBAmQBOA1A8BLQBZBwAQCTQAOB5giDHIj9CcQAFFrg8GNIg6A/QgsAwgcAQQjcB8iEAEQiEAEj7ANIg6ABQjWAAiPhXgAherEQgoBmgLB2QgGA6ACAnIEpDFQAjFyAeH8QAeH7hTBxIBUgUQArjzgfmWQgemWAHjjIgCi1IE5jpQADjvhPj2QgZhNgehFIgZg0QllA6h9FJgAlJhnQgYAYgXAhQgvBEgdBaQgZBMgLBbQgaDJA1CbQAoB6BFAmIAKAFIAJAEIASAGIAFABQBjASBXh/QBXiAAZjJQAEgfACgeIACglQADhwgYhiQgGgXgIgXQgHgTgHgRQgxh1hUgTIgHgCQgLgCgKAAQg7AAg4A2gAp8J/QBpBACzBcQizhchphAQhshEh9iJQB9CJBsBEgAJajoQhCBoAACQQAACRBCBoQBCBnBcAAQBdAABChnQBChoAAiRQAAiQhChoQhChohdAAQhcAAhCBog");
	this.shape_82.setTransform(248,178.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAQJEQgcn8gjlyIkrjFQgCgnAGg6QALh2AohmQB/lJFjg6IAZA0QAeBFAZBNQBPD2gDDvIk5DpIACC3QgHDhAeGWQAfGWgrDzIhSAUQBRhwgen8g");
	this.shape_83.setTransform(267.7,189.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AEPv5QBPD4gDDwIk5DrIACC3QgHDiAJGlQAJGmgjDvIhXAUQBJhygFoIQgFoJgjl0IkrjGQgCgnAGg6QALh3AohmQB/lLFjg7IAZA1QAeBFAZBNg");
	this.shape_84.setTransform(267.7,189.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(3,1,1).p("AHzBEQglAAgZgpQgagoAAg6QAAg7AagpQAZgpAlAAQAkAAAaApQAaApAAA7QAAA6gaAoQgaApgkAAgAnThgQAoAIAXAzQAXAwgIBBQgIBAgiAoQgjAogngIQgpgIgXgzQgXgzAIhAQAIg/AignQAjgoAoAIg");
	this.shape_85.setTransform(279.3,177.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(6.7,1,1).p("AOGkwQBZBxAQCUQAOB5giDJIj9CcQBaFuiRGPQgFAEgyA0QgyAziIAxQiJAxh2AbQh2Abj3gbQj4gai6g7Qi5g7iAh4IA8rOIiMjMQgFhfAOiSQAdkgBgj6QCGlfD7jeQCeiNDIhUQA1gXA4gTQCVgxCtgXIAzAuQAMANANANQAQAUARAWQAfAoAeAyQC0EpAyHZIBBAnQBOA1A8BLgAPZAeQAACShCBoQhCBohdAAQhcAAhChoQhChoAAiSQAAiRBChoQBChoBcAAQBdAABCBoQBCBoAACRgAk7M8QACABADAAQBjASBXh/QBXiBAZjKQAEgfACgeQACgTAAgSQADhxgYhiQgGgYgIgWQgHgWgHgPQgxh2hUgTIgHgBQhGgMhCBAQgYAYgXAhQgvBFgdBaQgZBMgLBcQgaDJA1CdQAoB6BFAmQAFADAFADQANAEAOAFgAlWMzQAFACAEABQAIAEAKACAtlHCQB9CKBsBEQBpBBCzBc");
	this.shape_86.setTransform(248,176.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF99").s().p("An5DUQgpgIgXgzQgXgzAIhAQAIg/AignQAjgoAoAIQAoAIAXAzQAXAwgIBBQgIBAgiAoQgdAhggAAIgNgBgAG1AbQgagoAAg6QAAg7AagpQAZgpAlAAQAkAAAaApQAaApAAA7QAAA6gaAoQgaApgkAAQglAAgZgpg");
	this.shape_87.setTransform(279.3,177.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000033").s().p("AoqJAIgFgBIgagKIgKgFQhFgngph6Qg0icAZjKQAMhZAYhNQAdhaAwhGQAXgiAYgYQBBg/BHALIAGACQBUATAyB2QAHARAGAVQAIAXAGAXQAZBjgDBuIgCAmQgCAegEAfQgZDKhXCAQhNBwhWAAQgMAAgMgCgAnYk3QgjAogIBBQgHA/AXAzQAWAzApAIQAoAJAigpQAjgnAHhAQAJhBgYgyQgWg0gogHIgOgCQghAAgcAhgAFmAbQhBhmAAiSQAAiTBBhoQBChpBdAAQBdAABCBpQBBBoAACTQAACShBBmQhCBohdAAQhdAAhChogAH6mhQgaApAAA7QAAA6AaApQAaApAkAAQAkAAAagpQAagpAAg6QAAg7gagpQgagpgkAAQgkAAgaApg");
	this.shape_88.setTransform(272.4,202);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("Ai2WYQj4gai6g7Qi5g7iAh4IA8rOIiMjMQgFhfAOiSQAdkgBgj6QCGlfD7jeQCeiNDIhUQA1gXA4gTQCVgxCtgXIAzAuIAZAaIAhAqQAfAoAeAyQC0EpAyHZIBBAnQBOA1A8BLQBZBxAQCUQAOB5giDJIj9CcQBaFuiRGPIg3A4QgyAziIAxQiJAxh2AbQg7AOhdAAQhZAAh8gOgAheq5QgoBmgLB2QgGA7ACAnIEpDGQAjF0AFIIQAFIJhJBxIBZgUQAjjvgJmlQgJmlAHjkIgCi2IE5jqQADjwhPj4QgZhNgehFIgZg1QllA7h9FLgAlJhZQgYAYgXAhQgvBFgdBaQgZBMgLBcQgaDJA1CdQAoB6BFAmIAKAGIAJADIASAGIAFABQBjASBXh/QBXiBAZjKQAEgfACgeIACglQADhxgYhiQgGgYgIgWQgHgWgHgPQgxh2hUgTIgHgBQgLgCgKAAQg7AAg4A2gAp8KQQBpBBCzBcQizhchphBQhshEh9iKQB9CKBsBEgAJajbQhCBoAACRQAACSBCBoQBCBoBcAAQBdAABChoQBChoAAiSQAAiRhChoQhChohdAAQhcAAhCBog");
	this.shape_89.setTransform(248,176.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgHJHQgFoJgjl0IkrjGQgCgmAGg8QALh2AohmQB/lLFjg7IAZA1QAeBFAZBNQBPD4gDDxIk5DqIACC3QgHDiAJGlQAJGmgjDvIhXAUQBJhygFoIg");
	this.shape_90.setTransform(267.7,189.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(3,1,1).p("AJLhGQAAA5gaAmQgaApgkAAQglAAgZgpQgagmAAg5QAAg5AagoQAZgoAlAAQAkAAAaAoQAaAoAAA5gAmUgkQAXAvgIA/QgHA1gZAjQgFAHgFAGQgjAngngIQgjgHgWglQgDgGgEgHQgXgyAIg+QAIg9AignQAjgnAoAIQAoAIAXAyg");
	this.shape_91.setTransform(279.3,176.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AgzMwQAJhDAIhFQBIp+hVljIkrjIQgCgnAGg7QALh4AohoQB/lQFjg7IAZA2QAeBFAZBPQBPD7gDDzIk5DtIACC7QACDhgFDRQgHEfgRDNAgzMwQgfDkgrC7IBFgeQArh8AWkF");
	this.shape_92.setTransform(267.7,189.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(6.7,1,1).p("AOGksQBZByAQCWQAOB7giDLIjZCIQA/BugyERQgKA0gNA6QgfB8gyCZQgVASgdAVQgfAVgoAYQhGAqhMAhQhbAnhiAYQmNBlmUikQivhHiwh4IA7rWIiLi2QgFhgAOiTQAdkkBgj9QCGlkD7jhQCeiPDIhVQA1gXA4gTQCVgzCtgWIAzAvQAMAMANAOQAQAUARAWQAfApAeAxQC0EuAyHgIBBAnQBOA2A8BMgAPZAgQAACPhCBlQhCBmhdAAQhcAAhChmQhChlAAiPQAAiNBChmQBChlBcAAQBdAABCBlQBCBmAACNgAjBiHQhGgLhCA+QgYAXgXAhQgvBCgdBYQgIAXgGAXQgOA4gIA/QgaDEA1CYQAoB3BqA0QACABADAAQBjASBXh8QBXh9AZjFQAEgfACgdQACgSAAgSQACg8gGg3QgGgvgLgsQgGgYgIgWQgHgUgHgPQgxhzhUgSgAtmG2QCmCYBMAyQBNAzBKAvQBLAuBXAaALmGGQAQAPAMAV");
	this.shape_93.setTransform(248,175.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF99").s().p("An5DOQgjgHgWglIgHgNQgXgxAIg/QAIg9AignQAjgnAoAIQAoAIAXAyQAXAvgIBAQgHA0gZAjIgKANQgcAhggAAIgOgCgAG1AZQgagmAAg5QAAg5AagnQAZgpAlAAQAkAAAaApQAaAnAAA5QAAA5gaAmQgaApgkAAQglAAgZgpg");
	this.shape_94.setTransform(279.3,176.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000033").s().p("AoqIxIgFgBQhpg0gph3Qg0iYAZjEQAIg9APg4QAGgXAHgXQAdhYAwhEQAXghAYgXQBBg+BHALIAGACQBUASAyBzIANAlQAIAWAGAYQAMAsAFAvQAGA3gBA6IgCAkQgCAdgEAfQgZDFhXB9QhNBshVAAQgMAAgNgCgAnYkvQgjAngIA/QgHA+AXAyIAHANQAVAlAjAHQAoAIAignIAKgNQAagjAGg1QAJg/gYgxQgWgygogIIgOgBQghAAgcAggAFmAaQhBhjAAiPQAAiPBBhmQBChlBdAAQBdAABCBlQBBBmAACPQAACPhBBjQhCBmhdAAQhdAAhChmgAH6mXQgaAoAAA5QAAA5AaAoQAaApAkAAQAkAAAagpQAagoAAg5QAAg5gagoQgagogkAAQgkAAgaAog");
	this.shape_95.setTransform(272.4,200.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0000FF").s().p("ApCVLQivhHiwh4IA7rWIiLi2QgFhgAOiTQAdkkBgj9QCGlkD7jhQCeiPDIhVQA1gXA4gTQCVgzCtgWIAzAvIAZAaIAhAqQAfApAeAxQC0EuAyHgIBBAnQBOA2A8BMQBZByAQCWQAOB7giDLIjZCIQA/BugyERQgKA0gNA6QgfB8gyCZQgVASgdAVQgfAVgoAYQhGAqhMAhQhbAnhiAYQiYAniWAAQj5AAj6hmgABGVXIBFgeQArh7AXkGIg9AAQggDlgqC6gAheq7QgoBogLB4QgGA7ACAnIEpDJQBXFihKJ+IgRCIIA+AAQARjNAHkfQAFjQgCjkIgCi5IE5jtQADjzhPj7QgZhOgehGIgZg2QllA8h9FPgAlJhUQgYAXgXAhQgvBCgdBYQgIAXgGAXQgOA4gIA/QgaDEA1CYQAoB3BqA0IAFABQBjASBXh8QBXh9AZjFQAEgfACgdIACgkQACg8gGg3QgGgvgLgsQgGgYgIgWIgOgjQgxhzhUgSIgHgCQgLgBgLAAQg7AAg3A0gAp0KAQBNAzBKAvQBLAuBXAaQhXgahLguQhKgvhNgzQhMgyimiYQCmCYBMAygAMCGqQgMgVgQgPQAQAPAMAVgAJajTQhCBmAACNQAACPBCBlQBCBmBcAAQBdAABChmQBChlAAiPQAAiNhChmQhChlhdAAQhcAAhCBlg");
	this.shape_96.setTransform(248,175.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgzMwIA8AAQgWEFgrB7IhFAfQAri7AfjkgAgzMwIARiJQBIp+hVliIkrjIQgCgnAGg7QALh4AohoQB/lQFjg7IAZA2QAeBFAZBPQBPD7gDDzIk5DtIACC6QACDigFDRQgHEegRDOg");
	this.shape_97.setTransform(267.7,189.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AgzMpQAJhCAIhFQBIp5hVlfIkrjHQgCgmAGg7QALh3AohnQB/lMFjg7IAZA1QAeBFAZBOQBPD4gDDyIk5DrIACC4QACDhgFDOQgHEcgRDMAgzMpQggDjgqC4IBFgeQArh6AWkD");
	this.shape_98.setTransform(267.7,190.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(3,1,1).p("AIxAZQgaApgkAAQglAAgZgpQgaglAAg5QAAg4AagoQAZgoAlAAQAkAAAaAoQAaAoAAA4QAAA5gaAlgAnThdQAoAIAXAxQAXAvgIA/QgHA0gZAjQgFAHgFAGQgjAngngJQgjgGgWglQgDgGgEgHQgXgxAIg+QAIg9AigmQAjgnAoAIg");
	this.shape_99.setTransform(279.3,177.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(6.7,1,1).p("AOGkqQBZBxAQCWQAOB5giDJIjZCHQBXDkgnCTQgnCTgLAzQgLAzgSCpQhRAVgeAIQgeAIg3AeQg3AdhMAgQhbAnhiAYQmNBkmUijQivhGiwh3IA7rQIiLi1QgFhfAOiRQAdkiBgj7QCGlhD7jfQCeiNDIhVQA1gXA4gSQCVgzCtgVIAzAuQAMAMANAOQAQATARAWQAfApAeAxQC0ErAyHcIBBAmQBOA2A8BLgAPZAfQAACOhCBlQhCBkhdAAQhcAAhChkQhChlAAiOQAAiLBChlQBChlBcAAQBdAABCBlQBCBlAACLgAjBiGQhGgLhCA9QgYAXgXAhQgvBCgdBXQgIAWgGAYQgOA3gIA+QgaDDA1CXQAoB2BqAzQACABADAAQBjASBXh7QBXh8AZjEQAEgeACgdQACgSAAgSQACg7gGg2QgGgvgLgsQgGgXgIgWQgHgUgHgPQgxhyhUgSgAtmGyQCmCXBNA5QBMA6BKAuQBLAuBXALALmGDQAQAPAMAU");
	this.shape_100.setTransform(248,177);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF99").s().p("An5DMQgjgGgWglIgHgNQgXgxAIg+QAIg9AigmQAjgnAoAIQAoAIAXAxQAXAvgIA/QgHA0gZAjIgKANQgcAgggAAIgOgCgAG1AZQgaglAAg5QAAg4AagoQAZgoAlAAQAkAAAaAoQAaAoAAA4QAAA5gaAlQgaApgkAAQglAAgZgpg");
	this.shape_101.setTransform(279.3,177.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000033").s().p("AoqIsIgFgBQhpgzgph2Qg0iXAZjDQAIg8APg3QAGgYAHgWQAdhXAwhEQAXghAYgXQBBg9BHALIAGACQBUASAyByIANAlQAIAWAGAXQAMAsAFAvQAGA2gBA5IgCAkQgCAdgEAeQgZDEhXB8QhNBshVAAQgMAAgNgDgAnYktQgjAngIA+QgHA+AXAxIAHAOQAVAkAjAHQAoAIAignIAKgMQAagjAGg1QAJg+gYgxQgWgygogHIgOgCQghAAgcAggAFmAaQhBhjAAiOQAAiNBBhlQBChlBdAAQBdAABCBlQBBBlAACNQAACOhBBjQhCBkhdAAQhdAAhChkgAH6mTQgaAnAAA5QAAA4AaAoQAaAoAkAAQAkAAAagoQAagoAAg4QAAg5gagnQgagogkAAQgkAAgaAog");
	this.shape_102.setTransform(272.4,201.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0000FF").s().p("ApCU/QivhGiwh3IA7rQIiLi1QgFhfAOiRQAdkiBgj7QCGlhD7jfQCeiNDIhVQA1gXA4gSQCVgzCtgVIAzAuIAZAaIAhApQAfApAeAxQC0ErAyHcIBBAmQBOA2A8BLQBZBxAQCWQAOB5giDJIjZCHQBXDkgnCTQgnCTgLAzQgLAzgSCpIhvAdQgeAIg3AeQg3AdhMAgQhbAnhiAYQiYAmiWAAQj5AAj6hlgABGVLIBFgeQArh6AYkDIg+AAQggDjgqC4gAheq1QgoBngLB3QgGA7ACAmIEpDHQBXFfhKJ5IgRCHIA+AAQARjMAHkcQAFjOgCjjIgCi2IE5jrQADjyhPj4QgZhOgehFIgZg1QllA7h9FMgAlJhUQgYAXgXAhQgvBCgdBXQgIAWgGAYQgOA3gIA+QgaDDA1CXQAoB2BqAzIAFABQBjASBXh7QBXh8AZjEQAEgeACgdIACgkQACg7gGg2QgGgvgLgsQgGgXgIgWIgOgjQgxhyhUgSIgHgCQgLgBgLAAQg7AAg3AzgApzKCQBMA6BKAuQBLAuBXALQhXgLhLguQhKguhMg6QhNg5imiXQCmCXBNA5gAMCGmQgMgUgQgPQAQAPAMAUgAJajRQhCBlAACLQAACOBCBlQBCBkBcAAQBdAABChkQBChlAAiOQAAiLhChlQhChlhdAAQhcAAhCBlg");
	this.shape_103.setTransform(248,177);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgzMpIA8AAQgWEDgrB6IhFAeQAqi4AgjjgAgzMpIARiHQBIp5hVlfIkrjHQgCgmAGg7QALh3AohnQB/lMFjg7IAZA1QAeBFAZBOQBPD4gDDyIk5DrIACC4QACDhgFDOQgHEcgRDMg");
	this.shape_104.setTransform(267.7,190.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1).p("AgzMjQAJhCAIhEQBIp0hVldIkrjFQgCgmAGg7QALh2AohnQB/lJFjg7IAZA1QAeBFAZBNQBPD3gDDvIk5DqIACC3QACDfgFDNQgHEagRDKAgzMjQggDhgqC4IBFgeQArh5AWkC");
	this.shape_105.setTransform(267.7,191.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(3,1,1).p("AIxAZQgaAogkAAQglAAgZgoQgaglAAg4QAAg5AagnQAZgnAlAAQAkAAAaAnQAaAnAAA5QAAA4gaAlgAnThcQAoAHAXAyQAXAugIA+QgHA0gZAjQgFAGgFAGQgjAngngIQgjgHgWgkQgDgGgEgHQgXgxAIg+QAIg8AigmQAjgmAoAIg");
	this.shape_106.setTransform(279.3,178.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(6.7,1,1).p("AOGkwQBZBwAQCUQAOB5giDIIjZCGQAUC8gBC8QgCC7gJAyQgKAxAVCcQgiANghAJQghAJhZARQhZARhgAkQhfAkj4A8Qj2A9mUiiQivhFiwh3IA7rLIiLizQgFheAOiRQAdkgBgj5QCGleD7jeQCeiMDIhUQA1gXA4gTQCVgxCtgWIAzAuQAMAMANANQAQAUARAWQAfApAeAwQC0EpAyHYIBBAnQBOA1A8BLgAPZAXQAACMhCBkQhCBkhdAAQhcAAhChkQhChkAAiMQAAiLBChkQBChkBcAAQBdAABCBkQBCBkAACLgAjBiNQhGgMhCA9QgYAXgXAhQgvBBgdBXQgIAWgGAXQgOA3gIA+QgaDBA1CWQAoB1BqAzQACABADAAQBjASBXh7QBXh7AZjCQAEgeACgdQACgSAAgRQACg7gGg2QgGgvgLgrQgGgXgIgWQgHgUgHgOQgxhyhUgSgAtmGmQCmCWBNA5QBMA5BKAuQBLAuBXALALmF4QAQAOAMAV");
	this.shape_107.setTransform(248,178.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF99").s().p("An5DLQgjgHgWgkIgHgNQgXgxAIg+QAIg8AigmQAjgmAoAIQAoAHAXAyQAXAugIA+QgHA0gZAjIgKAMQgcAgggAAIgOgBgAG1AZQgaglAAg4QAAg5AagnQAZgnAlAAQAkAAAaAnQAaAnAAA5QAAA4gaAlQgaAogkAAQglAAgZgog");
	this.shape_108.setTransform(279.3,178.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000033").s().p("AoqIpIgFgBQhpg0gph1Qg0iWAZjBQAIg8APg3QAGgXAHgWQAdhWAwhEQAXggAYgXQBBg9BHALIAGACQBUASAyBxQAHARAGAUQAIAVAGAXQAMAsAFAuQAGA3gBA4IgCAkQgCAdgEAeQgZDChXB7QhNBrhVAAQgMAAgNgCgAnYkrQgjAngIA+QgHA9AXAxIAHANQAVAlAjAGQAoAJAignIAKgNQAagjAGgzQAJg+gYgxQgWgxgogIIgOgBQghAAgcAfgAFmAaQhBhiAAiNQAAiNBBhkQBChkBdAAQBdAABCBkQBBBkAACNQAACNhBBiQhCBkhdAAQhdAAhChkgAH6mQQgaAnAAA4QAAA4AaAoQAaAnAkAAQAkAAAagnQAagoAAg4QAAg4gagnQgagogkAAQgkAAgaAog");
	this.shape_109.setTransform(272.4,202.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0000FF").s().p("ApCUtQivhFiwh3IA7rLIiLizQgFheAOiRQAdkgBgj5QCGleD7jeQCeiMDIhUQA1gXA4gTQCVgxCtgWIAzAuIAZAZIAhAqQAfApAeAwQC0EpAyHYIBBAnQBOA1A8BLQBZBwAQCUQAOB5giDIIjZCGQAUC8gBC8QgCC7gJAyQgKAxAVCcQgiANghAJQghAJhZARQhZARhgAkQhfAkj4A8QhEARhNAAQjTAAkmh2gABGU5IBFgeQArh5AYkBIg+AAQggDhgqC3gAheq5QgoBngLB1QgGA7ACAmIEpDGQBXFchKJ1IgRCFIA+AAQARjJAHkbQAFjNgCjgIgCi2IE5jpQADjwhPj3QgZhNgehEIgZg1QllA6h9FKgAlJhcQgYAXgXAhQgvBBgdBXQgIAWgGAXQgOA3gIA+QgaDBA1CWQAoB1BqAzIAFABQBjASBXh7QBXh7AZjCQAEgeACgdIACgjQACg7gGg2QgGgvgLgrQgGgXgIgWQgHgUgHgOQgxhyhUgSIgHgBQgLgCgLAAQg7AAg3AzgApzJ1QBMA5BKAuQBLAuBXALQhXgLhLguQhKguhMg5QhNg5imiWQCmCWBNA5gAMCGbQgMgVgQgOQAQAOAMAVgAJajYQhCBkAACLQAACMBCBkQBCBkBcAAQBdAABChkQBChkAAiMQAAiLhChkQhChkhdAAQhcAAhCBkg");
	this.shape_110.setTransform(248,178.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgzMjIA8AAQgWECgrB5IhFAeQAqi4AgjhgAgzMjIARiGQBIp0hVldIkrjFQgCgmAGg7QALh2AohnQB/lJFjg7IAZA1QAeBFAZBNQBPD3gDDvIk5DqIACC3QACDfgFDNQgHEagRDKg");
	this.shape_111.setTransform(267.7,191.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(3,1,1).p("AIxinQAaAoAAA5QAAA5gaAmQgaApgkAAQglAAgZgpQgagmAAg5QAAg5AagoQAZgoAlAAQAkAAAaAogApIAlQAIg9AignQAjgnAoAIQAoAIAXAyQAXAvgIA/QgIA+giAnQgjAngngIQgpgIgXgxQgXgyAIg+g");
	this.shape_112.setTransform(279.3,180.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("ADYx0QAeBDAZBMQBPDxgDDqIk5DlIACCzQACDagFDIQgQKChJDYIhFAfQA2jvAlkzQBIpnhVlUIkrjBQgCgmAGg5QALhzAohlQB/lCFjg6g");
	this.shape_113.setTransform(267.7,193.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(6.7,1,1).p("APvg2QAOB2giDEIj9CYIA+MzQhzBRheASQhdAShXADQhWADj5A2Qj2A1mUiaQivhCiwhyIA8q8IiMjIQgFhcAOiMQAdkbBgj0QCGlWD7jZQCeiJDIhTQA1gWA4gSQCVgxCtgVIAzAtQAMAMAMANQARATARAVQAfAoAeAwQC0EiAyHOIBBAmQBOA0A8BJQBZBuAQCQgAPZARQAACPhCBlQhCBmhdAAQhcAAhChmQhChlAAiPQAAiNBChmQBChlBcAAQBdAABCBlQBCBmAACNgAk7MbQACABADAAQBjASBXh8QBXh9AZjFQAEgfACgdQACgSAAgSQADhvgYhfQgGgYgIgWQgHgUgHgPQgxhzhUgSIgHgCQhGgLhCA+QgYAXgXAhQgvBCgdBYQgZBLgLBaQgaDEA1CYQAoB3BFAmQAFADAFACQANAEAOAFgAlWMSQAFACAEACQAIADAKACAtlGrQB9CHBsBCQBpA/CzBa");
	this.shape_114.setTransform(248,181.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("ApCUbQivhCiwhyIA8q8IiMjIQgFhcAOiMQAdkbBgj0QCGlWD7jZQCeiJDIhTQA1gWA4gSQCVgxCtgVIAzAtIAYAZQARATARAVQAfAoAeAwQC0EiAyHOIBBAmQBOA0A8BJQBZBuAQCQQAOB2giDEIj9CYIA+MzQhzBRheASQhdAShXADQhWADj5A2QhAAOhJAAQjWAAkrhzgAheq0QgoBkgLBzQgGA6ACAlIEpDBQBXFVhKJmQglEzg2DvIBFgeQBLjYAQqCQAFjJgCjbIgCiyIE5jkQADjrhPjxQgZhLgehDIgZg0QllA5h9FDgAlJhjQgYAXgXAhQgvBCgdBYQgZBLgLBaQgaDEA1CYQAoB3BFAmIAKAFIAJAEIASAFIAFABQBjASBXh8QBXh9AZjFQAEgfACgdIACgkQADhvgYhfQgGgYgIgWIgOgjQgxhzhUgSIgHgCQgLgBgLAAQg7AAg3A0gAp8J0QBpA/CzBaQizhahpg/QhshCh9iHQB9CHBsBCgAJajiQhCBmAACNQAACPBCBlQBCBmBcAAQBdAABChmQBChlAAiPQAAiNhChmQhChlhdAAQhcAAhCBlg");
	this.shape_115.setTransform(248,181.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgiKHQBIpnhVlUIkrjBQgCgmAGg5QALhzAohlQB/lCFjg6IAZA0QAeBDAZBMQBPDxgDDqIk5DlIACCzQACDagFDIQgQKChJDYIhFAfQA2jvAlkzg");
	this.shape_116.setTransform(267.7,193.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("ADYx4QAeBEAZBMQBPDxgDDsIk5DlIACC0QACDagBGnQAAGnhdDYIhFAfQBHj4AxnLQAunLhYlUIkrjCQgCgmAGg5QALhzAohlQB/lEFjg6g");
	this.shape_117.setTransform(267.7,192.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(3,1,1).p("AJLhGQAAA6gaAmQgaAogkAAQglAAgZgoQgagmAAg6QAAg5AagoQAZgoAlAAQAkAAAaAoQAaAoAAA5gApIAlQAIg9AignQAjgnAoAIQAoAIAXAyQAXAwgIA/QgIA+giAnQgjAngngIQgpgIgXgyQgXgxAIg/g");
	this.shape_118.setTransform(279.3,180.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(6.7,1,1).p("APvgjQAOB2giDFIj9CYIAAL/QhDAshQAuQhPAuheAXQheAXj4AXQj2AWkihZQkhhZiwhiIA8q/IiMjIQgFhdAOiOQAdkaBgj1QCGlXD7jaQCeiKDIhTQA1gWA4gSQCVgxCtgVIAzAtQAMAMANANQAQATARAVQAfApAeAvQC0EjAyHQIBBAmQBOA0A8BKQBZBuAQCRgAPZAkQAACPhCBmQhCBmhdAAQhcAAhChmQhChmAAiPQAAiOBChmQBChmBcAAQBdAABCBmQBCBmAACOgAk7MxQACAAADABQBjASBXh9QBXh9AZjGQAEgfACgdQACgSAAgSQADhwgYhgQgGgXgIgWQgHgUgHgRQgxhyhUgSIgHgCQhGgLhCA+QgYAXgXAhQgvBDgdBYQgZBMgLBaQgaDEA1CZQAoB4BFAlQAFADAFADQANAEAOAFgAlWMoQAFACAEABQAIADAKADAtlG/QB9CIBsBBQBpBACzBa");
	this.shape_119.setTransform(248,178.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF99").s().p("An5DPQgpgIgXgyQgXgxAIg/QAIg9AignQAjgnAoAIQAoAIAXAyQAXAwgIA/QgIA+giAnQgcAgggAAIgOgBgAG1AaQgagmAAg6QAAg5AagoQAZgoAlAAQAkAAAaAoQAaAoAAA5QAAA6gaAmQgaAogkAAQglAAgZgog");
	this.shape_120.setTransform(279.3,180.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000033").s().p("AoqIzIgFgBIgagJIgKgFQhFgmgph4Qg0iYAZjFQAMhYAYhLQAdhYAwhFQAXghAYgXQBBg/BHAMIAGABQBUATAyB0IANAlQAIAWAGAXQAZBggDBtIgCAkQgCAdgEAfQgZDGhXB9QhNBthVAAQgMAAgNgCgAnYkwQgjAngIA/QgHA/AXAxQAWAyApAIQAoAIAignQAjgnAHg+QAJg/gYgyQgWgygogIIgOgBQghAAgcAggAFmAbQhBhlAAiPQAAiQBBhmQBChlBdAAQBdAABCBlQBBBmAACQQAACPhBBlQhCBlhdAAQhdAAhChlgAH6mYQgaAoAAA5QAAA6AaAoQAaAoAkAAQAkAAAagoQAagoAAg6QAAg5gagoQgagogkAAQgkAAgaAog");
	this.shape_121.setTransform(272.4,204.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0000FF").s().p("AnQU5QkhhZiwhiIA8q/IiMjIQgFhdAOiOQAdkaBgj1QCGlXD7jaQCeiKDIhTQA1gWA4gSQCVgxCtgVIAzAtIAZAZIAhAoQAfApAeAvQC0EjAyHQIBBAmQBOA0A8BKQBZBuAQCRQAOB2giDFIj9CYIAAL/QhDAshQAuQhPAuheAXQheAXj4AXQgyAEgxAAQjNAAjohHgAheqkQgoBlgLBzQgGA6ACAmIEpDBQBaFUgxHLQgwHLhHD4IBFgeQBfjZAAmnQABmmgCjcIgCizIE5jlQADjrhPjyQgZhMgehDIgZg0QllA5h9FEgAlJhRQgYAXgXAhQgvBDgdBYQgZBMgLBaQgaDEA1CZQAoB4BFAlIAKAGIAJADIASAGIAFABQBjASBXh9QBXh9AZjGQAEgfACgdIACgkQADhwgYhgQgGgXgIgWIgOglQgxhyhUgSIgHgCQgLgCgLAAQg6AAg4A1gAp8KIQBpBACzBaQizhahphAQhshBh9iIQB9CIBsBBgAJajQQhCBmAACOQAACPBCBmQBCBmBcAAQBdAABChmQBChmAAiPQAAiOhChmQhChmhdAAQhcAAhCBmg");
	this.shape_122.setTransform(248,178.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgFHqQAunLhYlUIkrjCQgCgmAGg5QALhzAohlQB/lEFjg6IAZA0QAeBEAZBMQBPDxgDDsIk5DlIACC0QACDagBGnQAAGnhdDYIhFAfQBHj4AxnLg");
	this.shape_123.setTransform(267.7,192.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AEPvsQBPDygDDtIk5DmIACC1QAGDbAKGoQALGoh3DaIhFAeQBbjvAlnSQAnnRhZlVIkrjCQgCgnAGg5QALh0AohlQB/lFFjg6IAZA0QAeBEAZBMg");
	this.shape_124.setTransform(267.7,192.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(3,1,1).p("AJLhGQAAA6gaAmQgaAogkAAQglAAgZgoQgagmAAg6QAAg6AagoQAZgoAlAAQAkAAAaAoQAaAoAAA6gAnTheQAoAHAXAzQAXAwgIA/QgIA+giAnQgjAogngJQgpgHgXgyQgXgyAIg/QAIg9AigoQAjgmAoAIg");
	this.shape_125.setTransform(279.3,179.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(6.7,1,1).p("APZAlQAACQhCBnQhCBlhdAAQhcAAhChlQhChnAAiQQAAiOBChnQBChlBcAAQBdAABCBlQBCBnAACOgAPvgiQAOB2giDGIj9CZIhQLKQgMBQhQAuQhPAuhdAqQhdApjVAHQjSAGkohhQkohijThCIA8rCIiMjJQgFhdAOiOQAdkbBgj2QCGlZD7jbQCeiKDIhTQA1gWA4gSQCVgxCtgVIAzAtQAMALANAOQAQATARAVQAfApAeAvQC0EkAyHSIBBAmQBOA0A8BKQBZBuAQCSgAk7M1QACABADAAQBjASBXh9QBXh+AZjHQAEgfACgdQACgSAAgSQADhwgYhgQgGgXgIgWQgHgUgHgRQgxhzhUgSIgHgCQhGgLhCA+QgYAXgXAiQgvBDgdBYQgZBMgLBaQgaDFA1CZQAoB5BFAlQAFADAFADQANAEAOAFgAlWMsQAFACAEABQAIAEAKACAtlHCQB9CIBsBCQBpBACzBa");
	this.shape_126.setTransform(248,178.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF99").s().p("An5DPQgpgHgXgyQgXgyAIg/QAIg9AigoQAjgmAoAIQAoAHAXAzQAXAwgIA/QgIA+giAnQgcAhggAAIgOgCgAG1AaQgagmAAg6QAAg6AagoQAZgoAlAAQAkAAAaAoQAaAoAAA6QAAA6gaAmQgaAogkAAQglAAgZgog");
	this.shape_127.setTransform(279.3,179.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000033").s().p("AoqI1IgFgBIgagJIgKgGQhFglgph5Qg0iZAZjFQAMhYAYhMQAdhYAwhFQAXgiAYgXQBBg+BHALIAGACQBUASAyB1IANAlQAIAWAGAXQAZBggDBuIgCAkQgCAdgEAfQgZDHhXB+QhNBthVAAQgMAAgNgCgAnYkyQgjAogIA/QgHA/AXAyQAWAyApAHQAoAJAigoQAjgnAHg+QAJg/gYgyQgWgzgogHIgOgCQghAAgcAggAFmAbQhBhlAAiQQAAiQBBhnQBChlBdAAQBdAABCBlQBBBnAACQQAACQhBBlQhCBlhdAAQhdAAhChlgAH6maQgaAoAAA6QAAA6AaAoQAaAoAkAAQAkAAAagoQAagoAAg6QAAg6gagoQgagogkAAQgkAAgaAog");
	this.shape_128.setTransform(272.4,203.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0000FF").s().p("AmmUoQkohijThCIA8rCIiMjJQgFhdAOiOQAdkbBgj2QCGlZD7jbQCeiKDIhTQA1gWA4gSQCVgxCtgVIAzAtIAZAZIAhAoQAfApAeAvQC0EkAyHSIBBAmQBOA0A8BKQBZBuAQCSQAOB2giDGIj9CZIhQLKQgMBQhQAuQhPAuhdAqQhdApjVAHIgaAAQjKAAkWhbgAheqlQgoBmgLBzQgGA6ACAmIEpDCQBbFWgoHRQgnHRhaDvIBFgeQB5jagLmoIgQqFIgCizIE5jmQADjshPjyQgZhNgehDIgZg1QllA6h9FFgAlJhQQgYAXgXAiQgvBDgdBYQgZBMgLBaQgaDFA1CZQAoB5BFAlIAKAGIAJADIASAGIAFABQBjASBXh9QBXh+AZjHQAEgfACgdIACgkQADhwgYhgQgGgXgIgWIgOglQgxhzhUgSIgHgCQgLgCgLAAQg6AAg4A1gAp8KMQBpBACzBaQizhahphAQhshCh9iIQB9CIBsBCgAJajQQhCBnAACOQAACQBCBnQBCBlBcAAQBdAABChlQBChnAAiQQAAiOhChnQhChlhdAAQhcAAhCBlg");
	this.shape_129.setTransform(248,178.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AADHwQAnnRhZlWIkrjBQgCgmAGg7QALhyAohmQB/lFFjg6IAZA0QAeBEAZBMQBPDzgDDsIk5DmIACC1IAQKDQALGoh3DZIhFAfQBbjvAlnSg");
	this.shape_130.setTransform(267.7,192.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_60},{t:this.shape_59},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.9,35.5,202.4,285);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;