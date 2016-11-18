$(document).ready(function(){
	
$("#tinkeringpage").click(function(){
  

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);

    

    return false;

    });



});