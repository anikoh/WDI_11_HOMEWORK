Rails.application.routes.draw do


  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'


  post '/comments', to: 'comments#new'


  get '/planets', to: 'planets#index'

  get '/planets/new', to: 'planets#new' #getting the form

  post '/planets', to: 'planets#create'

  delete '/planets/:id', to: 'planets#destroy'

  get '/planets/:id', to: 'planets#show'

  post '/planets/:id', to: 'planets#edit'

  post '/planets/edit/:id', to: 'planets#update'

  root 'planets#index'






  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
