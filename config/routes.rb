Rails.application.routes.draw do

	resources :app_drlogic do
		root to: redirect('/app_drlogic/home')
		collection do
			get 'home'
			get 'about'
			get 'contact'
			get 'portfolio'
			get '404'
		end
	end

	resources :app_skills do
		collection do
		end
	end

	resources :app_timeline do
		collection do
		end
	end
end
