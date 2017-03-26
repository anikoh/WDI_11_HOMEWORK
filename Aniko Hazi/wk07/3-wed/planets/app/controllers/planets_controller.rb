class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def new
  end

  def show
    @planet = Planet.find(params[:id])
    @comments = @planet.comments
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def destroy
    planet = Planet.find(params[:id])
    if planet.destroy
      redirect_to '/planets'
    else
      render :index
    end
  end

  def update
    planet = Planet.find(params[:id])
    planet.update(name: params[:name])
    planet.save
    redirect_to '/'
  end

end
