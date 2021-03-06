

App.Views.GolfCourses.View = Backbone.View.extend({
  
    initialize: function() {
        CM.core.StartScroll();
        if(CM.core.RefreshIntervalId){
        clearInterval(CM.core.RefreshIntervalId);
        }
		 _.bindAll(this, 'render');
	    this.golfCourse = this.model;
        this.render();
    },
    
    el: $('#ViewCourse'),
    
   render: function() {
        $('#wrapper').show();
        $('#map').hide();


        if(this.golfCourse) {
			var template = $('#ViewCourse')
		 	var html = template.tmpl(this.golfCourse.toJSON());
		 	 $('#header h1').html(this.golfCourse.get("name"));
			 $('#app').html(html);
             CM.core.MyScroll.refresh() ;
             CM.core.MyScroll.scrollTo(0, 0, 20);
        } else {
            out = "<h3>No golf course found.</h3>";
    		$(this.el).html(out);
        	$('#app').html(this.el);
        }
		
		$('#back').attr('href', '#')
		$('#back').show();
  
    }
});

