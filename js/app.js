$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
	/*--- Variables ---*/
    var secretNum;
	var numGuess=0;
	var feedback=$("#feedback");


	/*---Functions---*/
		/*---reset count, guess history and input value---*/
		var reset=function() {
			numGuess=0;
			$("#count").text(numGuess);
			$("#guessList li").remove();
			$("#userGuess").val("");
			feedback.text("Make your Guess!");
			
		};
		/*---generate random #---*/
		var random=function() {
			secretNum=(Math.floor(Math.random()*100)+1);
		};
		/*---adding counts and numbers used---*/
	  	var addCount=function() {
	  		$("#guessList").append("<li>" + userGuess + "</li>");
	  		numGuess++;
	  		$("#count").text(numGuess);
	  		
	  	};
		/*---guessing function---*/
		var guessingGame=function() {
			userGuess=+$("#userGuess").val();
			var difference=Math.abs(userGuess-secretNum);	
	  			if (userGuess===secretNum) {
	  				feedback.text("Congratulations! You guessed correctly!");
	  					alert('Click on "+ New Game" to play again!');
	  					$("form").hide();
	  			} else if (userGuess>100 || userGuess<=0) {
	  				feedback.text("Please pick a number between 1 and 100");
	  			} else if (userGuess==="" || userGuess%1!=0) {
	  				feedback.text("Please pick a number");
		  		} else if (difference>=50) {
		  			feedback.text("Ice Cold!");
		  			addCount();
		  		} else if (difference>=30 && difference<50) {
		  			feedback.text("Cold!");
		  			addCount();
		  		} else if (difference>=20 && difference<30) {
		  			feedback.text("Warm!");
		  			addCount();
		  		} else if (difference>=10 && difference<20) {
		  			feedback.text("Hot!");
		  			addCount();
		  		} else {
		  			feedback.text("Very Hot!");
		  			addCount();
		  		}
		};
		

/*--- Start a new game ---*/
	$(".new").click(function() {
		$("form").show();
		reset();
		random();
	});
	/*---generate random number---*/
	random();	

	/*---Execute Guessing a number---*/
	$("#guessButton").click(function(ev) {
	  	ev.preventDefault();
		guessingGame();
		$("#userGuess").val(""); /*---clears input---*/
	});

});