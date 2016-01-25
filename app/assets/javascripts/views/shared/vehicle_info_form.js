HemmingsClone.Views.VehicleInfoForm = Backbone.CompositeView.extend({
  initialize: function() {
    this.makes = window.ALL_MAKES

    this.makeView = new HemmingsClone.Views.DropdownSearch({
      name: "vehicle[make]",
      placeholder: "Manufacturer",
      list: this.makes,
      selectCallback: this.selectMake.bind(this)
    });
    this.collection = new HemmingsClone.Collections.Vehicles({
      make: "None"
    })
    this.listenTo(this.collection, "sync", this.renderModels.bind(this));
  },

  template: JST["shared/vehicle_info_form"],

  render: function() {
    this.$el.html(this.template());
    this.addSubview(".make-select", this.makeView);
    return this;
  },

  selectMake: function(make) {
    this.collection.setMake(make);
  },

  selectModel: function(model) {
    console.log("model");
  },

  renderModels: function() {
    this.modelView && this.modelView.remove();
    this.modelView = new HemmingsClone.Views.DropdownSearch({
      name: "vehicle[model]",
      placeholder: "Model",
      list: this.collection.allModels(),
      selectCallback: this.selectModel.bind(this)
    })
    this.addSubview(".model-select", this.modelView);
  }






})
