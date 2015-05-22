class Api::SessionsController < ApplicationController

  def dummy_login
    user = User.first
    login!(user)
    redirect_to api_user_url(user)
  end

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
    render json: "good bye"
  end

  def active_user
    if logged_in?
      redirect_to api_user_url(current_user)
    else
      render json: "nope", status: 404
    end
  end


  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    login!(user)
    redirect_to root_url
  end


  def auth_hash
    request.env['omniauth.auth']
  end


end
