HemmingsClone.Views.ModelForm = Backbone.View.extend({
  tagName: "form",

  events: {
    "click .select": "reFetch",
    "click .reset": "reset"
  },
  initialize: function(options) {
    this.$results = options.$results;
    this.attr = options.attr;
    this.list = options.list;
    this.callback = options.callback;
    this.hidden = [];
    if (this.list.length <= 4) {
      this.callback && this.callback(this.$el.serializeJSON()[this.attr])
    }
  },

  template: JST["results/model_form"],

  render: function() {
    this.$el.html(this.template({
      list: this.list,
      attr: this.attr
      }))

    return this;
  },


  reFetch: function(event) {
    event.preventDefault();
    var selected = this.$el.serializeJSON();

    this.collection.searchData[this.attr+"s"] = selected[this.attr];
    this.collection.grab();
    this.hideOptions();
    this.callback && this.callback(this.$el.serializeJSON()[this.attr]);
  },

  reset: function(event) {
    event.preventDefault();
    delete this.collection.searchData[this.attr+"s"]
    this.collection.grab()
    if (this.attr == "make") {
      $("#model-options").empty();
    }
    this.render();

  },

  hideOptions: function() {
    var selected = this.$el.serializeJSON()
    this.$(".options").children().each(function(idx, li) {
      var $input = $(li).find("input")
      if (!selected[$input.val()]) {
        $(li).addClass("inactive");
      }
    }.bind(this))
  }




})
