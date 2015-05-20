HemmingsClone.Models.User = Backbone.Model.extend({
  url:"api/users/show",

  loggedIn: function() {
    if (this.get("email")) {
      return true;
    }
    return false;
  },

  parse: function(resp) {
    if (resp.vehicle_sales) {
      this.vehicleSales().set(resp.vehicle_sales);
      delete response.vehicle_sales;
    }
    if (resp.part_sales) {
      this.partSales().set(resp.part_sales);
      delte response.part_sales;
    }
    return response;
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
