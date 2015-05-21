require 'bcrypt'
class User < ActiveRecord::Base

  has_many :sessions, dependent: :destroy
  has_many :omni_logins, dependent: :destroy
  has_many :vehicle_sales, dependent: :destroy


  has_many :part_sales, dependent: :destroy

  has_many :looking_fors, dependent: :destroy

  # validates :email, presence: true


  validates :password, length: {minimum: 6, allow_nil:true }

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user if user.is_password?(password)
  end


  def self.find_or_create_by_auth_hash(auth_hash)
    login = OmniLogin.find_by({
      provider: auth_hash[:provider],
      uid: auth_hash[:uid]
      })
    return login.user if login

    user = User.create({
      email: auth_hash[:info][:email] || "invalid",
      password: SecureRandom.urlsafe_base64
    })
    user.omni_logins.create({
      uid: auth_hash[:uid],
      provider: auth_hash[:provider]
    })
    return user
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
