
class Search
  attr_accessor :params





  def self.filter(relation, params)
    result = relation
    if params[:makes]
      result = relation.where("vehicles.make IN (?)", params[:makes])
    end
    if params[:models]
      result = relation.where("vehicles.model IN (?)", params[:models] )
    end
    result
  end

  def self.vehicle_sales(params)
    Search.new(params).search_vehicle_sales
  end

  def self.part_sales(params)
    Search.new(params).search_part_sales
  end


  def initialize(params)
    @params = params
  end

  def clean_year(year)
    if year.to_i > 1900 && year.to_i < 2050
      return year.to_i
    else
      return nil
    end
  end

  def clean_params
    self.params[:year_start] = clean_year(self.params[:year_start]) || 1890
    self.params[:year_end] = clean_year(self.params[:year_end]) || 2050
    [:make, :model, :part_category, :part_type, :part_number].each do |key|
      assign_to_nil_if_none(key)
    end

  end

  def assign_to_nil_if_none(key)
    self.params[key] = nil if self.params[key] == "None" || self.params[key] == ""
  end



  def search_vehicle_sales
    self.clean_params
    results = VehicleSale.joins(:vehicle).where("vehicles.year BETWEEN ? AND ?", self.params[:year_start], self.params[:year_end]).includes(:vehicle)

    if self.params[:make]
      result = results.where("vehicles.make = ?", self.params[:make])
    end

    if self.params[:model]
      results = results.where("vehicles.model=?",self.params[:model])
    end

    return results
  end

  def search_part_sales
    self.clean_params
    results = PartSale.joins(:vehicles).where("vehicles.year BETWEEN ? AND ?", self.params[:year_start], self.params[:year_end]).includes(:vehicles)

    if self.params[:make]
      results = results.where("vehicles.make=?",self.params[:make])
    end

    if self.params[:model]
      results = results.where("vehicles.model=?",self.params[:model])
    end

    [:part_number, :part_category, :part_type].each do |sym|

      if self.params[sym]
        results = results.where({ sym => self.params[sym] })
      end
    end
    return results

  end




end
