HemmingsClone.Models.VehicleSale = Backbone.Model.extend({
  urlRoot: "api/vehicle_sales",
  vehicle: function() {
    if (!this._vehicle) {
      this._vehicle = new HemmingsClone.Models.Vehicle();
    }
    return this._vehicle;
  },

  parse: function(response) {
    this.vehicle().set(response.vehicle);

    this.thumb = response.thumb_url
    delete response.vehicle;
    delete response.thumb_url
    return response;
  },

  listOf: function(attr) {
    return [this.vehicle().get(attr)];
  },

  toJSON: function() {
    var json = { vehicle_sale: _.clone(this.attributes)};

    if (this._images.length > 0) {
      json.vehicle_sale.images = this._images
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
