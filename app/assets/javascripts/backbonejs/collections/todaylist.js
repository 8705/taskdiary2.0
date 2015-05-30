MyApp.Collections.TodayList = Backbone.Collection.extend({

  model: MyApp.Models.Todo,

  // localStorage: new Backbone.LocalStorage("todos-backbone"),
  url: '/tasks',

  done: function() {
    return this.where({done: !null});
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function() {
    return this.where({done: null});
  },

  nextSeq: function() {
    if (!this.length) return 1;
    return this.last().get('seq') + 1;
  },

  comparator: 'seq',

  reorder: function (cidA, cidB) {
    var from, modelA, modelB,to;
    modelA  = this.get(cidA);
    modelB  = this.get(cidB);
    to      = modelB.get('seq');
    from    = modelA.get("seq");
    if ( modelA && modelB ) {
      modelA.save('seq', to, {silent: true});
      if ( from > to )
      {
        _.each(this.models, function(model){
          if ( model.get("seq") >= to && model.get("seq") < from && model !== modelA ) {
            model.save('seq', model.get('seq') + 1);

          }
        });
      }
      else
      {
        _.each(this.models, function(model){
          if ( model.get("seq") >= from && model.get("seq") <= to && model !== modelA ) {
            model.save('seq', model.get('seq') - 1);

          }
        });
      }

      this.sort();
    }
  },

});