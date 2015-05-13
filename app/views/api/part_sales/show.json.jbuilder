json.partial! "part_sale", part_sale: @part_sale
  json.vehicles do
    json.partial! "shared/vehicle", collection: @part_sale.vehicles, as: :vehicle
  end
