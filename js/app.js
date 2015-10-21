$(document).ready(function(){

	function fizzbuzz(max) {
		var count = 1;
		for (var i = 1; i <= max; i++) {
			if (i % 5 == 0 && i % 3 == 0) {
      			$(".body1").append("<p>" + count + ": " + "FizzBuzz" + "</p>");
      			count += 1;
    		} 
    		else if ( i % 3 == 0 ) {
      			$(".body1").append("<p>" + count + ": " + "Fizz" + "</p>");
      			count += 1;
    		} 
    		else if (i % 5 == 0) {
      			$(".body1").append("<p>" + count + ": " + "Buzz" + "</p>");
      			count += 1;
    		} 
    		else {
      			$(".body1").append("<p>" + count + ": " + i + "</p>");
      			count += 1;
    		}
		}
	}

	function runFizzbuzz() {
		$('input').keydown(function(enter){
			if (enter.keyCode == 13) {
				enter.preventDefault();
				$('p').remove();
				var userInput = $(this).val();
				var stringNum = parseInt(userInput, 10);
				var num = + stringNum;
				fizzbuzz(num);
			}
		})
	}

	runFizzbuzz();

});