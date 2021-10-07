class StretchesController < ApplicationController
  before_action :set_stretch

  # GET /stretches
  def index
    @stretche = Stretch.all

    render json: @stretche
  end

  # GET /stretches/1
  def show
    render json: @stretch
  end

  # POST /stretches
  def create
    @stretch = Stretch.new(stretch_params)

    if @stretch.save
      render json: @stretch, status: :created, location: @stretch
    else
      render json: @stretch.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stretches/1
  def update
    if @stretch.update(stretch_params)
      render json: @stretch
    else
      render json: @stretch.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stretches/1
  def destroy
    @stretch.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stretch
      @stretch = Stretch.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stretch_params
      params.require(:stretch).permit(:name, :video_url, :picture_url, :muscle_worked, :body_part, :description)
    end
end
