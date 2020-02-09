Rails.application.routes.draw do
	resources :app_drlogic do
		collection do
			get 'about'
			get 'contact'
			get 'portfolio'
			get '404'
		end
	end
end
