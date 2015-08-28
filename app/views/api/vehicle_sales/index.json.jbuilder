json.total_pages @pages
json.sales do
  json.partial! "vehicle_sale", collection: @vehicle_sales, as: :vehicle_sale
end
