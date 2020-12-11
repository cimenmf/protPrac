describe('Protractor Alert Handling', function(){
	
	it('Open Non-Angular js website alerts', function(){
		
		// IF ITs nOT ANGULAR, THEN ...
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/")

		element(by.id("confirmbtn")).click();
		
		//to click alert we explicitly switch to alert to address it
		
//		browser.switchTo().alert().accept();

		browser.switchTo().alert().accept().then(function(){
			browser.sleep(3000);
		})
		
		element(by.id("confirmbtn")).click();
		
		browser.switchTo().alert().dismiss().then(function(){
			browser.sleep(3000);
		})
		
	})
	
})