// Our basic **Todo** model has `title`, `order`, and `done` attributes.
  MyApp.Models.Todo = Backbone.Model.extend({

    url: "/tasks",

    // Default attributes for the todo item.
    defaults: function() {
      return {
        title: "empty todo...",
        order: Todays.nextOrder(),
        done_at: null
      };
    },

    is_done: function() {
      return this.get("done_at") !== null;
    },

    // Toggle the `done_at` state of this todo item.
    toggle: function() {
      if ( this.is_done() ) {

        this.save({done_at: null});

      } else {

        this.save({done_at: MyApp.Helper.now()});
      }
    }

  });