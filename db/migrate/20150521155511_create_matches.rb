class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.references :looking_for, index: true, foreign_key: true
      t.integer :matchable_id, null: false, index: true
      t.string :matchable_type, null: false

      t.timestamps null: false
    end
  end
end
