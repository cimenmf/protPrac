	describe('Protractor Element Demo',function() {
	
	it('Locators',function(){
		
//		//to navigate non-angular websites
//		browser.waitForAngularEnabled(false);
//		
//		browser.get('http://google.com').then(function(){
//			browser.sleep(5000);
//		});
//	
//		
		
		
browser.get('http://juliemr.github.io/protractor-demo/');

element(by.model("first")).sendKeys("3");
element(by.model("second")).sendKeys("9");
element(by.id("gobutton")).click();

// for assertion, we use Jasmin assertion and Jasmin takes care of promise resolving
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("12");

//element() method is not handling promise resolving so we do it explicitly
element(by.css("h2[class='ng-binding']")).getText().then(function(text){
	console.log(text);
})



		  })
		  
	})
	