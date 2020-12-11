describe('Chain Locators demo', function() {
	
	//resuable functions here inside of describe and outside of it blocks
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	
	}
	
	it('RepeaterExample', function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/');

		
		Add(20,5);
//		element(by.model("first")).sendKeys("20");
//		element(by.model("second")).sendKeys("5");
//		element(by.id("gobutton")).click();
		
		Add(980,435);
//		element(by.model("first")).sendKeys("980");
//		element(by.model("second")).sendKeys("435");
//		element(by.id("gobutton")).click();
		
		Add(54,73);
//		element(by.model("first")).sendKeys("54");
//		element(by.model("second")).sendKeys("73");
//		element(by.id("gobutton")).click();
		
		//when printing its from browser and needs to be resolved
		element.all(by.repeater("result in memory")).count().then(function(count){
			
			/*
			 		element(by.repeater("result in memory")).
			 		element(by.css("td:nth-child(3)")).getText().then(function(txt){
					console.log(txt);
					})
			 */
			
			//how many repeaters exist
			console.log("how many repeaters exist : "+count);
		})
		
		//now print the value in each repeater, we need to resolve EACH promise
		element.all(by.repeater("result in memory")).each(function(item){
			//after item. we pass the same css locator and resolving code for each item
			item.element(by.css("td:nth-child(3)")).getText().then(function(txt){
				console.log("the result of item: "+txt);
			})
		})	
	})
})