 























$('.enlace-interno').bind('click',function(event){
        var $anchor = $(this);
           scrollTop:
        $($anchor.attr('href')).offset().top
		}, 1000,'easeOutExpo');
		event.preventDefault();
	});
