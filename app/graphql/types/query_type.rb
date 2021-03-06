module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :app, Types::AppType, null: true, description: "App details" do
      argument :id, ID, required: true
    end

    def app(id:)
      App.where(id: id).first
    end

    field :apps, [Types::AppType], null: true, description: "Full App list"

    def apps
      App.all
    end


  end
end
