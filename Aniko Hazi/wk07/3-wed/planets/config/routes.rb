Rails.application.routes.draw do



  get '/planets/new', to: 'planets#new' #getting the form

  post '/planets', to: 'planets#create'

  delete '/planets', to: 'planets#destroy'

  get '/planets/:id', to: 'planets#show'

  root 'planets#index'






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
