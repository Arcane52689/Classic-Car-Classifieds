HemmingsClone.Views.VehicleSaleForm = Backbone.CompositeView.extend({

  events: {
    "submit form": "submit"
  },

  template: JST["vehicle_sales/new"],

  render: function() {
    this.$el.html(this.template({ sale: this.model }));
    var view = new HemmingsClone.Views.MakeModelForm({
      collection: new HemmingsClone.Collections.Vehicles({
        make: "Toyota"
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
      success: function() {
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate("", {trigger: true});
      }.bind(this)
    })
  }
})
