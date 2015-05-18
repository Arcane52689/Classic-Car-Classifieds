HemmingsClone.Views.OptionsForm = Backbone.View.extend({
  tagName: "form",
  events: {
    "click .select": "hideResults",
    "click .reset": "reset"
  },
  initialize: function(options) {
    this.$results = options.$results;
    this.attr = options.attr;
    this.list = options.list;
    this.callback = options.callback;
    this.hidden = [];

    if (this.list.length <= 1) {
      this.callback && this.callback()
    }
  },

  template: JST["results/form"],

  render: function() {
    this.$el.html(this.template({
      list: this.list,
      attr: this.attr
      }))
    return this;
  },


  hideResults: function(event) {
    event.preventDefault();
    var selected = this.$el.serializeJSON()
    this.$results.each(function(idx, li) {
      var $li = $(li);
      var id = $li.data("id");
      var list = this.collection.get(id).listOf(this.attr)
      _.each(list, function(attribute) {
        if (!_.contains(selected[this.attr], attribute)) {
          if (!$li.hasClass("inactive")) {
            $li.addClass("inactive")
            this.hidden.push($li)
          }
        }
      }.bind(this))
    }.bind(this))
    this.callback && this.callback();
    this.hideOptions()

  },

  reset: function(event) {
    event.preventDefault();
    this.render();
    _.each(this.hidden, function($li) {
      $li.removeClass("inactive");
    });
  },

  hideOptions: function() {
    var selected = this.$el.serializeJSON()
    this.$(".options").children().each(function(idx, li) {
      var $input = $(li).find("input")

      if (!_.contains(selected[this.attr], $input.val())) {
        $(li).addClass("inactive");
      }
    }.bind(this))
  }




})
