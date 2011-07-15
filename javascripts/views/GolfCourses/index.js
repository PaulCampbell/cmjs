
App.Views.GolfCourses.Index = Backbone.View.extend({
    initialize: function() {
		 _.bindAll(this, 'render');
        this.golfCourses = this.collection;
		
        this.render();
    },
	
	el: $('#AllCourses'),
     
    render: function() {
        if(this.golfCourses.length > 0) {
		 var template = $("#CourseListItemTmpl");
		 var html = template.tmpl(this.golfCourses.toJSON());
		 $('#CourseList').html(html);
		 this.el.html($('#CourseList'));
		 $('#app').html(this.el);
        } else {
         $('#app').html("<h3>No golf courses found</h3>");
        }
        
    }
});

