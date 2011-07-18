  
		var App = {
			Views: {
				GolfCourses: {}
				},
			Router: {},
			Collections: {},
			init: function() {
				new App.Router.GolfCourses();
				Backbone.history.start();
			}
		};
	