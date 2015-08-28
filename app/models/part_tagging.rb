class PartTagging < ActiveRecord::Base
  belongs_to :vehicle
  validates :part_number, :vehicle_id, presence: true

  has_many :part_sales,
    class_name: "PartSale",
    foreign_key: :part_number,
    primary_key: :part_number

end
