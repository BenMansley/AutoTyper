(function($) {
//
	var autoTypeInterval = '';
	var inputText = '';
	var $output = null;
	var speed = 50;

	var clearAutoTyper = function() {
		$output.text('');
		if (autoTypeInterval !== '') {
			window.clearInterval(autoTypeInterval);
		}
	};

	var startAutoTyper = function($outputElement, inText, typeSpeed, skipSpaces) {
		$output = $outputElement;
		speed = typeSpeed;
		clearAutoTyper();
		inputText = inText;
		var outputText = '';
		var i = 0;
		if (skipSpaces) {
			autoTypeInterval = window.setInterval(function() {
				var thisChar = inputText.charAt(i);
				if (thisChar === ' ') {
					while (inputText.charAt(i) === ' ') {
						outputText += inputText.charAt(i);
						i++;
					}
				} else {
					outputText += thisChar;
					i++;
				}
				$output.text(outputText);
				if (i >= inputText.length) {
					window.clearInterval(autoTypeInterval);
					autoTypeInterval = '';
				}
			}, speed);
		} else {
			autoTypeInterval = window.setInterval(function() {
				outputText += inputText.charAt(i);
				$output.text(outputText);
				i++;
				if (i >= inputText.length) {
					window.clearInterval(autoTypeInterval);
					autoTypeInterval = '';
				}
			}, speed);
		}
	};
	//
	var goToAutoTyperEnd = function() {
		if (autoTypeInterval !== '') {
			window.clearInterval(autoTypeInterval);
			autoTypeInterval = '';
			$output.text(inputText);
		}
	};
	//
	$.fn.autoType = function(inputText, speed, skipSpaces) {
		if (input === 'stop') {
			goToAutoTyperEnd();
		} else {
			startAutoTyper($(this), inputText, speed, skipSpaces);
		}
	};
	//
})(jQuery);
