exports.config = {
		
		//we dont have to provide this server (which is unreliable way)
		//but we do provide here, we have to start the server on command line
		//before running the tests
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Homework.js'],
  onPrepare : function() {browser.manage().window().maximize();},
  
  jasmineNodeOpts: {
	  defaultTimeoutInterval: 2500000
	  },
	  
	  
  capabilities:{
      'browserName': 'chrome',
      'goog:chromeOptions': {
          w3c: false
      }
  }

//, capabilities: {
//	'browserName': 'firexox'
//}


};