

App.Views.GolfCourses.View = Backbone.View.extend({
  
    initialize: function() {
		 _.bindAll(this, 'render');
	    this.golfCourse = this.model;
        this.render();
    },
    
   render: function() {
        if(this.golfCourse) {
            var out = "<h3>" + this.golfCourse.escape('name') + "</h3>";
           out += "<p>" + this.golfCourse.escape('description') + "</p>" 
        } else {
            out = "<h3>No golf course found.</h3>";
        }
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});

