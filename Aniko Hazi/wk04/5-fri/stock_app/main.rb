require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'



get '/' do
  @display_stock =''

  if params[:stock] != nil && params[:stock] != ''
    stock_code = params[:stock]
    result = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock_code)
    @display_stock = result[stock_code].ask
  end

  erb :index
end


#
# get '/' do
#   # erb(:index, layout: false) - turns the layout off
#   @display_stock = params[:price]
#   erb :index
# end
#
#
# post '/stock_display' do
#   stock_code = params[:stock]
#
#   result = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock_code)
#   stock_price = result[stock_code].ask # ask or bid
#   #test["yhoo"].symbol
#   #stock_code is the input as a string
#   #stock value will be the output as a number
#
#   redirect '/?price=' + stock_price
# end
