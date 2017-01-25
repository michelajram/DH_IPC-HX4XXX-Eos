!function(a){define(function(require,a,b){b.exports=require("jsCore/pageTab")}),define("global",function(require,b,c){var d=require("jsCore/rpc"),e=require("jsCore/plugin"),f=require("jsCore/rpcLogin"),g=require("jsCore/pageBase");require("widget/js/dui.slider"),require("widget/js/dui.iconlist"),require("widget/js/dui.iconSelect");var h=null,i=webApp.CHANNEL_NUMBER>1?1:0,j=0,k=null;c.exports=g.extend({init:function(){h=this,h._initTab(),h.render()},_initTab:function(){var b=h.$(".u-tab"),c=h.$(".u-tab-content");-1!==webApp.DeviceType.indexOf("TPC")&&(webApp.CHANNEL_NUMBER>1?(h.$("#global_channel").parent().removeClass("fn-hide"),h.$("#global_channel").parent().next("div").removeClass("fn-hide"),k=a("#global_channel").iconSelect({channelNumber:webApp.CHANNEL_NUMBER,allEnable:!1,change:function(a,b){j=b.ch,h.$("#global_tab").tab("select",j?"global_thermal":"global_visible")}}),k.iconSelect("index",j)):(b.find("[data-for=global_visible]").remove(),c.find("[data-page=global_visible]").remove())),b.children("li[data-for]").each(function(a,b){var d=h.$(b),e=d.attr("data-for");require.async(e,function(a){d.data("tabInstance",new a({element:c.find("[data-page="+e+"]")}))})}),b.tab({switched:function(a,c){c.from&&(b.children("li[data-for="+c.from+"]").data("tabInstance").leave(),b.children("li[data-for="+c.to+"]").data("tabInstance").render())}})},render:function(){i&&d.ConfigManager.getConfig("CalibratePoints").done(function(b){var c=b.Enable;if(i&&c){a("#global_channel").parent().next().show(),a("#global_channel").parent().show(),a(".u-tab-content").find("[data-page=global_visible]").removeClass("fn-hide"),k.iconSelect("index",j);var d=j?"global_thermal":"global_visible";a("#global_tab").children("li[data-for="+d+"]").data("tabInstance").render()}else k.iconSelect("index",i),a("#global_channel").parent().next().hide(),a("#global_channel").parent().hide(),a(".u-tab-content").find("[data-page=global_visible]").addClass("fn-hide"),a("#global_tab").children("li[data-for=global_thermal]").data("tabInstance").render()}),!i&&a("#global_tab").children("li[data-for=global_thermal]").data("tabInstance").render()},leave:function(){h.$("#global_tab").children("li.current").data("tabInstance").leave(),e.hide()},destory:function(){j=0,h.$(".u-tab").children().each(function(a,b){h.$(b).data("tabInstance").destory()})}}),define("global_visible",function(require,a,b){var c,h=null,i=0;b.exports=g.extend({init:function(){h=this,h.render()},render:function(){e.cover("#global_video",function(){e.SetRegionNum(0),e.SetModuleMode(1);var a="Monitor_0"+(i+1);f.chkAuthority(a)?(e.SetVisibleVideoWnd(1,i),e.ConnectRealVideoEx(i,i,0)):(e.SetVisibleVideoWnd(1,i),e.SetVideoWndTip(i,tl("noVideoAuthoity")))}),h._getConfig(!1)},leave:function(){},_renderElements:function(){h.$("#global_hcOn").prop("checked",c[0].HotFollowEnable),h.$("#global_hcOff").prop("checked",!c[0].HotFollowEnable),h.$("#global_temperOn").prop("checked",c[0].RadiometryEnable),h.$("#global_temperOff").prop("checked",!c[0].RadiometryEnable)},onDefault:function(){return d.ConfigManager.getDefault("VisualRadiometry").done(function(a){c=a,h._renderElements(),h.$("#global_tip").tip("success",tl("Defaultsuccess"))}).fail(function(){h.$("#global_tip").tip("error",tl("Defaultsuccess"))}),!1},onRefresh:function(){return h._getConfig(!0),!1},onSave:function(){return c[0].HotFollowEnable=h.$("#global_hcOn").prop("checked"),c[0].RadiometryEnable=h.$("#global_temperOn").prop("checked"),d.ConfigManager.setConfig("VisualRadiometry",c).done(function(){h.$("#global_tip").tip("success",tl("Succeed in saving configure"))}).fail(function(){h.$("#global_tip").tip("error",tl("Saving failure"))}),!1},_getConfig:function(a){d.ConfigManager.getConfig("VisualRadiometry").done(function(b){c=b,h._renderElements(),a&&h.$("#global_tip").tip("success",tl("Operateingsuccess"))}).fail(function(){h.$("#global_tip").tip("error",tl("Operateingfailure"))})}})}),define("global_thermal",function(require,b,c){var h,j,k,l=null,m=i;c.exports=g.extend({init:function(){l=this,l.bind(),!i&&l.render()},bind:function(){l.$("#global_temperUnit").change(function(){j.TemperatureUnit=l.$("#global_temperUnit").val();var a=l.$("#global_temperUnit").get(0).selectedIndex;l._onChangeTemperUnit(a,!1)}),l.$("#glo_advance .ui-switch-icon").click(function(){var b=l.$(this).toggleClass("toggle").attr("data-link");a("#"+b).slideToggle()}),a("#glo_advancebox").hide()},render:function(){e.cover("#global_video",function(){e.SetRegionNum(0),e.SetModuleMode(1);var a="Monitor_0"+(m+1);f.chkAuthority(a)?(e.SetVisibleVideoWnd(1,m),e.ConnectRealVideoEx(m,m,0)):(e.SetVisibleVideoWnd(1,m),e.SetVideoWndTip(m,tl("noVideoAuthoity")))}),a.when(d.RadiometryManager.getCaps("All",m),d.ConfigManager.getConfig("HeatImagingThermometry"),d.ConfigManager.getConfig("ThermoAlgo")).done(function(b,c,d){h=b,j=c,k=a.extend(!0,{},j),h.Altitude?"Flir"===d&&l.$("[thermoAlgo]").remove():l.$("[thermoAlgo]").remove(),"Fahrenheit"==j.TemperatureUnit?l._onChangeTemperUnit(1,!0):(l._initSlider(),l._renderElements())})},leave:function(){},_initSlider:function(){l.$("[linkSlider][key]").each(function(a,b){var c=l.$(b),d=c.attr("cfg"),e=c.attr("key");c.numberfield({min:l._getConfTable("Caps",e,0),max:l._getConfTable("Caps",e,1),value:l._getConfTable(d,e,0)}).blur(function(){c.prev("[slider][key]").slider("value",c.numberfield("value")),l._setConfTable(d,e,0,c.numberfield("value"))})}),l.$("[slider][key]").each(function(a,b){var c=l.$(b),d=c.attr("cfg"),e=c.attr("key");c.slider({min:l._getConfTable("Caps",e,0),max:l._getConfTable("Caps",e,1),step:l._getConfTable("Caps",e,2),change:function(){c.next("[linkSlider][key]").numberfield("value",c.slider("value"))},complete:function(){l._setConfTable(d,e,0,c.slider("value"))}})})},_renderElements:function(){l.$("[slider][key]").each(function(a,b){var c=l.$(b),d=c.attr("cfg"),e=c.attr("key");c.slider("value",l._getConfTable(d,e,0))}),l.$("#global_openTemper").prop("checked",j.TemperEnable),l.$("#global_temperUnit").val(j.TemperatureUnit),l.$("#global_isothermOn").prop("checked",j.Isotherm.Enable),l.$("#global_isothermOff").prop("checked",!j.Isotherm.Enable),l.$("#global_colorCodeOn").prop("checked",j.Isotherm.ColorBarDisplay),l.$("#global_colorCodeOff").prop("checked",!j.Isotherm.ColorBarDisplay)},_onChangeTemperUnit:function(b,c){var d=["AtmosphericTemperature","ReflectedTemperature","MinLimitTemp","MediumTemp","MaxLimitTemp","SaturationTemp"];a.each(d,function(a,c){h[c].Min=l._tansUnit(h[c].Min,b),h[c].Max=l._tansUnit(h[c].Max,b)}),c||a.each(d,function(a,c){2>a?j[c]=l._tansUnit(j[c],b):j.Isotherm[c]=l._tansUnit(j.Isotherm[c],b)}),l._initSlider(),l._renderElements()},_tansUnit:function(a,b){return b?(9*a/5+32).round(1):(5*(a-32)/9).round(1)},_setConfTable:function(a,b,c,d){var e,f=a.split(".");e=0==c?"Min":1==c?"Max":"Step",1===f.length?"Caps"==a?h[b][e]=d:"Global"==a&&("ObjectDistanceMeter"==b?(dis=d.toFixed(1).split("."),j.ObjectDistance=~~dis[0],j.DistanceDecimalPart=.1*~~dis[1]):j[b]=d):2===f.length&&"Global"==f[0]&&("ObjectDistanceMeter"==b?(dis=d.toFixed(1).split("."),j[f[1]].ObjectDistance=~~dis[0],j[f[1]].DistanceDecimalPart=.1*~~dis[1]):j[f[1]][b]=d)},_needChange:function(){var a=l.$("#global_temperUnit").val();j.TemperatureUnit!=a?"Centigrade"==j.TemperatureUnit?l._onChangeTemperUnit(0,!0):l._onChangeTemperUnit(1,!0):l._renderElements()},_getConfTable:function(a,b,c){var d,e=a.split(".");if(d=0==c?"Min":1==c?"Max":"Step",1===e.length){if("Caps"==a)return h[b][d].round("ObjectEmissivity"==b&&2==c?2:1);if("Global"==a)return"ObjectDistanceMeter"==b?j.ObjectDistance+j.DistanceDecimalPart:j[b].round("ObjectEmissivity"==b?2:1)}else if(2===e.length&&"Global"==e[0])return j[e[1]][b].round(1)},onDefault:function(){return d.ConfigManager.getDefault("HeatImagingThermometry").done(function(a){j=a,l._needChange(),l.$("#global_tip2").tip("success",tl("Defaultsuccess"))}).fail(function(){l.$("#global_tip2").tip("error",tl("Defaultfailure"))}),!1},onRefresh:function(){return d.ConfigManager.getConfig("HeatImagingThermometry").done(function(a){j=a,l._needChange(),l.$("#global_tip2").tip("success",tl("Operateingsuccess"))}).fail(function(){l.$("#global_tip2").tip("error",tl("Operateingfailure"))}),!1},onSave:function(){return l._checkValiable()?(j.TemperEnable=l.$("#global_openTemper").prop("checked"),j.Isotherm.Enable=l.$("#global_isothermOn").prop("checked"),j.Isotherm.ColorBarDisplay=l.$("#global_colorCodeOn").prop("checked"),["HighCTMakerColor","LowCTMakerColor","HotSpotFollow","HotSpotColorMode"].each(function(a){j[a]=k[a]}),d.ConfigManager.setConfig("HeatImagingThermometry",j).done(function(){l.$("#global_tip2").tip("success",tl("Succeed in saving configure"))}).fail(function(){l.$("#global_tip2").tip("error",tl("Saving failure"))}),!1):(l.$("#global_tip2").tip("error",tl("novaliableValue")),!1)},_checkValiable:function(){var a=j.Isotherm.MinLimitTemp,b=j.Isotherm.MediumTemp,c=j.Isotherm.MaxLimitTemp,d=j.Isotherm.SaturationTemp;return b>=a&&c>=b&&d>=c?!0:!1}})})})}(jQuery);