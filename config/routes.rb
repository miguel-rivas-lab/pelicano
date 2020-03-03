Rails.application.routes.draw do
	resources :app_drlogic do
		collection do
			get 'home', to: redirect('/app_drlogic')
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
end
