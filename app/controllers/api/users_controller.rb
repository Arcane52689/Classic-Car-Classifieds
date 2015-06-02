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
    @vehicle_sales = @user.vehicle_sales.includes(:images, :vehicle).page(1)
    @part_sales = @user.part_sales.includes(:images, :vehicles).page(1)

    @looking_fors = @user.looking_fors.includes(:vehicle).page(1)

  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors.full_messages, status: 422
    end
  end

  def email
    if current_user
      email = User.find(params[:id]).email
      render json: {email: email}, status: 200
    else
      render json: {email: 'none'}, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end


end
