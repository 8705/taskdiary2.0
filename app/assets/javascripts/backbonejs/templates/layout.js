this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};
this["MyApp"]["Templates"]["task"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " done ";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "	    <input class=\"check\" type=\"checkbox\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.done_at : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " />\n";
},"4":function(depth0,helpers,partials,data) {
    return " checked=\"checked\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"todo "
    + ((stack1 = helpers['if'].call(depth0,(helpers.done_at || (depth0 && depth0.done_at) || alias1).call(depth0,{"name":"done_at","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"display\" title=\"ダブルクリックして編集...\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	  <div class=\"todo-content\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div><span>"
    + alias3(((helper = (helper = helpers.done_at || (depth0 != null ? depth0.done_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"done_at","hash":{},"data":data}) : helper)))
    + "</span>\n	  <span class=\"todo-destroy glyphicon glyphicon-remove-circle\"></span>\n	</div>\n	<input class=\"edit\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\n</div>";
},"useData":true});