var Createdinnercontroler = function(view, model){

	view.createDinner.click(function(){
		$("#firstview").hide();
		$("#myDinnerView").show();
		$("#thirdview").show();
 		$("#dishesView").show();
 		$("#preparationView").hide();
	});
}