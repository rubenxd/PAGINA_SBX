$(document).ready(function(){

$('.ir-arriba').click(function(){
	$('body, html').animate({
		scrollTop:'0px'
   },300);
});

$(window).scroll(function(){
	if( $(this).scrollTop() > 0){
		$('.ir-arriba').slideDown(600);
	}else
	{
		$('.ir-arriba').slideUp(300);		
	}
});
});