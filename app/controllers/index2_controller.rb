class Index2Controller < ApplicationController

  # GET /
  def show
    @most_downloaded = App.order(downloads: :desc).limit(5)
    @highest_rated = App.order(rating: :desc).limit(5)
    @lowest_rated = App.order(rating: :asc).limit(5)
  end

end
