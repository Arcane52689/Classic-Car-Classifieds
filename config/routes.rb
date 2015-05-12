Rails.application.routes.draw do
  root to: "sessions#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:create, :new, :destroy]
  resources :vehicle_sales, only: [:new, :create,:index, :show]
  resources :part_sales, only: [:new, :create, :index, :show]
  resources :looking_fors, only: [:new, :create, :index, :show]
end
