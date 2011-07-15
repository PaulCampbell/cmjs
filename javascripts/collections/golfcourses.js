

App.Collections.GolfCourses = Backbone.Collection.extend({
    model: GolfCourse,
    url: 'http://www.caddymagic.com/GolfCourse.aspx/RemoteSearch'
});
