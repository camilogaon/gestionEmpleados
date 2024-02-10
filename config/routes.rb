Rails.application.routes.draw do
  namespace :api do
    resources :dependences, only: [:index, :show, :create, :update, :destroy]
    resources :positions, only: [:index, :show, :create, :update, :destroy]
    resources :employees, only: [:index, :show, :create, :update, :destroy]
    resources :trainings, only: [:index, :show, :create, :update, :destroy]
    resources :jobs, only: [:index, :show, :create, :update, :destroy]
  end   
end
