

// By Cocktail //
	$("#cocktail-input").submit("keyUp", function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	})

	$("#button1").on("click", function() {
		event.preventDefault();

	$(".drinksTable").html("");

	var cocktail = $("#cocktail-input").val().trim();
	var data = $("#cocktail-input").val().trim();
	
	if (!$.trim(data)){   
    	$('.drinksTable').html("Must Choose a Cocktail!!!")
	} else {   
    
	$("#cocktail-input").val('');
	
		
	console.log(cocktail)
	var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail;
	console.log(queryURL)
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		
		console.log(response);

		var results = response.drinks;
		
		results.forEach(function(drink){
			event.preventDefault();
			var arrayOfIngredients = [];
			var name = drink.strDrink;
			var instructions = drink.strInstructions;
			var keysfromarray = Object.keys(drink);

				keysfromarray.forEach(function(key){

					if(key.includes('strIngredient')){

						if(drink[key]){
								
							console.log(drink[key]);
							arrayOfIngredients.push(drink[key]);	
						}
					}
				})
				console.log(arrayOfIngredients.join(','));

			var Row = "<tr><td>" + name +"</td> <td>" +arrayOfIngredients.join(', ') +"</td><td>"+instructions+"</td></tr>"
			$('.drinksTable').append(Row);
			
		})
      });
    }});

	//enter on-click
$("#cocktail-input").on('keyup', function (e) {
    if (e.keyCode == 13) {
        	event.preventDefault();

	$(".drinksTable").html("");

	var cocktail = $("#cocktail-input").val().trim();
	var data = $("#cocktail-input").val().trim();
	
	if (!$.trim(data)){   
    	$('.drinksTable').html("Must Choose a Cocktail!!!")
	} else {   
    
	$("#cocktail-input").val('');
	
		
	console.log(cocktail)
	var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail;
	console.log(queryURL)
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		
		console.log(response);

		var results = response.drinks;
		
		results.forEach(function(drink){
			event.preventDefault();
			var arrayOfIngredients = [];
			var name = drink.strDrink;
			var instructions = drink.strInstructions;
			var keysfromarray = Object.keys(drink);

				keysfromarray.forEach(function(key){

					if(key.includes('strIngredient')){

						if(drink[key]){
								
							console.log(drink[key]);
							arrayOfIngredients.push(drink[key]);	
						}
					}
				})
				console.log(arrayOfIngredients.join(','));

			var Row = "<tr><td>" + name +"</td> <td>" +arrayOfIngredients.join(', ') +"</td><td>"+instructions+"</td></tr>"
			$('.drinksTable').append(Row);
			
		})
	  });
	}
	}
})
    

    // Random //

    $("#button3").on("click", function() {

    $(".drinksTable").html("");

	var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
	console.log(queryURL)
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		event.preventDefault();
		console.log(response);

		var results = response.drinks;
		
		results.forEach(function(drink){
			var arrayOfIngredients = [];
			var name = drink.strDrink;
			var instructions = drink.strInstructions;
			var keysfromarray = Object.keys(drink);

				keysfromarray.forEach(function(key){

					if(key.includes('strIngredient')){

						if(drink[key]){
							console.log(drink[key]);
							arrayOfIngredients.push(drink[key]);	
						}
					}
				})
				console.log(arrayOfIngredients.join(','));

			var Row = "<tr><td><p>Drink: " + name +"</td><td>Ingredients: " +arrayOfIngredients.join(', ') +"</td><br></br><td>Instructions: "+instructions+"</td></tr>"
			$('.drinksTable').append(Row);
		})
      });
    });


	