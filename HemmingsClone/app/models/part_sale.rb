class PartSale < ActiveRecord::Base
  belongs_to :user

  has_many :part_taggings
    class_name: "PartTagging",
    foreing_key: :part_number,
    primary_key: :part_number

  has_many :vehicles,
    through: :part_taggings,
    source: :vehicle


  validates :part_number, :part_type, :description, :location, :user_id, presence: true






end
