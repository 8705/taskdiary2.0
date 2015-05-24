$(function(){


  // The DOM element for a todo item...
  MyApp.Views.Task = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",
    className : "list-group-item",
    attributes : {'draggable':true},

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    counter: 0,

    // The DOM events specific to an item.
    events: {
      "click .check"   : "toggleDone",
      "dblclick .todo-content"  : "edit",
      "click .todo-destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close",

      "dragstart"       : "onDragStart",
      "dragend"         : "onDragEnd",
      "drop"            : "onDrop",
      "dragover"        : "onDragOver",
      "dragenter"       : "onDragEnter",
      "dragleave"       : "onDragLeave",
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.is_done());
      this.input = this.$('.edit');
      return this;
    },

    // Toggle the `"done"` state of the model.
    toggleDone: function() {
      this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      var val;
      this.$el.addClass("editing");
      val = this.input.val();
      this.input.val('');
      this.input.val(val);
      this.input.focus();
    },

    // Close the `"editing"` mode, saving changes to the todo.
    close: function() {
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({title: value});
        this.$el.removeClass("editing");
      }
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    },

    onDragStart: function (e) {
      var id;
      this.moving = true;
      this.$el.addClass('moving');
      cid = this.model.cid;
      e.originalEvent.dataTransfer.setData('application/x-todo-cid',cid);
    },

    onDragEnd: function () {
      this.moving = false;
      this.$el.removeClass('moving');
      this.$el.removeClass('over');
    },

    onDrop: function (e) {
      var id, this_id;
      e.preventDefault();
      // 自分自身へドロップした場合は何もしない
      if (!this.moving) {
        // idがない場合はcidで識別/サーバーから再フェッチするまでは新しく追加した要素にidは存在しない。
        // createの応答jsonでid投げ返しても良いかもしれない
        cid      = e.originalEvent.dataTransfer.getData('application/x-todo-cid');
        this_cid = this.model.cid;
        this.model.collection.reorder(cid, this_cid);
      }
    },

    onDragOver: function (e) {
      // ドロップ可能にする
      e.preventDefault();
    },

    onDragEnter: function(e) {
      this.counter++;
      this.$el.addClass("over");
    },

    onDragLeave:function(e) {
      this.counter--;
      if(this.counter === 0) {
        this.$el.removeClass("over");
      }
    }

  });
});