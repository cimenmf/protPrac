describe('Locating Elements', function(){
	
	
	//create function to add items to the cart
	function selectItem(product){
		element.all(by.tagName("app-card")).each(function(item){
			// 
		item.element(by.css("h4 a")).getText().then(function(text){
//			if(text == "Samsung Note 8"){
			if(text == product){
				//click on add button in that specific app-card item
				item.element(By.css("button[class*='btn-info']")).click();
				browser.sleep(3000);
			}
		})
	
	})
	}
	
	
	it('Different Ways of Locating elements', function(){
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("Alina");
		element(by.css("input[name='email']")).sendKeys("aline@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("programmer123");
		//check box clicking using type
		element(by.css("input[type='checkbox']")).click();
		
		//css containing text takes 2 args, 1st: css, 2nd the targeted text in the options/ in the list
		element(by.cssContainingText("[id=exampleFormControlSelect1] option", "Female")).click();
		
		// ELEMENT.ALL (), takes 2 actions, 1st, get the location of the list, 2nd pass the index of targeted element/fist/last 
		element.all(by.name("inlineRadioOptions")).first().click();
		
		//button text is easy, whatever text the button has, pass it
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
			})
		});
		
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M").then(function(){
			element(by.css("div[class*='danger']")).getText().then(function(text){
				console.log(text);
			})
		});
		
		
		//add items to the card without hardcoding the locaters
		
		//first go to the shop page
		// use LINKTEXT method
		element(by.linkText("Shop")).click();
		
		//take 4 items into the list, go thru each item, get the titles, and select the targeted one
		
		//use element.all  and tagName to locate general items location
										//get each item 
//		element.all(by.tagName("app-card")).each(function(item){
//				// 
//			item.element(by.css("h4 a")).getText().then(function(text){
//				if(text=="Samsung Note 8"){
//					//click on add button in that specific app-card item
//				
////					item.element(By.css("button[class*='btn-info']")).click();
//					item.element(By.css("button[class*='btn-info']")).click();
//					browser.sleep(1000);
//				}
//			})
//		
//		})

		//use the funtion instead of the code above
		selectItem("Samsung Note 8");
		selectItem("iphone X");
		
		
		
		//we will use Partial LInk text because checkout's text will be changing when more items added
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){

			console.log(text);
			//instead of printing the checkout result lets make a assertion of the number
	 
			//split the text 
			var resultArr	= text.split("(");
			//get the second part, by trimming the space at the beginning
	       var num =  Number(resultArr[1].trim().charAt(0));
			console.log("number of items in cart: " + num);
			num = num + 5;
			expect(num).toBe(7) ;
			console.log(num);
			browser.sleep(15000)
//			expect( resultArr[1].trim().charAt(0)).toBe("2") ;
		})
		
	})
})

