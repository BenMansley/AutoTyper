(function($) {

    var autoTypeInterval = '',
        inputText = '',
        $output = null,
        speed = 50;

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
        var outputText = '',
            i = 0;
        if (skipSpaces) {
            autoTypeInterval = window.setInterval(function() {
                var thisChar = inputText.charAt(i);
                if (thisChar == ' ') {
                    while (inputText.charAt(i) == ' ') {
                        outputText = outputText + inputText.charAt(i);
                        i++;
                    }
                } else {
                    outputText = outputText + thisChar;
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
                outputText = outputText + inputText.charAt(i);
                $output.text(outputText);
                i++;
                if (i >= inputText.length) {
                    window.clearInterval(autoTypeInterval);
                    autoTypeInterval = '';
                }
            }, speed);

        }

    };

    var goToAutoTyperEnd = function() {
        if (autoTypeInterval !== '') {
            window.clearInterval(autoTypeInterval);
            autoTypeInterval = '';
            $output.text(inputText);
        }
    };

    $.fn.autoType = function(input, speed, spaces) {
        if (input == "stop") {
            goToAutoTyperEnd();
        } else {
            startAutoTyper($(this), input, speed, spaces);
        }
    };

        
})(jQuery);
