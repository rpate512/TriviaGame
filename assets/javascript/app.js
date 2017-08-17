$(document).ready(function() {

	var gotRight = 0;
	var gotWrong = 0;
	var timer = 30;
	var intervaId = 30;
	var values = [];
	var timer = 30;
	
function reset () {
	gotWrong = 0;
	gotRight = 0;
	timer = 30;
 	$('input').prop('checked', null); 
	clearInterval(intervalId);
	run ();
}

function run() {
	intervalId = setInterval(decrement, 1000);
	decrement();	
}

function decrement(){
	timer--;
	$("#timeLeft").html(timer); 
	
	if (timer == 0) {
			alert ("You ran out of time! Try again!");
			reset ();
	}	
}

	run();


function checker() {
	var valueAmount;
	var answers= $("input:checked");

	for (var i = 0; i < answers.length; i++) {
		answers[i]
		valueAmount = answers.eq(i).val().trim();

		if (valueAmount == 1) {
			gotRight++;
		} else {
			gotWrong++;
		}
	}
}

function gameOver () {
	clearInterval(timer);
}

$("#submit").click(function () {
	checker();
	$("#content").hide();
	$(".container").append('#gameOver').html('<h2> Game Over!</h2><span> Correct: ' + gotRight + ' Incorrect: ' + gotWrong);
	$("<br>")
	$(".container").append("<button id='newGame'>" + "Play Again" + "</button>");

	});


});


