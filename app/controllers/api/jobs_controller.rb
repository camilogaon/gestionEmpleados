module Api
    class Api::JobsController < ApplicationController
        protect_from_forgery with: :null_session

        def index
            @jobs = Job.all
            render json: @jobs
        end

        def show
            @job = Job.find(params[:id])
            render json: @job
        end  
        
        def new
            @job = Job.new
        end

        def create
            @job = Job.new(job_params)
        
            if @job.save
                render json: @job, status: :created
            else
                render json: @job.errors, status: :unprocessable_entity
            end
        end

        private

        def job_params
            params.require(:job).permit(:position, :date_start, :date_end, :employee_id)
        end
    end
end