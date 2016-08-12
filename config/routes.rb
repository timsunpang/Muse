Rails.application.routes.draw do
  root to: 'static_pages#main'

  namespace :api do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:new, :update, :create, :show, :destroy]
    resources :tracks, only: [:index, :update, :create, :show, :destroy]
    resources :playlists, only: [:index, :update, :create, :show, :destroy]
    resources :playlistings, only: [:index, :create, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resources :comments, only: [:index, :update, :create, :show, :destroy]
  end
end
