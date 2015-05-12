class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def login!(user)
    @current_user = user
    session[:session_token] = user.sessions.create().token
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= Session.find_user(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def vehicle_params
    params.require(:vehicle).permit(:year, :make, :model)
  end


  def find_vehicle
    Vehicle.find_or_create(vehicle_params)
  end


end
