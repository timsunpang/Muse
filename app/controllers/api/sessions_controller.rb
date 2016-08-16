class Api::SessionsController < ApplicationController
  before_action :if_logged_in, only: [:new]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:username],user_params[:password])

    if @user
      sign_in(@user)
      render json: @user
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render json: ['Not logged in'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def if_logged_in
    if signed_in?
      redirect_to root_url
    end
  end
end
