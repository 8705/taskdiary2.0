  MyApp.Models.Todo = Backbone.Model.extend({

    defaults: function() {
      return {
        title: "empty todo...",
        seq: 0,
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

    toggle: function() {
      if ( this.is_done() ) {

        this.save({done_at: null});

      } else {

        this.save({done_at: MyApp.Helper.now()});
      }
    }

  });