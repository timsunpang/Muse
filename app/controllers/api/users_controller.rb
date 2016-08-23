class Api::UsersController < ApplicationController

  def show
    @user = User.find_by_id(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    puts @user
    if @user.save
      sign_in(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 406
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
  def user_params
    params.require(:user).permit(:username, :email, :password, :session_token, :description, :image_file_name, :image_content_type, :image_file_size, :image_updated_at)
  end
end
