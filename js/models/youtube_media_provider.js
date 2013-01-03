define(["underscore","backbone","./youtube_item_info"],function(e,t,n){var r=t.Model.extend({defaults:{query:"",startIndex:1,maxResults:24,feedType:"videos",info:new n,playlist:new n({type:"playlists"})},initialize:function(){this.on("change:query change:startIndex change:feedType",this.search,this),this.on("change:data",this.publishResponse,this)},search:function(){this.fetch()},query:function(e){e.startIndex=e.startIndex||1,this.set(e)},urlRoot:function(){return"https://gdata.youtube.com/feeds/api/"+this.getFeedType()+"?q="+this.get("query")+"&alt=jsonc&v=2&start-index="+this.get("startIndex")+"&max-results="+this.get("maxResults")},publishResponse:function(){this.trigger("new-media-response",this.get("data"))},getFeedType:function(){var e=this.get("feedType");return e==="playlists"&&(e+="/snippets"),e==="playlist"&&(feeType+="/"+this.get("query")),e},validate:function(e){if(e.startIndex<0)return"start index should be greater than 1."},fetchMediaById:function(e){this.get("info").set("id",e)},fetchPlaylistInfo:function(e){this.get("playlist").set("id",e)}});return r});