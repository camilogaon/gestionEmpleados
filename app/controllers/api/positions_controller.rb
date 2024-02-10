module Api
    class Api::PositionsController < ApplicationController
        protect_from_forgery with: :null_session

        def index
            @positions = Position.all
            render json: @positions
        end

        def show
            @position = Position.find(params[:id])
            render json: @position
        end    

        def new
            @position = Position.new
        end

        def create
            @position = Position.new(position_params)
        
            if @position.save
                render json: @position, status: :created
            else
                render json: @position.errors, status: :unprocessable_entity
            end
        end

        def edit
            @position = Position.find(params[:id])
        end
        
        def update
            @position = Position.find(params[:id])
            if @position.update(position_params)
                render json: @position, status: :ok
            else
                render json: { error: @position.errors.full_messages }, status: :unprocessable_entity
            end
        end
        
        
        def destroy
            @position = Position.find_by(position_id: params[:id])
            if @position
                @position.destroy
                render json: { message: 'Position was successfully destroyed' }, status: :ok
            else
                render json: { error: 'Position not found' }, status: :not_found
            end
        end

        private

        def position_params
            params.require(:position).permit(:position_name, :position_description, :dependence_id)
        end
    end
end