class CreatePartSales < ActiveRecord::Migration
  def change
    create_table :part_sales do |t|
      t.references :user, index: true, foreign_key: true
      t.string :part_number, null: false, index: true
      t.string :part_type, null: false, index: true
      t.text :part_description, null: false
      t.integer :location, null: false

      t.timestamps null: false
    end
  end
end
