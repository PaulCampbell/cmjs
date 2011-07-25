  
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
			}
		};
	