!function(a){a.widget("dui.slider",{version:"1.0.1",widgetName:"slider",widgetEventPrefix:"slider",options:{max:100,min:0,step:1,snap:!0,orientation:"horizontal",value:0,prompt:!0,icons:!0,locus:!1,title:"",start:null,end:null,change:null,complete:null},_create:function(){var b=this,c=a('<div class="u-slider-content"><i class="u-slider-handle i-slider" title="0"></i></div>');b.element.toggleClass("u-slider",!0),b.element.empty().append(c),b.options.prompt&&c.after('<span class="u-slider-value">0</span>'),b.options.icons&&(c.before('<i class="i-less" data-for="sub"></i>'),c.after('<i class="i-add" data-for="add"></i>')),b.options.locus&&c.prepend('<div class="u-silder-line"></div>'),b.content=b.element.find(".u-slider-content"),b.handle=b.element.find(".u-slider-handle"),b.prompt=b.element.find(".u-slider-value"),b.locus=this.element.find(".u-silder-line");var d=b.options.icons?40:0;if("horizontal"===b.options.orientation){var e=b.element.width()-d-b._getPromptLength();b.content.width(e)}else{var f=b.options.prompt?b.prompt.height():0,g=b.element.height()-d-f;b.content.height(g)}b.contentSize={width:b.content.width(),height:b.content.height()},b.handleSize={width:b.handle.width(),height:b.handle.height()},b._setupEvents(),b.value(b.options.value,!1),b.moving=!1},_destroy:function(){this.element.removeClass("u-slider").empty()},_setupEvents:function(){var a=this;a._off(a.element),a._on(a.element,a._handleEvents)},_getPromptLength:function(){if(!this.options.prompt)return 0;var a=(this.options.max+"").length;return 3>a&&(a=3),8*a+4},_trimAlignValue:function(a){var b=this.options.max,c=this.options.min;if(c>=a)return c;if(a>=b)return b;var d=this._step(),e=(a-c)%d,f=a-e;return 2*Math.abs(e)>=d&&(f+=e>0?d:-d),parseFloat(f.toFixed(5))},_updatePrompt:function(b){var c=this,d=c.options.prompt,e=c.options.title;d&&(b="function"===a.type(d)?d(b):b,c.prompt.text(b)),b="function"===a.type(e)?e(b):e||b,c.handle.attr("title",b)},_refreshValue:function(){var a,b,c,d,e=this._value(),f=this.options.max-this.options.min;b=(e-this.options.min)/f,"horizontal"===this.options.orientation?(c="left",d="width",a=(this.contentSize.width-this.handleSize.width)*b):(c="top",d="height",a=(this.contentSize.height-this.handleSize.height)*b),this.handle.css(c,Math.round(a)),this.options.locus&&this.locus.css(d,Math.round(a))},value:function(a,b){if(arguments.length){var c=this._value(),a=this._trimAlignValue(a);return this.options.value=a,this._refreshValue(),this._updatePrompt(a),void(b!==!1&&c!==a&&this._trigger("change",null,{ui:this,value:a,oldValue:c}))}return this._value()},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_setOption:function(b,c){if(this._super(b,c),"disabled"===b){if(c&&0===this.element.find(".u-slider-mask").length){var d=a('<div class="u-slider-mask"></div>').appendTo(this.element);d.css({width:this.element.width(),height:this.element.height()})}c||this.element.find(".u-slider-mask").remove()}},step:function(a){return a>0?void(this.options.step=a):this.options.step},isMoving:function(){return this.moving},_step:function(){return this.options.step>0?this.options.step:1},_slide:function(b){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._stop(b);if(!b.which)return this._stop(b);var c,d,e,f,g;"horizontal"==this.options.orientation?(c=b.pageX-this.lastPosition.x,e=this.contentSize.width):(c=b.pageY-this.lastPosition.y,e=this.contentSize.height),Math.abs(c)>=Math.round(this.division)&&(d=c/this.division*this._step(),f=this._value(),g=this._trimAlignValue(f+d),g!==f&&(this.value(g),this.lastPosition={x:b.pageX,y:b.pageY}))},_calDivision:function(){var a=(this.options.max-this.options.min)/this._step();this.division="horizontal"==this.options.orientation?this.contentSize.width/a:this.contentSize.height/a},_stop:function(){this._trigger("complete",null,{value:this.value()}),this.handle.removeClass("hover"),a(document).enableSelection(),a(document).off(this.eventNamespace)},_handleEvents:{"mousedown .u-slider-handle":function(b){return this.moving=!0,a(document).disableSelection(),this.downValue=this._value(),this.lastPosition={x:b.pageX,y:b.pageY},this.contentSize={width:this.content.width(),height:this.content.height()},this.handleSize={width:this.handle.width(),height:this.handle.height()},this._calDivision(),this.handle.addClass("hover"),a(document).off(this.eventNamespace),a(document).on("mousemove"+this.eventNamespace,a.proxy(this._slide,this)),a(document).on("mouseup"+this.eventNamespace,a.proxy(function(){var b=this._value();b!==this.downValue?this._stop():(this.handle.removeClass("hover"),a(document).enableSelection(),a(document).off(this.eventNamespace)),this.moving=!1},this)),!1},"mousedown .u-slider-content":function(a){var b,c,d,e=this.content.offset();this._calDivision(),c=this._value(),b="horizontal"==this.options.orientation?(a.pageX-e.left)/this.division*this.options.step:(a.pageY-e.top)/this.division*this.options.step,Math.abs((b+this.options.min-c)/this.options.step)>=1&&(d=this._trimAlignValue(b+this.options.min),d!==c&&this.value(d)),this._stop()},"mousedown [data-for]":function(b){var c=this;return c.startTimer=setTimeout(function(){c.start=!0,c._trigger("start",null,{oper:a(b.target).attr("data-for"),value:c.value()})},200),!1},"mouseout [data-for]":function(b){return this.start&&(this._trigger("end",null,{oper:a(b.target).attr("data-for"),value:this.value()}),this.start=!1),!1},"mouseup [data-for]":function(b){if(this.start)this._trigger("end",null,{oper:a(b.target).attr("data-for"),value:this.value()}),this.start=!1;else{clearTimeout(this.startTimer),this.startTimer=null;var c,d=this._value(),e=this._step(),f=a(b.target).attr("data-for");c="sub"===f?d-e:d+e,this.value(c),d!==this._value()&&this._trigger("complete",null,{value:this.value()})}}}})}(jQuery);