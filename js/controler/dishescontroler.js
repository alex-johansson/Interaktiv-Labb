var Dishescontroler = function(view, model){
	function viewThis(){

		var searchstring = $("input:first").val();  // den viewn påverkas inte av modellen

		view.coursebutton.click(function(){	
			viewThis();
		});

		view.searchbutton.click(function(){
			view.update(searchstring);
			viewThis();
		});

		//	Lägg till det här:
		//	###
		for(var k = 0; k < $('#list div').length; k++) {
			var curr = $('#list div')[k];
			curr.onclick = function() {
				model.setDishToView(this.id);
				$("#dishesview").hide();
				$("#thirdview").hide();
				$("#myDinnerView").show();
				$("#selecteddish").show();
				$("#ingredients").show();
				$("#preparationView").hide();
				view.update(searchstring);
				viewThis();
			}
		}
		//	###
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);
	viewThis();
}

//typeselectcoursebutton