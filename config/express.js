var express = require('express');
var bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Add this line below
    // app.use(bodyParser.urlencoded({ extended: false })) 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    return app;
}