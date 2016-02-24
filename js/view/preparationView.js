var PreparationView = function(container, model){

/*
	var dishImage = this.dishImage = container.find("#dishImage");
	var dishName = this.dishName = container.find("#dishName");
	var dishIngredients = this.dishIngredients = container.find('#dishIngredients');
	var dishDescription = this.dishDescription = container.find("#dishDescription");
*/

	var prep = this.prep = container.find("#prep");
	function viewThis(){

		var menu = model.getFullMenu();
		var html = '';
		for (i in menu){


			var dishToView = menu[i];
			var htmlIngredients = '';
			for(k in dishToView.ingredients){
				htmlIngredients += '<br>' 
				+ dishToView.ingredients[k].quantity 
				+ ' ' 
				+ dishToView.ingredients[k].unit 
				+ ' ' 
				+ dishToView.ingredients[k].name 
				+ '</br>';
			}

			html += '<div id="ingredients">'+'<div class="row">' + 
			'<div class="col-sm-3"> ' +
			'<h2>' + dishToView.name + '</h2>' + '<div id="bild">'+
      		'<img src="images/' + dishToView.image + '">' + '</div>' +
      		'</div>' +
      		'<div class="col-sm-4">' + 
  			'<h2>Ingredients</h2>' +
      		htmlIngredients + 
          	'</div>' +  
    		'<div class="col-sm-5">' +
      		'<h2>Preparation</h2>' +
      		dishToView.description +
    		'</div>'+
    		'</div>' +
    		'</div>';

/*
			dishImage.html('<img src="images/' + dishToView.image + '">');
			dishName.html(dishToView.name);
			dishIngredients.html(htmlIngredients);
			dishDescription.html(dishToView.description);
*/
		}
		prep.html(html);
	}

	this.update = function(){
		viewThis();
	}

	model.addObserver(this);

	viewThis();

}