!function(a){define(function(require,b,c){function d(){return window.g_ocx?(d=function(){return g_ocx},g_ocx):(d=function(){return parent.g_ocx},parent.g_ocx)}require("lib/aes"),require("lib/rsa");var e=c.exports={},f=0;e.webEncryption=function(b,c,d,e,f){void 0==c&&(c="OldDigest");var g={Protocol:"EncryptionProtocol",Params:{Encryption:c,Note:b}};d&&a.extend(g.Params,{Random:d}),e&&a.extend(g.Params,{Realm:e}),f&&a.extend(g.Params,{User:f});var h=g_ocx.ProtocolPluginWithWebCall(JSON.stringify(g));return JSON.parse(h).Result},e.encryptionConfig=function(a){try{var b=d(),c=JSON.parse(a),e={Protocol:"EncryptionConfig",Params:{Config:a}},f=b.ProtocolPluginWithWebCall(JSON.stringify(e));return c.params2=JSON.parse(f).Result,JSON.stringify(c)}catch(g){return a}},e.setSession=function(a){f=a},e.getSession=function(){return f},e.devNotify={comet:!1,topics:{},initComet:function(){if(0==this.comet){var b="/SubscribeNotify.cgi?sessionId="+f;if(this.sessionID=f,a.browser.ie&&a.browser.version<9){var c={};c.connection=new ActiveXObject("htmlfile"),c.connection.open(),c.connection.write("<html>"),c.connection.write("<body>12345</body>"),c.connection.write("</html>"),c.connection.close(),c.iframediv=c.connection.createElement("div"),c.connection.appendChild(c.iframediv),c.connection.parentWindow.comet=c,c.iframediv.innerHTML="<iframe name='comet_iframe_new' src='"+b+"'></iframe>",c.connection.parentWindow.receiveMessage=this.publish.bind(this),this.iframe=c.connection.getElementsByTagName("iframe")[0]}else{var d=document.createElement("iframe");d.setAttribute("id","comet_iframe_new"),d.setAttribute("src",b),d.style.display="none",document.body.appendChild(d),this.iframe=d,window.receiveMessage=this.publish.bind(this)}this.comet=!0}else"ie"!=a.browser.name&&(window.receiveMessage=this.publish.bind(this))},subscribe:function(a,b){this.initComet(),this.sessionID!=f&&this.reconnect(),this.topics[a]=b},publish:function(a){var b=a.method;if(this.topics[b])try{this.topics[b](a.params,a)}catch(c){}},detach:function(a){delete this.topics[a]},reconnect:function(){this.iframe.src="/SubscribeNotify.cgi?sessionId="+f,this.sessionID=f}},e.Cookie=new function(){function a(a,c){var d={};if(b(a)&&a.length>0)for(var g,h,i,j=c?f:e,k=a.split(/;\s/g),l=0,m=k.length;m>l;l++){if(i=k[l].match(/([^=]+)=/i),i instanceof Array)try{g=f(i[1]),h=j(k[l].substring(i[1].length+1))}catch(n){}else g=f(k[l]),h="";g&&(d[g]=h)}return d}function b(a){return"string"==typeof a}function c(a){return b(a)&&""!==a}function d(a){if(!c(a))throw new TypeError("Cookie name must be a non-empty string")}function e(a){return a}var f=window.decodeURIComponent,g=window.encodeURIComponent,h=window.document;this.get=function(b,c){d(b),c="function"==typeof c?{converter:c}:c||{};var f=a(h.cookie,!c.raw);return(c.converter||e)(f[b])},this.set=function(a,b,e){d(a),e=e||{};var f=e.expires,i=e.domain,j=e.path;e.raw||(b=g(String(b)));var k=a+"="+b,l=f;return"number"==typeof l&&(l=new Date,l.setDate(l.getDate()+f)),l instanceof Date&&(k+="; expires="+l.toUTCString()),c(i)&&(k+="; domain="+i),c(j)&&(k+="; path="+j),e.secure&&(k+="; secure"),h.cookie=k,k},this.remove=function(a,b){return b=b||{},b.expires=new Date(0),this.set(a,"",b)}},e.Check=new function(){var b=this,c={alphaNumLine:/^[\d|a-z|A-Z|\-|_]*$/,alphaNumLineQuoSpace:/^[\d\s|a-z|A-Z|\-|_\']*$/,number:/^[0-9]*$/,numAndLetter:/[^0-9a-zA-Z]/g,noQuotation:/^[^\'\"]*$/,noQuotationColonAnd:/^[^\'\":;\&]*$/,filePath:/^[^\/:\*\?\"<>\|"]*$/,alphaNumUnderline:/^[\d|a-z|A-Z|_]*$/,alphaNumLineDot:/^[\d|a-z|A-Z|\-|_|\.]*$/,alphaNumLineDotA:/^[\d|a-z|A-Z|\-|_|\.|@]*$/,email:/^[\w-.]+@[\w-]+(\.{1}[\w-]+)+$/,url:/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ip:/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2}|[0-9]{1,2})$/i,ipv6:/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/};a.each(c,function(a,c){b[a]=function(a){return c.test(a)}}),b.require=function(a){return""!==a},b.ipv6ornull=function(a){return""===a||b.ipv6(a)},b.password=function(a){return!(/[\"]+/.test(a)||/[\']+/.test(a)||/[\u4E00-\u9FA5]+/.test(a)||/\s/.test(a))},b.phone=function(a){return!(/[\"]+/.test(a)||/[\']+/.test(a)||/[\u4E00-\u9FA5]+/.test(a))}},e.Ip=function(){return{compareIpV4:function(a,b){for(var c=a.split("."),d=b.split("."),e=0;e<c.length;e++){var f=c[e]-d[e];if(0!=f)return f}return 0},compareIpv6:function(a,b){var c=compareIPv6(a,b);return 1==c?-1:2==c?1:0},isIpnull:function(a){return a.split(".").some(function(a){return""==a})},getIpValue:function(b){var c=[];b=a(b);var d=b.getAllNext("input");return d.splice(0,0,b),d.each(function(a){c.push(a.value)}),c.join("")?c.join("."):""},setIpValue:function(b,c){b=a(b),c=c||"...";var d=c.split("."),e=b.getAllNext("input");e.splice(0,0,b),e.each(function(a,b){a.value=d[b]})},isValidWithGateWay:function(a,b,c){for(var d=a.split("."),e=b.split("."),f=c.split("."),g=!0,h=0;4>h&&(g=g&&(d[h]&e[h])==(e[h]&f[h]),g);h++);return g}}}(),function(){function a(a){var c=a.lastIndexOf(":"),d=a.slice(c+1);if(d.match(g)){var e=d.split(".");e=b(e[0])+b(e[1])+":"+b(e[2])+b(e[3]),a=a.slice(0,c+1)+e}return a.toLowerCase()}function b(a){return f(parseInt(a).toString(16),2)}function c(a){var b=[],c=a.split("::");if(2==c.length){var d=c[0].split(":"),e=c[1].split(":");1===d.length&&""===d[0]&&(d=[]),1===e.length&&""===e[0]&&(e=[]);var f=8-(d.length+e.length);d.each(function(a){b.push(a)}),f.each(function(){b.push(0)}),e.each(function(a){b.push(a)})}else 1==c.length&&(b=a.split(":"));return b}function d(a){return a.map(function(a){return f(a,4)}).join(":")}function f(a,b){var c=a.toString().length,d="";return(b-c).each(function(){d+="0"}),d+a.toString()}var g=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;e.v6ToCanonicalForm=function(b){if(!e.Check.ipv6(b))return b;b=a(b);var f=c(b);return 8==f.length?d(f):b}}(),function(){for(var b=[1900,3800,5e3,5050,9999,37776,37777,37778,39999,42323],c=37780;37880>=c;c++)b.push(c);e.chkPort=function(c,d){return void 0===d?c-0>1024&&-1===a.inArray(c-0,b):c-0===d||c-0>1024&&-1===a.inArray(c-0,b)}}(),function(){function b(a){a=a>16?16:a;var c=Math.random().toString();return"0"===c.substr(c.length-a,1)?b(a):c.substring(c.length-a)}e.EncryptInfo=function(c,d){var e={},c=c.split(","),f=c[0].split(":"),g=c[1].split(":");return e[f[0]]=f[1],e[g[0]]=g[1],a.Deferred(function(a){require.async(["lib/aes","lib/rsa"],function(){var c=b(16),f=new RSAKey;f.setPublic(e.N,e.E);var g=f.encrypt(c),h=CryptoJS.enc.Utf8.parse(c),i=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(d)),h,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.ZeroPadding}),j=i.toString();a.resolve({salt:g,key:h,content:j})})}).promise()},e.EncryptInfoEx=function(a,c){var d={},a=a.split(","),e=a[0].split(":"),f=a[1].split(":");d[e[0]]=e[1],d[f[0]]=f[1];var g=b(16),h=new RSAKey;h.setPublic(d.N,d.E);var i=h.encrypt(g),j=CryptoJS.enc.Utf8.parse(g),k=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(c)),j,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.ZeroPadding}),l=k.toString();return{salt:i,key:j,content:l}},e.UnEncryptInfo=function(b,c){return a.Deferred(function(a){require.async(["lib/aes","lib/rsa"],function(){var d=CryptoJS.AES.decrypt(c,b,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.ZeroPadding});a.resolve(JSON.parse(CryptoJS.enc.Utf8.stringify(d)))})}).promise()},e.UnEncryptInfoEx=function(a,b){var c=CryptoJS.AES.decrypt(b,a,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.ZeroPadding});return JSON.parse(CryptoJS.enc.Utf8.stringify(c))}}(),function(){var a=function(a){return!/[^\d]/g.test(a)},b=function(a){return!/[^a-zA-Z]/.test(a)},c=function(a){return!/[a-zA-Z0-9]/.test(a)},d=function(a){return/\d/.test(a)},f=function(a){return/[a-zA-Z]/.test(a)},g=function(a){return/[^a-zA-Z0-9]/.test(a)};e.pwdStrenthValidator=function(e){var h=e.length;return a(e)||b(e)||c(e)?5>=h?"weak":"middle":d(e)&&f(e)&&g(e)?h>3?"strong":"middle":4>h?"weak":8>=h?"middle":"strong"}}(),e.chkMutilCallRet=function(b,c){var d=!0;if(a.isArray(b)){var e=a.grep(b,function(a){return a&&!a.result}).length;d=c?e!==b.length:!e}return d},function(){e.cgiGet=function(b,c,d,e){return a.ajax({url:b,username:c,password:d,success:e})}}()})}(jQuery);