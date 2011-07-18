

App.Views.GolfCourses.View = Backbone.View.extend({
  
    initialize: function() {
		 _.bindAll(this, 'render');
	    this.golfCourse = this.model;
        this.render();
    },
    
    el: $('#ViewCourse'),
    
   render: function() {
        if(this.golfCourse) {
			var template = $('#ViewCourse')
		 	var html = template.tmpl(this.golfCourse.toJSON());
		 	 $('#header h1').html(this.golfCourse.get("name"));
			 $('#app').html(html);
        } else {
            out = "<h3>No golf course found.</h3>";
    		$(this.el).html(out);
        	$('#app').html(this.el);
        }
		
		$('#back').attr('href', '#')
		$('#back').show();
  
    }
});

