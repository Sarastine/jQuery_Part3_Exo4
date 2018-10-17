$('#heightPlus').click(function() {
	heightRectangle = $('#rectangle').height();
	heightRectangle += 10;
	if (heightRectangle > 100) {
		heightRectangle = 10
		$('#rectangle').height(heightRectangle);
	} else {
		$('#rectangle').height(+heightRectangle);
	}
});
$('#toGreen').click(function() {
	$('#rectangle').css('background-color','#080');
});
$('#toInitial').click(function() {
	$('#rectangle').css('background-color','');
});
$('#displayNone').click(function() {
	$('#rectangle').hide();
});
$('#displayBlock').click(function() {
	$('#rectangle').show();
});