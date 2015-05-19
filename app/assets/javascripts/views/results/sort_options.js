HemmingsClone.Views.SortOptions = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.$results = options.$results
    this.listenTo(this.collection, "sync", this.render);
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
        callback: this.addModels.bind(this)
      })
      this.addSubview(".result-options", view)
    }.bind(this));
    return this;
  },

  addModels: function() {
    if (this._modelsView) {
      this._modelsView.remove();
    }
    var models = [];
    this.$results.each(function(idx, li){
      var $li = $(li);
      if (!$li.hasClass("inactive")) {
        var id = $li.data("id");
        _.each(this.collection.get(id).listOf("model"), function(model) {

          if (!_.contains(models, model)) {
            models.push(model);
          }
        })
      }
    }.bind(this))
    this._modelsView = new HemmingsClone.Views.OptionsForm({
      $results: this.$results,
      collection: this.collection,
      attr: "model",
      list: models
    })
    this.addSubview(".result-options",this._modelsView)
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
