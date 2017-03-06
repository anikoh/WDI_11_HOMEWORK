require 'pry'
require 'sinatra'
require 'sinatra/reloader'
# require 'pg'
require 'httparty'


get '/' do
  #connect to the database
  # conn =PG.connect(dbname: 'lead_gen_app')
  #execute a select sql statement
  # @leads = conn.exec("SELECT * FROM leads;")
  @film_details =''

  if params[:movie] != nil && params[:movie] != ''
    film_code = params[:movie]
    @film_details = HTTParty.get('http://omdbapi.com/?t='+film_code)
  end

  erb :index
end
