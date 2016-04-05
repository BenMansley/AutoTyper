$(document).ready(function() {
	//
	$('#btn').click(function() {
		$('#result').show();
		$('#result').autoType($('#text-input').val(), $('#speed-inp').val(), $('#spaces-inp').is(':checked'));
	});
	//
	$('#end').click(function() {
		$('#result').autoType('stop');
	});
});
