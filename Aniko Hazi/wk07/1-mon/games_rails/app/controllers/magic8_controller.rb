class Magic8Controller < ApplicationController


  def index
    if params[:question]
      responses = ['nope', 'maybe', 'keep dreaming', 'yeah okay']
      @response = responses[rand(0..3)]
    end
  end


end
