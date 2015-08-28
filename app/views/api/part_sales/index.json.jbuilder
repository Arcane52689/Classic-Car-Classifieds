json.total_pages @part_sales.total_pages
json.sales do
  json.partial! "part_sale", collection: @part_sales, as: :part_sale
end
