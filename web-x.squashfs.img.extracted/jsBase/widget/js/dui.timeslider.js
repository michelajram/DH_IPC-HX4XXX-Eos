!function(a){function b(a){var b=a.getTime(),c=i.getTime();return(b-c)/1e3}function c(a){return a.clientX+Math.max(document.body.scrollLeft,document.documentElement.scrollLeft)}function d(a,b,c){var d=new Date(i),e=a.split(" ")[1].split(":"),f=a.split(" ")[0];return b&&"00:00:00"===a.split(" ")[1]&&c.split(" ")[0]!=f&&d.addDays(1),d.setHours(e[0]-0,e[1]-0,e[2]-0),d}function e(a,b,c){var d,e,f=new Date(i),g=new Date(i.getFullYear(),i.getMonth(),i.getDate()+1,0,0,0),j=[];1440>=b&&b>720?d=120:720>=b&&b>360?d=60:360>=b&&b>180?d=30:180>=b&&b>120?d=15:120>=b&&b>60?d=10:60>=b&&b>24?d=5:24>=b&&b>12?d=2:b>0&&(d=1),e=Math.ceil(b/d),c!==!1?(begin=h(new Date(a),-Math.ceil(b/2)),end=h(new Date(a),Math.ceil(b/2))):(begin=new Date(a),end=h(new Date(a),b)),begin<f?(begin=f,end=h(new Date(begin),b)):end>g&&(end=g,begin=h(new Date(end),-b)),begin.setMinutes(Math.floor(begin.getMinutes()/d)*d),begin.setSeconds(0),j.push(new Date(begin));for(var k=0;e>k;k++)h(begin,d),j.push(new Date(begin));return j}function f(a,c,d,e){0>a&&(a=0),a>c&&(a=c);var f=b(e)-b(d),g=a*(f/c);return h(new Date(d),g/60)}function g(a,b,c){for(var e=a.length-1;e>=0;e--)if(d(a[e].StartTime)<=b&&d(a[e].EndTime,!0,a[e].StartTime)>b&&a[e].Channel===c)return e;return-1}function h(a,b){return a.setSeconds(a.getSeconds()+60*b),a}var i=new Date(2015,11,27,0,0,0,0);a.widget("dui.timeslider",{version:"1.0.1",widgetName:"timeslider",widgetEventPrefix:"timeslider",options:{total:1440,curtime:{},channels:[0,1,2,3],typeKey:"EventType",typeColors:{A:"#D51111",F:"#00FFF7",M:"#DAE613",R:"#42D017"},data:[],complete:a.noop},_create:function(){var b=this,c=b.element.addClass("time-slider"),d=b.options;c.append('<div class="content">                         <div class="time-title"></div>                         <div class="time-grids"></div>                      </div>'),d.channels.length>1&&(c.prepend('<div class="channel"></div>'),c.find(".content").css("margin-left",c.find(".channel").outerWidth())),b.$title=c.find(".time-title"),b.$grids=c.find(".time-grids"),a.each(d.channels,function(a,e){b.$grids.append('<div class="time-grid" chn='+e+'><i class="pointer"></i><div class="time-tip"><div class="rect"></div><span class="tip"></span></div></div>'),c.find(".channel").append("<div>"+(e+1)+"</div>"),d.curtime[e]=i}),b._off(c),b._on(c,b.events),b._render(),a(window).on("resize"+b.eventNamespace,function(){setTimeout(function(){b._render()})})},_destroy:function(){a(window).off("resize"+this.eventNamespace)},events:{"mousedown .pointer":function(b){var d=this,e=d.options,h=a(b.currentTarget).data("pageX",c(b)),i=h.parent(),j=i.attr("chn")-0;return a(document).on("mousemove"+d.eventNamespace,function(a){e.curtime[j]=f(c(a)-i.offset().left,i.width(),d.ts[0],d.ts[d.ts.length-1]),d._movePointer(h,e.curtime[j])}).on("mouseup"+d.eventNamespace,function(b){a(document).off("mousemove"+d.eventNamespace),a(document).off("mouseup"+d.eventNamespace),h.data("pageX")!==c(b)&&e.complete(e.curtime[j],j,g(e.data,e.curtime[j],j)),h.data("pageX",null)}),!1},"mousedown .time-grid":function(b){var d=this,e=d.options,h=a(b.currentTarget),i=h.children(".pointer"),j=h.attr("chn")-0;return e.curtime[j]=f(c(b)-h.offset().left,h.width(),d.ts[0],d.ts[d.ts.length-1]),d._movePointer(i,e.curtime[j]),e.complete(e.curtime[j],j,g(e.data,e.curtime[j],j))},"mouseover .time-grid":function(b){var d=this,e=a(b.currentTarget),g=e.find(".time-tip"),h=e.width(),i=c(b)-e.offset().left,j=f(i,h,d.ts[0],d.ts[d.ts.length-1]);g.find(".tip").text(a.pad(j.getHours(),2)+":"+a.pad(j.getMinutes(),2)+":"+a.pad(j.getSeconds(),2));var k=g.width();i+k>e.width()&&(i=h-k),g.css({left:i})},"mouseleave .time-grid":function(b){a(b.currentTarget).find(".tip").text("")},"mousemove .time-grid":function(b){var d=this,e=a(b.currentTarget),g=e.find(".time-tip"),h=e.width(),i=c(b)-e.offset().left,j=f(i,h,d.ts[0],d.ts[d.ts.length-1]);g.find(".tip").text(a.pad(j.getHours(),2)+":"+a.pad(j.getMinutes(),2)+":"+a.pad(j.getSeconds(),2));var k=g.width();i+k>e.width()&&(i=h-k),g.css({left:i})},"mouseover .tip":function(){return!1}},value:function(a){if(!a)return this.options.curtime;var b=this,c=b.options,d=a.slice(0,2)-0,e=a.slice(2,4)-0,f=a.slice(4,6)-0,g=a.slice(6,8)-0,h=b.element.find("[chn="+d+"] .pointer");if(0===e&&0===f&&0===g)return h.attr("status","stop").hide(),c.curtime;h.attr("status","play").show();var j=e>=0&&24>e;return j=j&&f>=0&&60>f,j=j&&g>=0&&60>g,!j||h.data("pageX")?c.curtime:(c.curtime[d]=new Date(i.getFullYear(),i.getMonth(),i.getDate(),e,f,g),void(c.curtime[d]>b.ts[0]&&c.curtime[d]<b.ts[b.ts.length-1]?b._movePointer(h,c.curtime[d]):d===b.element.find(".pointer[status=play]:first").parent().attr("chn")-0?b._render(!1):h.hide()))},data:function(b){var c=this;return a.isArray(b)?(c.options.data=b,void c._renderData()):c.options.data},total:function(b){var c=this;return a.isNumeric(b)?(c.options.total=b,void c._render()):c.options.total},_render:function(b){var c=this,d=c.$grids.width(),f=c.element.find(".pointer[status=play]:first").parent().attr("chn")-0||0,g=c.ts=e(c.options.curtime[f],c.options.total,b),h=d/(g.length-1);c.$title.empty(),c.$grids.find(".scale").remove(),c.$grids.find(".pointer").hide();for(var j=0;j<g.length;++j)c.$grids.children(".time-grid").append('<div class="scale" style="left:'+j*h+'px;"></div>'),c.$title.append(g[j].getTime()===new Date(i.getFullYear(),i.getMonth(),i.getDate()+1,0,0,0,0).getTime()?'<div class="title">24:00</div>':'<div class="title">'+a.pad(g[j].getHours(),2)+":"+a.pad(g[j].getMinutes(),2)+"</div>"),c.$title.children("div:last").css({left:function(){return 0===j?0:j===g.length-1?j*h-a(this).width():j*h-a(this).width()/2}});c._renderData()},_renderData:function(){var c=this;c.$grids.find(".record").remove(),a.each(c.options.data,function(e,f){var g=b(c.ts[0]),h=b(c.ts[c.ts.length-1]),i=h-g,j=b(d(f.StartTime)),k=b(d(f.EndTime,!0,f.StartTime));if(!(j>h||g>k)){g>j&&(j=g),k>h&&(k=h);var l=c.$grids.children("[chn="+f.Channel+"]"),m=l.children(".record:last"),n=(j-g)/i*l.width(),o=(k-j)/i*l.width();1>o&&(o=1),a('<div class="record"></div>').css({"z-index":0!==m.length&&m.position().left+m.width()>n?parseInt(m.css("z-index"))+1:1,background:c.options.typeColors[f[c.options.typeKey]],position:"absolute",height:l.height(),width:o,left:n}).appendTo(l)}})},_movePointer:function(a,c){var d=this,e=(d.options,d.ts),f=3600*c.getHours()+60*c.getMinutes()+c.getSeconds()-b(e[0]),g=b(e[e.length-1])-b(e[0]);a.css("left",f/g*a.parent().width()-a.width()/2)}})}(jQuery);