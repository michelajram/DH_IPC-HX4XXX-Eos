!function(a){a.widget("dui.iconlist",{version:"1.0.1",widgetName:"iconlist",widgetEventPrefix:"iconlist",options:{channelNumber:0,channelsCus:!1,customText:!1,multiSelect:!0,allEnable:!1,allPos:"top",pageEnable:!1},_create:function(){var a=this.options;a.pageEnable&&!a.allPos.match(/^left$|^last$/)&&(a.allPos="left"),this.createList(),this._setupEvents()},_renderAllElement:function(){var a=this.options;if(a.allEnable&&a.multiSelect){var b=this.icons.filter("a:not(:disabled):not([data=all])").length,c=this.icons.filter("a:not([data=all]).u-channel-current").length;this.$allElement.toggleClass("u-channel-current",c==b)}},_onCheckAllCh:function(){this.options.multiSelect&&(this.$allElement.hasClass("u-channel-current")?this.icons.filter(":not(:disabled)").addClass("u-channel-current"):this.icons.removeClass("u-channel-current"))},_setupEvents:function(){this._on(this._handleEvents)},createList:function(b,c){var d=this,e='<a class="u-channel" data=<%=ch%> href="javascript:;"><%=chtext%></a>',f=[],g=d.options;d.element.empty(),arguments.length&&(a.isNumeric(b)&&(g.channelNumber=b-0),g.channelsCus=c&&a.isArray(c)?c:!1);var h=g.channelNumber,i=g.channelsCus,j=g.customText,k=h+(i||[]).length,l=d.icons?d.icons.length-g.allEnable:-1;if(h)for(var m=0;h>m;m++)f.push(a.template(e,{ch:m,chtext:j?j(m):m+1}));i&&a.each(i,function(b,c){f.push(a.template(e,{ch:c,chtext:j?j(c):i[b]+1}))}),d.element.append(f.join("")),d._creatAll(g.allPos,k),g.pageEnable&&d._doWithChannelWidth(k),d.icons=d.element.find("a[data]"),k!=l&&d.fireListChange(k),this.element.trans_wgt(),this.prevValue=-1},_doWithChannelWidth:function(b){if(b){var c=this,d=c.options,e=c.element.children().eq(d.allEnable?1:0),f=e.outerWidth()+e.css("margin-right").toInt()+e.css("margin-left").toInt(),g=Math.floor(c.element.width()/f)*f,h=f*b,i=d.allEnable?this.$allElement.outerWidth()+this.$allElement.css("margin-right").toInt()+this.$allElement.css("margin-left").toInt():0;if(c.element.width(g),h+i>g){c.element.children("a[data!='all']").addClass("u-channel-icon"),c.$leftElement=a('<a class="u-channel u-left" href="javascript:;"></a>'),c.$rightElement=a('<a class="u-channel u-right" href="javascript:;"></a>'),c.element.prepend(c.$leftElement).append(c.$rightElement);var j=g-2*f-i;c.$leftElement.addClass("disabled");var k=c.element.children("a[data][data!='all']");k.wrapAll('<div class="u-channelicons-div"></div>').wrapAll("<div></div>"),c.$channelElements=c.element.find(".u-channelicons-div").width(j).children("div"),c.$channelElements.css({"margin-left":0,width:h})}}},list:function(b){if(arguments.length){b=a.makeArray(b);var c=!1;if(this.icons.each(function(d,e){c=!0;var f=a(e).attr("data");f="all"===f?f:f-0,a.inArray(f,b)>=0?a(e).toggleClass("u-channel-current",!0):a(e).removeClass("u-channel-current")}),this._renderAllElement(),this.options.multiSelect)this._trigger("change",null,{value:b});else{var d=a.isNumeric(b[0])?b[0]-0:b[0];this.prevValue!=d&&(-1!=this.prevValue&&this._trigger("change",null,{value:d,prev:this.prevValue}),this.prevValue=d)}return this}var e=this.icons.filter(".u-channel-current");return this.options.allEnable&&this.options.multiSelect&&(e=e.filter("[data!=all]")),a.map(e,function(b){var c=a(b).attr("data");return a.isNumeric(c)?c-0:c})},fireListChange:function(){this._trigger("listChange",null,{length:this.listCount()})},listCount:function(){return this.icons&&this.icons.filter("[data!=all]").length},getList:function(){return a.map(this.icons.filter("[data!=all]"),function(b){var c=a(b).attr("data");return a.isNumeric(c)?c-0:c})},index:function(b){var c=this;if(!arguments.length){var d=this.element.children(".u-channel-current");return a.map(d,function(b){return a(b).index()})}if(b=a.makeArray(b),c.icons.toggleClass("u-channel-current",!1),a.each(b,function(a,b){c.icons.eq(b).toggleClass("u-channel-current",!0)}),this.options.multiSelect)this._trigger("change",null,{value:this.list()});else{var e=c.icons.eq(b[0]).attr("data");e=a.isNumeric(e)?e-0:e,this.prevValue!=e&&(-1!=this.prevValue&&this._trigger("change",null,{value:e,prev:this.prevValue}),this.prevValue=e)}},text:function(){var b=this.element.children(".u-channel-current");return a.map(b,function(b){return a(b).text()})},disabledIcons:function(b){var c=a.makeArray(b),d=this;d.icons.filter("a:disabled").disabled(!1).removeClass("u-channel-disabled").on("click"),a.map(c,function(a){var b=d.icons.filter("a[data="+a+"]");return b.off("click"),b.disabled(!0).addClass("u-channel-disabled")})},_creatAll:function(b,c){this.options.allEnable&&(this.options.multiSelect||c)?(this.$allElement=a('<a href="javascript:;" class="u-channel" data="all" wgt="All"></a>'),"top"==b?this.element.prepend(a('<div style="height:30px"></div>').append(this.$allElement)):"left"==b?this.element.prepend(this.$allElement):this.element.append(this.$allElement)):(this.$allElement&&this.$allElement.remove(),this.$allElement=null)},_handleEvents:{"click a[data]":function(b){var c=a(b.currentTarget);if(this.options.multiSelect?c.toggleClass("u-channel-current"):(this.element.find("a[data]").removeClass("u-channel-current"),c.addClass("u-channel-current")),"all"!==c.attr("data")?this._renderAllElement():this._onCheckAllCh(),this.options.multiSelect)this._trigger("change",null,{value:this.list()});else{var d=c.attr("data");d=a.isNumeric(d)?d-0:d,this.prevValue!=d&&(-1!=this.prevValue&&this._trigger("change",null,{value:d,prev:this.prevValue}),this.prevValue=d)}},'click a[class *="u-right"]':function(b){var c=a(b.currentTarget),d=this.$channelElements.css("margin-left").toInt(),e=a(".u-channelicons-div").width(),f=d-e;c.hasClass("disabled")||(this.$leftElement.removeClass("disabled"),this.$channelElements.css("margin-left",f),this.$channelElements.width()-Math.abs(f)<=e&&this.$rightElement.addClass("disabled"))},'click a[class *="u-left"]':function(b){var c=a(b.currentTarget),d=this.$channelElements.css("margin-left").toInt(),e=a(".u-channelicons-div").width(),f=d+e;c.hasClass("disabled")||(this.$rightElement.removeClass("disabled"),this.$channelElements.css("margin-left",f),f>=0&&this.$leftElement.addClass("disabled"))}}})}(jQuery);