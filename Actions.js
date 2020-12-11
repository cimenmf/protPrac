describe('Actions demo', function(){
	 var originalTimeout;

//	    beforeEach(function() {
//	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//	    });
//	    
//	    afterEach(function() {
//	        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//	      });
	it('Open rahulshettyacademy Website', function(){
		

		browser.get('https://rahulshettyacademy.com/angularpractice');
		
//		var EC = protractor.ExpectedConditions;
//		browser.wait(EC.urlIs("https://rahulshettyacademy.com/angularpractice/"), 5000);
//		
//		
		element(by.css("[href*='shop']")).click();
		browser.sleep(1000);
		
		//get the number of phones
		 element.all(by.css("app-card[class*='col']")).count().then(function(count){
			 console.log("the count of the items: "+count);
		 })
	
	  //jasmina assertion expect
		expect ( element.all(by.css("app-card[class*='col']")).count()  ).toEqual(4);
		
		//put the 1st item to the cart
		 element.all(by.className("btn btn-info")).get(0).click();
			browser.sleep(1000);
		element(by.className("nav-link btn btn-primary")).click();
		browser.sleep(1000);
		element(by.className("btn btn-success")).click();
		browser.sleep(1000);
		
		browser.actions().mouseMove(element(by.id("country")).sendKeys("BU")).perform().then(function(){
			browser.sleep(3000);
		})
		
		browser.actions().sendKeys(protractor.Key.TAB).perform();
		browser.actions().sendKeys(protractor.Key.TAB).perform();
		browser.actions().sendKeys(protractor.Key.SPACE).perform().then(function(){
			
			browser.sleep(3000);
		})
		
	})
})

