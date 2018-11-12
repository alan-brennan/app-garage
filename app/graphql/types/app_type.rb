class Types::AppType < Types::BaseObject
  description "An Applications Details"

  field :id, ID, null: false
  field :name, String, null: true
  field :rating, Float, null: true

  field :description, String, null: true
  field :downloads, Int, null: true
  field :rated_times, Int, null: true
  field :author, String, null: true
  field :version, Float, null: true

end
