Rails.application.routes.draw do
	scope '/api' do
		resources :timers, except: [:new, :edit]
	end
end