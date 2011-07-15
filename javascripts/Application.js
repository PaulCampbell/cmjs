  
		var App = {
			Views: {
				GolfCourses: {}
				},
			Controllers: {},
			Collections: {},
			init: function() {
				new App.Controllers.GolfCourses();
				Backbone.history.start();
			}
		};
	