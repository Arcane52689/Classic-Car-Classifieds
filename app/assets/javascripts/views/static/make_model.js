HemmingsClone.Views.MakeModelForm = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.changeOptions)
  },
  events: {
    "change .select-make": "changeMake"
  },
  template: JST["static/vehicle"],

  render: function() {
    this.$el.html(this.template({}));
    return this;
  },

  changeMake: function(event) {
    event.preventDefault();
    var make = $(event.currentTarget).val();
    this.collection.setMake(make);
  },

  changeOptions: function() {
    this.$(".select-model").html("<option selected> None </option>")
    this.collection.each(function(vehicle) {
      var content = '<option value="' + vehicle.escape("model")+'">'+vehicle.escape("model")+"</option>";
      this.$(".select-model").append(content);
    });
    
  },


})
