var MenuOverviewController = function (view, model){
	view.finishButton.click(function(){
		$("#menuOverviewView").hide();
		$("#preparationView").show();
	});

	view.gobackbutton.click(function(){
		$("#firstview").hide();
		$("#myDinnerView").show();
		$("#thirdview").show();
 		$("#dishesView").show();
 		$("#preparationView").hide();
	});

}
