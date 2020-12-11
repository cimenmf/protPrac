describe('My Test Suite',function() {
	
//first parameter - test suite name   //second  paramater - function and all test cases will be defined in function as it blocks
	
	it('smoke test' ,function(){
		//it takes 2 arguments as well
		//first test case name, second function
		
		  browser.get('https://angularjs.org');
		  browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
			  browser.sleep(5000)
			  
			  console.log("Last step of the test")
		  })
		  
	})
	
//	it('smoke test2',function(){
//		
//	})

})