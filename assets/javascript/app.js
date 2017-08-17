$(document).ready(function() {

var gotRight = 0;
var gotWrong = 0;
var timer = 30;
var intervaId = 30;
var values = [];

function run(timer) {
	intervalId = setInterval(decrement, 1000);
	decrement();	
}

function reset () {
	gotWrong = 0;
	gotRight = 0;
	timer = 30;
	clearInterval(intervalId)
}

run();

function run(timer) {
	intervalId = setInterval(decrement, 1000);
	decrement();	
}
function decrement(timer){
		timer --;
		$("timeLeft").html("Time Remaining: " + timer); 
		
		if (timer == 0) {
			function outOfTimeLoss () {
				alert ("You ran out of time! Try again!");
				reset ();
		}	
	}

function logValue (values) {
	playerChoice.attr("value");
	appendTo(values);

var playerChoice = $("#button").on("click")
	logValue ();

		}
	}
});
