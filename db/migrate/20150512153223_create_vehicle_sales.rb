class CreateVehicleSales < ActiveRecord::Migration
  def change
    create_table :vehicle_sales do |t|
      t.string :chasis_number, null: false
      t.string :vehicle_description, null: false
      t.string :vehicle_condition, null: false
      t.string :title_status, null: false
      t.references :user, index: true, foreign_key: true
      t.references :vehicle, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
