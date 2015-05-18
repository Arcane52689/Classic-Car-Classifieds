class VehicleSales < ActiveRecord::Migration
  def change
    add_column :vehicle_sales, :price, :integer, default: 0 
  end
end
