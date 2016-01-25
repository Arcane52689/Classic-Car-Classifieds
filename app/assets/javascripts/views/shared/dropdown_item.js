HemmingsClone.Views.DropdownItem = Backbone.View.extend({
  initialize: function(options) {
    this.item = options.item;
  },
  tagName: "li",
  class: "dropdown-item",

  template: JST['shared/dropdown_item'],

  render: function() {
    this.$el.html(this.template({
      item: this.item
    }))
    return this;
  }


})
