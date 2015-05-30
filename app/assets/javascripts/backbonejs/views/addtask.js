$(function(){

  // The DOM element for a todo item...
  MyApp.Views.Addtask = Backbone.View.extend({

    tmpl: MyApp.Templates.addtask,

    initialize: function () {
      this.$el.html(this.tmpl());
    }
  });
});