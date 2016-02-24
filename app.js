$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var dishesView = new dishesView();


//views  TAR IN ID FRÅN INDEX.HTML SKICKAR TILL VIEW
	var createdinnerview = new CreatedinnerView($("#firstview"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);
	var dishesView = new DishesView($("#thirdview"), model);
	var selectedDishView = new SelectedDishView($("#selecteddish"), model);
	//testar ovan om man kan ta in två divar??
	var menuOverviewView = new MenuOverviewView($("#menuOverviewView"), model);
	var preparationView = new PreparationView($("#preparationView"), model);



	//controlers
	var createdinnercontroler = new Createdinnercontroler(createdinnerview, model);
	var mydinnercontroler = new Mydinnercontroler(myDinnerView, model);
	var dishescontroler = new Dishescontroler(dishesView, model);
	
	var selectedDishController = new SelectedDishController(selectedDishView, model);
	var menuOverviewController = new MenuOverviewController(menuOverviewView, model);
	

	


	
	


	


});