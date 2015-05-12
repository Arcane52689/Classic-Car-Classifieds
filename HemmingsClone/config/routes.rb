Rails.application.routes.draw do

  resources :users
  resource :session, only: [:create, :new, :destroy]
  resources :vehicle_sales, only: [:new, :create,:index, :show]
end
