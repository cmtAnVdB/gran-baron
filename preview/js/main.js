$(document).ready(function(){
		// Declare parallax on layers
		
		$('.parallax-bg').parallax({
			xparallax: 0.2,
			xorigin: 0.2,
			yparallax: false,
			width:2500
		});
		
		$('.parallax-house').parallax({
			xparallax: -0.35,
			xorigin: '40%',
			yparallax: false
		});
		
		$('.parallax-wolk').parallax({
			xparallax: 0.1,
			xorigin: -0.4,
			yparallax: false
		});
		
		$('.parallax-wolk-2').parallax({
			xparallax: 0.5,
			xorigin: 0.2,
			yparallax: false
		});
	});
