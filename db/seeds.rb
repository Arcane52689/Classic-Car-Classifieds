# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
# 500.times do
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


500.times do
  params = {
    user_id: rand(1..5),
    part_number: SecureRandom.hex(8),
    part_category: PartSale.categories.shuffle.first,
    part_type: PartSale.types.shuffle.first,
    location: Faker::Address.zip,
    price: rand(25..1000),
    part_description: Faker::Lorem.sentence
  }
  p = PartSale.create(params)
  p.part_taggings.create({vehicle_id: Vehicle.random})
end
