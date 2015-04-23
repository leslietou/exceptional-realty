$(document).ready(function(){

////////////Mobile Menu///////////////

$('.menu-icon').click(function(){
	$('#menu-links').slideToggle();

})


//fix hidden links on window resize

$(window).resize(function(){ 
	if($(window).width()>700){
		$('#menu-links').removeAttr('style');
	}


});



});