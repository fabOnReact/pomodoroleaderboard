var ready = function() {

  timerControls();
  
}

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
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
}

$(document).on("turbolinks:load", ready);