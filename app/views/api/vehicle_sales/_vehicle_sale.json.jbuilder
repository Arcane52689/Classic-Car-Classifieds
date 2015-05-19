json.extract! vehicle_sale, :id, :chasis_number, :user_id, :vehicle_condition, :vehicle_description, :vehicle_id, :title_status, :location, :price
  json.vehicle do
    json.partial! "shared/vehicle", vehicle: vehicle_sale.vehicle
  end
  if vehicle_sale.images.first
    json.thumb_url asset_path(vehicle_sale.images.first.picture.url(:thumb))
  else
    json.thumb_url asset_path("missing.png")
  end
  #
