json.extract! @vehicle_sale
  json.vehicle do
    json.partial! "shared/vehicle", vehicle: @vehicle_sale.vehicle
  end
