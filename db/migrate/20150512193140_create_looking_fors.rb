class CreateLookingFors < ActiveRecord::Migration
  def change
    create_table :looking_fors do |t|
      t.references :user, index: true, foreign_key: true
      t.references :vehicle, index: true, foreign_key: true
      t.string :title
      t.string :part_type
      t.string :part_number
      t.text :body, null: false
      t.integer :location

      t.timestamps null: false
    end
  end
end
