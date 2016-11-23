$(document).ready(function(){

	$(window).load(function() {
		$(".se-pre-con").fadeOut(600);;
	});
	
$("#topbar-text-tinkering").click(function(){
  
  $('html, body').animate({scrollTop:$('#tinkeringpage').offset().top}, 'slow');

    return false;

    });

$("#topbar-text-projects").click(function(){

  $('html, body').animate({scrollTop:$('#projectspage').offset().top}, 'slow');

  return false;

    });


$('a.mylink').click(function(e) {
    e.preventDefault();
    window.open('https://www.behance.net/gallery/37527073/Podo-Labs');
    window.open('https://www.behance.net/gallery/42146713/Podo-Labs');
});


});

