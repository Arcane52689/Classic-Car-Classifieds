class AddLocationToVehicleSales < ActiveRecord::Migration
  def change
    add_column :vehicle_sales, :location, :integer
  end
end
