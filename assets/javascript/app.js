$(document).ready(function() {

	var gotRight = 0;
	var gotWrong = 0;
	var timer = 30;
	var intervaId = 30;
	var values = [];
	var timer = 3000;
	
	function reset () {
		gotWrong = 0;
		gotRight = 0;
		timer = 3000;
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
$("#submit").click(function () {
	checker();
	reset();
	$("#content").hide();
	$(".container").append("Correct: " + gotRight);
	$(".container").append("Incorrect: " + gotwrong);
})
});


