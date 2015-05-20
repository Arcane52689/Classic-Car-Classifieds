HemmingsClone.Models.User = Backbone.Model.extend({
  urlRoot:"api/users",

  loggedIn: function() {
    if (this.get("email")) {
      return true;
    }
    return false;
  },

  parse: function(resp) {
    if (resp.vehicle_sales) {
      this.vehicleSales().set(resp.vehicle_sales, {parse: true});
      delete resp.vehicle_sales;
    }
    if (resp.part_sales) {
      this.partSales().set(resp.part_sales, {parse: true});
      delete resp.part_sales;
    }

    return resp;
  },


  vehicleSales: function() {
    if (!this._vehicleSales) {
      this._vehicleSales = new HemmingsClone.Collections.VehicleSales();
    }
    return this._vehicleSales
  },

  partSales: function() {
    if (!this._partSales) {
      this._partSales = new HemmingsClone.Collections.PartSales();
    }
    return this._partSales
  }
})
