Rails.application.routes.draw do
  root to: redirect('guinea/index')
  mount Bucaro::Engine, at: "/"
  mount Guinea::Engine, at: "/"
end