require "rails_helper"

RSpec.describe TimersController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/timers").to route_to("timers#index")
    end


    it "routes to #show" do
      expect(:get => "/timers/1").to route_to("timers#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/timers").to route_to("timers#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/timers/1").to route_to("timers#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/timers/1").to route_to("timers#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/timers/1").to route_to("timers#destroy", :id => "1")
    end

  end
end
