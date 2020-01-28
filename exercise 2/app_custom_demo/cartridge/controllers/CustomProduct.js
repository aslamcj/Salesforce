'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get('Show', cache.applyDefaultCache, function (req, res, next) {
	
	var pid = req.querystring.PID;
	var apiProduct = ProductMgr.getProduct(pid);
    res.render('helloworld', {
    	Message: 'Hello World! Again.',
    		pid : apiProduct.ID
    });
    next();
});

module.exports = server.exports();