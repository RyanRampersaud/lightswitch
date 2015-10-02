var clickcount = 0;
// var isSwitchOn = $(':button').hasClass('on')

$(':button').on('click',function(e){
	clickcount = clickcount +1;

	var isSwitchOn = $(':button').hasClass('on')

	if (isSwitchOn == true) {
		$('body').removeClass('light');
		$('body').addClass('dark');
		$(':button').removeClass('on')
		$('status').text("Hey, who turn off the lights?");
		$('.status').css('color','white');

	}
	else if(isSwitchOn == false){
		$('body').addClass('light');
		$('body').removeClass('dark');
		$(':button').addClass('on');
		$('status').text("It's so bright in here!");
		$('status').css('color','black');
	}
});

