$(function(){

  // Our overall **AppView** is the top-level piece of UI.
  MyApp.App = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#todoapp"),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "keypress #new-todo":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete"
    },

    // At initialization we bind to the relevant events on the `Todays`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function() {

      this.input = this.$("#new-todo");

      this.listenTo(Todays, 'add', this.addOne);
      this.listenTo(Todays, 'reset', this.addAll);
      this.listenTo(Todays, 'sort', this.reorder);
      this.listenTo(Todays, 'all', this.render);

      this.footer = this.$('footer');
      this.main = $('#main');

      this.todaysList = $("#todayTasks");

      Todays.fetch();
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
      if (!this.input.val()) return;

      Todays.create({title: this.input.val()});
      this.input.val('');
    },

    // Clear all done todo items, destroying their models.
    clearCompleted: function() {
      _.invoke(Todays.done(), 'destroy');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      Todays.each(function (todo) { todo.save({'done': done}); });
    }

  });

  // Finally, we kick things off by creating the **App**.
  var App = new MyApp.App();

});
