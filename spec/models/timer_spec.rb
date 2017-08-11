require 'rails_helper'

RSpec.describe Timer, type: :model do
	before do 
		@timer = Timer.new(minutes: 10)
	end

	subject { @timer }

	describe "when minutes are not present" do 
		before { @timer.minutes = " "}
		it { should_not be_valid }
	end
end
