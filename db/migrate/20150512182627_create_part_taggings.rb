class CreatePartTaggings < ActiveRecord::Migration
  def change
    create_table :part_taggings do |t|
      t.string :part_number, null: false, index: true
      t.references :vehicle, index: true, foreign_key: true

      t.timestamps null: false
    end

  end
end
