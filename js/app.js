$(document).ready(function() {
	$("body").on("click", "button", function (event) {

		for ( var i = 1; i < 101; i++) {
		
			if (i % 3 === 0 && i % 5 === 0) {
				$(".body1").append("<p>FizzBuzz</p>");
			}
			else if ( i % 3 === 0) {
				$(".body1").append("<p>Fizz</p>");
			}
			else if ( i % 5 === 0) {
				$(".body1").append("<p>Buzz</p>");
			}
			else {
				$(".body1").append("<p>" + i + "</p>")
			}
		};	
	});
});