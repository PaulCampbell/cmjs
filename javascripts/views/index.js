
App.Views.GolfCourses.Index = Backbone.View.extend({
    initialize: function() {
        CM.core.StartScroll();
        if(CM.core.RefreshIntervalId){
        clearInterval(CM.core.RefreshIntervalId);
        }
		 _.bindAll(this, 'render');
        this.golfCourses = this.collection;
		
        this.render();
    },
	
	el: $('#AllCourses'),
     
    render: function() {
        $('#wrapper').show();
        $('#map').hide();

		$('#back').hide();
		$('#header h1').html("Caddy Magic");
        if(this.golfCourses.length > 0) {
		 var template = $("#CourseListItemTmpl");
		 var html = template.tmpl(this.golfCourses.toJSON());
		 $('#CourseList').html(html);
		 $('#app').html(this.el);
         CM.core.MyScroll.refresh() ;
         CM.core.MyScroll.scrollTo(0, 0, 20);
        } else {
         $('#app').html("<h3>No golf courses found</h3>");
        }
        
    },
        events: {
            "click input[type=button]": "doSearch"
        },
		
        doSearch: function( event ){
            // Button clicked, you can access the element that was clicked with event.currentTarget
            alert( "Search for " + $("#txtSearch").val() );
        }
});

