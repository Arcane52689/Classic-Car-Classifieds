class Api::PartSalesController < ApplicationController



  def create
    @part_sale = current_user.part_sales.new(part_sale_params)
    @part_sale.part_taggings.new({ vehicle_id: find_vehicle.id })
    if @part_sale.save
      redirect_to part_sales_url
    else
      # flash[:errors] = @part_sale.errors.full_messages
      render :new
    end

  end

  def show
    @part_sale = PartSale.includes(:vehicles).find(params[:id])
  end

  def index
    @part_sales = PartSale.includes(:vehicles).all
  end


  def part_sale_params
    params.require(:part_sale).permit(:part_description, :location, :part_type, :part_number)
  end



end
