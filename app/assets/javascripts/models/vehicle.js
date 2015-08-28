HemmingsClone.Models.Vehicle = Backbone.Model.extend({

  description: function() {
    var year = this.escape("year");
    var make = this.escape("make");
    var model = this.escape("model");
    return year+ " " + make + " " + model;
  }


})
