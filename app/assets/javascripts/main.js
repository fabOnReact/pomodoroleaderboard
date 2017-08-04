var ready = function() {

  /* jQuery-Timer-Plugin */
  timerControls();

  /* flipCountDown Plugin */
  $('#flipcountdownbox1').flipcountdown();
}

$(function() {});

function timerControls() {
  var timeout = 1000;
  var timer;
  
  $("input[name=start]").click(function() {
    $("#console").append("<span style=\"color: #0F0\">Timer started.</span<br />");
    timer = $.timer(timeout, function() {
      $("#console").append("Timer completed.<br />");
    });
  });
  $("input[name=stop]").click(function() {
    if(timer.stop()) {
      $("#console").append("<span style=\"color: #F00\">Timer stopped.</span<br />");
    }
  });
  $("input[name=pause]").click(function() {
    if(timer.pause()) {
      $("#console").append("<span style=\"color: #FF0\">Timer paused.</span<br />");
    }
  });
  $("input[name=resume]").click(function() {
    if(timer.resume()) {
      $("#console").append("<span style=\"color: #F00\">Timer resumed.</span<br />");
    }
  });
  
  $("input[name=reset]").click(function() {
    timer.stop();
    timeout = prompt("Reset timeout too:", 500);
    timer.reset(timeout);
    $("#console").append("<span style=\"color: #00F\">Timer reset.</span<br />");
  });

  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
  document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
  try {
  var pageTracker = _gat._getTracker("UA-6698036-8");
  pageTracker._trackPageview();
  } catch(err) {}

  var timer = $.timer(timeout, callback, disabled); 
}


$(document).on("turbolinks:load", ready);