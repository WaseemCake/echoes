define(["underscore","backbone"],function(e,t){var n=t.Model.extend({defaults:{id:null},initialize:function(){this.on("change:id",this.getInfo,this)},getInfo:function(){this.fetch()},urlRoot:function(){return"https://gdata.youtube.com/feeds/api/videos/?v=2&alt=jsonc&q="+this.get("id")},parse:function(e){return e.data.items.length?e.data.items[0]:{}}});return n})