require 'bcrypt'
class User < ActiveRecord::Base

  has_many :sessions

  has_many :vehicle_sales


  has_many :part_sales

  has_many :looking_fors

  validates :email, presence: true


  validates :password, length: {minimum: 6, allow_nil:true }

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user if user.is_password?(password)
  end

  def password
    @password
  end


  def password=(password)
    @password =password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end



end
