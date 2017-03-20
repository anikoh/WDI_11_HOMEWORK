Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get '/magic8', to: 'magic8#index'

  post '/magic8', to: 'magic8#index'


  get '/secret_number', to: 'secret_number#index'

  get '/outcomes', to: 'secret_number#outcomes'


  get '/rock_paper_scissors', to: 'rock_paper_scissors#index'

  get '/rock_paper_scissors/play', to: 'rock_paper_scissors#play'


end
