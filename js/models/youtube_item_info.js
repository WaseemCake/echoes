define(["underscore","backbone"],function(e,t){var n=t.Model.extend({defaults:{id:null,type:"videos"},initialize:function(){this.on("change:id",this.getInfo,this)},getInfo:function(){this.fetch()},url:function(){return"https://gdata.youtube.com/feeds/api/"+this.get("type")+"/"+this.get("id")+"?v=2&alt=jsonc"},parse:function(e){return e.data}});return n});