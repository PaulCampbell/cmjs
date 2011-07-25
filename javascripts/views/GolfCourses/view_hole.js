

App.Views.Holes.View = Backbone.View.extend({
  
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
			  GetLocation();
			 
			  function GetLocation() {
                    var win = function(position) {                          // Grab coordinates object from the Position object passed into success callback.
                         var coords = position.coords;
                         alert( coords.latitude + "," + coords.longitude )
                    };
                    var fail = function(e) {
                         alert('Can\'t retrieve position.\nError: ' + e);
                    };
                    navigator.geolocation.getCurrentPosition(win, fail);
               } 
			 
			 
        } else {
            out = "<h3>No hole found.</h3>";
    		$(this.el).html(out);
        	$('#app').html(this.el);
        }
		
		$('#back').attr('href', '#')
		$('#back').show();
		
  
    }
});

