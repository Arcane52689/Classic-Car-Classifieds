class Match < ActiveRecord::Base
  belongs_to :looking_for

  belongs_to :matchable, polymorphic: true

  validate :unique_match

  def unique_match
    if Match.exists?({
      matchable_type: matchable_type,
      looking_for_id: looking_for_id,
      matchable_id: matchable_id
      })

      errors[:base]<< "match already exists"
    end
  end
end
