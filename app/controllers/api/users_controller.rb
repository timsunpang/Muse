class Api::UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find_by_id(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      # create error message
      redirect_to new_api_user_url
    end
  end

  def update
    @user = User.find_by_id(params[:id])
    @user.update!(user_params)
    render json: @user
  end

  def destroy
    @user = User.find_by_id(params[:id])
    
  end

  private
  def users_params
    params.require(:user).permit(:username, :email, :password_digest, :session_token, :description, :image_file_name, :image_content_type, :image_file_size, :image_updated_at)
  end
end
