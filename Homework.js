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
		var itemList= ["Samsung Note 8","Nokia Edge","Blackberry"];
		selectItem(itemList[0]);
		selectItem(itemList[1]);
		selectItem(itemList[1]);
		selectItem(itemList[1]);
		selectItem(itemList[2]);
		selectItem(itemList[2]);
		var len = itemList.length;
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			console.log(text);
			//instead of printing the checkout result lets make a assertion of the number
			//split the text 
			var resultArr	= text.split("(");
	        var num =  Number(resultArr[1].trim().charAt(0));
			console.log("number of items in cart: " + num);
			
			expect    (num) .   toBe   (6) ;
		
		
		})

		var totalPriceCalculated;
		var totalCaptured;
		//go to cart and verify the item names				
//	      element(by.partialLinkText("Checkout")).click();
		  element(by.className("nav-link btn btn-primary")).click();
			
		//to be able to get the text or something from browser we must resolve the promise
		// ( using  getText().then(function(){} ) 
		
			element.all(by.css("h4[class='media-heading']") ).each(function(item){
				console.log("---------------------------------------------");
				item.element(by.css("h4 a")).getText().then(function(text){
				 
				 console.log(text);
				 
				 if(itemList.includes(text)){
					 console.log("the list match: "+ text );
				 } 
			 })
		})
		
		
		//get the names of each item, simTitle and status
		
		element.all(by.css("table tbody tr")).each(function(row) {
			console.log("---------------------------------------------");
			row.element(by.css("td:nth-child(1)")).getText().then(function(textOfColumsInRows){
				console.log("brand: "+textOfColumsInRows);
			})
			// td:nth-child(4) strong
		})
		
		

		
		//get the names of each item's price
			
			element.all(by.css("table tbody tr")).each(function(row) {
				console.log("---------------------------------------------");
				row.element(by.css("td:nth-child(3)")).getText().then(function(textOfColumsInRows){
				
					console.log("price: "+textOfColumsInRows);
				})
				// td:nth-child(4) strong
			})
			
			
			//get the names of each item's total price
			
			element.all(by.css("table tbody tr")).each(function(row) {
				console.log("---------------------------------------------");
				row.element(by.css("td:nth-child(4)")).getText().then(function(textOfColumsInRows){
					
					console.log("pure quantity: "+ textOfColumsInRows);
					
					var resultArr = textOfColumsInRows.split(".");
					var newStr= resultArr[1].substring(1);
			        var num =  Number(newStr );
					console.log("trimmed quantity: "+ num);
					totalPriceCalculated += num;
					
					console.log("current total: " +totalPriceCalculated);
				})
				// td:nth-child(4) strong
			})
			
			element(by.css("table tbody tr td:nth-child(5) h3")).getText().then(function(total){
				 console.log("total Captured: "  + total);
				 totalCaptured = Number(total);
				 console.log("total Captured: "  + totalCaptured);
				 console.log("total Calculated:" + totalPriceCalculated);
//				 browser.sleep(15000);
//				 expect   ( totalPriceCalculated)  .   toBe   (totalCaptured)   ;
				 
				 
			})
		
		
			
	})
})

