HemmingsClone.Models.User = Backbone.Model.extend({
  url:"api/users/1",

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

    if (resp.looking_fors) {
      this.lookingFors().set(resp.looking_fors, { parse: true })
      delete resp.looking_fors;
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
  },

  lookingFors: function() {
    if (!this._lookingFors) {
      this._lookingFors = new HemmingsClone.Collections.LookingFors();
    }
    return this._lookingFors;
  }
})
