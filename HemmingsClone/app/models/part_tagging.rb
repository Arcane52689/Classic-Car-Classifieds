class PartTagging < ActiveRecord::Base
  belongs_to :vehicle
  validates :part_number, :vehicle_id, presence: true
end
