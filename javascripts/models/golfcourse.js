var GolfCourse = Backbone.Model.extend({
    url : function() {
      var base = 'http://www.caddymagic.com/GolfCourse.aspx/download?courseId=10124';
      if (this.isNew()) return base;
      return base;
    }
});