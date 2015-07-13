/**
 *
 *      jQuery.onScreen - Check if an element is on the screen.
 *     
 *      Author: Richard Blechinger (http://fol.is / @F0lis)
 *      Edited by: Marcus Eby
 *      License: MIT
 *
 *      TODO: 
 *          - Check for horizontal objects.
 *
 *      Usage: 
 *      
 *      jQuery("#some-element").onScreen(function() {
 *          console.log("The element is on the screen!");
 *      }, function() {
 *          console.log("The element is no longer on the screen. :(")
 *      }, 100, 1); // add delay or negative for early, and final number, means how many times it should trigger.
 *     
 */
 
(function( $ ) {
		$.fn.onScreen = function(fn_on, fn_off, offset_modifier,timesrun) {
				// This allows you to add a bit of padding, before an object is
				// considered to be on the screen. Quite nifty.
				var _offset = offset_modifier || 0;                
				var prev_state = -1;
				var that = $(this);
				var tr = that.data('timesrun');
				that.data('timesrun',((tr>0)?tr:0));
				$(window).scroll(function() {
					// Define edges of our viewport
					var borders = {
							top: $(window).scrollTop(),
							bottom: $(window).scrollTop() + $(window).height()
					};

					// Check the position of the element.
					var object_coords = {
							top: that.offset().top,
							bottom: that.offset().top + that.height(),
					};

					// Did the object change on the screen?
					var state = borders.bottom -  _offset >= object_coords.top;

					// Nope. Nothing to see here. Move along.
					if (prev_state === state)
						return;
					
					// Yes it did!
					if (state) { 
						if (that.data('timesrun')==timesrun) {
							return;
						}
						that.data('timesrun',that.data('timesrun')+1);
						fn_on.call(); 
					} 
					else {
						if (fn_off) 
							fn_off.call(); 
					}

					prev_state = state;
				});
				$(window).trigger('scroll');
		};
 
}( jQuery ));

