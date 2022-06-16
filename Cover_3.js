(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cover_3_atlas_", frames: [[0,0,1596,1659]]},
		{name:"Cover_3_atlas_2", frames: [[1299,0,497,639],[0,0,1297,1158]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["Cover_3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ava = function() {
	this.initialize(img.Ava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4093,5787);


(lib.Bitmap7 = function() {
	this.initialize(ss["Cover_3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Cover_3_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Clouds_1 = function() {
	this.initialize(img.Clouds_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11024,2107);


(lib.cover_3_12 = function() {
	this.initialize(img.cover_3_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4093,5787);


(lib.myths = function() {
	this.initialize(img.myths);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2402,834);// helper functions:

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


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(773,1043,0.2585,0.2585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_7, null, null);


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.myths();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.3766,0.3766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_6, null, null);


(lib.Cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cover_3_12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2206,0.2206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,903.1,1276.8);


(lib.Clouds_1_Layer_1_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.instance = new lib.Clouds_1();
	this.instance.parent = this;
	this.instance.setTransform(-300,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds_1_Layer_1_copy, null, null);


(lib.Clouds_1_Clouds_1_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Clouds_1_png
	this.instance = new lib.Clouds_1();
	this.instance.parent = this;
	this.instance.setTransform(-10421,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds_1_Clouds_1_png, null, null);


(lib.cloud_shadow_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Clouds_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_shadow_Layer_1, null, null);


(lib.bg_scrolling_gif = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-199,1746);

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-199,-564);

	this.instance_2 = new lib.Bitmap7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-199,590);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-564,1297,3468);


(lib.ava_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ava();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2206,0.2206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ava_Layer_1, null, null);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Cover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(451.5,640.4,1,1,0,0,0,451.5,638.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


(lib.cloud_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.cloud_shadow_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(5512,1053.5,1,1,0,0,0,5512,1053.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_shadow, new cjs.Rectangle(0,0,11024,2107), null);


(lib.bg_scroll_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg_scrolling_gif("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(648.5,1156,1,1,0,0,0,449.5,592);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.2},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1132.8,1297,4600.8);


(lib.ava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.ava_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(451.5,638.4,1,1,0,0,0,451.5,638.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ava, new cjs.Rectangle(0,0,903.1,1276.8), null);


(lib.Clouds_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud_shadow();
	this.instance.parent = this;
	this.instance.setTransform(5512,1053.5,1,1,0,0,0,5512,1053.5);
	this.instance.alpha = 0.25;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,11028,2111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds_1_Layer_1, null, null);


(lib.Clouds_1_cloud_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud_shadow
	this.instance = new lib.cloud_shadow();
	this.instance.parent = this;
	this.instance.setTransform(-4609,1053.5,1,1,0,0,0,5512,1053.5);
	this.instance.alpha = 0.25;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,11028,2111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds_1_cloud_shadow, null, null);


(lib.Clouds_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy_obj_
	this.Layer_1_copy = new lib.Clouds_1_Layer_1_copy();
	this.Layer_1_copy.name = "Layer_1_copy";
	this.Layer_1_copy.parent = this;
	this.Layer_1_copy.setTransform(5212,723.5,1,1,0,0,0,5212,723.5);
	this.Layer_1_copy.depth = 0;
	this.Layer_1_copy.isAttachedToCamera = 0
	this.Layer_1_copy.isAttachedToMask = 0
	this.Layer_1_copy.layerDepth = 0
	this.Layer_1_copy.layerIndex = 0
	this.Layer_1_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_copy).wait(1));

	// Clouds_1_png_obj_
	this.Clouds_1_png = new lib.Clouds_1_Clouds_1_png();
	this.Clouds_1_png.name = "Clouds_1_png";
	this.Clouds_1_png.parent = this;
	this.Clouds_1_png.setTransform(-4909,723.5,1,1,0,0,0,-4909,723.5);
	this.Clouds_1_png.depth = 0;
	this.Clouds_1_png.isAttachedToCamera = 0
	this.Clouds_1_png.isAttachedToMask = 0
	this.Clouds_1_png.layerDepth = 0
	this.Clouds_1_png.layerIndex = 1
	this.Clouds_1_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Clouds_1_png).wait(1));

	// cloud_shadow_obj_
	this.cloud_shadow = new lib.Clouds_1_cloud_shadow();
	this.cloud_shadow.name = "cloud_shadow";
	this.cloud_shadow.parent = this;
	this.cloud_shadow.setTransform(-4609,1053.5,1,1,0,0,0,-4609,1053.5);
	this.cloud_shadow.depth = 0;
	this.cloud_shadow.isAttachedToCamera = 0
	this.cloud_shadow.isAttachedToMask = 0
	this.cloud_shadow.layerDepth = 0
	this.cloud_shadow.layerIndex = 2
	this.cloud_shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud_shadow).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Clouds_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(5512,1053.5,1,1,0,0,0,5512,1053.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 3
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds_1_1, new cjs.Rectangle(-10421,-330,21445,2437), null);


(lib.Cloud_loop_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Clouds_1_1();
	this.instance.parent = this;
	this.instance.setTransform(5812,1383.55,1,1,0,0,0,5512,1053.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15808.8},144).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Cloud_loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Cloud_loop_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(601.5,1218.5,1,1,0,0,0,601.5,1218.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10121,0.1,31441.8,2437);


(lib.bg_scroll_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9lBAFMAAAiAJMB7MAAAMAAACAJg");
	mask.setTransform(398.9,414.575);

	// Layer_4
	this.instance_1 = new lib.Cloud_loop();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-338.7,1257.4,0.4809,0.4809,-45.2263,0,0,5662.1,1218.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.instance_2 = new lib.bg_scroll_animated();
	this.instance_2.parent = this;
	this.instance_2.setTransform(782.3,544.45,1.4539,1.2571,44.9995,0,0,648.6,1155.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,798,829.5);


(lib.ava_tween_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ikNode_1 = new lib.ava();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(451.5,638.4,1,1,0,0,0,451.5,638.4);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1).to({x:451.55,y:638.45},0).wait(1).to({x:451.75,y:638.65},0).wait(1).to({x:452.05,y:638.95},0).wait(1).to({x:452.5,y:639.4},0).wait(1).to({x:453.05,y:639.95},0).wait(1).to({x:453.75,y:640.65},0).wait(1).to({x:454.55,y:641.45},0).wait(1).to({x:455.5,y:642.4},0).to({x:459.5,y:646.4},11,cjs.Ease.get(1)).wait(1).to({x:459.4,y:646.3},0).wait(1).to({x:459.2,y:646.1},0).wait(1).to({x:458.9,y:645.8},0).wait(1).to({x:458.4,y:645.3},0).wait(1).to({x:457.8,y:644.7},0).wait(1).to({x:457.1,y:644},0).wait(1).to({x:456.2,y:643.1},0).wait(1).to({x:455.25,y:642.15},0).to({x:451.5,y:638.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.ava_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.ikNode_1 = this.Layer_1.ikNode_1;
	}
	this.frame_8 = function() {
		this.ikNode_1 = undefined;this.ikNode_1 = this.Layer_1.ikNode_1;
	}
	this.frame_19 = function() {
		this.ikNode_1 = undefined;this.ikNode_1 = this.Layer_1.ikNode_1;
	}
	this.frame_27 = function() {
		this.ikNode_1 = undefined;this.ikNode_1 = this.Layer_1.ikNode_1;
	}
	this.frame_37 = function() {
		this.ikNode_1 = undefined;this.ikNode_1 = this.Layer_1.ikNode_1;
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(11).call(this.frame_19).wait(8).call(this.frame_27).wait(10).call(this.frame_37).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.ava_tween_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(451.5,638.4,1,1,0,0,0,451.5,638.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1).to({regX:455.5,regY:642.4,x:455.5,y:642.4},0).wait(7).to({regX:451.5,regY:638.4,x:451.5,y:638.4},0).wait(12).to({regX:455.5,regY:642.4,x:455.5,y:642.4},0).wait(7).to({regX:451.5,regY:638.4,x:451.5,y:638.4},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,911.1,1284.8);


(lib.Scene_1_Mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask
	this.instance = new lib.bg_scroll_mask();
	this.instance.parent = this;
	this.instance.setTransform(457.75,692.75,1,1,0,0,0,398.9,414.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Mask, null, null);


(lib.Scene_1_Ava_png = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ava_png
	this.instance = new lib.ava_tween();
	this.instance.parent = this;
	this.instance.setTransform(451.5,640.4,1,1,0,0,0,451.5,638.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Ava_png, null, null);


// stage content:
(lib.Cover_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		playSound("windwav",-1);
		playSound("MightMagic320bit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(432.2,137,1,1,0,0,0,432.2,137);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 0
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(1));

	// Ava_png_obj_
	this.Ava_png = new lib.Scene_1_Ava_png();
	this.Ava_png.name = "Ava_png";
	this.Ava_png.parent = this;
	this.Ava_png.setTransform(451.5,640.4,1,1,0,0,0,451.5,640.4);
	this.Ava_png.depth = 0;
	this.Ava_png.isAttachedToCamera = 0
	this.Ava_png.isAttachedToMask = 0
	this.Ava_png.layerDepth = 0
	this.Ava_png.layerIndex = 1
	this.Ava_png.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ava_png).wait(1));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.setTransform(837.2,1125.6,1,1,0,0,0,837.2,1125.6);
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 2
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(1));

	// Mask_obj_
	this.Mask = new lib.Scene_1_Mask();
	this.Mask.name = "Mask";
	this.Mask.parent = this;
	this.Mask.setTransform(-1753,3232.2,1,1,0,0,0,-1753,3232.2);
	this.Mask.depth = 0;
	this.Mask.isAttachedToCamera = 0
	this.Mask.isAttachedToMask = 0
	this.Mask.layerDepth = 0
	this.Mask.layerIndex = 3
	this.Mask.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Mask).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(451.5,640.4,1,1,0,0,0,451.5,640.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 4
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5589.8,-231.8,8125,7465.5);
// library properties:
lib.properties = {
	id: '156E1D12D776404FA27B946EBBD7C211',
	width: 903,
	height: 1280,
	fps: 24,
	color: "#0099CC",
	opacity: 1.00,
	manifest: [
		{src:"images/Ava.png?1655356465910", id:"Ava"},
		{src:"images/Clouds_1.png?1655356465910", id:"Clouds_1"},
		{src:"images/cover_3_12.png?1655356465910", id:"cover_3_12"},
		{src:"images/myths.png?1655356465910", id:"myths"},
		{src:"images/Cover_3_atlas_.png?1655356465853", id:"Cover_3_atlas_"},
		{src:"images/Cover_3_atlas_2.png?1655356465854", id:"Cover_3_atlas_2"},
		{src:"sounds/MightMagic320bit.mp3?1655356465910", id:"MightMagic320bit"},
		{src:"sounds/windwav.mp3?1655356465910", id:"windwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['156E1D12D776404FA27B946EBBD7C211'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;