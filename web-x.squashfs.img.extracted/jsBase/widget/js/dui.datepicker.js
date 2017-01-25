!function(a,b){function c(a,b){return((1<<b).toString(2)+a).slice(-b)}function d(){return null===g&&(g=new f),g}var e='<div><div class="header u-clear"></div><div class="body"><table><thead></thead><tbody></tbody></table></div></div>',f=function(){this.element=a(e),this.element.addClass("u-datepicker"),this.header=this.element.find(".header"),this.week=this.element.find(".body thead"),this.calendar=this.element.find(".body tbody"),this._render(),this._setupEvents()};f.prototype={_setupEvents:function(){var c=this._handleEvents,d=this.element;for(var e in c)if(c.hasOwnProperty(e)){var f=e.match(/^(\S+)\s*(.*)$/),g=f[1],h=f[2]||b;!function(b,c){var e=function(d){a.isFunction(b)?b.call(c,d):c[b](d)};h?a(d).on(g,h,e):a(d).on(g,e)}(c[e],this)}},_render:function(){var b=[],c=this,d=["left1","left2","right2","right1"],e=["prevYear","prevMonth","nextMonth","nextYear"],f='<div class="my"><span></span><div class="drop"></div></div>';a.each(d,function(a,c){b.push('<a><i class="i-'+c+'"></i></a>')}),b.splice(2,0,f,f),this.header.append(b.join("")),this.header.children("a").each(function(b,c){a(c).attr("data-action",e[b])}),this.header.find(".drop").each(function(b,d){0===b&&(c.monthElem=a(d).prev()),1===b&&(c.yearElem=a(d).prev())}),this._renderWeek(),a(document.body).append(this.element)},_getAllMon:function(){for(var a=["<table>"],b=0,c="";b++<12;)c=b%2?"<tr>":"",c+='<td data-month="'+(b-1)+'">'+b+"</td>",c+=b%2?"":"</tr>",a.push(c);return a.push("</table>"),a.join("")},_getAllYear:function(){for(var a=6,b=["<table>"],c=this.year||2014,d=c-a;a--;)b.push("<tr><td>"+d++ +"</td><td>"+d++ +"</td></tr>");return b.push("</table>"),b.join("")},_renderWeek:function(){var b=["Sun","Mon","Tue","Wen","Thu","Fri","Sat"],c="<tr>";a.each(b,function(a,b){c+="<th wgt="+b+"></th>"}),c+="</tr>",this.week.append(c).trans_wgt()},_renderCalendar:function(){for(var b=this,c=this.year,d=this.month,e=new Date(c,d),f=e.getDay(),g=e.getDate(),h=new Date(c,d,0).getDate(),i=new Date(c,d+1,0).getDate(),j=0,k=[];42>j;){if(j%7===0&&k.push("<tr>"),f>j||g>i){var l=f>j?h++-f+1:g++%i;k.push('<td class="disable">'+l+"</td>")}else{var m="",n=new Date(c+"/"+(d+1)+"/"+g);m+=j%7===0||j%7===6?"weekend ":"",m+=this.selDay===g&&this.selMonth===d&&this.selYear===c?"current":"",(n>b.attachElem.data("maxDate")||n<b.attachElem.data("minDate"))&&(m+="disable"),k.push('<td class="'+m+'">'+g++ +"</td>")}j%7===6&&k.push("</tr>"),j++}this.calendar.empty().append(k.join("")),this.monthElem.html(d+1).next().html(this._getAllMon()).find("td").each(function(c,d){var e=new Date(b.year,a(d).text()-1,1),f=new Date(b.year,a(d).text()-0,0);(e>b.attachElem.data("maxDate")||f<b.attachElem.data("minDate"))&&a(d).addClass("disable")}),this.yearElem.html(c).next().html(this._getAllYear()).find("td").each(function(c,d){var e=new Date(a(d).text(),0,1),f=new Date(a(d).text(),11,31);(e>b.attachElem.data("maxDate")||f<b.attachElem.data("minDate"))&&a(d).addClass("disable")})},_closeDrop:function(a){this.element.find(".drop").not(a).parent().removeClass("open")},attach:function(c,d){var e,f,g,h,i=c.val(),j=c.data("maxDate");i&&(e=c.datepicker("getDate"),e&&(f=e.year,g=e.month,h=e.day)),f===b&&(e=new Date,e=e>j?j:e,f=e.getFullYear(),g=e.getMonth(),h=e.getDate()),this.selYear=this.year=f,this.selMonth=this.month=g,this.selDay=this.day=h,this.attachElem=c,this._renderCalendar(f,g,h),this._closeDrop();var k=c.offset();if("bottom"==d)var l=k.left,m=k.top+c.outerHeight(!0)+1;else if("right"==d)var n=.5*c.outerHeight(!0)+k.top,m=n>.5*a(".u-datepicker").outerHeight(!0)?n-.5*a(".u-datepicker").outerHeight(!0):1,l=k.left+c.outerWidth(!0)+1;this.element.css({top:m,left:l});var o=this;a(document).on("click.datepicker",function(b){if(!a(b.target).data("dui-datepicker")){var c=a(b.target).closest(".u-datepicker");c.length||o.detach.call(o,!1)}})},detach:function(b){a(document).off("click.datepicker"),this.element.css({top:"-10000px",left:"-10000px"}),b!==!1&&this.attachElem.trigger("valueChange",{year:this.year,month:this.month,day:this.day})},_handleEvents:{click:function(b){var c=a(b.target).closest(".drop",this.element[0]);this._closeDrop(c)},"click [data-action]":function(b){var c=a(b.currentTarget).attr("data-action"),d=this.attachElem.data("minDate"),e=this.attachElem.data("maxDate"),f=this.year,g=this.month,h=this.day;switch(c){case"prevYear":f--,h=d.getDate();break;case"prevMonth":g--,0>g&&(g=11,f--),h=d.getDate();break;case"nextMonth":g++,g>11&&(g=0,f++),h=e.getDate();break;case"nextYear":f++,h=e.getDate()}if(c){var i=new Date(f,g,h);if(d>i||i>e)return;this.year=f,this.month=g,this.day=h,this._renderCalendar()}},"click .my span":function(b){var c=a(b.target),d=c.parent();d.toggleClass("open"),this._closeDrop(c.next()),b.stopPropagation()},"click .drop td":function(c){var d=a(c.target);if(!d.hasClass("disable")){d.closest(".my").children("span").html(d.html()),this._closeDrop();var e=d.attr("data-month");e===b?this.year=d.html()-0:this.month=e-0,this._renderCalendar(),c.stopPropagation()}},"click .body td":function(b){var c=a(b.target);c.hasClass("disable")||(this.day=c.html()-0,this.detach())},"mouseenter td":function(b){var c=a(b.target);c.hasClass("disable")?"":c.addClass("hover")},"mouseleave td":function(b){a(b.target).removeClass("hover")}}};var g=null;a.widget("dui.datepicker",{version:"1.0.1",widgetName:"datepicker",widgetEventPrefix:"datepicker",options:{format:"yyyy-mm-dd",minDate:"2000-1-1",maxDate:"2037-12-31",change:a.noop},_create:function(){this.datepicker=d(),this._setupEvents(),this.element.toggleClass("u-input",!0).toggleClass("i-date",!0).attr("readonly",!0),this.position="bottom";var a=new Date(this.options.minDate.replace(/-/g,"/"));a.setHours(0,0,0,0);var b=new Date(this.options.maxDate.replace(/-/g,"/"));b.setHours(0,0,0,0),this.element.data("minDate",a),this.element.data("maxDate",b)},format:function(a){var b=a.match(/yyyy|mm|dd/g);if(3!==b.length)throw new Error("Error format string "+a);var c=this.getDate();this.options.format=a,this._format(c)},_format:function(a){var b=this.options.format,d=this.element;a&&(b=b.replace("yyyy",a.year),b=b.replace("mm",c(a.month+1,2)),b=b.replace("dd",c(a.day,2))),d.val(b)},minDate:function(a){var b=new Date(a.replace(/-/g,"/"));if(b.setHours(0,0,0,0),!(b>=this.element.data("maxDate"))){this.element.data("minDate",b);var c=this.getDate();new Date(c.year,c.month,c.day,0,0,0,0)<b&&this.value(b)}},maxDate:function(a){var b=new Date(a.replace(/-/g,"/"));if(b.setHours(0,0,0,0),!(b<=this.element.data("minDate"))){this.element.data("maxDate",b);var c=this.getDate();new Date(c.year,c.month,c.day,0,0,0,0)>b&&this.value(b)}},getDate:function(){var b,c=this.element,d=c.val();if(d&&(b=d.split(/\D/),3===b.length)){var e,f,g,h=this.options.format,i=h.match(/yyyy|mm|dd/g);return a.each(i,function(a,c){"yyyy"==c&&(e=b[a]-0),"mm"==c&&(f=b[a]-1),"dd"==c&&(g=b[a]-0)}),{year:e,month:f,day:g}}},value:function(c){return c===b?(c=this.getDate(),c.year+"-"+a.pad(c.month+1,2)+"-"+a.pad(c.day,2)):(this._format({year:c.getFullYear(),month:c.getMonth(),day:c.getDate()}),this)},setSpePosition:function(a){"right"==a?this.position="right":"bottom"==a&&(this.position="bottom")},_setupEvents:function(){this._on(this._handleEvents)},_handleEvents:{valueChange:function(a,b){this._format(b),this._trigger("change",null,{ui:this,value:this.value()})},focus:function(){this.datepicker.attach(this.element,this.position)}}})}(jQuery);