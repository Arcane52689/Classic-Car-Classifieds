class Api::PartSalesController < ApplicationController

  wrap_parameters false

  def create
    @part_sale = current_user.part_sales.new(part_sale_params)
    @part_sale.part_taggings.new({ vehicle_id: find_vehicle_id }) if find_vehicle_id
    @part_sale.create_images(params[:part_sale][:images]) if params[:part_sale][:images]

    if @part_sale.save
      render json: @part_sale
    else
      # flash[:errors] = @part_sale.errors.full_messages
      render json: {errors: @part_sale.errors.full_messages}, status: 422
    end

  end

  def show
    @part_sale = PartSale.includes(:vehicles, :images).find(params[:id])
  end

  def index
    @part_sales = Search.filter(PartSale.joins(:vehicles).includes(:vehicles, :images).all.order(params[:sortBy]),params).page(params[:page])
    @pages = @part_sales.total_pages

  end

  def search
    @part_sales = Search.filter(Search.new(search_params).search_part_sales, params).page(params[:page])
    @pages = @part_sales.total_pages
    render :index
  end


  def part_sale_params
    params.require(:part_sale).require(:part_sale).permit(:part_description, :location, :part_type, :part_number, :part_category, :price)
  end

  def search_params
    params.require(:vehicle).permit(:year_start,:year_end,:make,:model).merge(params.require(:part_sale).permit(:part_number, :part_category, :part_type))
  end

end
