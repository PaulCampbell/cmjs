

App.Views.Holes.View = Backbone.View.extend({
  
    initialize: function() {
		 _.bindAll(this, 'render');
	    this.hole = this.model;
		this.hole.bind('change', _.bind(this.render, this));
        this.render();
		 // update the location every 5 seconds...
		this.updateLocation(); 
		var that = this;
		setInterval(function() {
			that.updateLocation();  
		}, 5000);
		
    },
    
    el: $('#ViewHole'),
    
   render: function() {
        if(this.hole) {
		 	var html = $('#ViewHole').tmpl(this.hole.toJSON());
			$('#app').html(html);
			$('#back').attr('href', '#golfcourses/' + this.hole.get('golfCourseId'));			 
        } else {
            out = "<h3>No hole found.</h3>";
    		$(this.el).html(out);
        	$('#app').html(this.el);
        }
		
		$('#back').show();
    },
	
	updateLocation: function() {
		var that = this;
		
		// Grab coordinates object from the Position object passed into success callback.
		var win = function(position) {          
			var coords = position.coords;
			// update the distances on each feature...
			_.each(that.hole.get('features').models, function(f){ 
				f.set({distance : CM.core.GetDistance(coords.latitude, coords.longitude, f.get('latitude'), f.get('longitude'))});
			});
			that.render();
		};
		var fail = function(e) {
		//	 alert('Can\'t retrieve location.\nError: ' + e);
		};
		navigator.geolocation.getCurrentPosition(win, fail);
   } 
});

