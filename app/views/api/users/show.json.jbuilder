json.extract! current_user, :email, :id

json.vehicle_sales do
  json.partial! "api/vehicle_sales/vehicle_sale", collection: @vehicle_sales, as: :vehicle_sale
end

json.part_sales do
  json.partial! "api/part_sales/part_sale", collection: @part_sales, as: :part_sale
end

json.looking_fors do
  json.partial! "api/looking_fors/looking_for", collection: @looking_fors, as: :looking_for
end
