this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};
this["MyApp"]["Templates"]["addtask"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input id=\"task_status\" type=\"checkbox\" value=\"1\">\n<input id=\"task_title\" class=\"form-control input-lg\" type=\"text\" placeholder=\"What needs to be done?\">";
},"useData":true});
this["MyApp"]["Templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"footer\">copyright 8705.co</div>";
},"useData":true});
this["MyApp"]["Templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"navbar-header\">\n  <a class=\"navbar-brand\" href=\"#\">TaskDiary</a>\n  <span class=\"btn btn-success calender\">calender</span>\n</div>";
},"useData":true});
this["MyApp"]["Templates"]["layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav id=\"header-wrapper\" class=\"navbar navbar-default\">\n  <div id=\"header\" class=\"container-fluid\"></div>\n</nav>\n\n\n<div id=\"todoapp\" >\n  <div class=\"row\">\n    <div id=\"addTask\" class=\"col-md-8 col-md-offset-3 form-inline\"></div>\n  </div>\n  <div id=\"content\" class=\"row\">\n    <div id=\"today\" class=\"col-md-5 col-md-offset-3\"></div>\n  </div>\n</div>\n<div id=\"footer\"></div>";
},"useData":true});
this["MyApp"]["Templates"]["task"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " done ";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "	    <input class=\"check\" type=\"checkbox\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.is_done : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " />\n";
},"4":function(depth0,helpers,partials,data) {
    return " checked=\"checked\"";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.done_at || (depth0 != null ? depth0.done_at : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"done_at","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"todo "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.is_done : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"display\" title=\"ダブルクリックして編集...\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	  <div class=\"todo-content\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.is_done : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n	  <span class=\"todo-destroy glyphicon glyphicon-remove-circle\"></span>\n	</div>\n	<input class=\"edit\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\n</div>";
},"useData":true});
this["MyApp"]["Templates"]["today"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>tasks</h2>\n<ul id=\"todayTasks\" class=\"list-group\"></ul>";
},"useData":true});