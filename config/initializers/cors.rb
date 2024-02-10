# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins 'http://localhost:3001' # Origen de tu aplicación de React
        resource '/api/*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true
    end
end
  