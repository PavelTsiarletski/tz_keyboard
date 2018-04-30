$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;
 
	$('#keyboard li').click(function(){
		
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
 
		// Shift keys
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			shiftPressed();
 
			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}
 
		// Caps lock
		if ($this.hasClass('capslock')) {
			
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}
 
		// Delete
		if ($this.hasClass('delete')) {
			var html = $write.html();
 
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
 
		// Special characters
		if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = "	";
        if ($this.hasClass('return')) character = "";
 
		// Uppercase letter
		if ($this.hasClass('uppercase')) character = character.toUpperCase();
 
		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
 
			shift = false;
		}
 
		// Add the character
		$write.html($write.html() + character);
	});
});

// window.captureEvents(Event.KEYPRESS); 
// window.onkeypress = pressed; 

//     function pressed(e) { 
// 		console.log("now pressed" + e.which);
//         // if(e.which == 113) {
// 		// 	$(".letter_q").toggleClass("active");
// 		// }
// 		if(e.which == 49) {
// 			$(".symbol_1").toggleClass("active");
// 		}
// 		if (e.ctrlKey) {
// 			alert("ctr key was pressed during the click");
// 		 }
// 	}

	$
	(document).keydown(function(event) {
		console.log(keyCode(event.which));
		
		var value = keyCode(event.which);

		$('li:contains(' + value + '), li > span:contains(' + value +'), li > span .num_' + value).filter(function() {
			return $(this).text() === value || '1!2@3#4$5%6^7&8*9(0)-_=+'.indexOf($(this).text()) != -1;
		}).addClass('active');

		if (value == 'shift') {
			shiftPressed();
		}
	});
	
	$(document).keyup(function() {
		var value = keyCode(event.which);

		if (!value) {
			value = String.fromCharCode(event.which).toLowerCase();
		}
		
		$('li:contains(' + value + '), li > span:contains(' + value +'), li > span .num_' + value).filter(function() {
			return $(this).text() === value || '1!2@3#4$5%6^7&8*9(0)-_=+'.indexOf($(this).text()) != -1;
		}).removeClass('active');

		if (value == 'shift') {
			shiftPressed();
		}

		// ctrl alt shift escape tab caplock 
	});

function shiftPressed() {
	$('.letter').toggleClass('uppercase');
	$('.symbol span').toggle();
}
