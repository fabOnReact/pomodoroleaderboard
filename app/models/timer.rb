class Timer < ApplicationRecord
	validates :minutes, presence: true
end
