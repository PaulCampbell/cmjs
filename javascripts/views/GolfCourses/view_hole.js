

App.Views.GolfCourses.ViewHole = Backbone.View.extend({
  
    initialize: function() {
		 _.bindAll(this, 'render');
	    this.hole = this.model;
        this.render();
    },
    
    el: $('#ViewHole'),
    
   render: function() {
        if(this.hole) {
		 	var html = $('#ViewHole').tmpl(this.hole.toJSON());
			 $('#app').html(html);
        } else {
            out = "<h3>No hole found.</h3>";
    		$(this.el).html(out);
        	$('#app').html(this.el);
        }
		
		$('#back').attr('href', '#')
		$('#back').show();
		
  
    }
});

