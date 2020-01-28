'use strict';

var server = require('server'); // common.js pattern to import server.js
var cache = require('*/cartridge/scripts/middleware/cache');


/**
server.get call back function
get first parameter 'Show'
get second parameter 'cache.applyDefaultCache'
get third call back function having 3 parameters 'req', 'res', 'next'

res.render call back function
render function first argument to passback the isml file name
render function second argument to passback the json object to render the isml file

next() used to passback the handler

*/
server.get('Show', cache.applyDefaultCache, function (req, res, next) {
    res.render('helloworld', {
    	Message: 'Hello World! Again.'
    });;
    next();
});


module.exports = server.exports();
