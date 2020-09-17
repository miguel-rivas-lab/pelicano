Rails.application.routes.draw do
	root to: redirect('guinea/index')
	
	mount Bucaro::Engine, at: "/"
	mount Guinea::Engine, at: "/"
	mount Paloma::Engine, at: "/"
	mount Pavo::Engine, at: "/"
	mount Colibri::Engine, at: "/"
	mount Papagayo::Engine, at: "/"
	mount Canario::Engine, at: "/"

	get '*unmatched_route', to: 'application#raise_not_found'
end