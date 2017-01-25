!function(a){define(function(require,b,c){function d(b,c){var d=this;d.options=a.extend({},h,c),d.e=a(b).empty().append(g).translation(),d.$(".u-tab.menu").tab(),d.$(".u-tab.fn-hide").tab(),d.$("a[data-action]").on("click",function(a){d.$("[data-target="+d.$(a.currentTarget).attr("data-action")+"]").toggleClass("fn-hide")}),d.$("a[cmd],div[cmd]").on("click",function(a){var b=d.$(a.currentTarget).attr("cmd");d._chkCmd(b).done(function(){var a=d._buildArgs(b);f.PTZ.start(b,a.arg2,a.arg3,a.arg4),d._disabled(b)})}),d.$("a[data-light]").on("click",function(a){f.PTZ.start("Wiper",d.$(a.currentTarget).attr("data-light")-0,0,0)}),d.$("#ptz_set_azi_show").on("click",function(a){var b=d.$(a.target);b.hasClass("current")?(b.removeClass("current"),b.attr("t","w_AzimuthDispShowBtn").parent().translation()):(b.addClass("current"),b.attr("t","w_AzimuthDispShowBtn_stop").parent().translation(),d._getStatus())}),e.get("PtzFunctionMenu").done(function(a){a&&d.$("a[data-cap=PtzFunctionMenu]").remove()}),d.$(".ui-boat-intel-current div[data-css]").on({mouseover:function(a){var b=d.$(a.currentTarget);b.parent().addClass("ui-boat-intel-current-"+b.attr("data-css"))},mouseout:function(a){var b=d.$(a.currentTarget);b.parent().removeClass("ui-boat-intel-current-"+b.attr("data-css"))}}),d.render()}var e=(require("../plugin"),require("../ability")),f=require("../rpc"),g=require("./ptzSetting.html"),h=null,i=1;webApp.DeviceType.contains("TPC")&&webApp.DeviceType.contains("SD")?i=3:webApp.DeviceType.contains("TPC")?i=2:webApp.DeviceType.contains("SD")&&(i=1),a.fn.ptzSetting=function(){var b=arguments[0],c=2<=arguments.length?Array.prototype.slice.call(arguments,1):[],e=this;return this.each(function(){var f=a(this),g=f.data("ptzSetting");if(g||f.data("ptzSetting",g=new d(f,b)),"string"===a.type(b)&&a.isFunction(g[b])){var h=g[b].apply(g,c);if(void 0!==h)return e=h,!1}}),e},d.prototype.render=function(){var b=this;e.get("PTZCaps",!0).done(function(c){c&&c.PtzFunctionMenu&&c.PtzFunctionMenu.SupportOSDMenu||b.$("[data-for=ptz_menu],[data-page=ptz_menu]").remove();var d=b.$("#ptz_set_select").empty();if(c&&c.AutoScan===!1||d.append('<option value="AutoScan" t="w_Auto-Scan"></option>'),c&&c.Preset===!1||d.append('<option value="Preset" t="w_Preset"></option>'),c&&c.Tour===!1||d.append('<option value="Tour" t="w_Auto-Tour"></option>'),c&&c.Pattern===!1||d.append('<option value="Pattern" t="w_Pattern"></option>'),c&&c.AutoPan===!0&&d.append('<option value="AutoPan" t="autoPan"></option>'),c&&c.Aux===!1||d.append('<option value="Aux" t="Assistant"></option>'),c&&c.Wiper===!1||-1!==webApp.DeviceType.indexOf("SD")||-1!==webApp.DeviceType.indexOf("TPC")||d.append('<option value="Wiper" t="RainBrush"></option>'),1===i?c&&-1!==a.inArray("Absolutely",c.Move)&&d.append('<option value="Absolutely" t="positionABS"></option>'):3===i&&(c&&c.MoveAbsolutely&&c.MoveAbsolutely.Support&&d.append('<option value="Absolutely" t="positionABS"></option>'),b.$("#ptz_set_abs_zoom").addClass("fn-hide"),b.$("#ptz_set_abs_zoom").prev().addClass("fn-hide")),isEnable("is_show_azimuthDisp")&&d.append('<option value="Azimuth" t="w_AzimuthDispShowBtn"></option>'),b._renderByDevType(c),d.get(0).selectedIndex=0,d.translation().on("change",function(a){b.$(".u-tab.fn-hide").tab("select",b.$(a.target).val())}).change(),b.$(":text[capKey]").each(function(a,d){var e=b.$(d),f=e.attr("capKey"),g=e.attr("capMin")-0,h=c&&c[f+"Min"]||g,i=c&&c[f+"Max"]||255;e.numberfield({allowDecimal:!1,allowNegative:!1,min:h,max:i});var j=e.nextAll("span");j.eq(0).text(h),j.eq(2).text(i)}),b.$("#ptz_set_abs_zoom").numberfield({allowDecimal:!1,allowNegative:!1,min:1,max:128}),3===i)var e=c&&c.PtzMotionRange&&c.PtzMotionRange.HorizontalAngle[0]||0,f=c&&c.PtzMotionRange&&c.PtzMotionRange.HorizontalAngle[1]||3600,g=c&&c.PtzMotionRange&&c.PtzMotionRange.VerticalAngle[0]||0,h=c&&c.PtzMotionRange&&c.PtzMotionRange.VerticalAngle[1]||900;else var e=c&&c.PtzMotionRange&&10*c.PtzMotionRange.HorizontalAngle[0]||0,f=c&&c.PtzMotionRange&&10*c.PtzMotionRange.HorizontalAngle[1]||3600,g=c&&c.PtzMotionRange&&10*c.PtzMotionRange.VerticalAngle[0]||0,h=c&&c.PtzMotionRange&&10*c.PtzMotionRange.VerticalAngle[1]||900;var j=b.$("#ptz_set_abs_x").numberfield({allowDecimal:!1,allowNegative:!0,min:e,max:f}).prev("p").find("span");j.eq(1).text(e),j.eq(2).text(f);var k=b.$("#ptz_set_abs_y").numberfield({allowDecimal:!1,allowNegative:!0,min:g,max:h}).prev("p").find("span");k.eq(1).text(g),k.eq(2).text(h)})},d.prototype.$=function(a){return this.e.find(a)},d.prototype._renderByDevType=function(b){var c=this,d=["Preset","Tour","Pattern","Scan"];if(1===i||2===i)d.each(function(a){c.$("#list"+a).remove()}),2===i&&d.each(function(b){a('[data-target="set'+b+'"]').removeClass("fn-hide")});else{var e=f.PTZ.getPresets(),g=f.ConfigManager.getConfig("PtzTour"),h=f.ConfigManager.getConfig("AutoScan"),j=f.ConfigManager.getConfig("AutoPattern"),k=f.ConfigManager.getConfig("PtzMovement");a.when(e,g,h,j,k).done(function(a,e,f,g,h){var i=a||[],j=e[0],k=f[0],l=g[0],m="",n="",o="",p="",q=h[0].Function,r=h[0].Index;if(d.each(function(a){c.$("#list"+a).empty().prop("disabled",!1),c.$('[cfg="ListNot'+a+'"]').addClass("fn-hide"),c.$("#tip"+a).text("")}),c.$('a[cmd="GotoPreset"]').removeClass("ui-button-special-disabled").prop("disabled",!1),c.$('a[cmd="StartTour"],a[cmd="StopTour"]').removeClass("ui-button-special-disabled").prop("disabled",!1),c.$('a[cmd="StartPattern"],a[cmd="StopPattern"]').removeClass("ui-button-special-disabled").prop("disabled",!1),c.$('a[cmd="AutoScanOn"],a[cmd="AutoScanOff"]').removeClass("ui-button-special-disabled").prop("disabled",!1),c.$('a[cmd="AutoPanOn"]').removeClass("ui-button-special-disabled").prop("disabled",!1),0!==i.length){for(var s=0;s<i.length;s++)m+='<option value="'+i[s].Index+'">'+i[s].Name+"</option>";c.$("#listPreset").append(m)}else c.$("#tipPreset").text(tl("No Preset")),c.$("#listPreset").prop("disabled",!0),c.$('a[cmd="GotoPreset"]').addClass("ui-button-special-disabled").prop("disabled",!0);if(j&&0!==j.length)for(var t=j.length>b.TourMax?b.TourMax:j.length,s=0;t>s;s++)if(j[s].Enable){var u=0;j[s].Presets.each(function(a,b){-1!==j[s].Presets[b][0]&&u++}),u>=2&&(n+='<option value="'+(s+1)+'">'+j[s].Name+"</option>")}for(var s=0;s<k.length;s++)k[s].LeftEnable&&k[s].RightEnable&&(o+='<option value="'+(s+1)+'">'+(s+1)+"</option>");for(var s=0;s<l.length;s++)l[s].Enable&&(p+='<option value="'+(s+1)+'">'+(s+1)+"</option>");if(""===n?(c.$("#tipTour").text(tl("noValidTour")),c.$("#listTour").prop("disabled",!0),c.$('a[cmd="StartTour"],a[cmd="StopTour"]').addClass("ui-button-special-disabled").prop("disabled",!0)):c.$("#listTour").append(n),""===p?(c.$("#tipPattern").text(tl("noValidPattern")),c.$("#listPattern").prop("disabled",!0),c.$('a[cmd="StartPattern"],a[cmd="StopPattern"]').addClass("ui-button-special-disabled").prop("disabled",!0)):c.$("#listPattern").append(p),""===o?(c.$("#tipScan").text(tl("noValidScan")),c.$("#listScan").prop("disabled",!0),c.$('a[cmd="AutoScanOn"],a[cmd="AutoScanOff"]').addClass("ui-button-special-disabled").prop("disabled",!0)):c.$("#listScan").append(o),"None"!==q)switch(q){case"Scan":c.$('a[cmd="AutoScanOn"]').addClass("ui-button-special-disabled").prop("disabled",!0),c.$("#listScan").val(r+1).prop("disabled",!0);break;case"Tour":c.$('a[cmd="StartTour"]').addClass("ui-button-special-disabled").prop("disabled",!0),c.$("#listTour").val(r+1).prop("disabled",!0);break;case"Pattern":c.$('a[cmd="StartPattern"]').addClass("ui-button-special-disabled").prop("disabled",!0),c.$("#listPattern").val(r+1).prop("disabled",!0);break;case"AutoPan":c.$('a[cmd="AutoPanOn"]').addClass("ui-button-special-disabled").prop("disabled",!0)}})}},d.prototype._disabled=function(a){var b=this;switch(a){case"AutoScanOn":3===i&&(b.$("#listScan").prop("disabled",!0),b.$('a[cmd="AutoScanOn"]').addClass("ui-button-special-disabled").prop("disabled",!0));break;case"AutoScanOff":3===i&&(b.$("#listScan").prop("disabled",!1),b.$('a[cmd="AutoScanOn"]').removeClass("ui-button-special-disabled").prop("disabled",!1));break;case"StartTour":3===i&&(b.$("#listTour").prop("disabled",!0),b.$('a[cmd="StartTour"]').addClass("ui-button-special-disabled").prop("disabled",!0));break;case"StopTour":3===i&&(b.$("#listTour").prop("disabled",!1),b.$('a[cmd="StartTour"]').removeClass("ui-button-special-disabled").prop("disabled",!1));break;case"StartPattern":3===i&&(b.$("#listPattern").prop("disabled",!0),b.$('a[cmd="StartPattern"]').addClass("ui-button-special-disabled").prop("disabled",!0));break;case"StopPattern":3===i&&(b.$("#listPattern").prop("disabled",!1),b.$('a[cmd="StartPattern"]').removeClass("ui-button-special-disabled").prop("disabled",!1));break;case"AutoPanOn":b.$('a[cmd="AutoPanOn"]').addClass("ui-button-special-disabled").prop("disabled",!0);break;case"AutoPanOff":b.$('a[cmd="AutoPanOn"]').removeClass("ui-button-special-disabled").prop("disabled",!1)}},d.prototype._buildArgs=function(a){var b=this,c={arg2:0,arg3:0,arg4:0};switch(a){case"AutoScanOn":case"AutoScanOff":case"ClearAutoScan":c.arg2=3===i?b.$("#listScan").val()-0:b.$("#ptz_set_autoScan").numberfield("value");break;case"GotoPreset":c.arg2=3===i?b.$("#listPreset").val()-0:b.$("#ptz_set_preset").numberfield("value");break;case"SetPreset":case"ClearPreset":c.arg2=b.$("#ptz_set_preset").numberfield("value");break;case"StartTour":case"StopTour":c.arg2=3===i?b.$("#listTour").val()-0:b.$("#ptz_set_tour").numberfield("value");break;case"ClearTour":c.arg2=b.$("#ptz_set_tour").numberfield("value");break;case"AddTour":case"DelTour":c.arg2=b.$("#ptz_set_tour").numberfield("value"),c.arg3=b.$("#ptz_set_tour_add").numberfield("value");break;case"StartPattern":case"StopPattern":c.arg2=3===i?b.$("#listPattern").val()-0:b.$("#ptz_set_pattern").numberfield("value");break;case"SetPatternBegin":case"SetPatternEnd":case"ClearPattern":c.arg2=b.$("#ptz_set_pattern").numberfield("value");break;case"AuxOn":case"AuxOff":c.arg2=b.$("#ptz_set_aux").numberfield("value");break;case"PositionABS":3===i?(c.arg2=10*b.$("#ptz_set_abs_x").numberfield("value"),c.arg3=10*b.$("#ptz_set_abs_y").numberfield("value")):(c.arg2=b.$("#ptz_set_abs_x").numberfield("value"),c.arg3=b.$("#ptz_set_abs_y").numberfield("value"),c.arg4=b.$("#ptz_set_abs_zoom").numberfield("value"))}return c},d.prototype._chkCmd=function(b){var c=this,d={StartTour:"StopTour",AutoPanOn:"AutoPanOff",AutoScanOn:"AutoScanOff",StartPattern:"StopPattern"},e=["StartTour","AutoPanOn","AutoScanOn","StartPattern","GotoPreset","PositionABS"],g=["StopTour","AutoPanOff","AutoScanOff","StopPattern"];return a.Deferred(function(h){if(-1!==a.inArray(b,e)){if(d.hasOwnProperty(c.lastCommand)){var i=c._buildArgs(d[c.lastCommand]);f.PTZ.start(d[c.lastCommand],i.arg2,i.arg3,i.arg4).done(h.resolve).fail(h.reject)}else h.resolve();c.lastCommand=b}else-1!==a.inArray(b,g)?(h.resolve(),c.lastCommand=b):h.resolve()}).promise()},d.prototype._getStatus=function(){var a=this,b=a.$("#ptz_set_azi_show");!b.is(":hidden")&&b.hasClass("current")?(f.PTZ.getStatus().done(function(b){var c=b.Postion;a.$("#ptz_set_azi_x").val(c[0]<0?(1800*c[0]+3600).round()/10:(1800*c[0]).round()/10),a.$("#ptz_set_azi_y").val((-1*c[1]*1800).round()/10)}),setTimeout(function(){a._getStatus()},200)):(b.removeClass("current"),b.attr("t","w_AzimuthDispShowBtn").parent().translation())},c.exports=d})}(jQuery);