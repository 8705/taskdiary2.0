//= require ../../namespace.js
//= require ../../layout.js
//= require ../../helper.js
//= require ../../models/task.js
//= require ../../collections/todaylist.js
//= require ../../views/task.js
//= require ../../views/addtask.js
//= require ../../views/today.js
//= require ../../views/header.js
//= require ../../views/footer.js
//= require ../../templates/layout.js
//= require ../../router.js


$(function(){

  MyApp.App = Backbone.View.extend({

    el: $("#app"),

    tmpl: MyApp.Templates.layout,

    initialize: function() {

      MyApp.mediator = {};
      _.extend(MyApp.mediator, Backbone.Events);

      this.$el.html(this.tmpl());

      this.header = new MyApp.Views.Header({
        el: this.$el.find('#header')
      });

      this.addtask = new MyApp.Views.Addtask({
        el: this.$el.find('#addTask')
      });

      this.today = new MyApp.Views.Today({
        el: this.$el.find('#today'),
      });

      this.footer = new MyApp.Views.Footer({
        el: this.$el.find('#footer')
      });

      // this.listenTo(Todays, 'all', this.render);

    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      var done = Todays.done().length;
      var remaining = Todays.remaining().length;

    },

    // Clear all done todo items, destroying their models.
    // clearCompleted: function() {
    //   _.invoke(Todays.done(), 'destroy');
    //   return false;
    // },

    // toggleAllComplete: function () {
    //   var done = this.allCheckbox.checked;
    //   Todays.each(function (todo) { todo.save({'done': MyApp.Helper.now()}); });
    // }

  });

  var App = new MyApp.App();
  Backbone.history.start({ pushState:true});

});
