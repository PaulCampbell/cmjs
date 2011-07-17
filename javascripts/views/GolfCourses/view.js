

App.Views.GolfCourses.View = Backbone.View.extend({
  
    initialize: function() {
		 _.bindAll(this, 'render');
	    this.golfCourse = this.model;
        this.render();
    },
    
    el: $('#ViewCourse'),
    
   render: function() {
        if(this.golfCourse) {
    		var template = $("#HoleListItemTmpl");
		 	var html = $('#ViewCourse').tmpl(this.golfCourse.toJSON());
		 	// $('#HoleList').html(html);
		 	// var fullHtml = $('#ViewCourse').templ(this.golfCourse.toJSON());
			 $('#app').html(html);
        } else {
            out = "<h3>No golf course found.</h3>";
        }
		
		$('#back').attr('href', '#')
		$('#back').show();
		
        $(this.el).html(out);
        $('#app').html(this.el);
    }
});

