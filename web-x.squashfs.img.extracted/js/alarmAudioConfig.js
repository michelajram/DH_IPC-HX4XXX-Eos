!function(a){define(function(require,a,b){b.exports=require("jsCore/pageTab")}),define("ala_audio",function(require,b,c){function d(){a.when(g.get("AudioInputCaps"),e.ConfigManager.getConfig("AudioInput")).done(function(a,b){var c=b[0].AudioSource;"Mic"==c&&a.Mic<2?j.$("#audiochannel").hide():j.$("#audiochannel").show()})}var e=require("jsCore/rpc"),f=require("jsCore/pageBase"),g=require("jsCore/ability"),h=require("common/common"),i=require("jsCore/modules/timeSection");require("widget/js/dui.slider"),require("widget/js/dui.figure"),require("jsCore/modules/eventHandler");var j=null,k=null,l=0,m=0,n=0;c.exports=f.extend({init:function(){j=this,j.$("#al_au_notingle").numberfield({min:0,max:100,allowDecimal:!1,allowNegative:!1}),webApp.EventCaps?e.EventManager.getEventLink("AudioDetect").done(function(b){var c=b.name,d=a.extend({},webApp.DefaultEvent),e=webApp.EventCaps;"default"===c[m][0]?d=e:c[m].each(function(a){d[a]=!0,"AlarmOutEnable"===a?d.AlarmOutLatch=e.AlarmOutLatch:"DejitterEnable"===a?d.DejitterRange=e.DejitterRange:"RecordEnable"===a&&(d.RecordLatch=e.RecordLatch)}),j.$("#al_au_event").eventHandler(d)}).fail(function(){j.$("#al_au_event").eventHandler()}):j.$("#al_au_event").eventHandler(),g.get("AudioDetectCaps").done(function(a){a&&a.AnomalyDetect&&j.$("#al_au_ano").parent().show(),a&&a.MutationDetect&&j.$("#al_au_mut").parent().show()}),j.$("#al_au_ano").slider({min:1}),j.$("#al_au_mut").slider({min:1,change:function(a,b){j.$("#al_au_figure").figure("threshold",b.value)}}),j.$("#al_au_figure").figure({width:300});for(var b=j.$("[sel-for=onChangeChannel]").empty().append('<option value="0" t="Audio_Channel+1"></option>'),c=1;c<webApp.AUDIO_IN_NUMBER;c++)b.append("<option value="+c+' t="Audio_Channel+'+(c+1)+'"></option>');b.translation(),e.ConfigManager.getConfig("AudioInput").done(function(a){var c=a[0].AudioSource;g.get("AudioInputCaps").done(function(a){a&&webApp.AUDIO_IN_NUMBER>1&&("LineIn"===c&&a.LineIn>1||"Mic"===c&&a.Mic>1)&&b.parent().show()})}),j.render()},render:function(){j._getConfig(!1),j.$("#al_au_figure").figure("start"),j.$("[sel-for=onChangeChannel]").val(0),n=0,l=(l+1)%65536;for(var a=0;a<webApp.AUDIO_IN_NUMBER;a++)e.DevAudioDetect.attachDetectData(a,l);webApp.NotifyVersion?h.devNotify.subscribe("devAudioDetect.notifyDetectData",window.showMutationFigure):j.$("#al_au_frame").attr("src","cgi-bin/audiomutation.cgi?sessionId="+e.getSession()),2===webApp.AUDIO_IN_NUMBER&&d()},_getConfig:function(a){e.ConfigManager.getConfig("AudioDetect").done(function(b){k=b,j._onChangeChannel(),a&&j.tip("success","Operateingsuccess"),j.disabled("[btn-for=onConfirm]",!1)}).fail(function(){j.tip("error","Operateingfailure"),j.disabled("[btn-for=onConfirm]",!0)})},leave:function(){j._detachData()},destory:function(){j._detachData()},onChangeChannel:function(a){var b=(k[parseInt(j.$("[sel-for=onChangeChannel]").val())],j.$(a.target).val()-0);k[n].AnomalyDetect=j.$("#al_au_expopen").prop("checked"),k[n].MutationDetect=j.$("#al_au_breopen").prop("checked"),k[n].AnomalySensitive=j.$("#al_au_ano").slider("value"),k[n].MutationThreold=j.$("#al_au_mut").slider("value"),k[n].EventHandler=j.$("#al_au_event").eventHandler("get"),k[n].EventHandler.Dejitter=j.$("#al_au_notingle").numberfield("value"),n=b,j.$("#al_au_expopen").prop("checked",k[n].AnomalyDetect),j.$("#al_au_breopen").prop("checked",k[n].MutationDetect),j.$("#al_au_notingle").numberfield("value",k[n].EventHandler.Dejitter),j.$("#al_au_ano").slider("value",k[n].AnomalySensitive),j.$("#al_au_mut").slider("value",k[n].MutationThreold),j.$("#al_au_figure").figure("threshold",k[n].MutationThreold),j.$("#al_au_event").eventHandler("set",k[n].EventHandler)},_onChangeChannel:function(){var a=k[parseInt(j.$("[sel-for=onChangeChannel]").val())];j.$("#al_au_expopen").prop("checked",a.AnomalyDetect),j.$("#al_au_breopen").prop("checked",a.MutationDetect),j.$("#al_au_notingle").numberfield("value",a.EventHandler.Dejitter),j.$("#al_au_ano").slider("value",a.AnomalySensitive),j.$("#al_au_mut").slider("value",a.MutationThreold),j.$("#al_au_figure").figure("threshold",a.MutationThreold),j.$("#al_au_event").eventHandler("set",a.EventHandler)},onDefault:function(){e.ConfigManager.getDefault("AudioDetect").done(function(a){k=a,j._onChangeChannel(),j.tip("success","Defaultsuccess")}).fail(function(){j.tip("error","Defaultfailure")})},onRefresh:function(){j._getConfig(!0)},onConfirm:function(){var a=parseInt(j.$("[sel-for=onChangeChannel]").val());k[a].AnomalyDetect=j.$("#al_au_expopen").prop("checked"),k[a].MutationDetect=j.$("#al_au_breopen").prop("checked"),k[a].AnomalySensitive=j.$("#al_au_ano").slider("value"),k[a].MutationThreold=j.$("#al_au_mut").slider("value"),k[a].EventHandler=j.$("#al_au_event").eventHandler("get"),k[a].EventHandler.Dejitter=j.$("#al_au_notingle").numberfield("value"),e.ConfigManager.setConfig("AudioDetect",k).done(function(){j.tip("success","Succeed in saving configure")}).fail(function(){j.tip("error","Saving failure")})},onSetPeriod:function(){var a=k[parseInt(j.$("[sel-for=onChangeChannel]").val())];i.open(a.EventHandler.TimeSection).done(function(b){a.EventHandler.TimeSection=b})},_detachData:function(){j.$("#al_au_figure").figure("stop");for(var a=0;a<webApp.AUDIO_IN_NUMBER;a++)e.DevAudioDetect.detachDetectData(a,l);webApp.NotifyVersion?h.devNotify.detach("devAudioDetect.notifyDetectData"):j.$("#al_au_frame").attr("src","")}}),window.showMutationFigure=function(b){if(b&&b.data){var c=parseInt(j.$("[sel-for=onChangeChannel]").val()),d=b.data;c===d.Channel&&a.isNumeric(d.AudioMutation)&&j.$("#al_au_figure").figure("push",d.AudioMutation)}}})}(jQuery);