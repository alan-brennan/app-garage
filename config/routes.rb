Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get "/graphql", to: "graphql#execute"
  root 'home#index'

  get "/index2", to: "index2#show"

  get '/search', to: 'search#index'

  resources :apps, only: :show
end
