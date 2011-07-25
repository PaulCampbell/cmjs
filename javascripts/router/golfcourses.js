App.Router.GolfCourses = Backbone.Router.extend({
    routes: {
        "golfcourses/:id":            		"view",
        "":                         		"index",
		"golfcourses/:id/hole/:holeNo":		"view_hole"
    },
    
    view: function(id) {
        var golfcourse = new GolfCourse({ Id: id });
        golfcourse.fetch({
            success: function(model, resp) {
                new App.Views.GolfCourses.View({ model: golfcourse });
            },
            error: function() {
                new Error({ message: 'Could not find that golf course.' });
                window.location.hash = '#';
            }
        });
    },
	
	view_hole: function(id, holeNo) {
		var golfcourse = new GolfCourse({ Id: id });
        golfcourse.fetch({
            success: function(model, resp) {
				var hole = new Hole({golfCourseName: model.get('name'),
									holeDetail: _.select(model.get('holes'), (function(c) {return  c.holeNumber.toString() == holeNo}))});
			
                new App.Views.Holes.View({ model: hole });
            },
            error: function() {
                new Error({ message: 'Could not find that golf course.' });
                window.location.hash = '#';
            }
	
		
		})
	},
    
    index: function() {
         var golfcourses = new App.Collections.GolfCourses();
        golfcourses.fetch({
            success: function() {
                new App.Views.GolfCourses.Index({ collection: golfcourses });
            },
            error: function() {
                new Error({ message: "Error loading golfcourses." });
            }
    });
}
});
