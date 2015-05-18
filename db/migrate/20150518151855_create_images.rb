class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :imageable_id, null: false, index: true
      t.string :imageable_type, null: false

      t.timestamps null: false
    end
  end
end
