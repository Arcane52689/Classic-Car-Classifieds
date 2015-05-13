json.partial! "part_sale", part_sale: @part_sale 
  json.vehicle do
    json.partial! "shared/vehicle", vehicle: @part_sale.vehicle
  end
