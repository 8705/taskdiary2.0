$(function(){

  // The DOM element for a todo item...
  MyApp.Views.Header = Backbone.View.extend({

    tmpl: MyApp.Templates.header,

    events: {
      "click .calender":  "moveToCalender",
    },

    initialize: function () {
      this.$el.html(this.tmpl());
    },

    moveToCalender: function() {
      Backbone.history.navigate('calender/2015/5/25',true);
    },
  });
});