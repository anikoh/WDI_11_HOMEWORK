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

#  if only one movie
#  redirect to '/'


  film_code = params[:movie]
  @film_array = HTTParty.get('http://omdbapi.com/?s='+film_code)

  if @film_array["Search"].length == 1
    redirect '/?t=' + @film_array["Search"][0]["Title"]
  else
    erb :list
  end
end


# deal with no input, or input that isn't a movie title
# deal with it if it return something other than a movie
