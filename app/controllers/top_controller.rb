class TopController < ApplicationController
  def index
    @tasks      = Task.all
    @form_param = Task.new
  end
end
