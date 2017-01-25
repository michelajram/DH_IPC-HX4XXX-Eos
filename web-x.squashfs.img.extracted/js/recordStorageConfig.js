define(function(require){var a=require("jsCore/rpc"),b=Page.recordStorageConfig={Tab:[],init:function(){b.Tab.path.init(),b.Tab.local.init(),b.Tab.ftp.init(),b.Tab.network.init(),b.Tab.store.init(),webApp.GongAnDetect&&($$("#vertical_line").setStyle("display","block"),$$("#right_half").setStyle("display","block"),$$("#rs_tab_title_store").setStyle("display","block"),$$("#rs_tab_store").setStyle("display","block")),b.translate(),b.bind(),b.render()},translate:function(){$("page_recordStorageConfig").translation()},render:function(){!isEnable("is_show_help")&&$("rs_help").setStyle("display","none"),$$(".rs_tab_title.ui-tab-current").fireEvent("click")},bind:function(){$$(".rs_tab_title").addEvent("click",b._onTabTitleClick),$("rs_help").addEvent("click",function(){openHelp("recordStorageConfig.htm")})},_onTabTitleClick:function(){var a=this.getProperty("data-for");b.Tab[a].render(),$$(".rs_tab_title").removeClass("ui-tab-current"),$$(".rs_tabs").setStyle("display","none"),this.addClass("ui-tab-current"),$("rs_tab_"+a).setStyle("display","block")}};!function(){var b,c=[!1,!1,!1,!1,!1,!1,!1,!1,!1],d=[!1,!1,!1,!1,!1,!1,!1,!1,!1],e=!0,f=!1,g=Page.recordStorageConfig.Tab.path={init:function(){g.translate(),g.bind(),g._showAlarmInfo()},translate:function(){},render:function(){g._getConfigAndRenderElements()},bind:function(){$$("#page_recordStorageConfig input[id^=rs_record]").addEvent("click",function(){g._onCheckBoxClick("record",this)}),$$("#page_recordStorageConfig input[id^=rs_snapshot]").addEvent("click",function(){g._onCheckBoxClick("snapshot",this)}),$("rs_tab_path_default").addEvent("click",g._onDefaultClick),$("rs_tab_path_confirm").addEvent("click",g._onConfirmClick),$("rs_tab_path_refresh").addEvent("click",g._onRefreshClick)},_showAlarmInfo:function(){webApp.ALARM_IN_NUMBER>0||webApp.IsLocalStore?($$(".rs_tab_path_event_type_alarm").setStyle("display",""),$$(".rs_tab_path_event_check_alarm").setStyle("display","")):(f=!0,$$(".rs_tab_path_event_type_alarm").setStyle("display","none"),$$(".rs_tab_path_event_check_alarm").setStyle("display","none")),isEnable("show_NAS_config")&&$$(".rs_tab_path_remote_wrap").setStyle("display",""),webApp.IsLocalStore?$$(".rs_tab_path_local_wrap").setStyle("display",""):$$(".rs_tab_path_local_wrap").setStyle("display","none");for(var a=$$("#rs_tab_path_videotab table tr").filter(function(a){return"none"!=a.style.display}),b=$$("#rs_tab_path_snaptab table tr").filter(function(a){return"none"!=a.style.display}),c=0;c<a.length;c++){var d=c%2?"":"ui-special-table-tr-odd";a[c].addClass(d)}for(var c=0;c<b.length;c++){var d=c%2?"":"ui-special-table-tr-odd";b[c].addClass(d)}},_setVideoAndSnapShotArray:function(a){c[0]=a.TimingRecord.Local,c[3]=a.TimingRecord.FTP=!!a.TimingRecord.FTP,c[6]=a.TimingRecord.Remote,c[1]=a.VideoDetectRecord.Local,c[4]=a.VideoDetectRecord.FTP=!!a.VideoDetectRecord.FTP,c[7]=a.VideoDetectRecord.Remote,c[2]=a.AlarmRecord.Local,c[5]=a.AlarmRecord.FTP=!!a.AlarmRecord.FTP,c[8]=a.AlarmRecord.Remote,d[0]=a.TimingSnapShot.Local,d[3]=a.TimingSnapShot.FTP=!!a.TimingSnapShot.FTP,d[6]=a.TimingSnapShot.Remote,d[1]=a.VideoDetectSnapShot.Local,d[4]=a.VideoDetectSnapShot.FTP=!!a.VideoDetectSnapShot.FTP,d[7]=a.VideoDetectSnapShot.Remote,d[2]=a.AlarmSnapShot.Local,d[5]=a.AlarmSnapShot.FTP=!!a.AlarmSnapShot.FTP,d[8]=a.AlarmSnapShot.Remote},_showRecordCheck:function(){for(var a=0;9>a;a++)$("rs_record_"+a).checked=c[a]},_showSnapShotCheck:function(){for(var a=0;9>a;a++)$("rs_snapshot_"+a).checked=d[a]},_showSync:function(a){$("rs_tab_ftp_sync").checked=a.TimingRecord.AutoSync||a.VideoDetectRecord.AutoSync||a.AlarmRecord.AutoSync||a.TimingSnapShot.AutoSync||a.VideoDetectSnapShot.AutoSync||a.AlarmSnapShot.AutoSync,e&&($("rs_tab_ftp_emergency").checked=a.TimingRecord.LocalForEmergency||a.VideoDetectRecord.LocalForEmergency||a.AlarmRecord.LocalForEmergency||a.TimingSnapShot.LocalForEmergency||a.VideoDetectSnapShot.LocalForEmergency||a.AlarmSnapShot.LocalForEmergency,e=!1)},_onCheckBoxClick:function(a,b){var e,h,i=b.id.replace(/[^\d]/g,"")-0;if("record"===a?(e=c,h=d):(e=d,h=c),e[i]=b.checked,b.checked)switch(i){case 0:case 1:case 2:for((e[3]||e[6])&&(e[0]=!0),(e[4]||e[7])&&(e[1]=!0),(e[5]||e[8])&&(e[2]=!0),f&&(e[2]=!1,h[2]=!1),i=3;9>i;i++)e[i]=!1;break;case 3:case 4:case 5:for((e[0]||e[6])&&(e[3]=!0),(e[1]||e[7])&&(e[4]=!0),(e[2]||e[8])&&(e[5]=!0),i=0;3>i;i++)e[i]=!1;for(i=6;9>i;i++)e[i]=!1;for(h[6]&&(h[3]=!0),h[7]&&(h[4]=!0),h[8]&&(h[5]=!0),f&&(e[5]=!1,h[5]=!1),i=6;9>i;i++)h[i]=!1;break;case 6:case 7:case 8:for((e[0]||e[3])&&(e[6]=!0),(e[1]||e[4])&&(e[7]=!0),(e[2]||e[5])&&(e[8]=!0),i=0;6>i;i++)e[i]=!1;for(h[3]&&(h[6]=!0),h[4]&&(h[7]=!0),h[5]&&(h[8]=!0),f&&(e[8]=!1,h[8]=!1),i=3;6>i;i++)h[i]=!1}g._showRecordCheck(),g._showSnapShotCheck()},_onConfirmClick:function(){var e=b,f=$("rs_tab_ftp_emergency").checked,g=$("rs_tab_ftp_sync").checked;e.TimingRecord.Local=c[0],e.TimingRecord.FTP=c[3],e.TimingRecord.Remote=c[6],e.TimingRecord.LocalForEmergency=c[3]&&f,e.TimingRecord.AutoSync=c[3]&&g,e.VideoDetectRecord.Local=c[1],e.VideoDetectRecord.FTP=c[4],e.VideoDetectRecord.Remote=c[7],e.VideoDetectRecord.LocalForEmergency=c[4]&&f,e.VideoDetectRecord.AutoSync=c[4]&&g,e.AlarmRecord.Local=c[2],e.AlarmRecord.FTP=c[5],e.AlarmRecord.Remote=c[8],e.AlarmRecord.LocalForEmergency=c[5]&&f,e.AlarmRecord.AutoSync=c[5]&&g,e.TimingSnapShot.Local=d[0],e.TimingSnapShot.FTP=d[3],e.TimingSnapShot.LocalForEmergency=d[3]&&f,e.TimingSnapShot.AutoSync=d[3]&&g,e.TimingSnapShot.Remote=d[6],e.VideoDetectSnapShot.Local=d[1],e.VideoDetectSnapShot.FTP=d[4],e.VideoDetectSnapShot.LocalForEmergency=d[4]&&f,e.VideoDetectSnapShot.AutoSync=d[4]&&g,e.VideoDetectSnapShot.Remote=d[7],e.AlarmSnapShot.Local=d[2],e.AlarmSnapShot.FTP=d[5],e.AlarmSnapShot.LocalForEmergency=d[5]&&f,e.AlarmSnapShot.AutoSync=d[5]&&g,e.AlarmSnapShot.Remote=d[8],e.ManualRecord.Local=c[0]||c[1]||c[2],e.ManualRecord.LocalForEmergency=e.TimingRecord.LocalForEmergency||e.VideoDetectRecord.LocalForEmergency||e.AlarmRecord.LocalForEmergency,e.ManualRecord.AutoSync=e.TimingRecord.AutoSync||e.VideoDetectRecord.AutoSync||e.AlarmRecord.AutoSync,e.ManualRecord.Remote=c[6]||c[7]||c[8]||c[3]||c[4]||c[5],e.EventRecord.Local=e.ManualRecord.Local,e.EventRecord.LocalForEmergency=e.ManualRecord.LocalForEmergency,e.EventRecord.AutoSync=e.ManualRecord.AutoSync,e.EventRecord.Remote=e.ManualRecord.Remote,e.ManualSnapShot.Local=d[0]||d[1]||d[2],e.ManualSnapShot.LocalForEmergency=e.TimingSnapShot.LocalForEmergency||e.VideoDetectSnapShot.LocalForEmergency||e.AlarmSnapShot.LocalForEmergency,e.ManualSnapShot.AutoSync=e.TimingSnapShot.AutoSync||e.VideoDetectSnapShot.AutoSync||e.AlarmSnapShot.AutoSync,e.ManualSnapShot.Remote=d[6]||d[7]||d[8]||d[3]||d[4]||d[5],e.EventSnapShot.Local=e.ManualSnapShot.Local,e.EventSnapShot.LocalForEmergency=e.ManualSnapShot.LocalForEmergency,e.EventSnapShot.AutoSync=e.ManualSnapShot.AutoSync,e.EventSnapShot.Remote=e.ManualSnapShot.Remote,a.ConfigManager.getConfig("NAS").done(function(b){var c,d,f;for(c=b,d=e.TimingRecord.FTP||e.VideoDetectRecord.FTP||e.AlarmRecord.FTP||e.TimingSnapShot.FTP||e.VideoDetectSnapShot.FTP||e.AlarmSnapShot.FTP,hasNFS=e.TimingRecord.Remote||e.VideoDetectRecord.Remote||e.AlarmRecord.Remote||e.TimingSnapShot.Remote||e.VideoDetectSnapShot.Remote||e.AlarmSnapShot.Remote,f=0;f<c.length;f++)"FTP"!=c[f].Protocol&&d?c[f].Enable=!1:"FTP"!=c[f].Protocol||d?"NFS"!=c[f].Protocol||hasNFS||(c[f].Enable=!1,$("rs_tab_network_enable").checked=!1,$("rs_tab_network_enable").disabled=!0):(c[f].Enable=!1,$("rs_tab_ftp_enable").checked=!1,$("rs_tab_ftp_enable").disabled=!0,$("rs_tab_ftp_emergency").checked=!1,$("rs_tab_ftp_emergency").disabled=!0);a.ConfigManager.setConfig("RecordStoragePoint",[e]).done(function(){a.ConfigManager.setConfig("NAS",c).done(function(){remarkDisplay("rs_tab_path_remark",tl("Succeed in saving configure"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_path_remark",tl("Saving failure"),3e3,1)})}).fail(function(){remarkDisplay("rs_tab_path_remark",tl("Saving failure"),3e3,1)})})},_onRefreshClick:function(){g._getConfigAndRenderElements(!0)},_onDefaultClick:function(){a.ConfigManager.getDefault("RecordStoragePoint").done(function(a){b=a[0],g._setVideoAndSnapShotArray(b),g._showSync(b),g._showRecordCheck(),g._showSnapShotCheck(),remarkDisplay("rs_tab_path_remark",tl("Defaultsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_path_remark",tl("Defaultfailure"),3e3,1)})},_getConfigAndRenderElements:function(c){a.ConfigManager.getConfig("RecordStoragePoint").done(function(a){b=a[0],g._setVideoAndSnapShotArray(b),g._showSync(b),g._showRecordCheck(),g._showSnapShotCheck(),c&&remarkDisplay("rs_tab_path_remark",tl("Operateingsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_path_remark",tl("Operateingfailure"),3e3,1)})},getRecordStoragePoint:function(){var a=$unlink(b);return a}}}(),function(){var b=[],c=[-1,-1],d=!1,e=Page.recordStorageConfig.Tab.local={init:function(){return webApp.IsLocalStore?$("rs_tab_title_local").setStyle("display",""):$("rs_tab_title_local").setStyle("display","none"),login.chkAuthority("MHardisk")?(e.formatDialog=new Dialog("rs_format_dialog",e._formatSDCard,"rs_format_confirm","rs_format_cancel",tl("w_Format")),e.formatDialog.setPosition(420,120),e.translate(),void e.bind()):void($("rs_tab_title_local").style.display="none")},translate:function(){},render:function(f){e.formatDialog.close(),c=[-1,-1],d=!1,a.Storage.getDeviceAllInfo().done(function(a){b=a,b?(f&&remarkDisplay("rs_tab_local_remark",tl("Operateingsuccess"),3e3,0),e._showDeviceList(f),e._addDeviceListEventLister(),$$("#rs_tab_local_device_0_0").fireEvent("click")):(remarkDisplay("rs_tab_local_remark",tl("w_No SD Card"),3e3,2),$("rs_tab_local_device_list").innerHTML="")}).fail(function(){remarkDisplay("rs_tab_local_remark",tl("w_No SD Card"),3e3,2),$("rs_tab_local_device_list").innerHTML=""})},bind:function(){$("rs_tab_local_read_only").addEvent("click",e._onReadOnlyClick),$("rs_tab_local_read_write").addEvent("click",e._onReadWriteClick),$("rs_tab_local_hot_swap").addEvent("click",e._onHotSwapClick),$("rs_tab_local_refresh").addEvent("click",e._onRreshClick),$("rs_tab_local_format").addEvent("click",e._onFormatClick)},_showDeviceList:function(a){$("rs_tab_local_device_list").innerHTML="";var c='<table cellpadding="0" cellspacing="0" >';b.each(function(b,f){if("Initializing"===b.State)remarkDisplay("rs_tab_local_remark",tl("w_loadingSD"),6e3,2),e.render.delay(6e3,this,a);else{var g="";if(b.HealthDataFlag)if(d=!0,2===b.HealthDataFlag)g='<div class="ui-autobox fn-height20">'+tl("Unknown")+"</div>";else{var h="";switch(!0){case b.LifePercent<=60:h="Excellent";break;case b.LifePercent<=90:h="Good";break;default:h="Bad"}g='<div class="ui-autobox fn-height20"><div class="ui-autobox-content"><div class="recordstorage-progress">                                                <p class="recordstorage-progress-used progress-'+h+'" style="width:'+(100-b.LifePercent)+'%;"></p>                                            </div><div class="fn-left fn-textleft">'+tl("health"+h)+"</div></div></div>"}(b.Detail||[]).each(function(a,b){if(null!==a){var d=100*(a.UsedBytes/a.TotalBytes).round(1),e="width:"+d+"%;";c+='<tr id="rs_tab_local_device_'+f+"_"+b+'" class="trClass">',c+='<td class="fn-widp20">'+tl("w_localDisk")+(f+1)+"</td>",c+='<td class="fn-widp10">'+tl(a.IsError?"w_diskError":"w_Status_ok")+"</td>",c+='<td class="fn-widp10">'+tl(a.Type)+"</td>",c+='<td>                                        <div class="ui-autobox fn-height20"><div class="ui-autobox-content"><div class="recordstorage-progress">                                            <p class="recordstorage-progress-used" style="'+e+'"></p>                                        </div><div class="fn-left fn-minwid150 fn-textleft">'+(a.UsedBytes/1048576).round(1)+"M/"+(a.TotalBytes/1048576).round(1)+"M                                    </div></div></div></td>",c+='<td class="health fn-widp20">'+g+"</td>",c+="</tr>"}})}}),c+="</table>",$("rs_tab_local_device_list").innerHTML=c,$$("#rs_tab_local_device_list tr").removeClass("ui-table-tr-current"),$$("#rs_tab_local_device_list tr:first-child").addClass("ui-table-tr-current"),d?$$("#rs_tab_local .health").removeClass("fn-hide"):$$("#rs_tab_local .health").addClass("fn-hide")},_addDeviceListEventLister:function(){$$("#rs_tab_local_device_list tr").addEvent("click",function(){c=this.id.replace(/[^\d]*/,"").split("_"),$$("#rs_tab_local_device_list tr").removeClass("ui-table-tr-current"),this.addClass("ui-table-tr-current")})},_onRreshClick:function(){e.render(!0)},_onReadOnlyClick:function(){e._setType("ReadOnly")},_onReadWriteClick:function(){e._setType("ReadWrite")},_setType:function(d){if(-1===c[0]||-1===c[1])return void remarkDisplay("rs_tab_local_remark",tl("w_select"),3e3,2);if(webApp.IsNewProtocol)a.WorkDirectory.setGroup(b[c[0]].Detail[c[1]].Path,d).done(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1)}).always(function(){e.render()});else{var f;if(f=b[c[0]].Detail[c[1]].Pointer,0==f)return void remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1);a.WorkDirectory.setType(f,d).done(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1)}).always(function(){e.render()})}},_onHotSwapClick:function(){return-1===c[0]||-1===c[1]?void remarkDisplay("rs_tab_local_remark",tl("w_select"),3e3,2):void a.DevStorage.eject(b[c[0]].Name).done(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1)}).always(function(){e.render()})},_onFormatClick:function(){return-1===c[0]||-1===c[1]?void remarkDisplay("rs_tab_local_remark",tl("w_select"),3e3,2):void e.formatDialog.show()},_formatSDCard:function(){if(e.formatDialog.close(),webApp.IsNewProtocol)a.DevStorage.getDeviceInfo(b[c[0]].Name).done(function(d){var f="";a.Integration.formatPatition(b[c[0]].Name,b[c[0]].Name,d.Partitions[c[1]].FileSystem).done(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingsuccess"),3e3,0),f="w_format SD Restart device"}).fail(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1),f="w_needReboot"}).always(function(){webApp.reboot(f),e.render()})});else{var d=b[c[0]].Pointer;if(0===d)return void remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1);a.Integration.formatPatitionOld(d,c[1]-0).done(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingsuccess"),3e3,0),webApp.reboot("w_format SD Restart device")}).fail(function(){remarkDisplay("rs_tab_local_remark",tl("Operateingfailure"),3e3,1),webApp.reboot("w_needReboot")}).always(function(){e.render()})}}}}(),function(){var b,c,d,e=["%00","1","10.61.2.129",tl("w_southToNorth"),"2","50","180",tl("w_runRedLight"),"1",tl("w_zheAPJ896"),tl("w_smallCarColor"),tl("w_smallCar"),tl("w_yellow"),"3","2","10.61.2.128",tl("w_Blue"),"19_45_29_59","1547aref",tl("w_road"),tl("w_company"),tl("w_fullScene"),"PZC2AW01800060","1","3","30S",tl("w_leftTrun")],f=["2013","01","06","15","27","30","110"],g=!1,h=Page.recordStorageConfig.Tab.ftp={init:function(){h.translate(),h.bind(),webApp.IsLocalStore||($("rs_tab_ftp_emergency_wrap").style.display="none")},translate:function(){},render:function(){a.FtpTest.getCaps().done(function(a){a.Support&&$("FTP_test").getParent().removeClass("fn-hide")}),$("rs_tab_ftp_username_tip").setProperty("text",""),$("rs_tab_ftp_password_tip").setProperty("text",""),$("rs_tab_ftp_directory_tip").setProperty("text",""),$("rs_tab_ftp_address_tip").setProperty("text",""),h._getConfigAndRenderElements()},bind:function(){$("rs_tab_ftp_enable").addEvent("click",h._onEnableClick),$("rs_tab_ftp_default").addEvent("click",h._onDefaultClick),$("rs_tab_ftp_refresh").addEvent("click",h._onRefreshClick),$("rs_tab_ftp_confirm").addEvent("click",h._onConfirmClick),$("FTP_test").addEvent("click",h.onTest),attachLimit("rs_tab_ftp_port",0,65535),$("rs_tab_ftp_username").addEvents({keyup:function(){var a=StringUtil.byteLength(this.value,"aaa");a>32&&(this.value=StringUtil.btSub(this.value,32,"aaa"),this.isLengthOver=!0),this.isLengthOver=32==a?!0:!1},keydown:function(a){var b=StringUtil.byteLength(this.value,"aaa");if(this.isLengthOver=32==b?!0:!1,this.isLengthOver){var c=["backspace","delete","up","down","left","right","esc","$","#","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"];c.contains(a.key)||"c"===a.key&&a.control||a.alt||a.meta||a.shift&&a.control||a.stop()}}}),$("rs_tab_ftp_directory").addEvents({keyup:function(){promptImportLimt("rs_tab_ftp_directory","rs_tab_ftp_directory_tip","w_pathError",10)},blur:function(){promptImportLimt("rs_tab_ftp_directory","rs_tab_ftp_directory_tip","w_pathError",10)}}),$$("#rs_tab_ftp_username, #rs_tab_ftp_password").addEvents({keyup:function(){promptImportLimt(this.id,this.id+"_tip","w_noInputMarks",3)},blur:function(){promptImportLimt(this.id,this.id+"_tip","w_noInputMarks",3)}}),$("rs_tab_ftp_address").addEvents({keyup:function(){promptImportLimt("rs_tab_ftp_address","rs_tab_ftp_address_tip","w_emailiperror",11)},blur:function(){promptImportLimt("rs_tab_ftp_address","rs_tab_ftp_address_tip","w_emailiperror",11)}}),$("mFtp_tab_ftp_name_reset").addEvent("click",function(){h._onFtpNameDefault("pic")}),$("mFtp_tab_ftp_davname_reset").addEvent("click",function(){h._onFtpNameDefault("dav")}),$("mFtp_tab_ftp_name_help").addEvent("click",h._onFtpNameHelp),$("mFtp_tab_ftp_davname_help").addEvent("click",h._onFtpNameHelp),$("mFtp_tab_ftp_name_content").addEvents({keyup:function(){this.value.test(/[\"*:<>?|\\]+/)&&(this.value=this.value.replace(/[\"*:<>?|\\]+/,"")),this.value.length>300&&(this.value=this.value.slice(0,300)),h._ftpNameFormatPreview("pic")},blur:function(){""==this.value&&(this.value=TrafficG.NamingFormat.Format),this.value.length>300&&(this.value=this.value.slice(0,300)),h._ftpNameFormatPreview("pic")}}),$("mFtp_tab_ftp_davname_content").addEvents({keyup:function(){this.value.test(/[\"*:<>?|\\]+/)&&(this.value=this.value.replace(/[\"*:<>?|\\]+/,"")),this.value.length>300&&(this.value=this.value.slice(0,300)),h._ftpNameFormatPreview("dav")},blur:function(){""==this.value&&(this.value=TrafficG.VideoNamingFormat.Format),this.value.length>300&&(this.value=this.value.slice(0,300)),h._ftpNameFormatPreview("dav")}})},trafficSet:function(){h.dialogNameHelp=new Dialog("store_ftp_J_PictureHelp",function(){h._offFtpNameHelp()},"storeFtpDialogConfirm","storeFtpDialogClose",tl("w_nameHelp")),h.dialogNameHelp.setPosition(680,0);var a=".ui-dialog-content {padding: 10px 20px;}#store_ftp_J_PictureHelp li{border: none;display: inline-block;line-height: 20px;height: 26px;width: 48%;padding: 0;margin: 0;font-weight: 400;}#store_ftp_J_PictureHelp ul li span {display: inline-block;min-width: 25px;height: 20px;padding: 3px 10px;}";jQuery("head").append("<style>"+a+"</style>"),$("TrafficFtp").removeClass("fn-hide"),$("rc_ftp_charset_wrap").removeClass("fn-hide")},_ftpNameFormatPreview:function(a){var b="";b="pic"==a?$("mFtp_tab_ftp_name_content").value:$("mFtp_tab_ftp_davname_content").value;for(var c="",d="",f=b.length,g=0;f>g;g++)if(f>g+2&&"%"==b.charAt(g)&&/[0-9]/g.test(b.charAt(g+1))&&/[0-9]/g.test(b.charAt(g+2)))0!=b.charAt(g+1)&&(d+=b.charAt(g+1)),d+=b.charAt(g+2),27>d&&d>0?c+=e[d]:(c+=b.charAt(g),c+=b.charAt(g+1),c+=b.charAt(g+2)),d="",g+=2;else if(f>g+1&&"%"==b.charAt(g)&&/[a-zA-Z]/g.test(b.charAt(g+1))){var i=h._timedatavalue(b.charAt(g+1));i?c+=i:"c"==b.charAt(g+1)?c+="1":(c+=b.charAt(g),c+=b.charAt(g+1)),g++}else f>g+1&&"%"==b.charAt(g)&&"%"==b.charAt(g+1)?(c+=b.charAt(g),g++):c+=b.charAt(g);"pic"==a?$("mFtp_tab_ftp_name_content1").value=c:$("mFtp_tab_ftp_davname_content1").value=c},_onFtpNameHelp:function(){h.dialogNameHelp.show()},_offFtpNameHelp:function(){h.dialogNameHelp.close()},_onFtpNameDefault:function(b){a.ConfigManager.getDefault("TrafficGlobal").done(function(a){a?("pic"==b?TrafficG.NamingFormat=a.NamingFormat:TrafficG.VideoNamingFormat=a.VideoNamingFormat,h._renderTraffic()):remarkDisplay("rs_tab_ftp_remark",tl("Operateingfailure"),3e3,1)})},_timedatavalue:function(a){var b=0;switch(a){case"y":b=f[0];break;case"M":b=f[1];break;case"d":b=f[2];break;case"h":b=f[3];break;case"m":b=f[4];break;case"s":b=f[5];break;case"S":b=f[6]}return b},_checkFtpName:function(){var a=TrafficG.NamingFormat.Format.length,b=TrafficG.NamingFormat.Format;if("."!=b.charAt(a-4)||"j"!=b.charAt(a-3)||"p"!=b.charAt(a-2)||"g"!=b.charAt(a-1))return alert(tl("tip.Picture named jpg")),remarkDisplay("rs_tab_ftp_remark",tl("Saving failure"),3e3,1),!0;var c=TrafficG.VideoNamingFormat.Format,d=c.length,e="."==c.charAt(d-4)&&"d"==c.charAt(d-3)&&"a"==c.charAt(d-2)&&"v"==c.charAt(d-1),f="."==c.charAt(d-4)&&"a"==c.charAt(d-3)&&"v"==c.charAt(d-2)&&"i"==c.charAt(d-1);return e||f?!1:(alert(tl("tip.video named dav")),remarkDisplay("rs_tab_ftp_remark",tl("Saving failure"),3e3,1),!0)},_renderTraffic:function(){$("mFtp_tab_ftp_name_content").value=TrafficG.NamingFormat.Format,$("mFtp_tab_ftp_davname_content").value=TrafficG.VideoNamingFormat.Format,h._ftpNameFormatPreview("pic"),h._ftpNameFormatPreview("dav")},_renderElements:function(a,b){var b=b||Page.recordStorageConfig.Tab.path.getRecordStoragePoint();b.TimingRecord.FTP||b.VideoDetectRecord.FTP||b.AlarmRecord.FTP||b.TimingSnapShot.FTP||b.VideoDetectSnapShot.FTP||b.AlarmSnapShot.FTP?($("rs_tab_ftp_enable").disabled=!1,$("rs_tab_ftp_emergency").disabled=!1,$("rs_tab_ftp_sync").disabled=!1):(a.Enable=!1,$("rs_tab_ftp_enable").disabled=!0,$("rs_tab_ftp_emergency").checked=!1,$("rs_tab_ftp_emergency").disabled=!0,$("rs_tab_ftp_sync").checked=!1,$("rs_tab_ftp_sync").disabled=!0),$("rs_tab_ftp_enable").checked=a.Enable,$("rs_tab_ftp_port").value=a.Port,$("rs_tab_ftp_username").value=a.UserName,$("rs_tab_ftp_password").value=a.Password,$("rs_tab_ftp_directory").value=a.Directory,$("rc_ftp_charset").value=a.CharacterEncoding,$("rs_tab_ftp_emergency").checked=b.TimingRecord.LocalForEmergency||b.VideoDetectRecord.LocalForEmergency||b.AlarmRecord.LocalForEmergency||b.TimingSnapShot.LocalForEmergency||b.VideoDetectSnapShot.LocalForEmergency||b.AlarmSnapShot.LocalForEmergency,h._onEnableClick(),$("rs_tab_ftp_address").value=a.Address,$$("#rs_tab_ftp .ui-tip-red").set("text","")},_onEnableClick:function(){$("rs_tab_ftp_enable").checked?$("rs_tab_ftp_emergency").disabled=!1:($("rs_tab_ftp_emergency").disabled=!0,$("rs_tab_ftp_emergency").checked=!1)},onTest:function(){a.FtpTest.checkAuthority().done(function(a){var b=a.params.access,c=a.params.authority,d=a.params.list,e=a.params.deleteFile,f=a.params.deleteDir;0===b?"ReadWrite"===c?0===d?remarkDisplay("rs_tab_ftp_remark",tl("FTPNoListAuth"),3e3,1):0===e?remarkDisplay("rs_tab_ftp_remark",tl("FTPNoDeleteFileAuth"),3e3,1):0===f?remarkDisplay("rs_tab_ftp_remark",tl("FTPNoDeleteDirAuth"),3e3,1):remarkDisplay("rs_tab_ftp_remark",tl("FTPReadWrite"),3e3,0):"ReadOnly"===c&&remarkDisplay("rs_tab_ftp_remark",tl("FTPReadOnly"),3e3,1):1===b?remarkDisplay("rs_tab_ftp_remark",tl("FTPNotAcess"),3e3,1):2===b&&remarkDisplay("rs_tab_ftp_remark",tl("FTPLoginFailure"),3e3,1)}).fail(function(){remarkDisplay("rs_tab_ftp_remark",tl("Operateingfailure"),3e3,1)})},_onDefaultClick:function(){$("rs_tab_ftp_username_tip").setProperty("text",""),$("rs_tab_ftp_password_tip").setProperty("text",""),$("rs_tab_ftp_directory_tip").setProperty("text",""),$("rs_tab_ftp_address_tip").setProperty("text",""),a.ConfigManager.getDefault("NAS").done(function(a){nas=a,nas.each(function(a){"FTP"===a.Protocol&&(ftp=a)}),h._renderElements(ftp,d),remarkDisplay("rs_tab_ftp_remark",tl("Defaultsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_ftp_remark",tl("Defaultfailure"),3e3,1)})},_onRefreshClick:function(){$("rs_tab_ftp_username_tip").setProperty("text",""),$("rs_tab_ftp_password_tip").setProperty("text",""),$("rs_tab_ftp_directory_tip").setProperty("text",""),$("rs_tab_ftp_address_tip").setProperty("text",""),h._getConfigAndRenderElements(!0)},_onConfirmClick:function(){var e=d,f=$("rs_tab_ftp_emergency").checked;h._validateBeforSubmit()&&(c.Enable=$("rs_tab_ftp_enable").checked,c.Port=$("rs_tab_ftp_port").value-0,c.UserName=$("rs_tab_ftp_username").value,c.Password=$("rs_tab_ftp_password").value,c.Directory=$("rs_tab_ftp_directory").value,c.Address=$("rs_tab_ftp_address").value,c.CharacterEncoding=$("rc_ftp_charset").value,e.TimingRecord.AutoSync=$("rs_tab_ftp_sync").checked,e.TimingRecord.LocalForEmergency=e.TimingRecord.FTP&&f,e.VideoDetectRecord.LocalForEmergency=e.VideoDetectRecord.FTP&&f,e.AlarmRecord.LocalForEmergency=e.AlarmRecord.FTP&&f,e.TimingSnapShot.LocalForEmergency=e.TimingSnapShot.FTP&&f,e.VideoDetectSnapShot.LocalForEmergency=e.VideoDetectSnapShot.FTP&&f,e.AlarmSnapShot.LocalForEmergency=e.AlarmSnapShot.FTP&&f,e.ManualRecord.LocalForEmergency=e.TimingRecord.LocalForEmergency||e.VideoDetectRecord.LocalForEmergency||e.AlarmRecord.LocalForEmergency,e.EventRecord.LocalForEmergency=e.ManualRecord.LocalForEmergency,e.ManualSnapShot.LocalForEmergency=e.TimingSnapShot.LocalForEmergency||e.VideoDetectSnapShot.LocalForEmergency||e.AlarmSnapShot.LocalForEmergency,e.EventSnapShot.LocalForEmergency=e.ManualSnapShot.LocalForEmergency,a.ConfigManager.setConfig("RecordStoragePoint",[e,e]).done(function(){a.ConfigManager.setConfig("NAS",b).done(function(){if(g){if(TrafficG.NamingFormat&&(TrafficG.NamingFormat.Format=$("mFtp_tab_ftp_name_content").value),TrafficG.VideoNamingFormat&&(TrafficG.VideoNamingFormat.Format=$("mFtp_tab_ftp_davname_content").value),h._checkFtpName())return;a.ConfigManager.setConfig("TrafficGlobal",TrafficG).done(function(){remarkDisplay("rs_tab_ftp_remark",tl("Succeed in saving configure"),3e3,0)})}else remarkDisplay("rs_tab_ftp_remark",tl("Succeed in saving configure"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_ftp_remark",tl("Saving failure"),3e3,1)})}).fail(function(){remarkDisplay("rs_tab_ftp_remark",tl("Saving failure"),3e3,1)}))},_getConfigAndRenderElements:function(e){a.ConfigManager.getConfig("RecordStoragePoint").done(function(f){d=f[0],a.ConfigManager.getConfig("NAS").done(function(a){b=a,c=b.filter(function(a){return"FTP"===a.Protocol})[0],h._renderElements(c,d),e&&remarkDisplay("rs_tab_ftp_remark",tl("Operateingsuccess"),3e3,0)})}).fail(function(){remarkDisplay("rs_tab_ftp_remark",tl("Operateingfailure"),3e3,1)}),a.ConfigManager.getConfig("VideoAnalyseGlobal").done(function(b){b&&b[0]&&b[0].Scene&&"Traffic"===b[0].Scene.Type&&(g=!0,h.trafficSet(),a.ConfigManager.getConfig("TrafficGlobal").done(function(a){a&&(TrafficG=a),TrafficG?(TrafficG.NamingFormat||(TrafficG.NamingFormat={Format:tl("w_settingGetError")+"/%c/%07/%y/%M/%d/%h/%04-%y%M%d%h%m%s%S-%07-%18-(%14).jpg"}),TrafficG.VideoNamingFormat||(TrafficG.VideoNamingFormat={Format:tl("w_settingGetError")+"/%c/%07/%y/%M/%d/%h/%04-%y%M%d%h%m%s%S-%07-%18-(%14).dav"})):TrafficG={NamingFormat:{Format:tl("w_settingGetError")+"/%c/%07/%y/%M/%d/%h/%04-%y%M%d%h%m%s%S-%07-%18-(%14).jpg"},VideoNamingFormat:{Format:tl("w_settingGetError")+"/%c/%07/%y/%M/%d/%h/%04-%y%M%d%h%m%s%S-%07-%18-(%14).dav"}},h._renderTraffic()}))})},_validateBeforSubmit:function(){if(!checkedImportLimt("rs_tab_ftp_username",3))return remarkDisplay("rs_tab_ftp_remark",tl("w_noInputMarks"),3e3,1),!1;if(!checkedImportLimt("rs_tab_ftp_password",3))return remarkDisplay("rs_tab_ftp_remark",tl("w_noInputMarks"),3e3,1),!1;if(!checkedImportLimt("rs_tab_ftp_directory",10)){if(""!=$("rs_tab_ftp_directory").value)return remarkDisplay("rs_tab_ftp_remark",tl("w_pathError"),3e3,1),!1;$("rs_tab_ftp_directory_tip").setProperty("text","")}return $("rs_tab_ftp_address").value.length>0&&!checkedImportLimt("rs_tab_ftp_address",11)?(remarkDisplay("rs_tab_ftp_remark",tl("w_emailiperror"),3e3,1),!1):!0}}}(),function(){var b,c,d,e,f,g=Page.recordStorageConfig.Tab.network={init:function(){isEnable("show_NAS_config")&&($("rs_tab_title_network").setStyle("display",""),g._initProtocol(),g.translate(),g.bind())},translate:function(){},_initProtocol:function(){var a=(localPngHash.NAS_Protocol_Mask||"").toString(2);$("rs_tab_network_Protocol").empty(),4&a&&$("rs_tab_network_Protocol").options.add(new Option("NFS","NFS")),2&a&&$("rs_tab_network_Protocol").options.add(new Option("ISCSI","ISCSI")),1&a&&$("rs_tab_network_Protocol").options.add(new Option("SMB","SMB"))},render:function(){g._getConfigAndRenderElements()},bind:function(){$("rs_tab_network_defualt").addEvent("click",g._onDefaultClick),$("rs_tab_network_refresh").addEvent("click",g._onRefreshClick),$("rs_tab_network_confirm").addEvent("click",g._onConfirmClick),$("rs_tab_network_Protocol").addEvent("change",function(){return g._validateBeforSubmit()?(g._saveTempJson(),e=this.value,d=b.filter(function(a){return a.Protocol===e})[0],void g._renderElements(d,c)):void(this.value=e)}),attachLimit("rs_tab_network_port",0,65535),$$("#rs_tab_network_username, #rs_tab_network_password").addEvents({keyup:function(){promptImportLimt(this.id,this.id+"_tip","w_noInputMarks",3)},blur:function(){promptImportLimt(this.id,this.id+"_tip","w_noInputMarks",3)}}),$("rs_tab_network_address").addEvents({keyup:function(){promptImportLimt("rs_tab_network_address","rs_tab_network_address_tip","w_emailiperror",11)},blur:function(){promptImportLimt("rs_tab_network_address","rs_tab_network_address_tip","w_emailiperror",11)}}),$("rs_tab_network_directory").addEvents({keyup:function(){StringUtil.byteLength(this.value,"aaa")>200?$(this.id+"_tip").setProperty("text",tl("w_pathLong")):$(this.id+"_tip").setProperty("text",""),this.value&&(/^[\w-.\/]+$/.test(this.value)?$(this.id+"_tip").setProperty("text",""):$(this.id+"_tip").setProperty("text",tl("w_pathErrorWithPoint")))},blur:function(){StringUtil.byteLength(this.value,"aaa")>200?$(this.id+"_tip").setProperty("text",tl("w_pathLong")):$(this.id+"_tip").setProperty("text",""),this.value&&(/^[\w-.\/]+$/.test(this.value)?$(this.id+"_tip").setProperty("text",""):$(this.id+"_tip").setProperty("text",tl("w_pathErrorWithPoint")))}})},_getConfigAndRenderElements:function(h){a.ConfigManager.getConfig("RecordStoragePoint").done(function(i){c=i[0],a.ConfigManager.getConfig("NAS").done(function(a){e=$("rs_tab_network_Protocol").value,b=a,d=b.filter(function(a){return a.Protocol===e})[0],g._renderElements(d,c),f=$unlink(b),h&&remarkDisplay("rs_tab_network_remark",tl("Operateingsuccess"),3e3,0)})}).fail(function(){remarkDisplay("rs_tab_network_remark",tl("Operateingfailure"),3e3,1)})},_renderElements:function(a,b){var b=b||Page.recordStorageConfig.Tab.path.getRecordStoragePoint();hasRemote=b.TimingRecord.Remote||b.VideoDetectRecord.Remote||b.AlarmRecord.Remote||b.TimingSnapShot.Remote||b.VideoDetectSnapShot.Remote||b.AlarmSnapShot.Remote,hasRemote?$("rs_tab_network_enable").disabled=!1:(a.Enable=!1,$("rs_tab_network_enable").disabled=!0),$("rs_tab_network_enable").checked=a.Enable,$("rs_tab_network_port").value=a.Port,$("rs_tab_network_username").value=a.UserName,$("rs_tab_network_password").value=a.Password,$("rs_tab_network_directory").value=a.Directory,$("rs_tab_network_address").value=a.Address,$$("#rs_tab_network .ui-tip-red").set("text","")},_onDefaultClick:function(){a.ConfigManager.getDefault("NAS").done(function(a){e=$("rs_tab_network_Protocol").value,b=a,b.each(function(a){"FTP"===a.Protocol&&f.each(function(b){if("FTP"===b.Protocol)for(key in a)a[key]=b[key]})}),d=b.filter(function(a){return a.Protocol===e})[0],g._renderElements(d,c),remarkDisplay("rs_tab_network_remark",tl("Defaultsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_network_remark",tl("Defaultfailure"),3e3,1)})},_onRefreshClick:function(){g._getConfigAndRenderElements(!0)},_saveTempJson:function(){d.Enable=$("rs_tab_network_enable").checked,d.Port=$("rs_tab_network_port").value-0,d.UserName=$("rs_tab_network_username").value,d.Password=$("rs_tab_network_password").value,d.Directory=$("rs_tab_network_directory").value,d.Address=$("rs_tab_network_address").value
},_onConfirmClick:function(){g._validateBeforSubmit()&&(g._saveTempJson(),a.ConfigManager.setConfig("NAS",b).done(function(){remarkDisplay("rs_tab_network_remark",tl("Succeed in saving configure"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_network_remark",tl("Saving failure"),3e3,1)}))},_validateBeforSubmit:function(){return checkedImportLimt("rs_tab_network_username",3)&&checkedImportLimt("rs_tab_network_password",3)?$("rs_tab_network_directory").value&&!/^[\w-.\/]+$/.test($("rs_tab_network_directory").value)?(remarkDisplay("rs_tab_network_remark",tl("w_pathErrorWithPoint"),3e3,1),!1):$("rs_tab_network_address").value.length>0&&!checkedImportLimt("rs_tab_network_address",11)?(remarkDisplay("rs_tab_network_remark",tl("w_emailiperror"),3e3,1),!1):StringUtil.byteLength($("rs_tab_network_directory").value,"aaa")>200?void remarkDisplay("rs_tab_network_remark",tl("w_pathLong"),3e3,1):!0:(remarkDisplay("rs_tab_network_remark",tl("w_noInputMarks"),3e3,1),!1)}}}(),function(){var b={},c={},d={},e=null,f=null,g=null,h=Page.recordStorageConfig.Tab.store={init:function(){g=$("rs_tab_store_mode"),h.translate(),h.bind()},translate:function(){},render:function(){h._getConfig(),h._renderElements(),f=(8*e/8192/3600).toFixed(2),f>=3600?(f=(8*e/8192/3600).toFixed(2),$("rs_tab_store_timeTip").set("text",f+" "+tl("hours"))):(f=(8*e/8192/60).toFixed(2),$("rs_tab_store_timeTip").set("text",f+" "+tl("minutes")))},bind:function(){$("rs_tab_store_confirm").addEvent("click",h._onConfirmClick),$("rs_tab_store_mode").addEvent("change",h._saveTempJson)},_getConfig:function(d){a.ConfigManager.getConfig(["Encode","VideoEncodeROI"]).done(function(a){b=a[0].params.table,c=a[1].params.table,g.value=8192==b[0].MainFormat[0].Video.BitRate&&6==c[0].Quality?"High":4096==b[0].MainFormat[0].Video.BitRate&&3==c[0].Quality?"Middle":"Low",d&&remarkDisplay("rs_tab_store_remark",tl("Operateingsuccess"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_store_remark",tl("Operateingfailure"),3e3,1)})},_renderElements:function(){a.Storage.getDeviceAllInfo().done(function(a){d=a,webApp.GongAnDetect&&a?$("is_SD_show").setStyle("display",""):$("is_SD_show").setStyle("display","none"),d&&d.each(function(a){a.Detail.each(function(a){e=(a.TotalBytes-a.UsedBytes)/1024,f=8*e/b[0].MainFormat[0].Video.BitRate,f>=3600?(f=(8*e/b[0].MainFormat[0].Video.BitRate/3600).toFixed(2),$("rs_tab_store_timeTip").set("text",f+" "+tl("hours"))):(f=(8*e/b[0].MainFormat[0].Video.BitRate/60).toFixed(2),$("rs_tab_store_timeTip").set("text",f+" "+tl("minutes")))})})})},_saveTempJson:function(){[0,1,2].each(function(a){"High"==g.value?(b[0].MainFormat[a].Video.BitRate=8192,"PAL"==webApp.VideoStandard?b[0].MainFormat[a].Video.FPS=25:"NTSC"==webApp.VideoStandard&&(b[0].MainFormat[a].Video.FPS=30),c[0].Quality=6):"Middle"==g.value?(b[0].MainFormat[a].Video.BitRate=4096,b[0].MainFormat[a].Video.FPS=20,c[0].Quality=3):"Low"==g.value&&(b[0].MainFormat[a].Video.BitRate=2048,b[0].MainFormat[a].Video.FPS=10,c[0].Quality=1)}),h._renderElements()},_onConfirmClick:function(){h._saveTempJson(),a.ConfigManager.setConfig(["Encode","VideoEncodeROI"],[b,c]).done(function(){remarkDisplay("rs_tab_store_remark",tl("Succeed in saving configure"),3e3,0)}).fail(function(){remarkDisplay("rs_tab_store_remark",tl("Saving failure"),3e3,1)})}}}()});