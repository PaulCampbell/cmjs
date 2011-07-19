var GolfCourse = Backbone.Model.extend({
	defaults: {
		"Id":  "10124"
	},
    url : function() {
      var base = 'http://www.caddymagic.com/GolfCourse.aspx/download?courseId=';
      return base + this.get('Id');
    }
});