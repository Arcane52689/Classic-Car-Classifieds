class VehicleSaleSearch


  def clean_year(year)
    if year.to_i > 1890 && year.to_i < 2050
      return year.to_i
    else
      return nil
    end
  end

  def clean_params(params)
    params[:year_start] = clean_year(params[:year_start]) || 1890
    params[:year_end] = clean_year(params[:year_end]) || 2050
    params[:model] = nil if params[:model] == "None"
    return params
  end



  def SQL_search(params)

    VehicleSale.find_by_sql ["  SELECT
        vehicle_sales.*, vehicles.*
      FROM
        vehicle_sales
      JOIN
        vehicles
      ON
        vehicles.id = vehicle_sales.vehicle_id
      WHERE
        vehicles.year >= :year_start AND vehicles.year <= :year_end AND make = :make #{"AND model = :model" if params[:model]}",
        params]
  end

  def search(params)
    params = clean_params(params)
    results = SQL_search(params[:year_star])


  end

  def resultify(result)
    # result.define_metho


  end



end
