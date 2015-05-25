HemmingsClone.Views.SortOptions = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.$results = options.$results
    this.models = []
    this.model_collection = new HemmingsClone.Collections.Vehicles({
      make: "None"
    });
    // this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.model_collection, "sync", this.renderModels)
  },

  events: {
    "click .sort-option": "reSort"
  },



  template: JST["static/sort_options"],

  render: function() {
    this.$el.html(this.template());
    _.each(["make"], function(attr) {
      var view = new HemmingsClone.Views.OptionsForm({
        $results: this.$results,
        collection: this.collection,
        attr: attr,
        list: this.listOf(attr),
        callback: this.addModels.bind(this),
        className: "make"
      })

      this.addSubview("#make-options", view)
    }.bind(this));
    console.log("rendering sort-options");
    return this;
  },

  addModels: function(makes) {
    this.models = [];
    console.log(this);
    _.each(makes, function(make) {
      this.model_collection.setMake(make, function() {
        this.model_collection.each(function(car){
          // debugger
          this.models.push(car.escape("model"));
        }.bind(this));
      }.bind(this));
    }.bind(this));
  },

  renderModels: function() {
    if (this._modelsView) {
      this._modelsView.remove();
    }
    var view = new HemmingsClone.Views.OptionsForm({
      $results: this.$results,
      collection: this.collection,
      attr: "model",
      list: this.models,
      className: "form-models"
    })

    console.log("rendering models")
    this.addSubview("#model-options",view)
    debugger
    this._modelsView = view
  },



  listOf: function(attr) {
    var result = []

    this.collection.each(function(sale) {
      _.each(sale.listOf(attr), function(attribute) {

        if (!_.contains(result, attribute)) {
          result.push(attribute);

        }
      })
    }.bind(this));

    return result
  },

  reSort: function(event) {

    this.collection.searchData.sortBy = $(event.currentTarget).val();
    this.collection.grab();

  }


})
