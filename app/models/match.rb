class Match < ActiveRecord::Base
  belongs_to :looking_for

  belongs_to :matchable, polymorphic: true
end
