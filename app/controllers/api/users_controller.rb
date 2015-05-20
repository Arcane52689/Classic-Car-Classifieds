class Api::UsersController < ApplicationController



  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      head(:no_content)
    else
      render json: "nope", status: 422;
    end

  end

  def show
    @user = current_user
  end


  def user_params
    params.require(:user).permit(:email, :password)
  end


end
