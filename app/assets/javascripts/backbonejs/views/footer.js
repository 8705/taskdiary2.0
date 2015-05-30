$(function(){

  // The DOM element for a todo item...
  MyApp.Views.Footer = Backbone.View.extend({

    tmpl: MyApp.Templates.footer,

    initialize: function () {
      this.$el.html(this.tmpl());
    }
  });
});