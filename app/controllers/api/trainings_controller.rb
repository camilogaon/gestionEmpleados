module Api
    class Api::TrainingsController < ApplicationController
        protect_from_forgery with: :null_session

        def index
            @trainings = Training.all
            render json: @trainings
        end

        def show
            @training = Training.find(params[:id])
            render json: @training
        end  
        
        def new
            @training = Training.new
        end

        def create
            @training = Training.new(training_params)
        
            if @training.save
                render json: @training, status: :created
            else
                render json: @training.errors, status: :unprocessable_entity
            end
        end

        private

        def training_params
            params.require(:training).permit(:training_name, :training_description, :employee_id)
        end
    end
end