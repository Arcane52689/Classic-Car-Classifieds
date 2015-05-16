Rails.application.routes.draw do
  root to: "static_pages#root"


  resources :users, only: [:new, :create]
  resource :session, only: [:create, :new, :destroy]
  resources :vehicle_sales, only: [:new, :create,:index, :show]
  resources :part_sales, only: [:new, :create, :index, :show]
  resources :looking_fors, only: [:new, :create, :index, :show]


  namespace :api, defaults: { format: :json } do
    get "vehicle_sales/search", to: "vehicle_sales#search"
    get "part_sales/search", to: "part_sales#search"
    resources :vehicle_sales, only: [ :create,:index, :show]
    resources :part_sales, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy] do
      member do
        get :active_user
      end
    end
    resources :users, only: [:new, :create]
    get "vehicle_models/:make", to: "vehicle_models#show"
  end

end
