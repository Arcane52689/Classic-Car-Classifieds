json.vehicle_sales do
  json.partial! "api/vehicle_sales/vehicle_sale", collection: @vehicle_sales, as: :vehicle_sale
end

json.part_sales do
  json.partial! "api/part_sales/part_sale", collection: @part_sales, as: :part_sale
end
