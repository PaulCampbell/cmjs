/**
 * Created by JetBrains WebStorm.
 * User: paulcampbell
 * Date: 23/11/2011
 * Time: 20:40
 * To change this template use File | Settings | File Templates.
 */
App.Views.GolfCourses.Map = Backbone.View.extend({

    initialize: function() {
        CM.core.KillScroll();
        if(CM.core.RefreshIntervalId){
            clearInterval(CM.core.RefreshIntervalId);
        }

         this.golfCourse = this.model;
		 _.bindAll(this, 'render');
        this.render();
    },

   render: function() {
       $('#wrapper').hide();
       $('#map').show();
        var latlng = new google.maps.LatLng( this.golfCourse.get('latitude'),  this.golfCourse.get('longitude'));
        var myOptions = {
        zoom: 18,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
        };

        var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

 
		$('#back').attr('href', 'golfcourses/' + this.golfCourse.get('Id'));
		$('#back').show();

    }
});
