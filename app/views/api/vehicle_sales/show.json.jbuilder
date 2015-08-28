json.partial! "vehicle_sale", vehicle_sale: @vehicle_sale
json.images do
  json.array! @vehicle_sale.images.map {|img| img.picture.url }
end
