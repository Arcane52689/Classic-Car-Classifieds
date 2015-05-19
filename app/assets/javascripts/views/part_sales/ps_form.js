HemmingsClone.Views.PartSaleForm = Backbone.CompositeView.extend({
  initialize: function(options) {

  },

  events: {
    "submit form": "submit",
    "click .add-image": "addImage"
  },

  template: JST["part_sales/new"],

  render: function() {
    this.$el.html(this.template({part_sale: this.model}));
    var view = new HemmingsClone.Views.MakeModelForm({
      collection: new HemmingsClone.Collections.Vehicles({
        make: "None"
      })
    })
    this.addSubview("#make-model",view)
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
  },

  addImage: function(event) {
    event.preventDefault();
    var view = new HemmingsClone.Views.AddImage({model:this.model})
    this.addSubview(".uploaded", view);
  }



})
