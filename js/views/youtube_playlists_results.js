define([
	'jquery',
	'underscore',
	'backbone',
	'views/youtube_playlist_item',
	'collections/youtube_playlists_results',
	'collectionView'
], function($, _, Backbone, YoutubePlaylistItemView, YoutubePlaylistsResults, CollectionView) {
	
	var SearchResults = CollectionView.extend({
		tagName: 'ul',

		className: 'clearfix unstyled',
		
		collection: YoutubePlaylistsResults,
		
		view: YoutubePlaylistItemView,

		
		broadcasts: {
			'media-clicked': 'onSelected'
		},

		onSelected: function(ev) {
			this.trigger('search-result-selected', ev);
		}
	});

    return SearchResults;
});