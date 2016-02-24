var MenuOverviewView = function (container, model) {
	var finishButton = this.finishButton = container.find("#finishButton");
	var menuView = this.menuView = container.find("#menuView");
	this.gobackbutton= container.find("#gobackbutton")

	//$("#preparationView").hide();
	//$("#exampleView").hide();

	function viewThis(){

		var prices = [0, 0, 0];

		var starter = model.getFullMenu()[0];
		for(i in starter.ingredients){
			prices[0] += starter.ingredients[i].price;
		}

		var mainDish = model.getFullMenu()[1];
		for(i in mainDish.ingredients){
			prices[1] += mainDish.ingredients[i].price;
		}

		var dessert = model.getFullMenu()[2];
		for(i in dessert.ingredients){
			prices[2] += dessert.ingredients[i].price;
		}

		var htmlCode = '';

		for (k in model.getFullMenu()){

			htmlCode += '<div class="col-xs-6 col-md-3">'
	      	+ '<a href="#" class="thumbnail">'
	        + '<img src="images/' + model.getFullMenu()[k].image + '">'
	        + '<div class="caption">'
	        + '<h3>' + model.getFullMenu()[k].name + '</h3>'
	        + '</div>'
	      	+ '</a>'
	      	+ '<p>' + prices[k] + 'kr</p>'
	    	+ '</div>';
    	}

    	//console.log(htmlCode);
    	menuView.html(htmlCode);


	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();
}
