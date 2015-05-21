json.extract! part_sale, :id, :part_number, :user_id, :part_type, :part_description, :location, :price, :created_at
  json.vehicles do
    json.partial! "shared/vehicle", collection: part_sale.vehicles, as: :vehicle
  end

  if part_sale.images.first
    json.thumb_url asset_path(part_sale.images.first.picture.url(:thumb))
  else
    json.thumb_url asset_path("missing.png")
  end
