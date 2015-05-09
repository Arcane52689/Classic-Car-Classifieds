class CreateVehicles < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.integer :year, null: false

      t.timestamps null: false
    end

    add_index :vehicles, :make
    add_index :vehicles, :model
    add_index :vehicles, :year
    add_index :vehicles, [:make, :year, :model], unique: true

  end
end
