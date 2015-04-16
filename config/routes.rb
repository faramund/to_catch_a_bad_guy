Rails.application.routes.draw do
  root to: 'static_pages#welcome'
  devise_for :users
  resources :users

  get '/map'=>'static_pages#map'
  get '/map_for_seekers'=>'static_pages#map_for_seekers'
  get '/welcome'=>'static_pages#welcome'
  get '/update_bad_guy'=>'bad_guys#update'
  get '/get_bad_guy'=>'bad_guys#get'

end
