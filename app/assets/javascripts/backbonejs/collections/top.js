// The collection of todos is backed by *localStorage* instead of a remote
// server.
MyApp.Collections.TodayList = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: MyApp.Models.Todo,

  // Save all of the todo items under the `"todos-backbone"` namespace.
  // localStorage: new Backbone.LocalStorage("todos-backbone"),
  url: '/tasks',

  // Filter down the list of all todo items that are finished.
  done: function() {
    return this.where({done: !null});
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function() {
    return this.where({done: null});
  },

  // We keep the Todays in sequential order, despite being saved by unordered
  // GUID in the database. This generates the next order number for new items.
  nextSeq: function() {
    if (!this.length) return 1;
    return this.last().get('seq') + 1;
  },

  // Todays are sorted by their original insertion seq.
  comparator: 'seq',

  swap: function (idA, idB) {
    var tmp, modelA, modelB,insert;
    modelA = this.get(idA);
    modelB = this.get(idB);
    debugger;
    insert = modelB.get('seq');
    if (modelA && modelB) {
      modelA.save('seq', insert, {silent: true});

      _.each(this.models, function(model){
        if(model.get("seq") >= insert && model !== modelA) {

          model.save('seq', model.get('seq') + 1);

        }
      });

      this.sort();
    }
  },

});

// Create our global collection of **Todays**.
var Todays = new MyApp.Collections.TodayList();