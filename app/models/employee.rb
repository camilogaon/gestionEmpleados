class Employee < ApplicationRecord
    has_many :jobs, dependent: :destroy
    has_many :trainings, dependent: :destroy
end
