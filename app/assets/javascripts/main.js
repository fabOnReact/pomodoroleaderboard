var ready = function() {

  timerControls();
  
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}


$(document).on("turbolinks:load", ready);