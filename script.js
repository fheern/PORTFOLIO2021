$(document).ready(function(){

console.log("ready!");

$("#works a").mouseenter(function(){
	console.log("enter planete");
	$(".planete").css({"position":"absolute"})
	.animate({"width":"+=5vw"},200)
	$(".ceinture").animate({"width":"+=7vw"},200)
	$(".rocket").css({"position":"absolute"})
	.animate({"width":"+=28vw"},200);
});

$("#works a").mouseleave(function(){
	console.log("leave planete");
	$(".planete").animate({"width":"-=5vw"},200)
	$(".ceinture").animate({"width":"-=7vw"},200)
		$(".rocket").css({"position":"absolute"})
	.animate({"width":"-=28vw"},200)
	
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




