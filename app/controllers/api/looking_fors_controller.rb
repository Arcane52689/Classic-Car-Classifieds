class Api::LookingForsController < ApplicationController

  def create
    @looking_for = current_user.looking_fors.new(clean_params)
    @looking_for.vehicle_id = find_vehicle.id

    if @looking_for.save
      render json: @looking_for
    else
      render json: @looking_for.errors.full_message, status: 422
    end
  end

  def show
    @looking_for = LookingFor.includes(:vehicle).find(params[:id])
    @looking_for.update(last_shown: Time.now )
    render :show
  end

  def destroy
    @looking_for = LookingFor.find(params[:id])
    if current_user && @looking_for.user_id == current_user.id
      render json: @looking_for.destroy
    else
      render json: {nope: "nope"}, status: 422
    end

  end


  def index
    @looking_fors = current_user.looking_fors.includes(:vehicle)
  end



  def looking_for_params
    params.require(:looking_for).permit(:title, :body, :part_type, :part_number, :location, :for_part)
  end

  def clean_params
    cleaned = looking_for_params
    cleaned.each do |key, value|
      if value == ""
        cleaned[key] = nil
      end
    end
    cleaned
  end

end
