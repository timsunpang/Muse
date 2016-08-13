class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def sign_out(user)
    @current_user = nil
    session[:session_token] = nil
    user.reset_token!
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[session_token])
  end

  def signed_in?
    !!@current_user
  end

  def require_signed_in!
    redirect_to new_api_session_url unless signed_in?
  end
end
