module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end


    # field :create_app, AppType, mutation: Mutations::CreateApp

    # All this will be moved to /graphql/mutations/create_app.rb when i can get it working
    field :create_app, AppType, null: true, description: "Create an App" do
      argument :name, String, required: true
      argument :rating, Float, required: true
      argument :description, String, required: true
      argument :downloads, Int, required: true
      argument :rated_times, Int, required: true
      argument :author, String, required: true
      argument :version, Float, required: true
    end

    def create_app(name:, rating:, description:, downloads:, rated_times:, author:, version:)
      App.create(name: name, rating: rating, description: description, downloads: downloads, rated_times: rated_times, author: author, version: version)
    end



  end #end class
end #end module

# sample mutation
# mutation {
#
#  createApp(name: "Alans Cool App", rating: 4.0, description: "lors ipsum dias, in hortor sendent", downloads: 4000, ratedTimes: 7, author: "Alan", version: 1.2){
#   	id
#    name
#   }
#
# }
