# README

Test App store with react Components. Original code came from https://github.com/danielrudn/app-garage. React components with GraphQl added by me.

Things you may want to cover:

* Ruby version

* System dependencies

Add graphQl to gemfile
Bundle install
run graphQl generator rails g graphql:install
bundle install
npm add apollo-boast react-apollo graphql
In graphql controller added skip_before_action :verify_authenticity_token   (for test only)

* Configuration

Uses react_on_rails gem to provide graphQl server backend
To create component they must be registered in javascript/packs/application.js
then imported into other jsx files that use them

ApolloProvider is used in the javascript/components/RootComponent.jsx to wrap the root component, and client is passed as a prop <Apolloprovider client={client}>. Note calling it RootComponent not recommended for production

Once the root component is wrapped it can display further react components, in this case javascript/components/AppList.jsx

AppList.jsx contained the graphQL query created using gql from 'graphql-tag'; to allow syntax like graphQl queries

AppList.jsx uses `export default graphql(ALL_APPS_QUERY)(AppsList);` to run the query and create the .data property on the props object returned
import { graphql } from 'react-apollo' used for this

ApolloClient is handling the query to the backend and storing the data when it's returned. The graphQl query is defined in
app/graphql/query_type.rb along with it's resolver method. gem 'graphql' installed



* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
