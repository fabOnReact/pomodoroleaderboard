var ready = function() {

  timerStart = new Date(); 
  /*newTimer = new Date(newYear.getFullYear() + 1, 1 - 1, 1); */
  timerEnd = addMinutes(timerStart, 25);
  $('#time').countdown({until: timerEnd, format: 'MS'});  
  
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}


$(document).on("turbolinks:load", ready);