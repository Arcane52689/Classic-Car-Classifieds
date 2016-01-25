HemmingsClone.Views.DropdownSearch = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.list = options.list;
    this.placeholder = options.placeholder;
    this.name = options.name;
    this.selectCallback = options.selectCallback;
  },

  events: {
    "keyup input": "updateResults",
    "click li": "select"
  },

  template: JST["shared/dropdown_search"],

  render: function() {
    this.$el.html(this.template({
      placeholder: this.placeholder,
      name: this.name
    }))
    return this;
  },

  renderItems: function(items) {
    var view;
    this.clearSelector(".dropdown-select");
    items.forEach(function(item) {
      console.log("HI");
      view = new HemmingsClone.Views.DropdownItem({
        item: item
      });
      this.addSubview(".dropdown-select", view);
    }.bind(this));
  },

  updateResults: function() {
    var result = [];
    var match = this.$("input").val().toUpperCase();
    this.list.forEach(function(item) {
      if (item.toUpperCase().indexOf(match) > -1) {
        result.push(item);
      }
    })
    this.renderItems(result);
  },

  select: function(event) {
    event.preventDefault();
    $li = $(event.currentTarget);
    var make = $li.html();
    this.$("input").val(make);
    this.clearSelector(".dropdown-select");
    this.selectCallback && this.selectCallback(make);
  }

})
