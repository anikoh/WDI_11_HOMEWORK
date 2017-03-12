require 'pry'
require 'sinatra'
require 'sinatra/reloader'
# require 'pg'
require 'httparty'
require_relative 'database_config'
require_relative 'models/movie'


get '/' do

   #if movie is in database use that, otherwise search for movie and save to database
   # might need to process params before it's a match for title?
    if Movie.find_by(title: params[:t])
      @film_details = Movie.find_by(title: params[:t])
    elsif params[:t] != nil && params[:t] != ''
      @film_details = Movie.new
      result = HTTParty.get("http://omdbapi.com/?t=#{params[:t]}")
      @film_details.title = result["Title"]
      @film_details.year = result["Year"]
      @film_details.runtime = result["Runtime"]
      @film_details.genre = result["Genre"]
      @film_details.director = result["Director"]
      @film_details.actors = result["Actors"]
      @film_details.plot = result["Plot"]
      @film_details.poster = result["Poster"]
      @film_details.save
    end

  erb :index
end


get '/list' do

  #  if only one movie
  #  redirect to '/'


  @film_array = HTTParty.get("http://omdbapi.com/?s=#{params[:movie]}")

  if @film_array["Search"].length == 1
    redirect '/?t=' + @film_array["Search"][0]["Title"]
  else
    erb :list
  end
end


# deal with no input, or input that isn't a movie title
# deal with it if it return something other than a movie
