!function(a){a.widget("dui.pagination",{version:"1.0.1",widgetName:"pagination",widgetEventPrefix:"pagination",options:{currentPage:1,pageSize:10,total:0},_create:function(){this.element.toggleClass("u-pagination",!0),this.render(),this.pageInfo=this.element.find(".u-page-info"),this._setupEvents(),this.refresh()},render:function(){var a='<a href="#" data-action="first" class="i-first"></a><a href="#" data-action="prev" class="i-prev"></a><span class="u-page-info"></span><a href="#" data-action="next" class="i-next"></a><a href="#" data-action="last" class="i-last"></a><input type="text" class="u-input" value="1"/><a href="#" data-action="goto" class="i-go"></a>';this.element.empty().append(a)},refresh:function(){var a=this.options.total,b=this.options.pageSize,c=parseInt(a/b),d=this.options.currentPage;a%b>0&&(c+=1),0===c&&(c=1),this.pageInfo.text(d+" / "+c),this.pages=c,d>this.pages&&this.go(this.pages)},total:function(a){this.options.total=a,0===this.options.total&&(this.options.currentPage=1),this.element.find(".u-input").val(1),this.refresh()},pageSize:function(a){this.options.pageSize=a,this.refresh()},go:function(a){a>this.pages||1>a||(this.options.currentPage=a,this.pageInfo.text(this.options.currentPage+" / "+this.pages),this._trigger("change",null,{ui:this,currentPage:a,pageSize:this.options.pageSize,pages:this.pages,total:this.options.total}))},_setupEvents:function(){this._on(this.element,this._handleEvents)},_handleEvents:{"click [data-action]":function(b){var c=a(b.currentTarget).attr("data-action");switch(c){case"first":this.go(1);break;case"prev":this.go(this.options.currentPage-1);break;case"next":this.go(this.options.currentPage+1);break;case"last":this.go(this.pages);break;case"goto":var d=this.element.find(".u-input").val();a.isNumeric(d)&&this.go(parseInt(d))}return!1},"blur input":function(){var b=this.element.find(".u-input"),c=b.val();return a.isNumeric(c)?parseInt(c)>this.pages?b.val(this.pages):parseInt(c)<1&&b.val(1):b.val(1),!1}}})}(jQuery);