Rails.application.routes.draw do
  root to: 'static_pages#map'
  devise_for :users
  resources :users

  get '/map'=>'static_pages#map'

end
