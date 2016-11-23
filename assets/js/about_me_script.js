$(document).ready(function(){
	
$(window).load(function() {
		$(".se-pre-con").fadeOut(600);;
	});
	
$("#container").hover(function(){
  		 $('.cover_img_scaled').addClass("cover_img_hover_jquery");

    });

$("#topbar").hover(function(){
  		 $('.cover_img_scaled').removeClass("cover_img_hover_jquery");

});


});