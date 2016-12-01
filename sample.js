
 $("#card").flip({
	axis: 'y',
	trigger: 'manual'   
}); 
  
$("#flip-link").click(function() {
	$("#card").flip(true);		
	$("#card-back").show();		
});

$("#contentContainer").click(function() {
	$("#card").flip(false);		
});


$( document ).ready(function() {
    
 $("#card").flip({
	axis: 'y',
	trigger: 'manual'   
}); 
  
$("#flip-link").click(function() {
	$("#card").flip(true);		
	$("#card-back").show();		
});

$("#contentContainer").click(function() {
	$("#card").flip(false);		
});
});

