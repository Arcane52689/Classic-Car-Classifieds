HemmingsClone.Views.PartSaleForm = Backbone.View.extend({
  initialize: function(options) {

  },

  events: {
    "submit form": "submit"
  },

  template: JST["part_sales/new"],

  render: function() {
    this.$el.html(this.template({part_sale: this.model}));
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var data = $form.serializeJSON();
    this.model.save(data, {
      success: function(){
        this.collection.add(this.model);
        Backbone.history.navigate("#part_sales", {trigger: true});
      }.bind(this)
    })
  }



})
