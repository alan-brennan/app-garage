class Mutations::CreateApp < GraphQl::Schema::Mutation
  #null: true

  argument :name, String, required: true
  argument :rating, Float, required: false
  argument :description, String, required: true
  argument :downloads, Int, required: false
  argument :rated_times, Int, required: false
  argument :author, String, required: false
  argument :version, Float, required: false


  def create_app(name:, rating:, description:, downloads:, rated_times:, author:, version:)
    App.create(name: name, rating: rating, description: description, downloads: downloads, rated_times: rated_times, author: author, version: version)
  end


end # class
