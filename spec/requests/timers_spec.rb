require 'rails_helper'

RSpec.describe "Timers", type: :request do
  describe "GET /timers" do
    it "works! (now write some real specs)" do
      get timers_path
      expect(response).to have_http_status(200)
    end
  end
end
