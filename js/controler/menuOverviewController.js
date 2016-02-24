var MenuOverviewController = function (view, model){
	function viewThis(){

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
	 		$("#menuOverviewView").hide();
		});
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);
	viewThis();

}
