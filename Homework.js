describe('Locating Elements', function(){
	
	
	//create function to add items to the cart
	function selectItem(product){
		element.all(by.tagName("app-card")).each(function(item){
	
		item.element(by.css("h4 a")).getText().then(function(text){

			if(text == product){
				//click on add button in that specific app-card item
				item.element(By.css("button[class*='btn-info']")).click();
				browser.sleep(1000);
			}
		})
	
	})
	}
	
	
	it('Different Ways of Locating elements', function(){
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
//		browser.executeScript("document.body.style.zoom='80%'");
		element(by.linkText("Shop")).click();
		
		//use the funtion instead of the code above
		var itemList= ["Samsung Note 8","iphone X","Blackberry"];
		selectItem(itemList[1]);
		selectItem(itemList[2]);
		selectItem(itemList[0]);
		var len = itemList.length;
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			console.log(text);
			//instead of printing the checkout result lets make a assertion of the number
			//split the text 
			var resultArr	= text.split("(");
	        var num =  Number(resultArr[1].trim().charAt(0));
			console.log("number of items in cart: " + num);
			expect(num).toBe(len) ;
		})

		
		//go to cart and verify the prices and items amount and total price.
				
//	      element(by.partialLinkText("Checkout")).click();
		  element(by.className("nav-link btn btn-primary")).click();
			
		element.all(by.css("table tbody tr h4") ).each(function(item){
				console.log( item.element(by.css("a:nth-child(1)")).getText());
		})
		
		//first make sure the list of the item names in the cart is matching with the list of the items sent by user.
		
		
		
		
		
		
		
	})
})

