(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.kardss = function() {
	this.initialize(img.kardss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,336);


(lib.snowboard_300x300 = function() {
	this.initialize(img.snowboard_300x300);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.snowboard_300x300_2 = function() {
	this.initialize(img.snowboard_300x300_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.snowboard_300x300_3 = function() {
	this.initialize(img.snowboard_300x300_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.snowboard_leg = function() {
	this.initialize(img.snowboard_leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,20);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kardss, null, new cjs.Matrix2D(1,0,0,1,-130,-104.5)).s().p("A0TDTIAAznMAonAAAMAAAAgpg");
	this.shape.setTransform(130,104.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,260,209.1), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BVIgVg8IhDAAIgVA8IgNAAIA+iqIALAAIA+CqgAAeAPIgVg4IgFgQIgEgOIAAAAIgDAOIgFAQIgVA4IA7AAg");
	this.shape.setTransform(147.2,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBRQgNgHgIgQQgIgPAAgaIAAhnIAMAAIAABmQAAAWAGANQAGAOALAGQAKAGANAAQANAAALgHQAKgGAGgNQAGgOAAgVIAAhmIANAAIAABlQgBAagIAQQgIAQgOAHQgOAHgPAAIgCAAQgOAAgMgGg");
	this.shape_1.setTransform(130.8,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAALQgEAAgDgDQgDgDABgFQAAgEACgDQADgDAEAAQAFAAACADQADADAAAEQAAAFgDADQgCADgFAAg");
	this.shape_2.setTransform(118.9,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABHBVIgFhRIgBgaIgCgaIgBgWIgBAAIgKAdIgMAjIgkBbIgHAAIgjhaIgMgkIgJgdIgBAAIgBAWIgBAbIgCAcIgFBOIgMAAIANiqIANAAIAlBiIALAdIAIAaIAAAAIAHgZIAMgeIAmhiIAOAAIAMCqg");
	this.shape_3.setTransform(104.8,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBOQgQgLgLgTQgJgTAAgbQAAgbAKgUQAKgUARgLQARgLAVAAQAWAAARALQAQAKAKATQAKAUAAAaQgBAWgGARQgGARgLALQgLALgNAGQgOAFgOAAQgVAAgRgKgAgbhGQgLAGgIAMQgIALgEAOQgEAOAAAOQAAAPAEAOQAFANAHALQAJALALAHQAMAGAOAAQAUAAAOgLQAOgLAIgRQAIgSgBgVQAAgOgDgNQgEgOgIgLQgHgLgNgHQgLgHgRAAQgPAAgMAHg");
	this.shape_4.setTransform(84.4,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBTQgOgFgMgKQgLgLgHgRQgGgQAAgXQAAgYAKgUQAKgVAUgLQATgMAaAAQAQAAAKADIAOAEIgEALQgHgEgIgCQgKgCgLAAQgWAAgQAKQgRAJgJASQgJASAAAXQAAAYAIARQAJARARAJQAPAKAWAAQAMAAAJgCQAKgCAIgEIAEAKQgHADgMADQgMACgPAAQgQAAgOgFg");
	this.shape_5.setTransform(67.3,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAALQgEAAgDgDQgDgDABgFQAAgEACgDQADgDAEAAQAFAAACADQADADAAAEQAAAFgDADQgCADgFAAg");
	this.shape_6.setTransform(56,24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA3BVIgVg8IhDAAIgVA8IgNAAIA+iqIALAAIA+CqgAAeAPIgVg4IgFgQIgEgOIAAAAIgDAOIgFAQIgVA4IA7AAg");
	this.shape_7.setTransform(44.4,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBXIgOgEQgHgDgFgDIAFgKQAHAFAKADQAKADALAAQASAAALgKQALgJAAgQQAAgPgIgJQgJgJgSgIQgUgGgLgLQgMgLAAgSQAAgMAGgKQAHgKALgFQALgGAOAAQAMAAAJADIANAFIgFAKIgLgFQgIgDgLAAQgNAAgIAFQgIAFgEAHQgDAHAAAHQAAAOAIAJQAJAJARAHQAPAFAJAGQAKAGAFAKQAFAJAAAMQAAANgGALQgGAKgMAHQgMAGgSAAIgPgBg");
	this.shape_8.setTransform(29,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFBVIAAiqIALAAIAACqg");
	this.shape_9.setTransform(18.6,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBVIg5iqIAMAAIAfBbIAMAjIAIAfIABAAIAJggIALgiIAihbIANAAIhACqg");
	this.shape_10.setTransform(7.7,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,157.7,32.3), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BVIgVg8IhDAAIgVA8IgNAAIA+iqIALAAIA+CqgAAeAPIgVg4IgFgQIgEgOIAAAAIgDAOIgFAQIgVA4IA7AAg");
	this.shape.setTransform(123.3,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvBVIAAhVIhdAAIAABVIgMAAIAAiqIAMAAIAABLIBdAAIAAhLIAMAAIAACqg");
	this.shape_1.setTransform(105.9,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBVIAAiqIBTAAIAAAKIhIAAIAABDIBEAAIAAAJIhEAAIAABLIBMAAIAAAJg");
	this.shape_2.setTransform(83.2,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQBVIAAiqIALAAIAAChIBAAAIAAihIALAAIAAChIA/AAIAAihIANAAIAACqg");
	this.shape_3.setTransform(64.6,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBWIgQgBIgNAAIAAiqIALAAIAABCIAHAAIAIgBIAHAAQAQAAAPAFQAOAFAJALQAKALAAATQAAAMgDAJQgEAIgGAHQgJAKgPAFQgMAEgPAAIgEAAgAgagJIgLABIAABTIAKABIAMAAQAOAAALgFQAMgEAHgKQAHgKABgPQgBgQgHgJQgIgIgMgFQgLgEgOAAIgKABg");
	this.shape_4.setTransform(46.5,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BNIAJgEIAIgFQAFgGAEgKQADgJACgMQABgMAAgMIABgWIAAhGIBaAAIAACqIgMAAIAAigIhCAAIAAA6IgBAaQAAAOgCAOQgCANgFALQgEALgJAGQgDADgGADQgGACgGAAg");
	this.shape_5.setTransform(29.3,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFBVIAAiqIALAAIAACqg");
	this.shape_6.setTransform(18.6,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBWIgRgBIgMAAIAAiqIBUAAIAAAKIhJAAIAAA4IAHAAIAIgBIAHAAQALAAAKACQALADAIAFQALAGAGAJQAHALAAAPQAAAMgDAJQgEAJgGAGQgKAKgOAFQgMAEgPAAIgEAAgAgagJIgLABIAABTIAKABIAMAAQAMAAAKgEQAMgEAHgIQAFgFACgHQADgHABgJQgBgMgEgIQgFgIgHgFQgIgEgJgCQgJgDgKAAIgKABg");
	this.shape_7.setTransform(8.1,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,133.8,32.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBWIgRgBIgNAAIAAiqIAMAAIAABCIAGAAIAIgBIAHAAQAQAAAPAFQAPAFAIALQAKALAAATQAAAMgDAJQgEAIgGAHQgJAKgPAFQgMAEgPAAIgDAAgAgagJIgKABIAABTIAJABIALAAQAPAAALgFQAMgEAHgKQAHgKABgPQgBgQgIgJQgHgIgMgFQgLgEgOAAIgKABg");
	this.shape.setTransform(142.5,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBTQgPgFgLgKQgMgLgGgRQgHgQAAgXQAAgYAKgUQAKgVAUgLQATgMAaAAQARAAAJADIAOAEIgEALQgHgEgIgCQgKgCgKAAQgYAAgQAKQgQAJgJASQgJASAAAXQAAAYAIARQAJARARAJQAQAKAVAAQALAAALgCQAJgCAIgEIADAKQgGADgMADQgLACgQAAQgQAAgNgFg");
	this.shape_1.setTransform(126.4,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBVIAAiqIBTAAIAAAKIhIAAIAABDIBEAAIAAAJIhEAAIAABLIBMAAIAAAJg");
	this.shape_2.setTransform(111.9,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFBVIAAigIg4AAIAAgKIB7AAIAAAKIg4AAIAACgg");
	this.shape_3.setTransform(97.6,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwBmIAAhWIAAgYIABgXIABgUIgBAAQgGANgJAOIgSAaIhBBkIgKAAIAAiqIALAAIAABVIAAAYIgBAXIgBAWIABAAQAGgMAIgNIASgdIBChkIALAAIAACqgAgVhUQgHgGAAgMIALAAIACAHQACAEADADQAEACAGAAQAHAAAEgCQADgDACgDIACgIIALAAQAAAMgHAGQgHAHgPAAQgOAAgHgHg");
	this.shape_4.setTransform(81.7,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3BVIgVg8IhDAAIgVA8IgNAAIA+iqIALAAIA+CqgAAeAPIgVg4IgFgQIgEgOIAAAAIgDAOIgFAQIgVA4IA7AAg");
	this.shape_5.setTransform(64.4,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBVIAAhVIhdAAIAABVIgMAAIAAiqIAMAAIAABLIBdAAIAAhLIAMAAIAACqg");
	this.shape_6.setTransform(47,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBWQgKgCgKgGIAFgKQAIAFAJADQAKACAKABQANgBAKgFQAKgFAFgIQAEgJAAgLQAAgPgIgIQgIgJgMgEQgLgDgNAAIgGAAIAAgJIAGAAQAOAAAJgFQALgFAGgJQAGgIAAgKQAAgQgKgIQgJgIgOAAQgKAAgJADQgIAEgHAFIgFgJQAJgGAKgEQAKgDAMAAQALAAAKAEQAKAFAGAJQAGAJAAANQAAALgFAJQgEAJgIAGQgJAGgKACIAAABQAUABALALQAMALAAAUQAAARgIAKQgIALgNAFQgMAFgPAAQgKAAgLgCg");
	this.shape_7.setTransform(31,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBVIAAiqIALAAIAACqg");
	this.shape_8.setTransform(20.8,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA6BqIgCgpIhvAAIgBApIgKAAIgCgyIANAAIAJgTQAEgJADgKQAFgQACgTQADgUgBgZIAAgrIBVAAIAAChIAOAAIgBAygAgSg5QAAAYgCAUQgDASgFAQIgHASIgIARIBWAAIAAiXIg9AAg");
	this.shape_9.setTransform(8.2,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,151.6,32.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXBoIgGhjIgDgfIgBghIAAgcIgBAAIgNAkIgPArIgsBwIgKAAIgphuIgQgsIgLglIgBAAIAAAcIgCAiIgDAhIgGBgIgPAAIAQjQIARAAIAtB4IANAkIAKAfIAAAAIAJgeIAOglIAuh4IASAAIAPDQg");
	this.shape.setTransform(125,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBfQgUgNgMgYQgMgXAAghQAAghAMgZQANgZAVgNQAVgNAZAAQAbAAAUANQAVANALAXQAMAYAAAhQAAAbgIAUQgHAVgNAOQgNANgRAHQgRAHgRAAQgagBgVgMgAghhXQgPAJgJAOQgKANgFASQgEARAAARQAAASAFARQAFARAKANQAJAOAPAIQAOAHASAAQAZAAARgNQARgNAJgXQAJgVAAgZQAAgRgEgRQgFgQgKgOQgJgOgPgIQgOgJgUAAQgTABgOAHg");
	this.shape_1.setTransform(100.2,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBoIAAjDIhFAAIAAgNICXAAIAAANIhFAAIAADDg");
	this.shape_2.setTransform(80.2,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBlQgRgFgOgOQgOgMgJgVQgHgUgBgcQAAgeANgYQANgZAYgPQAXgOAgAAQAUAAAMADQAMADAFADIgFAMQgIgDgLgCQgLgEgOAAQgcABgTAMQgUALgMAVQgLAXABAcQAAAdAKAVQAKAVAUALQAUAMAbAAQANAAANgDQAMgDAJgEIAEAMQgHAEgPADQgOAEgUAAQgTAAgRgHg");
	this.shape_3.setTransform(62,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBoIAAjQIANAAIAADQg");
	this.shape_4.setTransform(47.4,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABXBoIgGhjIgDgfIgBghIgBgcIgBAAIgMAkIgPArIgtBwIgJAAIgphuIgPgsQgIgTgEgSIgBAAIgBAcIgBAiIgCAhIgHBgIgPAAIAPjQIASAAIAtB4IANAkIAKAfIAAAAIAKgeIANglIAuh4IASAAIAPDQg");
	this.shape_5.setTransform(29.8,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBpQgMgDgMgHIAGgMQAJAFAMAEQAMADAMAAQARAAALgFQANgHAFgKQAHgLAAgOQgBgSgJgKQgKgLgPgEQgOgEgPAAIgIAAIAAgLIAIAAQAQAAAMgGQANgHAGgKQAJgKgBgNQAAgTgLgKQgMgKgRAAQgMAAgLAFQgKADgJAHIgGgLQAMgIAMgEQAMgEAOAAQAOAAANAFQAMAGAHALQAIALAAAQQgBAOgGAKQgFALgKAIQgKAHgMACIAAABQAYACANANQAPAOAAAYQAAAVgKANQgKAOgPAFQgQAHgRAAQgNAAgOgDg");
	this.shape_6.setTransform(8.1,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.6,39);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXBoIgGhjIgDgfIgBghIAAgcIgBAAIgNAkIgPArIgsBwIgKAAIgphuIgQgsIgLglIgBAAIAAAcIgCAiIgDAhIgGBgIgPAAIAQjQIARAAIAtB4IANAkIAKAfIAAAAIAJgeIAOglIAuh4IATAAIAODQg");
	this.shape.setTransform(124,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7BoIAAhoIAAggIABgaIABgaIgBAAQgIAQgKARIgXAjIhOB4IgOAAIAAjQIAOAAIAABoIAAAdIAAAcIgCAbIABAAIARgeIAWgjIBRh7IAOAAIAADQg");
	this.shape_1.setTransform(99.7,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBqIgPgCIAAjNIAUgDIAWgBQATAAANAEQANAEAJAJQAGAGAEAJQADAJAAALQAAAQgKAMQgKAMgQAGIAAABQAJACAKAFQAKAGAHALQAIALAAARQAAANgEAKQgEAJgIAIQgKALgRAEQgQAFgWAAIgVAAgAgrBcIALABIAPAAQAQAAANgDQAOgFAJgLQAIgKABgSQAAgQgJgKQgIgLgOgFQgNgEgRAAIgaAAgAghhcIgKACIAABOIAfAAQAVAAANgMQANgLABgSQAAgOgHgKQgHgIgMgEQgLgEgQAAIgQABg");
	this.shape_2.setTransform(80.2,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvBfQgUgNgMgYQgMgXAAghQAAghAMgZQANgZAVgNQAVgNAZAAQAbAAAUANQAVANALAXQAMAYAAAhQAAAbgIAUQgHAVgNAOQgNANgRAHQgRAHgRAAQgagBgVgMgAghhXQgPAJgJAOQgKANgFASQgEARAAARQAAASAFARQAFARAKANQAJAOAPAIQAOAHASAAQAZAAARgNQARgNAJgXQAJgVAAgZQAAgRgEgRQgFgQgKgOQgJgOgPgIQgOgJgUAAQgTABgOAHg");
	this.shape_3.setTransform(59.1,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA6BoIAAhoIhzAAIAABoIgOAAIAAjQIAOAAIAABcIBzAAIAAhcIAOAAIAADQg");
	this.shape_4.setTransform(36.6,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBpQgMgDgMgHIAGgMQAJAFAMAEQAMADAMAAQARAAALgFQANgHAFgKQAHgLAAgOQgBgSgJgKQgKgLgPgEQgOgEgPAAIgIAAIAAgLIAIAAQAQAAAMgGQANgHAGgKQAJgKgBgNQAAgTgLgKQgMgKgRAAQgMAAgLAFQgKADgJAHIgGgLQAMgIAMgEQAMgEAOAAQAOAAANAFQAMAGAHALQAIALAAAQQgBAOgGAKQgFALgKAIQgKAHgMACIAAABQAYACANANQAPAOAAAYQAAAVgKANQgKAOgPAFQgQAHgRAAQgNAAgOgDg");
	this.shape_5.setTransform(8.1,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,39);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7BoIAAhoIAAggIABgaIABgaIgBAAQgIAQgKARIgXAjIhOB4IgOAAIAAjQIAOAAIAABoIAAAdIAAAcIgCAbIABAAIARgeIAWgjIBRh7IAOAAIAADQg");
	this.shape.setTransform(102,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwBoQgGgKgFgOIgKgbQgFgPgIgLQgIgMgMgFQgNgHgVAAIgIAAIAABlIgPAAIAAjQIAPAAIAABhIALAAIBPhhIARAAIhSBiQATACAMAGQAMAIAIAMQAIAMAFAPIALAeQAFANAHAMg");
	this.shape_1.setTransform(83,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBoIAAjDIhFAAIAAgNICXAAIAAANIhFAAIAADDg");
	this.shape_2.setTransform(64.6,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BpIAAjNIAUgDIAZgBQARAAAOAEQAPAFAIAIQAIAHADALQAFAKAAANQAAAOgEAKQgDAKgHAIQgLAKgQAGQgQAGgSAAIgNAAIgNgCIAABZgAgfhbIgMABIAABdIANACIAOABQAcAAAPgMQAQgOAAgZQAAgQgHgKQgIgLgMgFQgNgFgQAAIgSABg");
	this.shape_3.setTransform(47.9,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABDBoIgahJIhSAAIgaBJIgPAAIBMjQIAOAAIBLDQgAAlATIgahFIgGgUIgFgRIAAAAIgFASIgFASIgaBGIBJAAg");
	this.shape_4.setTransform(28.2,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwBoQgGgKgFgOIgKgbQgFgPgIgLQgIgMgMgFQgNgHgVAAIgIAAIAABlIgPAAIAAjQIAPAAIAABhIALAAIBPhhIARAAIhSBiQATACAMAGQAMAIAIAMQAIAMAFAPIALAeQAFANAHAMg");
	this.shape_5.setTransform(10,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.4,39);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#163049").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snowboard_300x300_2();
	this.instance.parent = this;
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-150,300,300), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snowboard_300x300_3();
	this.instance.parent = this;
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-150,300,300), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snowboard_300x300();
	this.instance.parent = this;
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,-150,300,300), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnEUQgpgJgZgLIAah5QAkARAVAHQAqALAugBQAjAAAYgNQAbgOAAgbQAAgSgQgPQgRgPgqgUQg1gagegcQgqgqAAg1QABhQBEgzQBEgzBpAAQBDAABDAYIgZB1QgqgTgtgFQgdgDgZACQgeAFgQANQgPAMAAARQAAAVAfATQATANAyAZQBlA5gBBSQAABWhDAzQhEA0hxAAQgvgBgtgIgALxEUIgRhSIi4AAIgeBSIiWAAIDXn+QAHgSARgLQAQgLAUAAIB7AAIBzImgAJSBRIB2AAIgsjOgAkNEUIB2omICPAAIh1ImgApTEUIhym3QgFgVgGgJQgIgKgPgIQgvgbhegUIADgQID0AAQAYAAASAOQATAQAFAaIA8E+ICVl2ICWAAIjnImg");
	this.shape.setTransform(53.9,0,0.609,0.609);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-17.3,107.9,34.8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#163049").s().p("AgEBPIAAiDIAJAAIAACDgAAMhBQgCgCAAgDQAAgDACgDQACgCADAAQADAAACACQACADAAADQAAADgCACQgCACgDABQgEgBgBgCgAgQg+QgDgBgCgCQgCgCAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAADgCACQgCACgEABg");
	this.shape.setTransform(172.7,143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163049").s().p("AgGAKIAEgOIACgPIALgCIgFARIgGAPIgDAKIgHABIAEgMg");
	this.shape_1.setTransform(167.6,139.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#163049").s().p("AA3BCIgEg/IgBgTIgCgVIAAgRIAAAAIgIAXIgKAaIgcBHIgGAAIgahFIgJgcIgIgXIAAAAIgBASIgBAUIgBAVIgEA9IgJAAIAJiDIALAAIAdBLIAIAXIAGAUIAGgTIAIgYIAehLIALAAIAJCDg");
	this.shape_2.setTransform(156.6,144.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#163049").s().p("AgEBCIAAiDIAJAAIAACDg");
	this.shape_3.setTransform(145.4,144.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#163049").s().p("AgJBAQgLgEgJgIQgJgIgEgNQgGgNAAgRQAAgTAIgPQAIgQAPgJQAPgJAUAAQANAAAHACQAIACADACIgEAIIgMgFQgGgBgJAAQgSAAgMAHQgNAIgGANQgIAOABASQAAASAGANQAHAOANAHQAMAHAQAAQAJAAAIgCIAOgEIACAHQgFADgJACQgJACgMAAQgNAAgKgEg");
	this.shape_4.setTransform(136.3,144.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#163049").s().p("AgbBDIgJgBIAAiBIAMgCIAOgBQAMAAAIADQAJACAFAGQAEAEACAFQACAGAAAHQAAAKgGAIQgGAIgLADIAAABQAGABAHADQAGADAEAIQAFAHAAAKQAAAIgCAHQgDAGgFAFQgGAGgLADQgKADgNAAIgOAAgAgbA6IAHABIAJAAQALAAAIgCQAIgDAGgHQAFgGABgLQAAgLgGgGQgFgHgJgDQgIgDgKAAIgRAAgAgVg6IgGABIAAAyIAUAAQANAAAIgHQAIgIABgLQAAgJgFgGQgEgFgIgDQgGgCgKAAIgLAAg");
	this.shape_5.setTransform(118.7,144.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#163049").s().p("AgEBCIAAiDIAJAAIAACDg");
	this.shape_6.setTransform(109.8,144.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#163049").s().p("AAlBCIAAhCIhIAAIAABCIgKAAIAAiDIAKAAIAAA6IBIAAIAAg6IAJAAIAACDg");
	this.shape_7.setTransform(100,144.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#163049").s().p("AghBCIAAiDIBAAAIAAAIIg3AAIAAAzIA0AAIAAAGIg0AAIAAA6IA6AAIAAAIg");
	this.shape_8.setTransform(88.2,144.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#163049").s().p("AgvA7IAHgCIAGgEQAEgFADgHQADgIAAgJIACgSIABgRIAAg3IBFAAIAACEIgJAAIAAh8IgzAAIAAAuIAAATIgDAVQgBALgDAIQgEAJgGAFIgIAEQgEACgFAAg");
	this.shape_9.setTransform(75.2,144.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#163049").s().p("AAfBDIAAg6IgBAAQgGAEgJADQgIACgJAAIgLgBQgHgBgGgEQgGgFgDgHQgEgHAAgNIAAgtIAJAAIAAAsQAAAPAIAHQAHAJAPAAQAJAAAIgDQAIgCAGgEIAAhCIAJAAIAACEg");
	this.shape_10.setTransform(63.4,144.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163049").s().p("AgXA+QgIgCgEgDIAEgIIAKAFQAHADAJAAQAJAAAHgEQAHgFAFgHQAEgHAAgKQAAgJgEgIQgEgHgIgDQgIgEgMgBIgLABIgHABIAIg6IA2AAIAAAIIgvAAIgGApIAFAAIAHgBQAGAAAFACIALAEQAGACAEAFQAEAEADAGQADAHAAAIQAAANgFAKQgHAJgJAFQgJAGgLAAQgLAAgHgDg");
	this.shape_11.setTransform(45.5,144.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#163049").s().p("AAfBDIAAg9IgQAAQgHAAgGACQgEABgEAFQgEAFgEAHIgFARIgGAPIgCAEIgBAFIgLAAIACgFIADgGIAGgQIAGgRQADgHAGgGIAFgFIAGgCIAAgBQgNgCgJgHQgIgJAAgNQAAgJADgGQADgHAFgEQAFgFAIgDQAJgCAMgBIANABIAOACIAACCgAgEg3QgJACgFAGQgFAHAAAKQAAAJAFAHQAFAGAJAEQAHADALAAIAKAAIAHAAIAAg3IgHgBIgMgBQgKAAgGADg");
	this.shape_12.setTransform(28.1,144.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#163049").s().p("AgvA7IAHgCIAGgEQAEgFADgHQADgIAAgJIACgSIABgRIAAg3IBFAAIAACEIgJAAIAAh8IgzAAIAAAuIAAATIgDAVQgBALgDAIQgEAJgGAFIgIAEQgEACgFAAg");
	this.shape_13.setTransform(15.8,144.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#163049").s().p("AAsBSIAAgfIhXAAIAAAfIgIAAIgBgnIAJAAIAHgOIAGgPQAEgMACgPQABgPAAgUIAAghIBCAAIAAB8IAKAAIgBAngAgOgrQAAASgCAPQgBAOgEAMIgGAOIgGANIBCAAIAAh0IgvAAg");
	this.shape_14.setTransform(3.5,145.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#163049").s().p("AgDBRIAAgUQgIgBgIgCQgHgCgFgEIAEgIQAFAEAGACQAHADAHAAQALAAAHgHQAHgGAAgLQAAgJgGgHQgGgGgKgFQgOgFgIgIQgIgHAAgMQAAgMAHgIQAIgIAMgCIAAgUIAHAAIAAAUQAIABAGACQAGACAEACIgEAIIgJgFQgFgCgJAAQgHAAgGADQgFADgCAFQgCAFAAAFQAAAGACAEQADAEAFAEQAGAEAHADQAOAGAIAIQAHAIAAAMQAAAIgDAHQgDAGgGAFQgHAFgJABIAAAVg");
	this.shape_15.setTransform(245.6,117.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#163049").s().p("AAlBCIAAhCIhIAAIAABCIgKAAIAAiDIAKAAIAAA6IBIAAIAAg6IAJAAIAACDg");
	this.shape_16.setTransform(227.5,117.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#163049").s().p("AgvA7IAHgCIAGgEQAFgFACgHQACgIACgJIABgSIAAgRIAAg3IBGAAIAACEIgJAAIAAh8Ig0AAIAAAuIAAATIgBAVQgCALgEAIQgDAJgHAFIgHAEQgEACgFAAg");
	this.shape_17.setTransform(213.4,117.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#163049").s().p("AA3BCIgEg/IgBgTIgCgVIAAgRIAAAAIgIAXIgKAaIgcBHIgGAAIgahFIgJgcIgIgXIAAAAIgBASIgBAUIgBAVIgEA9IgJAAIAJiDIALAAIAdBLIAIAXIAGAUIAGgTIAIgYIAehLIALAAIAJCDg");
	this.shape_18.setTransform(199.7,117.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#163049").s().p("AAHBAIAAh1IAAAAIgUAMIgCgIIAXgOIAIAAIAAB/g");
	this.shape_19.setTransform(179,117.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#163049").s().p("AgdA8QgNgIgIgPQgHgPgBgVQAAgUAIgQQAJgPAMgJQAOgIAQAAQAQAAAOAIQAMAIAIAPQAHAPAAAVQAAAQgEANQgGANgIAJQgIAJgLAEQgKAEgLAAQgQAAgNgIgAgVg2QgJAFgGAJQgGAJgDALQgDAKAAALQAAALADALQADAKAHAJQAGAIAJAFQAJAFALAAQAPAAAMgIQAKgIAGgOQAFgOABgQQgBgKgCgLQgDgKgGgJQgGgJgKgFQgJgFgMAAQgLAAgKAFg");
	this.shape_20.setTransform(161.2,117.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#163049").s().p("AAsBSIAAgfIhXAAIAAAfIgIAAIgBgnIAJAAIAHgOIAGgPQAEgMACgPQABgPAAgUIAAghIBCAAIAAB8IAKAAIgBAngAgOgrQAAASgCAPQgBAOgEAMIgGAOIgGANIBCAAIAAh0IgvAAg");
	this.shape_21.setTransform(147,119.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#163049").s().p("AAfBDIAAg9IgQAAQgIAAgFACQgEABgEAFQgFAFgDAHIgFARIgGAPIgBAEIgCAFIgLAAIADgFIACgGIAGgQIAFgRQAEgHAFgGIAGgFIAGgCIAAgBQgOgCgIgHQgIgJAAgNQAAgJACgGQADgHAGgEQAFgFAJgDQAIgCALgBIAPABIANACIAACCgAgFg3QgIACgFAGQgEAHgBAKQABAJAEAHQAFAGAIAEQAIADALAAIAJAAIAIAAIAAg3IgIgBIgLgBQgJAAgIADg");
	this.shape_22.setTransform(128.6,117.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#163049").s().p("AgEBCIAAiDIAJAAIAACDg");
	this.shape_23.setTransform(120.6,117.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#163049").s().p("AAoBSIgBgfIhYAAIAAiEIAKAAIAAB8IBFAAIAAh8IAJAAIAAB8IAKAAIgBAng");
	this.shape_24.setTransform(111.3,119.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#163049").s().p("AArBCIgRguIgzAAIgRAuIgJAAIAwiDIAIAAIAvCDgAAXAMIgQgrIgEgMIgDgLIAAAAIgCALIgEALIgRAsIAuAAg");
	this.shape_25.setTransform(97.5,117.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#163049").s().p("AgJBAQgLgEgIgIQgJgIgGgNQgFgNAAgRQAAgTAIgPQAIgQAPgJQAPgJAUAAQAMAAAIACQAHACADACIgDAIIgLgFQgIgBgIAAQgSAAgLAHQgNAIgIANQgGAOAAASQgBASAHANQAHAOANAHQAMAHARAAQAIAAAIgCIANgEIADAHQgFADgJACQgJACgMAAQgMAAgLgEg");
	this.shape_26.setTransform(84.7,117.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#163049").s().p("AAlBCIAAhCIhIAAIAABCIgKAAIAAiDIAKAAIAAA6IBIAAIAAg6IAJAAIAACDg");
	this.shape_27.setTransform(71.3,117.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#163049").s().p("AghBCIAAiDIBAAAIAAAIIg3AAIAAAzIA0AAIAAAGIg0AAIAAA6IA6AAIAAAIg");
	this.shape_28.setTransform(59.5,117.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#163049").s().p("AAjBCIAAh7IhFAAIAAB7IgJAAIAAiDIBYAAIAACDg");
	this.shape_29.setTransform(46.9,117.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#163049").s().p("AA3BCIgEg/IgBgTIgCgVIAAgRIAAAAIgIAXIgKAaIgcBHIgGAAIgahFIgJgcIgIgXIAAAAIgBASIgBAUIgBAVIgEA9IgJAAIAJiDIALAAIAdBLIAIAXIAGAUIAGgTIAIgYIAehLIALAAIAJCDg");
	this.shape_30.setTransform(31.8,117.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#163049").s().p("AgdA8QgNgIgIgPQgHgPAAgVQgBgUAJgQQAHgPAOgJQANgIAPAAQASAAANAIQANAIAHAPQAHAPABAVQgBAQgFANQgFANgHAJQgJAJgKAEQgLAEgLAAQgRAAgMgIgAgUg2QgKAFgGAJQgGAJgDALQgDAKAAALQAAALADALQAEAKAFAJQAHAIAJAFQAJAFALAAQAPAAALgIQALgIAGgOQAGgOAAgQQAAgKgDgLQgDgKgGgJQgGgJgJgFQgJgFgNAAQgLAAgJAFg");
	this.shape_31.setTransform(16,117.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#163049").s().p("AAeBCIgGgPIgGgRQgEgKgFgHQgFgHgHgEQgJgEgNAAIgFAAIAABAIgJAAIAAiDIAJAAIAAA9IAGAAIAyg9IALAAIgzA+QAMABAHAEQAIAEAFAIQAEAIAEAJIAHATIAIAQg");
	this.shape_32.setTransform(3.7,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-3.3,104.6,262.6,52.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#163049").s().p("AgkBEIgDAAIABgIIACAAIADAAQAIAAAGgFQAGgFAEgHIAHgMIABgFIgCgFIgshYIALAAIAfA/IAFAKIAEAMIAAAAIAFgMIAEgKIAZg/IAKAAIgeBGIgHARIgIASIgIAOQgHAJgGADQgHAEgHAAIgEAAg");
	this.shape.setTransform(217.2,116.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163049").s().p("AgEBDIAAh9IgsAAIAAgIIBhAAIAAAIIgtAAIAAB9g");
	this.shape_1.setTransform(206.2,116.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#163049").s().p("AgkBDIAAiDIANgCIAPgBQALABAJACQAJADAGAFQAFAFACAHQADAHAAAIQAAAJgCAGQgDAGgEAFQgHAHgKAEQgKADgMABIgIAAIgIgCIAAA5gAgUg7IgHACIAAA7IAIABIAJABQARgBAKgHQAKgIABgRQgBgKgEgGQgFgHgIgEQgIgDgKAAIgMAAg");
	this.shape_2.setTransform(195.4,116.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#163049").s().p("AgdA9QgOgIgHgPQgIgQAAgVQAAgVAIgPQAIgQANgJQAOgIAQAAQARAAANAIQANAIAIAQQAHAPAAAVQAAAQgFAOQgFANgIAJQgIAJgLAEQgLAEgLAAQgQAAgNgIgAgVg3QgJAFgGAJQgGAJgDALQgDALAAALQAAAMADAKQADALAGAJQAHAIAJAFQAJAFALAAQAQAAALgIQALgJAGgOQAGgOAAgQQAAgKgDgLQgDgLgGgJQgGgIgKgGQgJgFgNAAQgLAAgKAFg");
	this.shape_3.setTransform(181.8,116.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#163049").s().p("AAkBDIAAh9IhHAAIAAB9IgJAAIAAiFIBZAAIAACFg");
	this.shape_4.setTransform(167.5,116.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#163049").s().p("AgJBBQgLgEgJgIQgJgIgFgNQgGgNAAgSQAAgTAJgQQAIgQAPgJQAPgJAUAAQANAAAIACIAKAEIgDAIQgFgDgHgBQgHgCgJAAQgSAAgMAIQgNAHgHAOQgHAOAAASQAAASAHAOQAGANANAIQANAHARAAQAJAAAIgCQAHgBAGgDIADAHQgFADgKACQgJACgMAAQgMAAgLgEg");
	this.shape_5.setTransform(154.1,116.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#163049").s().p("AAmBDIAAhDIAAgUIAAgRIABgQIAAAAQgFAKgHALIgPAWIgyBNIgIAAIAAiFIAJAAIAABCIAAATIgBASIgBARIABABQAEgKAHgKIAOgXIAzhOIAJAAIAACFg");
	this.shape_6.setTransform(134.7,116.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#163049").s().p("AAtBTIgBggIhXAAIgBAgIgIAAIgBgoIAJAAIAIgNIAGgQQAEgMABgPQACgQAAgTIAAgiIBCAAIAAB9IALAAIgBAogAgOgsQAAATgCAPQgCAOgEAMIgFAPIgHAMIBEAAIAAh1IgwAAg");
	this.shape_7.setTransform(120.6,118.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#163049").s().p("AAmBDIAAhDIAAgUIAAgRIABgQIAAAAQgFAKgHALIgPAWIgyBNIgIAAIAAiFIAJAAIAABCIAAATIgBASIgBARIABABQAEgKAHgKIAOgXIAzhOIAJAAIAACFg");
	this.shape_8.setTransform(107.1,116.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#163049").s().p("AgbBEIgKgBIAAiDIANgCIAOgBQAMAAAIADQAJACAFAGQAEAEACAFQACAGAAAHQAAAKgGAIQgGAIgLAEIAAABQAGABAHACQAGAFAFAHQAEAGABAMQAAAHgDAHQgDAHgEAEQgHAHgLADQgKADgOAAIgNAAgAgcA7IAIABIAJAAQAKAAAIgCQAJgEAGgGQAGgHAAgLQAAgLgGgGQgFgHgJgDQgIgDgLAAIgRAAgAgVg7IgHABIAAAyIAUAAQAOABAIgIQAJgHAAgMQAAgJgFgFQgEgGgIgDQgGgCgKAAIgLAAg");
	this.shape_9.setTransform(94.6,116.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#163049").s().p("AgEBDIAAiFIAIAAIAACFg");
	this.shape_10.setTransform(79.6,116.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163049").s().p("AAlBDIAAhDIhJAAIAABDIgJAAIAAiFIAJAAIAAA7IBJAAIAAg7IAJAAIAACFg");
	this.shape_11.setTransform(69.7,116.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#163049").s().p("AgbBEIgKgBIAAiDIANgCIAOgBQAMAAAIADQAJACAFAGQAEAEACAFQACAGAAAHQAAAKgGAIQgGAIgLAEIAAABQAGABAHACQAGAFAFAHQAEAGABAMQAAAHgDAHQgDAHgEAEQgHAHgLADQgKADgOAAIgNAAgAgcA7IAIABIAJAAQAKAAAIgCQAJgEAGgGQAGgHAAgLQAAgLgGgGQgFgHgJgDQgIgDgLAAIgRAAgAgVg7IgHABIAAAyIAUAAQAOABAIgIQAJgHAAgMQAAgJgFgFQgEgGgIgDQgGgCgKAAIgLAAg");
	this.shape_12.setTransform(57.3,116.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#163049").s().p("AAmBDIAAhDIAAgUIAAgRIABgQIAAAAQgFAKgHALIgPAWIgyBNIgIAAIAAiFIAJAAIAABCIAAATIgBASIgBARIABABQAEgKAHgKIAOgXIAzhOIAJAAIAACFg");
	this.shape_13.setTransform(44,116.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#163049").s().p("AgEBDIAAh9IgrAAIAAgIIBfAAIAAAIIgsAAIAAB9g");
	this.shape_14.setTransform(31.5,116.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#163049").s().p("AAfBDIgHgQIgGgRQgEgKgFgHQgFgHgIgEQgIgEgNAAIgGAAIAABBIgJAAIAAiFIAJAAIAAA+IAHAAIAzg+IALAAIg0A/QAMABAHAEQAIAFAFAHQAFAIAEAKIAHASIAHARg");
	this.shape_15.setTransform(21,116.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#163049").s().p("AAsBDIgRgvIg0AAIgRAvIgKAAIAwiFIAIAAIAxCFgAAXAMIgQgsIgEgMIgDgLIgDALIgDAMIgRAsIAuAAg");
	this.shape_16.setTransform(8,116.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0.7,103.6,224.2,26.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#163049").s().p("AAfBDIAAg9IgQAAQgIAAgFABQgEACgEAEQgFAFgDAJIgFAPIgGAPIgBAFIgCAFIgLAAIADgGIACgEIAGgRIAFgRQAEgHAFgGIAGgFIAGgCIAAAAQgOgDgIgHQgIgJgBgOQAAgHAEgHQADgHAFgFQAFgEAJgDQAHgCAMgBIAPABIANACIAACCgAgFg4QgIAEgFAFQgFAHAAAKQAAAJAFAHQAFAHAIACQAIAEALAAIAKAAIAHAAIAAg3IgHgCIgMAAQgKAAgHACg");
	this.shape.setTransform(288,190.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163049").s().p("AgEBCIAAh7IgrAAIAAgIIBfAAIAAAIIgrAAIAAB7g");
	this.shape_1.setTransform(277.6,191);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#163049").s().p("AgEBCIAAh7IgrAAIAAgIIBfAAIAAAIIgrAAIAAB7g");
	this.shape_2.setTransform(267,191);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#163049").s().p("AAmBCIAAhCIAAgTIAAgSIABgQIAAAAIgNAVIgNAWIgyBMIgJAAIAAiDIAJAAIAABBIAAASIAAASIgBARIAAAAQAFgJAGgKIAPgWIAyhNIAJAAIAACDg");
	this.shape_3.setTransform(254.6,191);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#163049").s().p("AgkBDIAAiCIANgCIAQgBQAKAAAJAEQAJACAFAFQAFAFADAHQADAGAAAIQAAAJgDAGQgCAHgFAEQgGAHgKAEQgKADgLABIgJAAIgHgCIAAA5gAgTg5IgHABIAAA6IAHABIAJABQARAAAKgIQAKgIAAgQQAAgKgEgGQgFgHgIgEQgIgDgKAAIgLABg");
	this.shape_4.setTransform(242.3,190.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#163049").s().p("AAfBCQgEgHgDgIIgHgRQgDgKgFgHQgFgHgHgEQgJgEgNAAIgFAAIAABAIgJAAIAAiDIAJAAIAAA9IAHAAIAyg9IAKAAIgzA+QAMABAHADQAIAGAFAHQAFAHADAKIAHATIAHAQg");
	this.shape_5.setTransform(231.3,191);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#163049").s().p("AgdA8QgNgIgIgPQgHgPAAgVQAAgUAIgQQAIgPANgJQANgIAQAAQARAAANAIQAMAIAIAPQAHAPAAAVQAAAQgFANQgEANgJAJQgIAIgLAFQgKAEgLAAQgQAAgNgIgAgVg2QgJAFgGAJQgGAJgDALQgDALAAAKQAAALADALQAEAKAGAJQAGAIAJAFQAJAFALABQAQgBALgIQAKgJAGgOQAGgNAAgQQAAgKgDgLQgDgLgGgIQgGgJgJgFQgJgFgNgBQgLABgKAFg");
	this.shape_6.setTransform(217.6,191);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#163049").s().p("AAjBCIAAh7IhFAAIAAB7IgJAAIAAiDIBXAAIAACDg");
	this.shape_7.setTransform(203.4,191);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#163049").s().p("AghBCIAAiDIBAAAIAAAIIg3AAIAAAzIA0AAIAAAHIg0AAIAAA5IA6AAIAAAIg");
	this.shape_8.setTransform(289.5,164.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#163049").s().p("AgbBCIgJAAIAAiCIAMgCIAOAAQAMAAAIACQAJADAFAGQAEAEACAFQACAFAAAIQAAAKgGAIQgHAHgKAEIAAAAQAGABAGAEQAHADAEAIQAFAHAAAKQAAAIgCAGQgDAGgFAGQgGAGgLADQgKADgNAAIgOgBgAgbA6IAHABIAJAAQALAAAHgCQAJgDAGgHQAFgGABgLQgBgLgFgHQgFgGgJgDQgIgDgKAAIgRAAgAgbg5IAAAyIATAAQAOgBAIgGQAIgIAAgLQAAgJgEgGQgEgFgIgDQgGgCgKAAIgLAAIgGABg");
	this.shape_9.setTransform(278.4,164.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#163049").s().p("AgdA8QgNgIgIgPQgHgPAAgUQAAgWAIgPQAIgPANgJQANgIAQAAQARAAANAIQAMAIAIAPQAHAPAAAUQAAARgFANQgEANgJAJQgIAIgLAFQgKAEgLAAQgQAAgNgIgAgVg2QgJAFgGAJQgGAIgDALQgDALAAALQAAALADAKQAEALAGAJQAGAIAJAFQAJAFALAAQAQAAALgJQAKgHAGgOQAGgOAAgQQAAgLgDgKQgDgLgGgIQgGgJgJgFQgJgFgNAAQgLAAgKAFg");
	this.shape_10.setTransform(264.9,164.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163049").s().p("AAkBCIgTghIgKgPIgHgMIAAAAIgHAMIgKAPIgSAhIgLAAIAphCIgohBIALAAIAVAjIAHAMIAGALIABAAIAGgLIAHgMIAWgjIALAAIgqBAIAqBDg");
	this.shape_11.setTransform(251.5,164.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#163049").s().p("AAqBCIgQguIgzAAIgRAuIgJAAIAviDIAIAAIAwCDgAAXAMIgQgrIgEgMIgDgMIgDAMIgDALIgRAsIAuAAg");
	this.shape_12.setTransform(239,164.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#163049").s().p("AgkBCIAAiBIANgCIAQAAQAKAAAJACQAJADAFAGQAFAEADAGQADAHAAAJQAAAIgDAGQgCAHgFAFQgGAGgKAEQgKAEgLgBIgJAAIgHgBIAAA4gAgTg5IgHABIAAA6IAHABIAJABQARgBAKgGQAKgJAAgPQAAgLgEgHQgFgHgIgCQgIgDgKAAIgLAAg");
	this.shape_13.setTransform(227.1,164.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#163049").s().p("AgEBCIAAh7IgrAAIAAgIIBfAAIAAAIIgrAAIAAB7g");
	this.shape_14.setTransform(215.8,164.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#163049").s().p("AgJBAQgLgEgJgIQgJgIgFgNQgFgNAAgRQAAgTAIgPQAIgQAPgJQAPgJAUAAQANAAAHACIALAEIgEAIQgEgDgIgCQgGgBgJAAQgSAAgMAHQgMAIgHANQgIAOABASQAAASAGANQAHAOAMAGQANAIAQAAQAJAAAIgCQAIgCAFgCIADAHQgFADgKACQgIACgMAAQgMAAgLgEg");
	this.shape_15.setTransform(204.2,164.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#163049").s().p("AghBCIAAiDIBAAAIAAAIIg3AAIAAAzIA0AAIAAAHIg0AAIAAA5IA6AAIAAAIg");
	this.shape_16.setTransform(289.5,137.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#163049").s().p("AAfBCQgEgHgDgJIgHgRQgDgJgFgHQgFgHgHgEQgJgDgNAAIgFAAIAAA/IgJAAIAAiDIAJAAIAAA9IAHAAIAyg9IAKAAIgzA9QAMABAHAFQAIAEAFAIQAFAHADAKIAHASIAHARg");
	this.shape_17.setTransform(278.7,137.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#163049").s().p("AgdA8QgNgIgIgPQgHgPAAgUQAAgWAIgPQAIgPANgJQANgIAQAAQARAAANAIQAMAIAIAPQAHAPAAAUQAAARgFANQgEANgJAJQgIAIgLAFQgKAEgLAAQgQAAgNgIgAgVg2QgJAFgGAJQgGAIgDALQgDALAAALQAAALADAKQAEALAGAJQAGAIAJAFQAJAFALAAQAQAAALgJQAKgHAGgOQAGgOAAgQQAAgLgDgKQgDgLgGgIQgGgJgJgFQgJgFgNAAQgLAAgKAFg");
	this.shape_18.setTransform(265,137.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#163049").s().p("AgkBCIAAiBIANgCIAQAAQAKAAAJACQAJADAFAGQAFAEADAGQADAHAAAJQAAAIgDAGQgCAHgFAFQgGAGgKAEQgKAEgLgBIgJAAIgHgBIAAA4gAgTg5IgHABIAAA6IAHABIAJABQARgBAKgGQAKgJAAgPQAAgLgEgHQgFgHgIgCQgIgDgKAAIgLAAg");
	this.shape_19.setTransform(252.3,137.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#163049").s().p("AAmBCIAAhCIAAgUIAAgRIABgPIAAAAIgNAUIgNAWIgyBMIgJAAIAAiDIAJAAIAABBIAAATIAAARIgBASIAAAAQAFgKAGgKIAPgWIAyhNIAJAAIAACDg");
	this.shape_20.setTransform(239.3,137.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#163049").s().p("Ag+BCIAAiDIAKAAIAAB7IAwAAIAAh7IAIAAIAAB7IAyAAIAAh7IAJAAIAACDg");
	this.shape_21.setTransform(223.7,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(191.4,124.8,105,79), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgE7BUYMAAAiovIJ3AAMAAACovg");
	mask.setTransform(31.6,540);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17304A").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape.setTransform(63.2,162.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17304A").s().p("Ag6COIBakkQABgBANAEQANAEAAACIhaEjIgBABQgEAAgWgJg");
	this.shape_1.setTransform(63.1,150.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#17304A").s().p("AhhCpQgMgHABgCIDBlOQABgBAMAHQAMAHgBABIjBFPIAAAAQgCAAgLgGg");
	this.shape_2.setTransform(63.2,138.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#17304A").s().p("AiKChQgLgJABgBIEUk/QABgCALAJQAKAKgBABIkUE/IAAAAQgCAAgJgIg");
	this.shape_3.setTransform(63.1,126.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#17304A").s().p("Ai0CbQgIgLABgBIFkkyQACgBAKALQAIAKgBACIllExIAAAAQgDAAgIgJg");
	this.shape_4.setTransform(63,114.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#17304A").s().p("AjlCPQgHgMABgCIHHkaQACgBAIAMQAHANgCABInHEZIAAABQgCAAgHgLg");
	this.shape_5.setTransform(63.1,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#17304A").s().p("AkICAQgFgNACgBIILj8QADgBAFAMQAHANgDABIoLD9IAAAAQgCAAgHgMg");
	this.shape_6.setTransform(63.1,90.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#17304A").s().p("AkuBwQgFgNACgBIJZjeQACgBAFAOQAFANgDABIpYDdIAAABQgDAAgEgNg");
	this.shape_7.setTransform(63.1,78.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#17304A").s().p("AlYBlQgDgOACgBIKrjGQADgBAEANQAEAOgDABIqrDGIAAAAQgDAAgEgMg");
	this.shape_8.setTransform(63.1,66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#17304A").s().p("Al4BdQgEgNADgBILsi4QADgBADAOQAEAOgEAAIrrC4IgBAAQgCAAgDgNg");
	this.shape_9.setTransform(63.1,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#17304A").s().p("AmZBKQgDgOAEAAIMtiSQADgBACAOQADAOgDAAIstCSIgBAAQgDAAgCgNg");
	this.shape_10.setTransform(63.1,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#17304A").s().p("AmrA8QgCgOAEgBINPh1QAEgBACAOQACAOgEAAItPB2IAAAAQgEAAgCgNg");
	this.shape_11.setTransform(63.1,29.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#17304A").s().p("Am4ApQAAgOADAAINphRQADAAABAOQACAOgEAAItoBRIgBAAQgDAAgCgOg");
	this.shape_12.setTransform(63.2,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#17304A").s().p("AnCAeQgBgOADAAIN/g7QADAAABAOQABAOgEAAIt+A7QgDAAgBgOg");
	this.shape_13.setTransform(63.1,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C09C5C").s().p("AnFABQgEAAABgNQAAgOAEAAIOKAZQAEABgBANQAAAOgEAAg");
	this.shape_14.setTransform(63.1,1078.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_15.setTransform(63.1,885.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C09C5C").s().p("AgtCUQgNgEAAgCIBakjQABgCANAEQANAFAAABIhaEkIgBAAIgNgDg");
	this.shape_16.setTransform(63.1,897.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C09C5C").s().p("AhhCpQgMgHABgCIDBlOQABgBAMAHQAMAHgBACIjBFOIgBAAQgCAAgKgGg");
	this.shape_17.setTransform(63.1,909.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C09C5C").s().p("AiLChQgKgJABgBIEUk/QABgBALAJQAKAJgBABIkUE/IAAAAQgCAAgKgIg");
	this.shape_18.setTransform(63.1,921.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C09C5C").s().p("AizCaQgKgKACgCIFlkxQABgBAJAKQAJALgBABIllExIAAABQgCAAgIgKg");
	this.shape_19.setTransform(63.3,933.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C09C5C").s().p("AjlCOQgIgLADgBIHGkbQACgBAIAMQAHANgBABInIEZIAAABQgCAAgHgMg");
	this.shape_20.setTransform(63.2,945.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C09C5C").s().p("AkHCAQgHgNACgBIIMj8QACgBAHAMQAFANgBABIoMD8IAAAAQgCAAgGgLg");
	this.shape_21.setTransform(63.2,957.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C09C5C").s().p("AkuBwQgFgNACgBIJZjdQACgBAFANQAFANgDABIpYDdIAAAAQgDAAgEgMg");
	this.shape_22.setTransform(63.2,969.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C09C5C").s().p("AlYBlQgEgOADgBIKrjGQADgBAEANQADAOgCABIqrDGIAAAAQgDAAgEgMg");
	this.shape_23.setTransform(63.1,981.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C09C5C").s().p("Al4BdQgEgNAEgBILri4QADAAAEANQADAOgDAAIrsC4IAAAAQgDAAgDgNg");
	this.shape_24.setTransform(63.1,993.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C09C5C").s().p("AmZBKQgDgOAEAAIMtiSQADgBACAOQADAOgDAAIstCSIgBAAQgDAAgCgNg");
	this.shape_25.setTransform(63.1,1005.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C09C5C").s().p("AmqA8QgCgOADgBINPh1QAEgBACAOQABAOgDAAItQB2IAAAAQgDAAgBgNg");
	this.shape_26.setTransform(63.2,1017.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C09C5C").s().p("Am3ApQgCgOAEAAINohRQAEAAABAOQACAOgEAAItoBRQgEAAgBgOg");
	this.shape_27.setTransform(63.1,1029.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C09C5C").s().p("AnCAeQgBgOAEgBIN+g6QADAAABAOQABAOgDAAIt/A6IAAABQgDAAgBgOg");
	this.shape_28.setTransform(63.1,1042);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C09C5C").s().p("AnIANQgBgNAEgBIOKgZQAEAAAAAOQABANgEAAIuKAZIAAABQgEAAAAgOg");
	this.shape_29.setTransform(63.1,1054);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C09C5C").s().p("AnGAOQgEAAAAgOQAAgNAEAAIONAAQAEAAAAANQAAAOgEAAg");
	this.shape_30.setTransform(63.1,1066.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C09C5C").s().p("AnHAIQAAgNADAAIOIgQQAEAAAAAOQAAANgDAAIuIAQQgDAAgBgOg");
	this.shape_31.setTransform(63.1,355.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C09C5C").s().p("Am9AUQAAgOADAAINzgnQAEAAABAOQAAAOgDAAItzAnQgEAAgBgOg");
	this.shape_32.setTransform(63.1,367.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C09C5C").s().p("AmwAhQgBgOAEAAINZhBQADAAACAOQABAOgEAAItZBBIAAAAQgEAAgBgOg");
	this.shape_33.setTransform(63.1,379.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C09C5C").s().p("AmlAmQgBgOADAAINFhLQADAAABAOQABAOgDAAItEBLIgBAAQgDAAgBgOg");
	this.shape_34.setTransform(63.1,391.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C09C5C").s().p("AmRAtQgBgOADgBIMchXQADAAACAOQABAOgDAAIscBXIAAAAQgDAAgCgNg");
	this.shape_35.setTransform(63.1,403.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C09C5C").s().p("Al2AwQgCgOADAAILoheQADgBACAOQABAOgDABIroBdIAAABQgDAAgBgOg");
	this.shape_36.setTransform(63.1,415.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C09C5C").s().p("AlbA1QgCgNADAAIKxhqQADAAACAOQACAOgDAAIqxBpIAAAAQgDAAgCgOg");
	this.shape_37.setTransform(63.1,427.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C09C5C").s().p("Ak4A6QgCgOACAAIJshzQACAAADAOQACANgCABIpsByIAAABQgCAAgDgOg");
	this.shape_38.setTransform(63.1,439.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C09C5C").s().p("AkSA6QgDgNACgBIIihzQACAAADANQADAOgDABIohByIgBABQgCAAgCgOg");
	this.shape_39.setTransform(63.1,451.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C09C5C").s().p("AjuA6QgEgOADAAIHZhyQACgBADAOQADANgCABInYByIgBAAQgCAAgDgNg");
	this.shape_40.setTransform(63.1,463.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C09C5C").s().p("AjHA4QgEgNACAAIGMhwQACAAADAOQAEANgCAAImMBwIAAAAQgBAAgEgOg");
	this.shape_41.setTransform(63.1,475.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C09C5C").s().p("AicA4QgEgNABgBIE2huQABAAAFANQAEAOgBAAIk2BuIAAAAQgBAAgFgNg");
	this.shape_42.setTransform(63.1,487.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C09C5C").s().p("Ah0AnIDdhnQANAZgBAAIjdBoIAAAAQgBAAgLgag");
	this.shape_43.setTransform(63.1,499.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C09C5C").s().p("Ag6AjIBihaIATAVIhiBZIAAABIgTgVg");
	this.shape_44.setTransform(63.1,511.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_45.setTransform(63.1,523.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_46.setTransform(63.2,162.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C09C5C").s().p("AAgCWIhakjQAAgCANgEQANgDABABIBaEjQAAABgNAFIgNADIgBgBg");
	this.shape_47.setTransform(63.1,174.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C09C5C").s().p("ABVCvIjBlOQgBgCAMgHQANgHAAACIDBFOQABABgMAHQgKAGgCAAIgBAAg");
	this.shape_48.setTransform(63.2,186.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C09C5C").s().p("ACACpIkUk/QgBgBALgJQAKgJABABIEUE/QABABgKAKQgJAHgCAAIgBAAg");
	this.shape_49.setTransform(63.1,198.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C09C5C").s().p("ACpCkIlkkyQgBgBAIgKQAKgLABABIFlExQABACgIAKQgJAKgCAAIgBAAg");
	this.shape_50.setTransform(63,210.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C09C5C").s().p("ADcCaInHkaQgBgCAHgMQAHgMACACIHHEZQACABgHANQgHALgCAAIgBAAg");
	this.shape_51.setTransform(63.1,222.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C09C5C").s().p("AEACLIoLj8QgCgBAFgNQAHgNACABIILD9QADABgHANQgFAMgCAAIgBgBg");
	this.shape_52.setTransform(63.1,234.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C09C5C").s().p("AEoB8IpZjdQgCgBAFgNQAEgNADAAIJYDeQADAAgFAOQgEANgDAAIAAgBg");
	this.shape_53.setTransform(63.1,246.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C09C5C").s().p("AFSBxIqrjGQgCgBADgNQAEgOADABIKrDHQADABgEANQgEAMgDAAIAAAAg");
	this.shape_54.setTransform(63.1,258.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C09C5C").s().p("AFzBqIrsi4QgDgBAEgNQADgOADABILrC3QAEABgEAOQgDANgDAAIAAAAg");
	this.shape_55.setTransform(63.1,270.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C09C5C").s().p("AGVBXIstiSQgEAAADgOQACgOAEABIMtCSQADABgDANQgCANgDAAIAAAAg");
	this.shape_56.setTransform(63.1,282.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C09C5C").s().p("AGmBJItPh1QgEgBACgOQACgOAEABINPB2QAEAAgCAOQgCANgDAAIgBAAg");
	this.shape_57.setTransform(63.1,295);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C09C5C").s().p("AG0A3ItphRQgDAAAAgOQACgOAEAAINoBRQAEAAgCAOQgBAOgDAAIAAAAg");
	this.shape_58.setTransform(63.2,307);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C09C5C").s().p("AnAgPQgDAAABgOQABgOADABIN+A6QAEAAgBAOQgBAOgDAAg");
	this.shape_59.setTransform(63.1,319.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C09C5C").s().p("AnFABQgEAAAAgNQABgOADAAIOLAaQAEAAgBANQAAAOgEAAg");
	this.shape_60.setTransform(63.2,331.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C09C5C").s().p("AnGAOQgEAAAAgOQAAgNAEAAIONAAQAEAAAAANQAAAOgEAAg");
	this.shape_61.setTransform(63.1,343.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#17304A").s().p("AnEAGQgDAAAAgNQABgOADAAIOIAQQADAAAAANQAAAOgEAAg");
	this.shape_62.setTransform(63.1,692.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#17304A").s().p("Am6gFQgDAAAAgOQABgOAEAAINzAnQADAAAAAOQgBAOgEAAg");
	this.shape_63.setTransform(63.1,680.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#17304A").s().p("AGsAvItZhBQgEAAABgOQABgOAEAAINZBBQAEAAgBAOQgCAOgDAAIAAAAg");
	this.shape_64.setTransform(63.1,668.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#17304A").s().p("AGiA0ItFhLQgDAAABgOQABgOAEAAINEBLQADAAgBAOQgBAOgDAAIAAAAg");
	this.shape_65.setTransform(63.1,656.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#17304A").s().p("AGNA6IschXQgDgBABgNQACgOADAAIMcBXQADAAgBAOQgCAOgDAAIAAAAg");
	this.shape_66.setTransform(63.1,644.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#17304A").s().p("AFzA+IrohfQgDAAACgOQABgOADAAILoBfQADAAgBAOQgCAOgDAAIAAAAg");
	this.shape_67.setTransform(63.1,632.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#17304A").s().p("AFXBDIqxhqQgDAAACgNQACgOADAAIKxBpQADABgCAOQgCANgDAAIAAAAg");
	this.shape_68.setTransform(63.1,620.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#17304A").s().p("AE0BIIpshzQgCgBACgNQADgOACABIJsByQACABgCANQgDAOgCAAIAAAAg");
	this.shape_69.setTransform(63.1,608.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#17304A").s().p("AEPBIIoihzQgCgBADgNQADgOACAAIIhBzQADABgDANQgDAOgCAAIAAAAg");
	this.shape_70.setTransform(63.1,596.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#17304A").s().p("ADqBHInZhyQgDAAAEgOQAEgOACABIHYByQACABgDANQgDANgCAAIAAAAg");
	this.shape_71.setTransform(63.1,584.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#17304A").s().p("ADDBGImMhwQgCAAAEgNQAEgOABAAIGMBwQACAAgEANQgDAOgCAAIAAAAg");
	this.shape_72.setTransform(63.1,572.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#17304A").s().p("ACXBFIk2huQgBgBAEgNQAFgNABABIE2BtQABABgEANQgFANgBAAIAAAAg");
	this.shape_73.setTransform(63.1,560);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#17304A").s().p("ABpBBIjdhoQgBgBANgYIDdBnQABABgGAMQgFANgBAAIgBAAg");
	this.shape_74.setTransform(63.1,548);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#17304A").s().p("AAoA3IhihZIATgVIBiBaIgTAVIAAgBg");
	this.shape_75.setTransform(63.1,536);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#17304A").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_76.setTransform(63.1,523.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#17304A").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_77.setTransform(63.1,885.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#17304A").s().p("AAgCXIhakkQAagKABACIBaEjQAAABgNAFIgNADIgBAAg");
	this.shape_78.setTransform(63.1,873.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#17304A").s().p("ABVCuIjBlOQgBgBAMgHQAMgHABACIDBFOQABABgMAHQgKAGgDAAIAAgBg");
	this.shape_79.setTransform(63.1,861.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#17304A").s().p("ACACpIkUk/QgBgBAKgJQALgJABABIEUE/QABABgKAKQgKAHgCAAIAAAAg");
	this.shape_80.setTransform(63.1,849.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#17304A").s().p("ACqCkIllkxQgCgCAKgKQAJgLABABIFlExQABABgJALQgIAKgCAAIAAAAg");
	this.shape_81.setTransform(63.3,837.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#17304A").s().p("ADcCZInGkZQgDgCAIgMQAHgLACABIHIEaQABABgHAMQgHAKgCAAIgBAAg");
	this.shape_82.setTransform(63.2,825.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#17304A").s().p("AEACMIoMj9QgCgBAHgNQAGgMACABIIMD8QABABgFANQgHAMgCAAIAAAAg");
	this.shape_83.setTransform(63.2,813.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#17304A").s().p("AEoB8IpZjdQgCgBAFgNQAEgNADABIJYDdQADABgFANQgEANgDAAIAAgBg");
	this.shape_84.setTransform(63.2,801);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#17304A").s().p("AFSBxIqrjHQgDAAAEgOQAEgOADABIKrDHQACABgDAOQgEANgDAAIAAgBg");
	this.shape_85.setTransform(63.1,789);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#17304A").s().p("AFzBqIrri4QgEAAAEgOQADgOADABILsC3QADABgDAOQgEANgCAAIgBAAg");
	this.shape_86.setTransform(63.1,776.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#17304A").s().p("AGVBXIstiSQgEAAADgOQACgOAEABIMtCRQADABgDAOQgCANgDAAIAAAAg");
	this.shape_87.setTransform(63.1,764.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#17304A").s().p("AGmBJItPh1QgDgBACgOQACgOACABINQB1QADABgBAOQgCAOgDAAIgBgBg");
	this.shape_88.setTransform(63.2,752.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#17304A").s().p("AGzA3ItohRQgEAAACgOQABgOAEAAINoBRQAEAAgCAOQgBAOgEAAIAAAAg");
	this.shape_89.setTransform(63.1,740.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#17304A").s().p("AG/ArIt+g6QgEAAABgOQABgOADAAIN/A7QADAAgBAOQgBAOgDAAIAAgBg");
	this.shape_90.setTransform(63.1,728.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#17304A").s().p("AnFABQgEAAABgNQAAgOAEAAIOKAaQAEAAgBANQAAAOgEAAg");
	this.shape_91.setTransform(63.1,716.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#17304A").s().p("AnGAOQgEAAAAgOQAAgNAEAAIONAAQAEAAAAANQAAAOgEAAg");
	this.shape_92.setTransform(63.1,704.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(17.3,1.5,45.9,1078.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape.setTransform(45.9,162.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C09C5C").s().p("AgtCUQgNgFAAgBIBakkQABgBANAEQANAEAAACIhaEjIgBABIgNgDg");
	this.shape_1.setTransform(45.9,150.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C09C5C").s().p("AhhCpQgMgHABgCIDBlOQABgBAMAHQAMAHgBABIjBFPIAAAAQgCAAgLgGg");
	this.shape_2.setTransform(45.9,138.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C09C5C").s().p("AiKChQgLgJABgBIEUk/QABgCALAJQAKAKgBABIkUE/IAAAAQgCAAgJgIg");
	this.shape_3.setTransform(45.9,126.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C09C5C").s().p("AizCbQgKgLACgBIFlkyQABgBAKALQAJAKgCACIllExIAAAAQgDAAgHgJg");
	this.shape_4.setTransform(45.8,114.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C09C5C").s().p("AjlCPQgHgMABgCIHHkaQACgBAIAMQAHANgCABInHEZIAAABQgCAAgHgLg");
	this.shape_5.setTransform(45.8,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C09C5C").s().p("AkHCAQgHgNACgBIIMj8QADgBAFAMQAHANgCABIoMD9IAAAAQgCAAgGgMg");
	this.shape_6.setTransform(45.9,90.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C09C5C").s().p("AkuBwQgFgNACgBIJZjeQACgBAFAOQAFANgDABIpYDdIAAABQgDAAgEgNg");
	this.shape_7.setTransform(45.9,78.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C09C5C").s().p("AlYBlQgDgOACgBIKrjGQADgBAEANQAEAOgDABIqrDGIAAAAQgDAAgEgMg");
	this.shape_8.setTransform(45.9,66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C09C5C").s().p("Al4BdQgEgNADgBILsi4QADgBADAOQAEAOgEAAIrrC4IgBAAQgCAAgDgNg");
	this.shape_9.setTransform(45.9,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C09C5C").s().p("AmZBKQgDgOAEAAIMtiSQADgBACAOQADAOgDAAIstCSIgBAAQgDAAgCgNg");
	this.shape_10.setTransform(45.9,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C09C5C").s().p("AmrA8QgCgOAEgBINPh1QAEgBACAOQACAOgEAAItPB2IAAAAQgEAAgCgNg");
	this.shape_11.setTransform(45.9,29.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C09C5C").s().p("Am3ApQgCgOAEAAINphRQADAAABAOQACAOgEAAItpBRIAAAAQgDAAgBgOg");
	this.shape_12.setTransform(45.9,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C09C5C").s().p("AnCAeQgBgOADAAIN/g7QADAAABAOQABAOgEAAIt+A7QgDAAgBgOg");
	this.shape_13.setTransform(45.9,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C09C5C").s().p("AnFABQgEAAABgNQAAgOAEAAIOKAZQAEABgBANQAAAOgEAAg");
	this.shape_14.setTransform(45.9,1078.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_15.setTransform(45.9,885.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C09C5C").s().p("AgtCUQgNgEAAgCIBakjQABgCANAEQANAFAAABIhaEkIgBAAIgNgDg");
	this.shape_16.setTransform(45.9,897.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C09C5C").s().p("AhhCpQgMgHABgCIDBlOQABgBAMAHQAMAHgBACIjBFOIgBAAQgCAAgKgGg");
	this.shape_17.setTransform(45.8,909.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C09C5C").s().p("AiLChQgKgJABgBIEUk/QABgBALAJQAKAJgBABIkUE/IAAAAQgCAAgKgIg");
	this.shape_18.setTransform(45.9,921.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C09C5C").s().p("AizCaQgKgKACgCIFlkxQABgBAJAKQAJALgBABIllExIAAABQgCAAgIgKg");
	this.shape_19.setTransform(46,933.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C09C5C").s().p("AjlCOQgIgLADgBIHHkbQACgBAHAMQAIANgDABInGEZIgBABQgCAAgHgMg");
	this.shape_20.setTransform(46,945.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C09C5C").s().p("AkICAQgFgNACgBIILj8QACgBAHAMQAFANgCABIoLD8IAAAAQgCAAgHgLg");
	this.shape_21.setTransform(45.9,957.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C09C5C").s().p("AkuBwQgFgNADgBIJYjdQACgBAFANQAFANgDABIpYDdIAAAAQgDAAgEgMg");
	this.shape_22.setTransform(45.9,969.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C09C5C").s().p("AlYBlQgEgOADgBIKrjGQADgBAEANQADAOgCABIqrDGIAAAAQgDAAgEgMg");
	this.shape_23.setTransform(45.9,981.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C09C5C").s().p("Al4BdQgEgNAEgBILri4QADAAAEANQADAOgDAAIrsC4IAAAAQgDAAgDgNg");
	this.shape_24.setTransform(45.9,993.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C09C5C").s().p("AmZBKQgDgOAEAAIMtiSQADgBACAOQADAOgDAAIstCSIgBAAQgDAAgCgNg");
	this.shape_25.setTransform(45.9,1005.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C09C5C").s().p("AmrA8QgCgOAEgBINPh1QAEgBACAOQACAOgEAAItPB2IgBAAQgDAAgCgNg");
	this.shape_26.setTransform(45.9,1017.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C09C5C").s().p("Am3ApQgCgOAEAAINohRQAEAAABAOQACAOgEAAItoBRQgEAAgBgOg");
	this.shape_27.setTransform(45.9,1029.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C09C5C").s().p("AnCAeQgBgOAEgBIN+g6QADAAABAOQABAOgDAAIt/A6IAAABQgDAAgBgOg");
	this.shape_28.setTransform(45.9,1042);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C09C5C").s().p("AnIANQgBgNAEgBIOKgZQAEAAAAAOQABANgEAAIuKAZIAAABQgEAAAAgOg");
	this.shape_29.setTransform(45.9,1054);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C09C5C").s().p("AnGAOQgEAAAAgOQAAgNAEAAIONAAQAEAAAAANQAAAOgEAAg");
	this.shape_30.setTransform(45.9,1066.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C09C5C").s().p("AnHAIQAAgNAEAAIOHgQQADAAABAOQAAANgEAAIuHAQQgDAAgBgOg");
	this.shape_31.setTransform(45.9,355.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C09C5C").s().p("Am9AUQAAgOADAAINzgnQAEAAABAOQAAAOgDAAItzAnQgEAAgBgOg");
	this.shape_32.setTransform(45.9,367.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C09C5C").s().p("AmwAhQgBgOAEAAINZhBQADAAACAOQABAOgEAAItZBBIAAAAQgEAAgBgOg");
	this.shape_33.setTransform(45.9,379.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C09C5C").s().p("AmlAmQgBgOADAAINFhLQADAAABAOQABAOgDAAItEBLIgBAAQgDAAgBgOg");
	this.shape_34.setTransform(45.9,391.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C09C5C").s().p("AmRAtQgBgOADgBIMchXQADAAACAOQABAOgDAAIscBXIAAAAQgDAAgCgNg");
	this.shape_35.setTransform(45.9,403.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C09C5C").s().p("Al2AwQgCgOADAAILoheQADgBACAOQABAOgDABIroBdIAAABQgDAAgBgOg");
	this.shape_36.setTransform(45.9,415.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C09C5C").s().p("AlbA1QgCgNADAAIKxhqQADAAACAOQACAOgDAAIqxBpIAAAAQgDAAgCgOg");
	this.shape_37.setTransform(45.9,427.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C09C5C").s().p("Ak4A6QgCgOACAAIJshzQACAAADAOQACANgCABIpsByIAAABQgCAAgDgOg");
	this.shape_38.setTransform(45.9,439.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C09C5C").s().p("AkSA6QgDgNACgBIIihzQACAAADANQADAOgDABIohByIgBABQgCAAgCgOg");
	this.shape_39.setTransform(45.9,451.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C09C5C").s().p("AjuA6QgDgOABAAIHahyQACgBADAOQADANgBABInZByIgBAAQgCAAgDgNg");
	this.shape_40.setTransform(45.9,463.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C09C5C").s().p("AjHA4QgEgNACAAIGMhwQACAAADAOQAEANgCAAImMBwIAAAAQgBAAgEgOg");
	this.shape_41.setTransform(45.9,475.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C09C5C").s().p("AicA4QgEgNABgBIE2huQABAAAFANQAEAOgBAAIk2BuIAAAAQgBAAgFgNg");
	this.shape_42.setTransform(45.9,487.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C09C5C").s().p("Ah0AnIDdhnQANAZgBAAIjdBoIAAAAQgBAAgLgag");
	this.shape_43.setTransform(45.9,499.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C09C5C").s().p("Ag6AjIBihaIATAVIhiBZIAAABIgTgVg");
	this.shape_44.setTransform(45.8,511.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_45.setTransform(45.9,523.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_46.setTransform(45.9,162.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C09C5C").s().p("AAgCWIhakjQAAgCANgEQANgDABABIBaEjQAAABgNAFIgNADIgBgBg");
	this.shape_47.setTransform(45.9,174.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C09C5C").s().p("ABVCvIjBlOQgBgCAMgHQANgHAAACIDBFOQABABgMAHQgKAGgCAAIgBAAg");
	this.shape_48.setTransform(45.9,186.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C09C5C").s().p("ACACpIkUk/QgBgBALgJQAKgJABABIEUE/QABABgKAKQgJAHgCAAIgBAAg");
	this.shape_49.setTransform(45.9,198.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C09C5C").s().p("ACqCkIllkyQgCgBAKgKQAIgLACABIFlExQACACgJAKQgJAKgCAAIAAAAg");
	this.shape_50.setTransform(45.8,210.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C09C5C").s().p("ADcCaInHkaQgBgCAHgMQAHgMACACIHHEZQACABgHANQgHALgCAAIgBAAg");
	this.shape_51.setTransform(45.8,222.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C09C5C").s().p("AEACLIoMj8QgCgBAHgNQAGgNACABIIMD9QACABgHANQgFAMgCAAIgBgBg");
	this.shape_52.setTransform(45.9,234.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C09C5C").s().p("AEoB8IpZjdQgCgBAFgNQAEgNADAAIJYDeQADAAgFAOQgEANgDAAIAAgBg");
	this.shape_53.setTransform(45.9,246.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C09C5C").s().p("AFSBxIqrjGQgCgBADgNQAEgOADABIKrDHQADABgEANQgEAMgDAAIAAAAg");
	this.shape_54.setTransform(45.9,258.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C09C5C").s().p("AFzBqIrsi4QgDgBAEgNQADgOADABILrC3QAEABgEAOQgDANgDAAIAAAAg");
	this.shape_55.setTransform(45.9,270.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C09C5C").s().p("AGVBXIstiSQgEAAADgOQACgOAEABIMtCSQADABgDANQgCANgDAAIAAAAg");
	this.shape_56.setTransform(45.9,282.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C09C5C").s().p("AGmBJItPh1QgEgBACgOQACgOAEABINPB2QAEAAgCAOQgCANgDAAIgBAAg");
	this.shape_57.setTransform(45.9,295);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C09C5C").s().p("AG0A3ItphRQgEAAACgOQABgOADAAINpBRQAEAAgCAOQgBAOgDAAIAAAAg");
	this.shape_58.setTransform(45.9,307);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C09C5C").s().p("AnAgPQgDAAABgOQABgOADABIN+A6QAEAAgBAOQgBAOgDAAg");
	this.shape_59.setTransform(45.9,319.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C09C5C").s().p("AnFABQgEAAAAgNQABgOADAAIOLAaQAEAAgBANQAAAOgEAAg");
	this.shape_60.setTransform(45.9,331.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C09C5C").s().p("AnGAOQgEAAAAgOQAAgNAEAAIONAAQAEAAAAANQAAAOgEAAg");
	this.shape_61.setTransform(45.9,343.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C09C5C").s().p("AnDAGQgEAAAAgNQABgOADAAIOHAQQAEAAAAANQgBAOgDAAg");
	this.shape_62.setTransform(45.9,692.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C09C5C").s().p("Am6gFQgDAAAAgOQABgOAEAAINzAnQADAAAAAOQgBAOgEAAg");
	this.shape_63.setTransform(45.9,680.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C09C5C").s().p("AGsAvItZhBQgEAAABgOQABgOAEAAINZBBQAEAAgBAOQgCAOgDAAIAAAAg");
	this.shape_64.setTransform(45.9,668.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C09C5C").s().p("AGiA0ItFhLQgDAAABgOQABgOAEAAINEBLQADAAgBAOQgBAOgDAAIAAAAg");
	this.shape_65.setTransform(45.9,656.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C09C5C").s().p("AGNA6IschXQgDgBABgNQACgOADAAIMcBXQADAAgBAOQgCAOgDAAIAAAAg");
	this.shape_66.setTransform(45.9,644.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C09C5C").s().p("AFzA+IrohfQgDAAACgOQABgOADAAILoBfQADAAgBAOQgCAOgDAAIAAAAg");
	this.shape_67.setTransform(45.9,632.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C09C5C").s().p("AFXBDIqxhqQgDAAACgNQACgOADAAIKxBpQADABgCAOQgCANgDAAIAAAAg");
	this.shape_68.setTransform(45.9,620.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C09C5C").s().p("AE0BIIpshzQgCgBACgNQADgOACABIJsByQACABgCANQgDAOgCAAIAAAAg");
	this.shape_69.setTransform(45.9,608.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C09C5C").s().p("AEPBIIoihzQgCgBADgNQADgOACAAIIhBzQADABgDANQgDAOgCAAIAAAAg");
	this.shape_70.setTransform(45.9,596.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C09C5C").s().p("ADqBHInahyQgBAAADgOQADgOADABIHZByQABABgDANQgDANgCAAIAAAAg");
	this.shape_71.setTransform(45.9,584.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C09C5C").s().p("ADDBGImMhwQgCAAAEgNQAEgOABAAIGMBwQACAAgEANQgDAOgCAAIAAAAg");
	this.shape_72.setTransform(45.9,572.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C09C5C").s().p("ACXBFIk2huQgBgBAEgNQAFgNABABIE2BtQABABgEANQgFANgBAAIAAAAg");
	this.shape_73.setTransform(45.9,560);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C09C5C").s().p("ABpBBIjdhoQgBgBANgYIDdBnQABABgGAMQgFANgBAAIgBAAg");
	this.shape_74.setTransform(45.9,548);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C09C5C").s().p("AAoA3IhihZIATgVIBiBaIgTAVIAAgBg");
	this.shape_75.setTransform(45.8,536);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_76.setTransform(45.9,523.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C09C5C").s().p("AgNAuIAAhbIAbAAIAABbIgHAAIgUAAg");
	this.shape_77.setTransform(45.9,885.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C09C5C").s().p("AAgCXIhaklQAAAAANgFQANgDABAAIBaEkQAAABgNAEIgNAEIgBAAg");
	this.shape_78.setTransform(45.9,873.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C09C5C").s().p("ABVCuIjBlOQgBgBAMgHQAMgHABACIDBFOQABABgMAHQgKAGgDAAIAAgBg");
	this.shape_79.setTransform(45.8,861.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C09C5C").s().p("ACACpIkUk/QgBgBAKgJQALgJABABIEUE/QABABgKAKQgKAHgCAAIAAAAg");
	this.shape_80.setTransform(45.9,849.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C09C5C").s().p("ACqCkIllkxQgCgCAKgKQAJgLABABIFlExQABABgJALQgIAKgCAAIAAAAg");
	this.shape_81.setTransform(46,837.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C09C5C").s().p("ADdCZInHkZQgDgCAIgMQAHgLADABIHGEaQADABgIAMQgHAKgCAAIAAAAg");
	this.shape_82.setTransform(46,825.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C09C5C").s().p("AEACMIoLj9QgCgBAFgNQAHgMACABIILD8QACABgFANQgHAMgCAAIAAAAg");
	this.shape_83.setTransform(45.9,813.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C09C5C").s().p("AEoB8IpYjdQgDgBAFgNQAFgNACABIJYDdQADABgFANQgEANgDAAIAAgBg");
	this.shape_84.setTransform(45.9,801);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C09C5C").s().p("AFSBxIqrjHQgDAAAEgOQAEgOADABIKrDHQACABgDAOQgEANgDAAIAAgBg");
	this.shape_85.setTransform(45.9,789);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C09C5C").s().p("AFzBqIrri4QgEAAAEgOQADgOADABILsC3QADABgDAOQgEANgCAAIgBAAg");
	this.shape_86.setTransform(45.9,776.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C09C5C").s().p("AGVBXIstiSQgEAAADgOQACgOAEABIMtCRQADABgDAOQgCANgDAAIAAAAg");
	this.shape_87.setTransform(45.9,764.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C09C5C").s().p("AGmBJItPh1QgEgBACgOQACgOAEABINPB1QAEABgCAOQgCAOgDAAIgBgBg");
	this.shape_88.setTransform(45.9,752.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C09C5C").s().p("AGzA3ItohRQgEAAACgOQABgOAEAAINoBRQAEAAgCAOQgBAOgEAAIAAAAg");
	this.shape_89.setTransform(45.9,740.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C09C5C").s().p("AG/ArIt+g6QgEAAABgOQABgOADAAIN/A7QADAAgBAOQgBAOgDAAIAAgBg");
	this.shape_90.setTransform(45.9,728.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C09C5C").s().p("AnFABQgEAAABgNQAAgOAEAAIOKAaQAEAAgBANQAAAOgEAAg");
	this.shape_91.setTransform(45.9,716.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C09C5C").s().p("AnGAOQgEAAAAgOQAAgNAEAAIONAAQAEAAAAANQAAAOgEAAg");
	this.shape_92.setTransform(45.9,704.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,1.5,91.8,1079.4), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am6EZIAArtIM5DdQBQAZgbA5ImEJ6g");
	this.shape.setTransform(44.3,49.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,2.6,88.6,93.8), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kardss, null, new cjs.Matrix2D(1,0,0,1,-130,-230.8)).s().p("A0TQcMAAAgg3MAonANCIAAT1g");
	this.shape.setTransform(130,105.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(204.8,131.7,1,1,0,0,0,44.3,53.3);
	this.instance.filters = [new cjs.BlurFilter(18, 18, 1)];
	this.instance.cache(-2,1,93,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,262.5,210.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(53.3,-0.3,1,1,0,0,0,53.3,540.4);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.3,-0.3,1,1,0,0,0,54.5,540.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-17.2,-540.7,109,1080.8), null);


(lib.golovna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// n1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(244.6,377.6,0.719,0.719,0,0,0,54,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(303));

	// Symbol 22
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.6,291.3,0.659,0.659,0,0,0,79,16.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(263).to({_off:false},0).to({alpha:1},12).wait(28));

	// Symbol 21
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(142.7,272.2,0.659,0.659,0,0,0,67,16.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).to({alpha:1},12).wait(38));

	// Symbol 20
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.5,253.2,0.659,0.659,0,0,0,75.9,16.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(245).to({_off:false},0).to({alpha:1},12).wait(46));

	// card_visa.png (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_158 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_159 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_160 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_161 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_162 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_163 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_164 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_165 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_166 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_167 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_168 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_169 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_170 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_171 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_172 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_173 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_174 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_175 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_176 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(158).to({graphics:mask_graphics_158,x:-150,y:300}).wait(1).to({graphics:mask_graphics_159,x:-133.3,y:300}).wait(1).to({graphics:mask_graphics_160,x:-116.7,y:300}).wait(1).to({graphics:mask_graphics_161,x:-100,y:300}).wait(1).to({graphics:mask_graphics_162,x:-83.3,y:300}).wait(1).to({graphics:mask_graphics_163,x:-66.7,y:300}).wait(1).to({graphics:mask_graphics_164,x:-50,y:300}).wait(1).to({graphics:mask_graphics_165,x:-33.3,y:300}).wait(1).to({graphics:mask_graphics_166,x:-16.7,y:300}).wait(1).to({graphics:mask_graphics_167,x:0,y:300}).wait(1).to({graphics:mask_graphics_168,x:16.7,y:300}).wait(1).to({graphics:mask_graphics_169,x:33.3,y:300}).wait(1).to({graphics:mask_graphics_170,x:50,y:300}).wait(1).to({graphics:mask_graphics_171,x:66.7,y:300}).wait(1).to({graphics:mask_graphics_172,x:83.3,y:300}).wait(1).to({graphics:mask_graphics_173,x:100,y:300}).wait(1).to({graphics:mask_graphics_174,x:116.7,y:300}).wait(1).to({graphics:mask_graphics_175,x:133.3,y:300}).wait(1).to({graphics:mask_graphics_176,x:150,y:300}).wait(127));

	// Symbol 19
	this.instance_4 = new lib.Symbol19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.4,216.2,0.548,0.548,0,0,0,70.4,19.7);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({_off:false},0).wait(73).to({startPosition:0},0).to({regX:70,x:-41},10).to({_off:true},1).wait(52));

	// Symbol 18
	this.instance_5 = new lib.Symbol18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(154.2,197.9,0.548,0.548,0,0,0,69.9,19.6);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({_off:false},0).wait(70).to({startPosition:0},0).to({regX:69.7,x:-40.7},10).to({_off:true},4).wait(52));

	// Symbol 17
	this.instance_6 = new lib.Symbol17("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(147.5,179.5,0.548,0.548,0,0,0,57.8,19.6);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({_off:false},0).wait(67).to({startPosition:0},0).to({regX:57.7,x:-34},10).to({_off:true},7).wait(52));

	// Symbol 28
	this.instance_7 = new lib.Symbol28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-91.9,288.6,0.638,0.638,0,0,0,129.9,105.4);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(167).to({_off:false},0).to({x:89.1},13,cjs.Ease.get(1)).wait(59).to({regX:130.2,x:381.6},11,cjs.Ease.get(-0.28)).to({_off:true},1).wait(52));

	// Symbol 27
	this.instance_8 = new lib.Symbol27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-91.9,305.7,0.638,0.638,0,0,0,129.9,104.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({_off:false},0).to({regX:130.1,x:148.9},13,cjs.Ease.get(1)).wait(59).to({regX:130.2,x:381.6},11,cjs.Ease.get(-0.28)).to({_off:true},1).wait(52));

	// Symbol 1
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(48,201.7,0.432,0.432,0,0,0,44.9,0);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(158).to({_off:false},0).wait(145));

	// Layer 6
	this.instance_10 = new lib.Symbol16("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(158).to({_off:false},0).wait(145));

	// Layer 4
	this.instance_11 = new lib.snowboard_leg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(18,369);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(303));

	// Layer 2 copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_95 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_1_graphics_95,x:-147.6,y:300}).wait(1).to({graphics:mask_1_graphics_96,x:-136.7,y:300}).wait(1).to({graphics:mask_1_graphics_97,x:-120.3,y:300}).wait(1).to({graphics:mask_1_graphics_98,x:-97.7,y:300}).wait(1).to({graphics:mask_1_graphics_99,x:-68.6,y:300}).wait(1).to({graphics:mask_1_graphics_100,x:-34.2,y:300}).wait(1).to({graphics:mask_1_graphics_101,x:2.6,y:300}).wait(1).to({graphics:mask_1_graphics_102,x:37.9,y:300}).wait(1).to({graphics:mask_1_graphics_103,x:68.7,y:300}).wait(1).to({graphics:mask_1_graphics_104,x:93.9,y:300}).wait(1).to({graphics:mask_1_graphics_105,x:113.4,y:300}).wait(1).to({graphics:mask_1_graphics_106,x:128,y:300}).wait(1).to({graphics:mask_1_graphics_107,x:138.4,y:300}).wait(1).to({graphics:mask_1_graphics_108,x:145.1,y:300}).wait(1).to({graphics:mask_1_graphics_109,x:148.8,y:300}).wait(1).to({graphics:mask_1_graphics_110,x:150,y:300}).wait(193));

	// Symbol 4
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(131.7,75.4,0.885,0.885,0,0,0,115.1,0);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95).to({_off:false},0).wait(208));

	// Symbol 11
	this.instance_13 = new lib.Symbol11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(15.5,300,1,1,0,0,0,150,0);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(95).to({_off:false},0).wait(1).to({x:20.5},0).wait(1).to({x:27.9},0).wait(1).to({x:38.1},0).wait(1).to({x:51.2},0).wait(1).to({x:66.8},0).wait(1).to({x:83.4},0).wait(1).to({x:99.4},0).wait(1).to({x:113.3},0).wait(1).to({x:124.7},0).wait(1).to({x:133.5},0).wait(1).to({x:140.1},0).wait(1).to({x:144.8},0).wait(1).to({x:147.8},0).wait(1).to({x:149.5},0).wait(1).to({x:150},0).wait(193));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_36 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_2_graphics_36,x:-147.6,y:300}).wait(1).to({graphics:mask_2_graphics_37,x:-136.7,y:300}).wait(1).to({graphics:mask_2_graphics_38,x:-120.3,y:300}).wait(1).to({graphics:mask_2_graphics_39,x:-97.7,y:300}).wait(1).to({graphics:mask_2_graphics_40,x:-68.6,y:300}).wait(1).to({graphics:mask_2_graphics_41,x:-34.2,y:300}).wait(1).to({graphics:mask_2_graphics_42,x:2.6,y:300}).wait(1).to({graphics:mask_2_graphics_43,x:37.9,y:300}).wait(1).to({graphics:mask_2_graphics_44,x:68.7,y:300}).wait(1).to({graphics:mask_2_graphics_45,x:93.9,y:300}).wait(1).to({graphics:mask_2_graphics_46,x:113.4,y:300}).wait(1).to({graphics:mask_2_graphics_47,x:128,y:300}).wait(1).to({graphics:mask_2_graphics_48,x:138.4,y:300}).wait(1).to({graphics:mask_2_graphics_49,x:145.1,y:300}).wait(1).to({graphics:mask_2_graphics_50,x:148.8,y:300}).wait(1).to({graphics:mask_2_graphics_51,x:150,y:300}).wait(252));

	// Symbol 3
	this.instance_14 = new lib.Symbol3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(116.2,75.4,0.885,0.885,0,0,0,101.3,0);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(36).to({_off:false},0).wait(267));

	// Symbol 12
	this.instance_15 = new lib.Symbol12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(6.2,300,1,1,0,0,0,150,0);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(36).to({_off:false},0).wait(1).to({x:11.5},0).wait(1).to({x:19.5},0).wait(1).to({x:30.4},0).wait(1).to({x:44.4},0).wait(1).to({x:61},0).wait(1).to({x:78.8},0).wait(1).to({x:95.9},0).wait(1).to({x:110.8},0).wait(1).to({x:122.9},0).wait(1).to({x:132.4},0).wait(1).to({x:139.4},0).wait(1).to({x:144.4},0).wait(1).to({x:147.7},0).wait(1).to({x:149.5},0).wait(1).to({x:150},0).wait(252));

	// Symbol 2
	this.instance_16 = new lib.Symbol2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(148.7,59.8,0.87,0.87,0,0,0,140.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(303));

	// Symbol 10
	this.instance_17 = new lib.Symbol10();
	this.instance_17.parent = this;
	this.instance_17.setTransform(150,300,1,1,0,0,0,150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(303));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,150,300,300);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_302 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(302).call(this.frame_302).wait(64));

	// Layer 1
	this.instance = new lib.golovna("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(732.5,389,1,1,0,0,0,732.5,539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(366));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#163049").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(366));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-25,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/kardss.png", id:"kardss"},
		{src:"images/snowboard_300x300.jpg", id:"snowboard_300x300"},
		{src:"images/snowboard_300x300_2.jpg", id:"snowboard_300x300_2"},
		{src:"images/snowboard_300x300_3.jpg", id:"snowboard_300x300_3"},
		{src:"images/snowboard_leg.png", id:"snowboard_leg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;