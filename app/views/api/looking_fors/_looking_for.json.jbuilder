json.extract! looking_for, :id, :user_id, :title, :location, :body, :part_type, :part_number, :for_part

  json.vehicle do
    json.partial! "shared/vehicle", vehicle: looking_for.vehicle
  end
