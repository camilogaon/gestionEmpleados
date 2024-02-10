module Api
    class Api::EmployeesController < ApplicationController
        protect_from_forgery with: :null_session

        def index
            @employees = Employee.all
            render json: @employees
        end

        def show
            @employees = Employee.find(params[:id])
            render json: @employees
        end   

        def new
            @employee = Employee.new
        end

        def create
            @employee = Employee.new(employee_params)
        
            if @employee.save
                render json: @employee, status: :created
            else
                render json: @employee.errors, status: :unprocessable_entity
            end
        end

        def edit
            @employee = Employee.find(params[:id])
        end
        
        def update
            @employee = Employee.find(params[:id])
            if @employee.update(employee_params)
                render json: @employee, status: :ok
            else
                render json: { error: @employee.errors.full_messages }, status: :unprocessable_entity
            end
        end

        def destroy
            @employee = Employee.find_by(employee_id: params[:id])
            if @employee
                @employee.destroy
                render json: { message: 'Employee was successfully destroyed' }, status: :ok
            else
                render json: { error: 'Employee not found' }, status: :not_found
            end
        end

        private

        def employee_params
            params.require(:employee).permit(:first_name, :last_name, :date_of_birth, :address, :phone_number, :email, :hire_date, :position_id)
        end
    end
end