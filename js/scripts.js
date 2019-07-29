//Business Logis
function pizzamenu(size, toppings, crust,){
this.size = size;
this.toppings = toppings;
this.crust = crust;
}

pizzamenu.prototype.totalCost = function (){
	return this.size + this.toppings + this.crust
}

//User Logic
$(document).ready(function(){
	//Hover to higlight background with white colour.
	$("#pizzamenu1,#pizzamenu2,#pizzamenu3,#pizzamenu4,#pizzamenu5,#pizzamenu6,#pizzamenu7,#pizzamenu8").hover(function(){
	  $(this).css("border-color", "#ffa500e6", "width", "120%");
	  }, function(){
	  $(this).css("background-color", "#ffa500e6");
	});

	// This will give our value for the seleced Pizza size
	var pizzaSize = 0;

	$("form#pizzaorder").submit (function(){
		for (var j=0; j< document.getElementsByName("pizzaslected").length;j++){
			if (document.getElementsByName("pizzaslected")[j].checked)
				pizzaSize = parseInt(document.getElementsByName("pizzaslected")[j].value);
		}
	})

	//This will give our value for the selected crust
	var crustType = 0;

	$("form#crustselected").submit (function(){
		for (var j=0; i< document.getElementsByName("crustselected").length;i++){
			if (document.getElementsByName("crustselected")[i].checked)
				crustType = parseInt(document.getElementsByName("crustselected")[j].value);
		}
		alert(crustType);
	})

	
});