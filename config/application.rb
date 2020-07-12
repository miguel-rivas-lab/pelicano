require_relative 'boot'

require 'rails/all'
Bundler.require(*Rails.groups)

module Pelicano
  class Application < Rails::Application
    config.load_defaults 6.0
    config.assets.paths << Rails.root.join("app", "assets", "images")
    config.assets.paths << Rails.root.join("app", "assets", "fonts")

    # TODO call helpers from main app
    # Guinea::ApplicationController.helper Pelicano::Application.helpers
  end
end