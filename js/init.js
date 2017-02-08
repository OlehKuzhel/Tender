//webfont-load
WebFont.load({
    google: {
      families: ['Roboto:300,400,500,700:latin,cyrillic']
    },
  	active: function() {
  		initalize();
  	}
});


//prevent-reloads by click
$('a').click(function(e){
	e.preventDefault();
});

//initalize
function initalize(){
	
	
	// loadcss
    $('<link href="css/libs.css?<?php echo time(); ?>" rel="stylesheet"><link href="css/style_a.css?<?php echo time(); ?>" rel="stylesheet">').appendTo('head');
	
	
}