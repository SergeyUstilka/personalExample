var sgApp =  (function($){
	$('#mobile-menu').click(function(){
		$('header nav').slideToggle();
	})



//  h1 - #anim1
//  p[1] - #anim2
//  p[2] - #anim3
//  p[button] - #anim4
// h2[3] - #anim5

var waypointAdd = function(selectorName, typeAnimation){
	selectorName.addClass('hidden animated')
	selectorName.waypoint(function(dir){
		if(dir == 'down'){
			selectorName.addClass(typeAnimation);			
		}else{selectorName.removeClass(typeAnimation);}
	},{offset:'70%'});
	selectorName.waypoint(function(dir){
		if(dir == 'down'){
			selectorName.removeClass(typeAnimation);			
		}else{selectorName.addClass(typeAnimation);}
	},{offset:'-50px'});
}
var anim1 = $('#anim1');
var anim2 = $('#anim2');
var anim3 = $('#anim3');
var anim4 = $('#anim4');
var anim5 = $('#anim5');
waypointAdd(anim1, 'fadeInUp');
waypointAdd(anim2, 'fadeInRight');
waypointAdd(anim3, 'fadeInLeft');
waypointAdd(anim4, 'bounceIn');
waypointAdd(anim5, 'fadeInRight');


})(jQuery);