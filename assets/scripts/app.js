	function makeWords() {
		var words = [
  {text: "html5", weight: 12.3},
  {text: "css3", weight: 12.5},
  {text: "javascript", weight: 13},
  {text: "jquery", weight: 12},
  {text: "programming", weight: 10},
  {text: "python", weight: 10},
	{text: "java", weight: 9},
  {text: "nodejs", weight: 11},
  {text: "npm", weight: 9},
  {text: "web development", weight: 10},
  {text: "C", weight: 8.3},
  {text: "Scheme", weight: 8.1},
  {text: "php", weight: 7.8},
	{text: "hadoop", weight: 8.5},
  {text: "numpy", weight: 7},
  {text: "matplotlib", weight: 7},
  {text: "ruby", weight: 8},
  {text: "express", weight: 9},
  {text: "flask", weight: 8.9},
  {text: "responsive design", weight: 10},
  {text: "bootstrap", weight: 10}
  /* ... */
];
	return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {
			delay: 120
		});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

		$(document).ready(function() {
			Typed.new("#writing-text", {
				strings: ["am a Web Developer", "am a micro-specialist & macro-generalist", "am a problem solver.", "am always learning new things... ^ALWAYS!"],
				// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
				stringsElement: null,
				// typing speed
				typeSpeed: 0,
				contentType: 'text'
			});

			displayWordCloud();
			/*
			new Custombox.modal({
  // Options
  content = {
    target: null,
    effect: 'fadein',
    id: null,
    container: null,
    esckey: true,
    animateFrom: 'top',
    animateTo: 'top',
    positionX: 'center',
    positionY: 'center',
    width: null,
    speedIn: 300,
    speedOut: 300,
    delay: 150,
    fullscreen: false,
    onOpen: null,
    onComplete: null,
    onClose: null,
  }
});
			*/

			// Instantiate new modal
			var modal = new Custombox.modal({
			  content: {
			    effect: 'push',
			    target: '#my-modal',
					animateFrom: 'left',
					animateTo: 'left'
			  }
			});

			$(".form-button").on("click", function() {
				modal.open();
			})
		})
