class SecretNumberController < ApplicationController

  def index
  end

  def outcomes
    @secret_number = rand(1..10)

    if params[:num].to_i == @secret_number
      @message = "You won!"
    else
      @message = "You lost!"
    end
    render :outcomes
  end


end
