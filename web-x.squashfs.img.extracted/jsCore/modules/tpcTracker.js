!function(a){define(function(require,b,c){function d(b){var c=this;c.options=a.extend({},g,b),c.render()}var e=require("../plugin"),f=(require("../ability"),require("../rpc")),g={},h=null;a.fn.tpcTracker=function(){var b=arguments[0],c=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],e=this;return this.each(function(){if(!("string"!==a.type(b)||h&&a.isFunction(h[b])))return!1;if("string"===a.type(b)){var f=h[b].apply(a(this),c);if(void 0!==f)return e=f,!1}else"string"===a.type(b)||h||(h=new d)}),e},d.prototype.render=function(a){if(a&&a.ShapeData&&a.ShapeData.RectangleShape){var b=a.ShapeData.RectangleShape,c=[b[0][0],b[0][1],b[1][0],b[1][1]];f.DevIntelliTracker.trackObject({ObjectID:-1,BoundingBox:c},e.windowId),e.state("activeManualLocate",!1)}},d.prototype.leave=function(){e.clearShape(e.containerId,e.shapeId),-1!==webApp.DeviceType.indexOf("-T")&&e.creatShape("ReSpot","green")},c.exports=d})}(jQuery);