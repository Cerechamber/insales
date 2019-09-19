export default $(function() {

$(document).ready(function(){
  $(".choose-best").swipe( {
    swipeLeft: function() {
      var carusel = $(this);
      left_carusel(carusel);
    },
    swipeRight: function() {
      var carusel = $(this);
      right_carusel(carusel);
    }
  });
});


	//Обработка клика на стрелку вправо
$(document).on('click', ".right-arr",function(){ 
	var carusel = $('.choose-best');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".left-arr",function(){
    var carusel = $('.choose-best');	
	left_carusel(carusel);
	return false;
});


function left_carusel(carusel){
   var block_width = $(carusel).find('.best-item').outerWidth();
   $(carusel).find("#carousel-items .best-item").eq(-1).clone(true).prependTo($(carusel).find("#carousel-items")); 
   $(carusel).find("#carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find("#carousel-items .best-item").eq(-1).remove();    
   $(carusel).find("#carousel-items").animate({left: "0px"}, 500);
   
}
function right_carusel(carusel){
   const block_width = $(carusel).find('.best-item').outerWidth();
   $(carusel).find("#carousel-items").animate({left: "-"+ block_width +"px"}, 500, function(){
	  $(carusel).find("#carousel-items .best-item").eq(0).clone(true).appendTo($(carusel).find("#carousel-items")); 
      $(carusel).find("#carousel-items .best-item").eq(0).remove(); 
      $(carusel).find("#carousel-items").css({"left":"0px"});
   }); 

}


$('.best-item').on('mouseenter', function(ev){
	$(ev.target).parents('.best-item').find('.dark-card').animate({'opacity': "0.8"}, 300);
	$(ev.target).parents('.best-item').find('.best-head, .best-about, .size-word, .price').css('color', 'white');
	

});

$('.best-item').on('mouseleave', function(ev){
	$(ev.target).parents('.best-item').find('.dark-card').animate({opacity: "0"}, 300);
	$(ev.target).parents('.best-item').find('.best-head, .best-about, .size-word, .price').css('color', '#000000');

});
/*
$(document).ready(()=> {
         if ($(window).width() < 575) {
        	let width = $(window).width() / 100 * 90; 
        	console.log(width);
        	$('.wrapper').innerWidth(width);
        }
    });



 $(window).on('resize', ()=>{
        if ($(window).width() < 575) {
        	let width = $(window).width() / 100 * 90; 
        	console.log(width);
        	$('.wrapper').innerWidth(width);
        }
    });

*/

$('.red-plashka').click(function(){
	 if ($(window).width() < 992) {
        	$('.hide-menu').animate({top: '0px'}, 300);
        }

});

$('.hide-menu').on('mouseleave', function() {
	$('.hide-menu').animate({top: '-80px'}, 300);

});







});