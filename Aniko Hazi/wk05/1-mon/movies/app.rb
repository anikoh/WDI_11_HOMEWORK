require 'pry'
require 'sinatra'
require 'sinatra/reloader'
# require 'pg'
require 'httparty'


get '/' do

   @film_details =''

   if params[:t] != nil && params[:t] != ''
    film_code = params[:t]
    @film_details = HTTParty.get('http://omdbapi.com/?t='+film_code)
   end

  erb :index
end


get '/list' do
  film_code = params[:movie]
  @film_array = HTTParty.get('http://omdbapi.com/?s='+film_code)
  erb :list
end
