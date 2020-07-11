Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# TODO check if I can use this instead of the manifest
# Rails.application.config.assets.precompile += %w( guinea/application.scss )
# Rails.application.config.assets.precompile += %w( guinea/application.js )