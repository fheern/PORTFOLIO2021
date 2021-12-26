$(document).ready(function(){

console.log("ready!");



// $(window).scroll(function(){
// 	if ($(window).scroll(function(){
// 		var scroll = $(window).scrollTop();
//   	if (scroll >= $(window).height()){
//   		console.log("SCROLL WINDOW")
//     	$(".scrolltop").show();
//  		}
//  	}));
// });



  $(window).scroll(function() {
    if ($(window).scrollTop() > 800){
    	console.log("scroll");
      $(".scrolltop img").css({"opacity":"1"},100);
    } else {
      $(".scrolltop img").css({"opacity":"0"},100);
    }
  });

  $(".scrolltop").click(function() {
    $('html, body').scrollTop(0);
  });




$("#works a").mouseenter(function(){
	console.log("enter planete");
	$(".planete").css({"position":"absolute"})
	.animate({"width":"+=3vw"},200)
	$(".ceinture").animate({"width":"+=7vw"},200)
	$(".rocket").animate({"width":"+=23vw"},200);
	$(".descprojet").animate({"width":"+=40vw"},200);
});

$("#works a").mouseleave(function(){
	console.log("leave planete");
	$(".planete").animate({"width":"-=3vw"},200)
	$(".ceinture").animate({"width":"-=7vw"},200)
		$(".rocket").animate({"width":"-=23vw"},200)
		$(".descprojet").animate({"width":"-=40vw"},200);
	
});



$(".postinstaplus").mouseenter(function(){
  $(this).attr("src","img/bde/POST-SOIREE-OCTOBREROSE.jpg");
});
$(".postinstaplus").mouseleave(function(){
  $(this).attr("src","img/bde/POST-OCTOBREROSE.jpg");
});

});


// $("#works a").mouseenter(function(){
// 	console.log("enter planete");

// 	$(".planete").css({"position":"absolute"})
// 	.animate({"width":"+=5vw"},200);

// 	$(".ceinture").animate({"width":"+=5vw"},200);

// 	$(".rocket").css({"display":"block"})
// 	.animate({opacity: "+=0,5",left:"+=10vw",width:"+=10vw"},200);
// });

// $("#works a").mouseleave(function(){
// 	console.log("leave planete");

// 	$(".planete").animate({width:"-=5vw"},200);

// 	$(".ceinture").animate({width:"-=5vw"},200);

// 	$(".rocket").animate({opacity:"-=1",left:"+=80vw",width:"10px"},200);

// 	setTimeout(function(){
// 	$(".rocket").animate({"width": "10vw","left": "0px"});
// 	console.log("rocket replacée");
// 	}, 210);
// });




