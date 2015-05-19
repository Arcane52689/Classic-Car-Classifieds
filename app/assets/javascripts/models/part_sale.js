HemmingsClone.Models.PartSale = Backbone.Model.extend({
  urlRoot: "api/part_sales",

  vehicles: function() {
    if (!this._vehicles) {
      this._vehicles = new HemmingsClone.Collections.Vehicles();
    }
    return this._vehicles;
  },

  parse: function(response) {
    this.vehicles().set(response.vehicles, { parse: true });
    this.thumb = response.thumb_url
    if (response.images) {
      this._images = response.images;
    }
    delete response.vehicles;
    delete response.thumb_url;
    delete response.images
    return response;
  },


  listOf: function(attr) {
    var result = [];
    this.vehicles().each(function(car) {
      if (!_.contains(result, car.get(attr))) {
        result.push(car.get(attr))
      }
    })
    return result;
  },

  toJSON: function() {
    var json = { part_sale: _.clone(this.attributes)};
    json.vehicle= this.get("vehicle")
    if (this._images.length > 0) {
      json.part_sale.images = this._images
    }
    return json;
  },

  images: function() {
    if (!this._images) {
      this._images = []
    }
    return this._images
  }
})
