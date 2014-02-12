jQuery(document).ready(function($) {

// MediaLoot jQuery Countdown Timer
// Description: Allows you to choose which unit of time from which to countdown and allows you to style each unit of time separately.
// Author: Natalie Hipp | MediaLoot.com
// URL: http://medialoot.com/item/

	function mlCountdown() {
	// Step 1: Make sure to call jQuery in your <head>
	// Step 2: Fill in the following two variables
		var eventTime = '1395223589'; // 137[9]178852 Unix Event Time - Get your stamp from http://www.unixtimestamp.com/index.php
		
		var startFrom = 'D'; // Adjust from which time unit you'd like to countdown: Use D for days, H for hours, M for minutes, or S for seconds.
		
	// Step 3: Add some spans in your HTML
	/* Each Unit of time is displayed independently so that you can style them differently. 
	
	Create <span>'s for each unit of time. Each span must have the class "ml-countdown" and then add the appropriate following classes for what you'd like to display: "days", "hours", "minutes", & "seconds". 
	
	For example, to display the number of days remaining, add this: <span class="ml-countdown days"></span>
	*/
		
	// We'll take it from here
		var currentTime = Math.round(new Date().getTime() / 1000); // Grabs current time in seconds
		var timeLeft = eventTime - currentTime;		
		 
		// Calculate numbers based on what kind of time they want to count from
		if (startFrom == 'S') {
			var scLeft = Math.floor(timeLeft);
			
			$(".timer-item.seconds .clock").html(scLeft);
		}
		else if (startFrom == 'M') {
			var minLeft = Math.floor(timeLeft / 60);
			var scLeft1 = timeLeft - (minLeft * 60); // number of whole minutes
			var scLeft = Math.floor(scLeft1);
			
			$(".timer-item.minutes .clock").html(minLeft);
			$(".timer-item.seconds .clock").html(scLeft);
		}
		else if (startFrom == 'H') {
			var hrLeft = Math.floor(timeLeft / 60 / 60);
			var minLeft1 = hrLeft * 60 * 60; // number of whole hours
			var minLeft2 = timeLeft - minLeft1;
			var minLeft = Math.floor(minLeft2 / 60);
			var scLeft1 = minLeft * 60; //number of whole minutes
			var scLeft2 = timeLeft - minLeft1 - scLeft1;
			var scLeft = Math.floor(scLeft2);
			
			$(".timer-item.hours .clock").html(hrLeft);
			$(".timer-item.minutes .clock").html(minLeft);
			$(".timer-item.seconds .clock").html(scLeft);
		}
		// Otherwise, default as if counting from days
		else {
			var dayLeft = Math.floor(timeLeft / 60 / 60 / 24);
			var hrLeft1 = dayLeft * 24 * 60 * 60; // days left in seconds
			var hrLeft2 = timeLeft - hrLeft1;
			var hrLeft = Math.floor(hrLeft2 / 60 / 60);
			var minLeft1 = hrLeft * 60 * 60; // hours left in seconds
			var minLeft2 = timeLeft - hrLeft1 - minLeft1;
			var minLeft = Math.floor(minLeft2 / 60);
			var scLeft1 = minLeft * 60; // minutes left in seconds
			var scLeft2 = timeLeft - hrLeft1 - minLeft1 - scLeft1;
			var scLeft = Math.floor(scLeft2);
			
			
			$(".timer-item.days .clock").html(dayLeft);
			$(".timer-item.hours .clock").html(hrLeft);
			$(".timer-item.minutes .clock").html(minLeft);
			$(".timer-item.seconds .clock").html(scLeft);
		}
	}
	
	window.onload=mlCountdown;
	window.setInterval( mlCountdown, 1000);


	$('input.text-field').focus(function(eventObject){
		//$(this).attr('value', '');
		this.value='';
	});
	$('input.text-field').blur(function(eventObject){
		//$(this).attr('value', 'Email address');
		this.value=!this.value?'Email address':this.value;
	});

});