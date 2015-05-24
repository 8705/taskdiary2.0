// Our basic **Todo** model has `title`, `order`, and `done` attributes.
  MyApp.Models.Todo = Backbone.Model.extend({

    // Default attributes for the todo item.
    defaults: function() {
      return {
        title: "empty todo...",
        seq: Todays.nextSeq(),
        done_at: null,
        status: 0,
      };
    },

    is_done: function() {
      return this.get("done_at") !== null;
    },

    sync_id: function(id){
      this.save('id', id, {silent: true});
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