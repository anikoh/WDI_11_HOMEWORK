class RockPaperScissorsController < ApplicationController

  def index
  end

  def play
    options = ["rock", "paper", "scissors"]
    comp_index = rand(0..2)
    @comp_throw = options[comp_index]
    @player_throw = params[:throw]

    player_index =  options.index(params[:throw])

    if player_index == comp_index
      @message = "It's a draw!"
      # if player is rotated to the start of the array, does comp follow right after
    elsif (options.rotate(player_index)).index(@comp_throw) == 1
      @message = "Computer wins!"
    else
      @message = "Player wins!"
    end


  end

end
