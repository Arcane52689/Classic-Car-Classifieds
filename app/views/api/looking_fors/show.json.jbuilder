json.partial! "looking_for", looking_for: @looking_for

json.matches do
  if @looking_for.for_part
    json.partial! "api/part_sales/part_sale", collection: @looking_for.matches.map(&:matchable), as: part_sale
  else
    json.partial! "api/vehicle_sales/vehicle_sale", collection: @looking_for.matches.map(&:matchable), as: :vehicle_sale
  end
end
