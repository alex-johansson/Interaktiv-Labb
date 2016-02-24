var SelectedDishController = function(view, model){

	view.backButton.click(function(){
		$("#selecteddish").hide();
		$("#menuOverviewView").hide();
		$("#selectdishes").show();
		$("#thirdview").show();
		$("#dishesview").show();

	});

	view.confirmDishButton.click(function(){

		model.addDishToMenu(model.getDishToView());

		$("#selecteddish").hide();
		$("#dishesview").show();
		$("#thirdview").show();
 		$("#selectdishes").hide();
		

	});
}