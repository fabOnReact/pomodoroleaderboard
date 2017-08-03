Rails.application.routes.draw do
	resources :application
	root 'application#index'
end
