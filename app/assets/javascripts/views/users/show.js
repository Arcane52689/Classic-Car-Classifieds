HemmingsClone.Views.UserShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.model.fetch();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lookingFors(),"remove",this.render);
  },
  className: "user-show",

  template: JST["users/show"],

  render: function() {
    this.$el.html(this.template());
    this.addSales();
    return this;
  },

  addSales: function() {
    var viewFn = this.model.vehicleSales().view
    this.model.vehicleSales().each(function(sale) {
      var view = new viewFn({model: sale});
      this.addSubview("#vehicle-sales", view);
    }.bind(this));

    var viewFn = this.model.partSales().view
    this.model.partSales().each(function(sale) {
      var view = new viewFn({model: sale})
      this.addSubview("#part-sales", view)
    }.bind(this))

    var viewFn = this.model.lookingFors().view
    this.model.lookingFors().each(function(sale) {
      var view = new viewFn({model: sale})
      this.addSubview("#looking-fors", view)
    }.bind(this))
  }
})
