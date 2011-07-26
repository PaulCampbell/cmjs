

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
			 
			 
        } else {
            out = "<h3>No hole found.</h3>";
    		$(this.el).html(out);
        	$('#app').html(this.el);
        }
		
		$('#back').attr('href', '#')
		$('#back').show();

    },
	
	updateLocation: function() {
		var that = this;
		var win = function(position) {                          // Grab coordinates object from the Position object passed into success callback.
			 var coords = position.coords;
			 
			 // update the distances on each feature...
			 _.each(that.hole.get('holeDetail')[0].features, function(f){ 
				f.distance = GetDistance(coords.latitude, coords.longitude, f.latitude, f.longitude);
			});
			that.render();
		};
		var fail = function(e) {
			 alert('Can\'t retrieve position.\nError: ' + e);
		};
		navigator.geolocation.getCurrentPosition(win, fail);
   } 
	
	
});


function GetDistance(lat1, lon1, lat2, lon2)
{
var R = 6371; // Radius of the earth in km
var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
var dLon = (lon2-lon1).toRad(); 
var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
return R * c; // Distance in km}
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}