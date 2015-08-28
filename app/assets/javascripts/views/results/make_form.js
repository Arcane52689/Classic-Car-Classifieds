HemmingsClone.Views.MakeForm = Backbone.View.extend({
  tagName: "form",

  events: {
    "click .select": "reFetch",
    "click .reset": "reset"
  },
  initialize: function(options) {
    this.$results = options.$results;
    this.list = options.list;
    this.callback = options.callback;
    this.hidden = [];
    this.isSearch = options.isSearch;
    if (options.isSearch) {
      this.remove()
      this.callback && this.callback(this.$el.serializeJSON()["make"])
    }
  },

  template: JST["results/make_form"],

  render: function() {
    this.$el.html(this.template({
      list: this.list
      }))
    if (this.isSearch) {
      this.$el.empty();
    }
    return this;
  },


  reFetch: function(event) {
    event.preventDefault();
    var selected = this.$el.serializeJSON();

    this.collection.searchData["makes"] = selected["make"];
    this.collection.grab();
    this.hideOptions();
    this.callback && this.callback(this.$el.serializeJSON()["make"]);
  },

  reset: function(event) {
    event.preventDefault();
    delete this.collection.searchData["makes"]
    this.collection.grab()
    $("#model-options").empty();
    this.render();

  },

  hideOptions: function() {
    var selected = this.$el.serializeJSON()
    this.$(".options").children().each(function(idx, li) {
      var $input = $(li).find("input")
      if (!_.contains(selected["make"], $input.val())) {
        $(li).addClass("inactive");
      }
    }.bind(this))
  }




})
