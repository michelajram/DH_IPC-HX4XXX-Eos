!function(a){define(function(require,a,b){b.exports=require("jsCore/pageTab")}),define("analogAlarm",function(require,b,c){var d=require("jsCore/rpc"),e=require("jsCore/pageBase"),f=require("jsCore/ability");require("jsCore/modules/eventHandler");var g=null,h=null,i=null,j=0;c.exports=e.extend({init:function(){g=this,h=g.$("#ana_channel"),g.$("[key = AlarmLimit]").numberfield({max:500,min:-500,allowDecimal:!0,decimalPrecision:2,exceptValue:["","-"]}).blur(function(){var a=g.$("#ana_minAlarm").numberfield("value"),b=g.$("#ana_maxAlarm").numberfield("value");a>b&&g.$("#ana_maxAlarm").numberfield("value",b=a)}),g.$("[key = LowerLimit], [key = UpperLimit]").numberfield({max:2e5,min:-500,allowDecimal:!0,decimalPrecision:2,exceptValue:["","-"]}).blur(function(){var a=g.$("[key = LowerLimit]").numberfield("value"),b=g.$("[key = UpperLimit]").numberfield("value");a>b&&g.$("[key = UpperLimit]").numberfield("value",b=a)}),g.$("[key = Compensation]").numberfield({max:100,min:-100,allowDecimal:!0,decimalPrecision:2,exceptValue:["","-"]}),f.get("AnalogCollect").done(function(a){for(var b=0;b<a.Channel;b++)h.append("<li data-for="+b+'><i class="i-arrows"></i><span t="w_Channel"></span>'+(b+1)+"</li>");h.translation(),h.find("li:first").addClass("current"),g.render()}),g.$("#ana_eventHandler").eventHandler({PtzLinkEnable:!1}),h.delegate("li","click",g._changeChannel)},render:function(a){plugin.cover("#ana_video",function(){plugin.SetModuleMode(1),plugin.open()}),d.ConfigManager.getConfig("AnalogAlarm").done(function(b){i=b,h.find("li.current").click(),a&&g.$("#ana_tip").tip("success",tl("Operateingsuccess"))}).fail(function(){a&&g.$("#ana_tip").tip("error",tl("Operateingfailure"))})},leave:function(){plugin.hide(),plugin.close()},_changeChannel:function(){h.children("li").removeClass("current"),j=a(this).addClass("current").attr("data-for"),g._renderElement()},_renderElement:function(){var b=i[j];g.$("#autoReg_eable").prop("checked",b.Enable),g.$("[key]").each(function(){var c=a(this).attr("key"),d=a(this).attr("pos");a(this).val(void 0!==d?b[c][d]:b[c])}),g.$("#ana_eventHandler").eventHandler("set",b.EventHandler)},_save:function(){var b=i[j];b.Enable=g.$("#autoReg_eable").prop("checked"),g.$("[key]").each(function(){var c=a(this).attr("key"),d=a(this).attr("pos"),e=a(this).attr("number");void 0!==d?b[c][d]=a(this).val()-0:b[c]=void 0!==e?a(this).numberfield("value"):a(this).val()}),b.EventHandler=g.$("#ana_eventHandler").eventHandler("get")},onConfirm:function(){g._save(),d.ConfigManager.setConfig("AnalogAlarm",i).done(function(){g.$("#ana_tip").tip("success",tl("Succeed in saving configure"))}).fail(function(){g.$("#ana_tip").tip("error",tl("Saving failure"))})},onDefault:function(){d.ConfigManager.getDefault("AnalogAlarm").done(function(a){i=a,g._renderElement(),g.$("#ana_tip").tip("success",tl("Defaultsuccess"))}).fail(function(){g.$("#ana_tip").tip("error",tl("Defaultfailure"))})},onRefresh:function(){g.render(!0)}})})}(jQuery);