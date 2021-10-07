class RoutinesController < ApplicationController
  before_action :set_routine, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /routines
  def index
    @routines = Routine.all

    render json: @routines
  end

  # GET /routines/1
  def show
    render json: @routine, include: :flavors
  end

  # POST /routines
  def create
    @routine = Routine.new(routine_params)
    @routine.user = @current_user

    if @routine.save
      render json: @routine, status: :created
    else
      render json: @routine.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /routines/1
  def update
    if @routine.update(routine_params)
      render json: @routine
    else
      render json: @routine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /routines/1
  def destroy
    @routine.destroy
  end

  # adding stretch to routine method goes here
  def add_stretch_to_routine
    @routine = Routine.find(params[:id])
    @stretch = Stretch.find(params[:stretch_id])

    @routine.stretches << @stretch

    render json: @routine, include: :stretches
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_routine
      @routine = Routine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def routine_params
      params.require(:routine).permit(:name)
    end
end
