$(document).ready(function() {
	
	$('.content a').hover(function(){  // mouseover 
		$(this).stop().fadeTo(200, 0.8);  
	}, function(){  // mouseout 
		$(this).stop().fadeTo(200, 1.0);
	});
 
	var section = $(".section").size();
	var loopInt = 0;
	while(loopInt <= section){
		var divHeight = $(".section").eq(loopInt).height();
		$(".section").eq(loopInt).css({height : '35px'}).delay(1000);
		$('.section').eq(loopInt).animate({height: divHeight}, 1000);    
		loopInt++;
	}
	
	var bar_speed = 1000;
	$(".level").css({width:0}).delay(1500);
	$(".level1").animate({width:'10%'}, bar_speed);
	$(".level2").animate({width:'20%'}, bar_speed);
	$(".level3").animate({width:'30%'}, bar_speed);
	$(".level4").animate({width:'40%'}, bar_speed);
	$(".level5").animate({width:'50%'}, bar_speed);
	$(".level6").animate({width:'60%'}, bar_speed);
	$(".level7").animate({width:'70%'}, bar_speed);
	$(".level8").animate({width:'80%'}, bar_speed);
	$(".level9").animate({width:'90%'}, bar_speed);
	$(".level10").animate({width:'100%'}, bar_speed);
});