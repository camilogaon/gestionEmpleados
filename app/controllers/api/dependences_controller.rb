module Api
    class Api::DependencesController < ApplicationController

        protect_from_forgery with: :null_session
        def index
            @dependences = Dependence.all 
            render json: @dependences
        end

        def show
            @dependence = Dependence.find(params[:id])
            render json: @dependence
        end

        def new
            @dependence = Dependence.new
        end

        def create
            @dependence = Dependence.new(dependence_params)
        
            if @dependence.save
                render json: @dependence, status: :created
            else
                render json: @dependence.errors, status: :unprocessable_entity
            end
        end

        def edit
            @dependence = Dependence.find(params[:id])
        end
        


        def update
            @dependence = Dependence.find(params[:id])
            if @dependence.update(dependence_params)
                render json: @dependence, status: :ok
            else
                render json: { error: @dependence.errors.full_messages }, status: :unprocessable_entity
            end
        end
        
        def destroy
            @dependence = Dependence.find_by(dependence_id: params[:id])
            if @dependence
                @dependence.destroy
                render json: { message: 'Dependence was successfully destroyed' }, status: :ok
            else
                render json: { error: 'Dependence not found' }, status: :not_found
            end
        end

        private

        def dependence_params
            params.require(:dependence).permit(:dependence_name, :dependence_description)
        end

    end
end