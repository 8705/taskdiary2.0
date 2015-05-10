class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def show
    task = Task.find(params[:id])
    # @form_param = Task.new
  end

  def create
    Task.create!(task_params)
    redirect_to :controller => "top", :action => "index"
  end

  def update
    task = Task.find(params[:id])
    task.update!(title:params[:title])
    redirect_to :controller => "top", :action => "index"
  end

  def destroy
    Task.delete_all(id:params[:id])
    redirect_to :controller => "top", :action => "index"
  end

  private
  def task_params
    params.required(:task).permit(:title)
  end
end
