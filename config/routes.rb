Rails.application.routes.draw do
  resources :users
  resources :stretches, only: [:index, :show]
  resources :routines
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/stretches/:stretch_id/routines/:id', to: 'routines#add_stretch_to_routine'
  put '/stretches/:stretch_id/routines/:id/remove', to: 'routines#remove_stretch_from_routine'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
