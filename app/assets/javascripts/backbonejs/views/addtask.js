$(function(){

  // The DOM element for a todo item...
  MyApp.Views.Addtask = Backbone.View.extend({

    tmpl: MyApp.Templates.addtask,

    events: {
      "keypress #task_title":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
    },

    initialize: function () {
      this.$el.html(this.tmpl());

      this.task_title  = this.$("#task_title");
      this.task_status = this.$("#task_status");

      this.task_title.focus();
    },

    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.task_title.val()) return;

      task_status = this.task_status.prop('checked') ? 1 : 0;

      MyApp.mediator.trigger('createTask', {title: this.task_title.val(), status: task_status});

      this.task_title.val('');
      this.task_status.prop('checked', false);
    },
  });
});