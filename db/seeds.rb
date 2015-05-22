

# Vehicle.makes.each do |make|
#   make_file_txt = make.split.join('_').downcase+".txt"
#   make_file_path = Rails.root.join("lib","assets", "models", make_file_txt)
#   File.foreach(make_file_path) do |line|
#     model = line.chomp
#
#     (1930..1985).each do |year|
#       Vehicle.find_or_create({
#         make: make,
#         year: year,
#         model: model,
#         })
#     end
#
#     Vehicle.find_or_create({
#       make: make,
#       year: 0,
#       model: model,
#     })
#   end
# end
#
# 5.times do |user|
#   User.create!({email:Faker::Internet.email, password:"password"})
# end
#
# User.create({email: "demo@classic-car-classifieds.net", password: "password"})
#

# 1000.times do
#   params = {
#     vehicle_id: Vehicle.random(),
#     user_id: rand(1..5),
#     chasis_number: SecureRandom.hex(),
#     title_status: "clean",
#     vehicle_condition: Vehicle.conditions.shuffle.first,
#     vehicle_description:  Faker::Lorem.sentence,
#     location: Faker::Address.zip
#   }
#   VehicleSale.create!(params)
# end

1000.times do
  category = PartSale.categories.shuffle.first
  params = {
    user_id: rand(1..5),
    part_number: SecureRandom.hex(8),
    part_category: category,
    part_type: PartSale.types(category).shuffle.first || "none",
    location: Faker::Address.zip,
    price: rand(25..1000),
    part_description: ["Mildly used", "Fresh out of box", "brand new", "new", "still in box"].shuffle.first
  }
  p = PartSale.create(params)
  p.part_taggings.create({vehicle_id: Vehicle.random})
end
