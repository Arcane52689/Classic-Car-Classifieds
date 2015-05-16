class AddColumnsToPartSales < ActiveRecord::Migration
  def change
    add_column :part_sales, :price, :integer
    add_column :part_sales, :part_category, :string, index: true

  end
end
