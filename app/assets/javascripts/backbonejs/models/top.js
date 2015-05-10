// Our basic **Todo** model has `title`, `order`, and `done` attributes.
  MyApp.Models.Todo = Backbone.Model.extend({

    // Default attributes for the todo item.
    defaults: function() {
      return {
        title: "empty todo...",
        order: Todays.nextOrder(),
        done: false
      };
    },

    // Toggle the `done` state of this todo item.
    toggle: function() {
      this.save({done: !this.get("done")});
    }

  });