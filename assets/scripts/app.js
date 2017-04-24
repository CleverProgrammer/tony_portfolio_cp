	function makeWordCloud() {
		var words = [
  {text: "html3", weight: 13},
  {text: "css5", weight: 10.5},
  {text: "css3", weight: 9.4},
  {text: "javascript", weight: 13},
  {text: "jquery", weight: 6.2},
  {text: "programming", weight: 5},
  {text: "python", weight: 5},
	{text: "java", weight: 13},
  {text: "nodejs", weight: 10.5},
  {text: "npm", weight: 9.4},
  {text: "web development", weight: 8},
  {text: "C", weight: 6.2},
  {text: "Scheme", weight: 5},
  {text: "php", weight: 5},
	{text: "hadoop", weight: 13},
  {text: "numpy", weight: 10.5},
  {text: "matplotlib", weight: 9.4},
  {text: "ruby", weight: 8},
  {text: "express", weight: 6.2},
  {text: "flask", weight: 5},
  {text: "responsive design", weight: 5},
  {text: "bootstrap", weight: 5}
  /* ... */
];

		$('.teaching-domains').jQCloud(words);
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud();
				count++;
			}
		});
	}

	$(function() {
		Typed.new("#writing-text", {
			strings: ["am a Web Developer", "am a micro-specialist & macro-generalist", "am a problem solver.", "am always learning new things... ^ALWAYS!"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 0,
			contentType: 'text'
		});

		displayWordCloud();
	})
