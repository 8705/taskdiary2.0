var Router = Backbone.Router.extend({
    routes : {  // ハッシュフラグメントと対応するメソッド名の組を設定する
        ''           : 'index',
        'calender(/:year)(/:month)(/:day)'   : 'calender',
        'blog(/:id)' : 'blog'
    },

    index : function index() {
        // ハッシュなしでアクセスされたときの処理を書く
        console.log('index', arguments);
    },

    calender : function calender() {
        // #mypageでアクセスされたときの処理を書く
        console.log('calender', arguments);
    },

    blog : function blog(id) {
        // #blog（または#blog/123など）でアクセスされたときの処理を書く
        console.log('blog', arguments);
    }
});

var router = new Router();