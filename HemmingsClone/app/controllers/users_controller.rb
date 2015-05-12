class UsersController < ApplicationController

  def new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
    else
      flash[:errors] = "whoops"
    end
    render :new
  end


  def user_params
    params.require(:user).permit(:email, :password)
  end


end
