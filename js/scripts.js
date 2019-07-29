$(document).ready(function(){
	//Hover to higlight background with white colour.
	$("#pizzamenu1,#pizzamenu2,#pizzamenu3,#pizzamenu4,#pizzamenu5,#pizzamenu6,#pizzamenu7,#pizzamenu8").hover(function(){
	  $(this).css("border-color", "#ffa500e6", "width", "120%");
	  }, function(){
	  $(this).css("background-color", "#ffa500e6");
	});
	/*
	//Hover on selected or highlighted item. 
	$("#pizzamenu1,#pizzamenu2,#pizzamenu3,#pizzamenu4,#pizzamenu5,#pizzamenu6,#pizzamenu7,#pizzamenu8").mouseenter(function(){
    $("#panel1,#panel2,#panel3,#panel4,#panel5,#panel6,#panel7,#panel8").show("slow");
	});
	//On click the active item, bring up form to order.
	*/
});