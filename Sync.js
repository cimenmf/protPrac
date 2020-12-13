describe('Protractor Expected Conditions',function(){
	
	it('Sync', function(){
		
		//it's non-angular site
		browser.waitForAngularEnabled(false);
		
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		element(by.css("a[href*='loadAjax']")).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader")),5000));
		
		element(by.id("results")).getText().then(function(text){
		
			console.log(text);
		})
	})
})
