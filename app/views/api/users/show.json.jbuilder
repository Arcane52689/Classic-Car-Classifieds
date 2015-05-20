json.vehicle_sales do
  json.partial! "api/vehicle_sales/vehicle_sale", collection: @user.vehicle_sales, as: :vehicle_sale
end

json.part_sales do
  json.partial! "api/part_sales/part_sale", collection: @user.part_sales, as: :part_sale
end
