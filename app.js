$(document).ready(function() {
	for (i=1; i<101;i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			$('ul').append('<li>', 'fizz buzz');
		}
		else if (i % 5 === 0) {
			$('ul').append('<li>', 'buzz');
		}

		else if (i % 3 === 0) {
			$('ul').append('<li>', 'fizz');
		}
		else {
		$('ul').append('<li>', i);
		}
	}
});