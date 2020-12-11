describe('Chain Locators demo', function() {
	it('RepeaterExample', function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/');

		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		
		
		
//		element(by.model("first")).sendKeys("4");
//		element(by.model("second")).sendKeys("90");
//		element(by.id("gobutton")).click();
//		
		//question: how do we get the second  result when there are more than 1 result and more than 1 repeater
		//  answer is in ALlElements.js class
		
		//parent								//child			//2nd one
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(txt){
			console.log(txt);
		})
		
		
		// using model and css when selecting on dropdown
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		
	})
})