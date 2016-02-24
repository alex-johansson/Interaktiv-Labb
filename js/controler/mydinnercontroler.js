var Mydinnercontroler = function(view, model){

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);

	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);

	});

	view.createDinnerButton.click(function(){
		console.log(model.getFullMenu());
		$("#selecteddish").hide();
		$("#menuOverviewView").show();
		$("#selectdishes").hide();
		$("#thirdview").hide();
		$("#dishesview").hide();
		$("#myDinnerView").show();
	});
}