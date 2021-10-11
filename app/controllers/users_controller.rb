class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /users/1
  def show
    render json: @user, include: :routines
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(update_user_params)
      render json: {
        user: @user.attributes.except('password_digest'),
      }
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # adding flavor to food method goes here
  # def add_flavor_to_food
  #   @food = Food.find(params[:id])
  #   @flavor = Flavor.find(params[:flavor_id])

  #   @food.flavors << @flavor

  #   render json: @food, include: :flavors
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :profile_picture, :description)
    end

    def update_user_params
      params.require(:user).permit(:username, :email, :profile_picture, :description)
    end
end
