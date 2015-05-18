class AddDefaultToPrice < ActiveRecord::Migration
  def change
    change_column :part_sales, :price, :integer, default: 0
  end
  PartSale.all.each do |sale|
    sale.price = rand(0..1000)
    sale.save
  end
end
