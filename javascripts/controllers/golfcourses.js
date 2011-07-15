App.Controllers.GolfCourses = Backbone.Controller.extend({
    routes: {
        "golfcourses/:id":            "view",
        "":                         "index"
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
