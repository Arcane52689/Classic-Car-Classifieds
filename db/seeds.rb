# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Vehicle.makes.each do |make|
  make_file_txt = make.split.join('_').downcase+".txt"
  Rails.root.join("lib","assets", "models", )
  (1930..1985).each do |year|



end
