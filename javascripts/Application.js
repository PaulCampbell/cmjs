  
		var App = {
			Views: {
				GolfCourses: {},
				Holes: {}
				},
			Router: {},
			Collections: {},
			init: function() {
				new App.Router.GolfCourses();
				Backbone.history.start();
                CM.core.MyScroll = new iScroll('wrapper');
			}
		};
		
		var CM = {};

		
        function loaded() {
			CM.core.MyScroll = new iScroll('wrapper');
		}
