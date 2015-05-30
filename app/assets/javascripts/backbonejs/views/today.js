$(function(){

  MyApp.Views.Today = Backbone.View.extend({

    tmpl: MyApp.Templates.today,

    initialize: function () {

      _.bindAll(this, 'create');

      this.$el.html(this.tmpl());

      this.todayUl = $('#todayTasks');

      this.todaylist = new MyApp.Collections.TodayList();

      this.todaylist.fetch();

      this.listenTo(this.todaylist, 'add', this.addOne);
      this.listenTo(this.todaylist, 'reset', this.addAll);
      this.listenTo(this.todaylist, 'sort', this.reOrder);

      MyApp.mediator.on('createTask', this.create);
    },

    create: function(task) {
      task.seq = this.todaylist.nextSeq();
      this.todaylist.create(task,{
        success:function(model, response, options){
          model.sync_id(response);
        },
      });
    },

    addOne: function(todo) {
      var view = new MyApp.Views.Task({model: todo});

      // statusチェックが入っていたらliにクラス追加
      if (view.model.attributes.status === 1) {
        view.$el.addClass('separator');
      }

      this.todayUl.append(view.render().el);
    },

    addAll: function() {
      this.todaylist.each(this.addOne, this);
    },

    reOrder: function() {
      this.todayUl.html('');
      this.addAll();
    },

  });
});