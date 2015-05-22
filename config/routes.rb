Rails.application.routes.draw do
  root to: "static_pages#root"


  resources :users, only: [:new, :create]
  resource :session, only: [:create, :new, :destroy]
  resources :vehicle_sales, only: [:new, :create,:index, :show]
  resources :part_sales, only: [:new, :create, :index, :show]
  resources :looking_fors, only: [:new, :create, :index, :show]
  get "/auth/:provider/callback", to: "api/sessions#omniauth"

  namespace :api, defaults: { format: :json } do
    get "vehicle_sales/search", to: "vehicle_sales#search"
    get "users/:id/email", to: "users#email"
    get "vehicle_sales/random_image", to: "vehicle_sales#random_image"
    get "part_sales/search", to: "part_sales#search"
    get "session/dummy", to: "sessions#dummy_login"
    resources :vehicle_sales, only: [ :create,:index, :show]
    resources :part_sales, only: [:create, :index, :show]
    resources :looking_fors, only: [:destroy, :create, :index, :show]
    resource :session, only: [:create, :destroy] do
      member do
        get :active_user
      end
    end
    resources :users, only: [:new, :create, :show, :update]
    get "vehicle_models/:make", to: "vehicle_models#show"
  end

end
