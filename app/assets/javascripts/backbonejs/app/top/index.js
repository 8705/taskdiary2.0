//= require ../../namespace.js
//= require ../../layout.js
//= require ../../helper.js
//= require ../../models/task.js
//= require ../../collections/todaylist.js
//= require ../../views/task.js
//= require ../../views/addtask.js
//= require ../../views/header.js
//= require ../../views/footer.js
//= require ../../templates/layout.js

$(function(){

  // Our overall **AppView** is the top-level piece of UI.
  MyApp.App = Backbone.View.extend({

    el: $("#app"),

    tmpl: MyApp.Templates.layout,

    events: {
      "keypress #task_title":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete"
    },

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

      this.footer = new MyApp.Views.Footer({
        el: this.$el.find('#footer')
      });

      this.task_title  = this.$("#task_title");
      this.task_status = this.$("#task_status");

      this.listenTo(Todays, 'add', this.addOne);
      this.listenTo(Todays, 'reset', this.addAll);
      this.listenTo(Todays, 'sort', this.reorder);
      this.listenTo(Todays, 'all', this.render);

      this.footer = this.$('footer');
      this.main = $('#main');

      this.todaysList = $("#todayTasks");

      Todays.fetch();
      this.task_title.focus();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      var done = Todays.done().length;
      var remaining = Todays.remaining().length;

      if (Todays.length) {
        this.main.show();
        this.footer.show();
      } else {
        this.main.hide();
        this.footer.hide();
      }
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(todo) {
      var view = new MyApp.Views.Task({model: todo});

      // statusチェックが入っていたらliにクラス追加
      if (view.model.attributes.status === 1) {
        view.$el.addClass('separator');
      }

      this.todaysList.append(view.render().el);
    },

    // Add all items in the **Todays** collection at once.
    addAll: function() {
      Todays.each(this.addOne, this);
    },

    reorder: function() {
      this.todaysList.html('');
      this.addAll();
    },

    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.task_title.val()) return;

      task_status = this.task_status.prop('checked') ? 1 : 0;
      Todays.create({title: this.task_title.val(), status: task_status},
                    {
                      success:function(model, response, options){
                        model.sync_id(response);
                    }});
      this.task_title.val('');
      this.task_status.prop('checked', false);
    },

    // Clear all done todo items, destroying their models.
    clearCompleted: function() {
      _.invoke(Todays.done(), 'destroy');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      Todays.each(function (todo) { todo.save({'done': MyApp.Helper.now()}); });
    }

  });

  // Finally, we kick things off by creating the **App**.
  var App = new MyApp.App();

});
