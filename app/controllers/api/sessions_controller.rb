class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
    params[:user][:email],
    params[:user][:password]
    )
    if user
      login!(user)
      head(:no_content)
    else
      render json: "invalid", status: 422
    end

  end

  def destroy
    @session = Session.find_by(token: session[:session_token])
    @session.destroy!
    @current_user = nil
    redirect_to new_session_url
  end

  def active_user
    if logged_in?
      render json: {email: current_user.email}, status: 200
    else
      render json: "nope", status: 404
    end
  end



end
