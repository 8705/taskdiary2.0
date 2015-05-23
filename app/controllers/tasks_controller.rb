class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def show
    task = Task.find(params[:id])
  end

  def create
    Task.create!(task_params)

    render json: true
  end

  def update
    task = Task.find(params[:id])

    now = params[:done_at] ? Date.today.to_s : nil
    task.update!(title:params[:title], done_at:now)

    render json: true
  end

  def destroy
    Task.delete_all(id:params[:id])

    render json: true
  end

  private
  def task_params
    params.required(:task).permit(:title)
    params.required(:task).permit(:status)
  end
end
