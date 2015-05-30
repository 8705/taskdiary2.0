$(function(){

  // The DOM element for a todo item...
  MyApp.Views.Header = Backbone.View.extend({

    tmpl: MyApp.Templates.header,

    initialize: function () {
      this.$el.html(this.tmpl());
    }
  });
});