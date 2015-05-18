json.extract! vehicle_sale, :id, :chasis_number, :user_id, :vehicle_condition, :vehicle_description, :vehicle_id, :title_status, :location, :price
  json.vehicle do
    json.partial! "shared/vehicle", vehicle: vehicle_sale.vehicle
  end
