json.extract! part_sale, :id, :part_number, :user_id, :part_type, :part_description, :location, :price
  json.vehicles do
    json.partial! "shared/vehicle", collection: part_sale.vehicles, as: :vehicle
  end
