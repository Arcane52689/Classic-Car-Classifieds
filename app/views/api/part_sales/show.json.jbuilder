json.partial! "part_sale", part_sale: @part_sale
json.images do
  json.array! @part_sale.images.map {|img| img.picture.url }
end
