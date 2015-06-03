HemmingsClone.Views.SortOptions = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.$results = options.$results;
    this.models = [];
    this.model_collection = new HemmingsClone.Collections.Vehicles({
      make: "None"
    });
    this.listenTo(this.model_collection, "sync", this.renderModels);
    this.listenToOnce(this.collection, "sync", this.addModels);

    this.isSearch = options.isSearch;
  },

  events: {
    "change   .sort-options": "reSort"
  },



  template: JST["static/sort_options"],

  render: function() {
    this.$el.html(this.template());
    this.renderMakes();
    return this;
  },


  renderMakes: function() {
    var view = new HemmingsClone.Views.MakeForm({
      $results: this.$results,
      collection: this.collection,
      callback: this.addModels.bind(this),
      className: "make",
      isSearch: this.isSearch
    })
    this.addSubview("#make-options", view)
  },

  addModels: function(makes) {
    this.models = [];
    if (this.isSearch && (this.collection.length > 0)) {
      makes = this.collection.first().listOf("make")
    }
    if (makes === this.collection) {
      return null;
    }
    _.each(makes, function(make) {
      this.model_collection.setMake(make, function() {
        this.model_collection.each(function(car){
          this.models.push(car.escape("model"));
        }.bind(this));
      }.bind(this));
    }.bind(this));
  },

  renderModels: function() {

    if (this._modelsView) {
      this._modelsView.remove();
    }
    var view = new HemmingsClone.Views.ModelForm({
      $results: this.$results,
      isSearch: this.isSearch,
      collection: this.collection,
      list: this.models,
      className: "form-models"
    })
    this.addSubview("#model-options",view);
    this._modelsView = view;
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
