'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var ProductMgr = require('dw/catalog/ProductMgr'); // Including exiting file ProductMgr

server.get('Show', cache.applyDefaultCache, function (req, res, next) {
	
	var pid = req.querystring.PID; // reading query paramenter value requested in URL
	var apiProduct = ProductMgr.getProduct(pid); // Passing back query param value to exting ProductMgr API function
        
	// apiProduct.ID fetching product id from API and passing back to 'helloworld.isml'
	res.render('helloworld', {
    	  Message: 'Hello World! Again.',
    	  pid : apiProduct.ID
    	});
    	
	next();
});

module.exports = server.exports();
