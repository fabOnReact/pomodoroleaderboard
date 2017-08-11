class TimersController < ApplicationController
  before_action :set_timer, only: [:show, :update, :destroy]

  # GET /timers
  # GET /timers.json
  def index
    @timers = Timer.all
  end

  # GET /timers/1
  # GET /timers/1.json
  def show
  end

  # POST /timers
  # POST /timers.json
  def create
    @timer = Timer.new(timer_params)

    if @timer.save
      render :show, status: :created, location: @timer
    else
      render json: @timer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /timers/1
  # PATCH/PUT /timers/1.json
  def update
    if @timer.update(timer_params)
      render :show, status: :ok, location: @timer
    else
      render json: @timer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /timers/1
  # DELETE /timers/1.json
  def destroy
    @timer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timer
      @timer = Timer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def timer_params
      params.require(:timer).permit(:minutes)
    end
end
