!function(a){define(function(require,b,c){function d(b,c){var d=this;if(d.caps=a.extend({},i,c),ability.get("VideoInputCaps").done(function(a){a&&a.ElectricFocus&&(d.caps.PtzLinkEnable=!1)}),d.e=a(b),d.$=function(a){return d.e.find(a)},d.e.html(g).translation(),d.$(".ui-label").css("width",d.e.attr("ui-label")),d.$(".ui-label-sub").css("width",d.e.attr("ui-label-sub")),d.$("#e_ptz_quickfzoom").parent().css("padding-left",d.e.attr("ui-label")),d.$("#e_ptz_quickftime").parent().css("padding-left",d.e.attr("ui-label")),d.$("#e_ptz_hotcoldspot").parent().css("padding-left",d.e.attr("ui-label")),d.$("[cfg]").each(function(a,b){var c=d.$(b),e=c.attr("cfg");d.caps[e]||c.closest(".ui-form-item").remove()}),d.caps.PtzLinkEnable&&(d.caps.ShowQuickFocus&&rpc.ThermographyManager.getCaps(webApp.CHANNEL_NUMBER>1?1:0,"All").done(function(a){d.EZoom=a.EZoom}),d.$("[cfg=PtzLinkEnable]").change(function(a){var b=d.$(a.target),c=b.prop("checked");d.refreshPtzCaps.done(function(a){d.ptzcaps=a,d.handler.PtzLink&&0!==d.handler.PtzLink.length||(d.handler.PtzLink=[["None",1]]);var b=d.$("#e_ptz_link").empty().append('<option value="None" t="w_none"></option>');a&&(a.Preset!==!1&&b.append('<option value="Preset" t="w_Preset">Preset</option>'),a.Tour!==!1&&b.append('<option value="Tour" t="w_Auto-Tour">Tour</option>'),a.Pattern!==!1&&b.append('<option value="Pattern" t="w_Pattern">Pattern</option>'),d.caps.ShowQuickFocus!==!1&&b.append('<option value="QuickFocus" t="QuickFocus">Pattern</option>')),b.translation(),c?(b.parent().show(),b.val(b.is(":has(option[value="+d.handler.PtzLink[0][0]+"])")?d.handler.PtzLink[0][0]:"None")):(b.parent().hide(),b.val("None"),b.change()),b.change()})}),d.$("#e_ptz_link").change(function(b){var c=d.$(b.target),e=c.val(),f=d.handler.PtzLink[0],g=d.$("#e_ptz_num"),h=d.$("#e_ptz_quickfzoom"),i=d.$("#e_ptz_quickftime"),j=d.$("#e_ptz_hotcoldspot");if(b.isTrigger||(f[0]=e),"None"===e)g.parent().hide(),g.numberfield("value",1),h.parent().hide(),i.parent().hide(),j.parent().hide();else if("QuickFocus"===e){var k=d.EZoom.Min,l=d.EZoom.Max;f[1]<k&&(f[1]=k),f[1]>l&&(f[1]=l),f[2]&&f[2]<1&&(f[2]=1),f[2]&&f[2]>300&&(f[2]=300),h.numberfield({min:k,max:l,value:f[1]}),h.next().text("("+k+"~"+l+")"),i.numberfield({min:1,max:300,value:f[2]?f[2]:10}),g.parent().hide(),g.numberfield("value",1),h.parent().show(),i.parent().show(),"hotspoConfig"===a("#set-menu li .set-item-current").attr("filename")&&j.parent().show()}else{var k=d.ptzcaps[e+"Min"],l=d.ptzcaps[e+"Max"];g.next().text("("+k+"~"+l+")"),g.numberfield("min",k),g.numberfield("max",l),f[1]<k&&(f[1]=k),f[1]>l&&(f[1]=l),g.numberfield("value",f[1]),g.parent().show()}return!1}),d.$("#e_ptz_num").numberfield({allowDecimal:!1,allowNegative:!1}).blur(function(){return d.handler.PtzLink[0][1]=d.$("#e_ptz_num").numberfield("value"),!1}),d.$("#e_ptz_quickfzoom, #e_ptz_quickftime").numberfield({allowDecimal:!1,allowNegative:!1}).blur(function(){return d.handler.PtzLink[0][1]=d.$("#e_ptz_quickfzoom").numberfield("value"),d.handler.PtzLink[0][2]=d.$("#e_ptz_quickftime").numberfield("value"),!1})),webApp.ALARM_OUT_NUMBER>1&&d.caps.AlarmOutEnable){for(var e=d.$("#e_alarmchn"),f=0;f<webApp.ALARM_OUT_NUMBER;f++)e.append('<a href="javascript:;" class="ui-channel-item" channle='+f+">"+(f+1)+"</a>");e.click(function(a){return d.$(a.target).toggleClass(h),!1})}if(webApp.CHANNEL_NUMBER>1){for(var j=d.$("#e_recordchn"),f=0;f<webApp.CHANNEL_NUMBER;f++)j.append('<a href="javascript:;" class="ui-channel-item" channle='+f+">"+(f+1)+"</a>");j.click(function(a){return d.$(a.target).toggleClass(h),!1})}if(webApp.CHANNEL_NUMBER>1){for(var k=d.$("#e_snapchn"),f=0;f<webApp.CHANNEL_NUMBER;f++)k.append('<a href="javascript:;" class="ui-channel-item" channle='+f+">"+(f+1)+"</a>");k.click(function(a){return d.$(a.target).toggleClass(h),!1})}d.$("[cfg=FlashLatch],[cfg=RecordLatch],[cfg=AlarmOutLatch]").numberfield({min:10,max:300,allowDecimal:!1,allowNegative:!1}),d.caps.AlarmOutLatch.length>1&&d.caps.AlarmOutLatch[1]>0&&(d.$("[cfg=AlarmOutLatch]").numberfield({min:d.caps.AlarmOutLatch[0],max:d.caps.AlarmOutLatch[1],allowDecimal:!1,allowNegative:!1}),d.$("[cfg=AlarmOutLatch]").next("span").next("span").text("("+d.caps.AlarmOutLatch[0]+"~"+d.caps.AlarmOutLatch[1]+")")),d.caps.RecordLatch.length>1&&d.caps.RecordLatch[1]>0&&(d.$("[cfg=RecordLatch]").numberfield({min:d.caps.RecordLatch[0],max:d.caps.RecordLatch[1],allowDecimal:!1,allowNegative:!1}),d.$("[cfg=RecordLatch]").next("span").next("span").text("("+d.caps.RecordLatch[0]+"~"+d.caps.RecordLatch[1]+")"))}function e(){var b=this;b.refreshPtzCaps=ability.get("PTZCaps",!0),b.$("[cfg]:checkbox").each(function(a,c){var d=b.$(c),e=d.attr("cfg");d.prop("checked",!!b.handler[e]),"PtzLinkEnable"===e&&d.change()}),b.$("[cfg=FlashLatch],[cfg=RecordLatch],[cfg=AlarmOutLatch]").each(function(a,c){var d=b.$(c);0===b.handler[d.attr("cfg")]?d.numberfield("value",0):d.numberfield("value",b.handler[d.attr("cfg")]||10)}),webApp.ALARM_OUT_NUMBER>1&&b.caps.AlarmOutEnable&&a.isArray(b.handler.AlarmOutChannels)&&(b.$("#e_alarmchn").children().removeClass(h),a.each(b.handler.AlarmOutChannels,function(a,c){b.$("#e_alarmchn a[channle="+c+"]").addClass(h)})),webApp.CHANNEL_NUMBER>1&&a.isArray(b.handler.RecordChannels)&&(b.$("#e_recordchn").children().removeClass(h),a.each(b.handler.RecordChannels,function(a,c){b.$("#e_recordchn a[channle="+c+"]").addClass(h)})),webApp.CHANNEL_NUMBER>1&&a.isArray(b.handler.SnapshotChannels)&&(b.$("#e_snapchn").children().removeClass(h),a.each(b.handler.SnapshotChannels,function(a,c){b.$("#e_snapchn a[channle="+c+"]").addClass(h)}))}function f(){var a=this;if(a.$("[cfg]:checkbox").each(function(b,c){var d=a.$(c);a.handler[d.attr("cfg")]=d.prop("checked")}),a.$("[cfg=FlashLatch],[cfg=RecordLatch],[cfg=AlarmOutLatch]").each(function(b,c){var d=a.$(c);a.handler[d.attr("cfg")]=d.numberfield("value")}),webApp.ALARM_OUT_NUMBER>1&&a.caps.AlarmOutEnable){var b=[];a.$("#e_alarmchn").children(".ui-channel-item-current").each(function(c,d){b.push(a.$(d).attr("channle")-0)}),a.handler.AlarmOutChannels=b}if(webApp.CHANNEL_NUMBER>1){var b=[];a.$("#e_recordchn").children(".ui-channel-item-current").each(function(c,d){b.push(a.$(d).attr("channle")-0)}),a.handler.RecordChannels=b}if(webApp.CHANNEL_NUMBER>1){var b=[];a.$("#e_snapchn").children(".ui-channel-item-current").each(function(c,d){b.push(a.$(d).attr("channle")-0)}),a.handler.SnapshotChannels=b}}var g=require("./eventHandler.html"),h="ui-channel-item-current",i={FlashEnable:webApp.ALARM_FLASH,FlashLatch:webApp.ALARM_FLASH,RecordEnable:!0,RecordLatch:!0,MailEnable:!0,SnapshotEnable:!0,PtzLinkEnable:webApp.HasPtz,AlarmOutEnable:!!webApp.ALARM_OUT_NUMBER,AlarmOutLatch:!!webApp.ALARM_OUT_NUMBER,VoiceEnable:webApp.IsAudioFileManager&&webApp.AUDIO_OUT_NUMBER,MMSEnable:webApp.Is3G||webApp.Is4G,ShowQuickFocus:!1};a.fn.eventHandler=function(){var b=arguments[0],c=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],e=this;return this.each(function(){var f=a(this),g=f.data("eventHandler");if(g||f.data("eventHandler",g=new d(f,b)),"string"===a.type(b)&&a.isFunction(g[b])){var h=g[b].apply(g,c);if(void 0!==h)return e=h,!1}}),e},d.prototype.set=function(a){var b=this;return b.handler=a,e.call(b),b.e},d.prototype.get=function(){var a=this;return f.call(a),a.handler},c.exports=d})}(jQuery);