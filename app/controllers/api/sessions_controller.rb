class SessionsController < ApplicationController
  before_action :if_logged_in, only: [:new]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out
    render json: {}
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def if_logged_in
    if signed_in?
      redirect_to root_url
    end
  end
end