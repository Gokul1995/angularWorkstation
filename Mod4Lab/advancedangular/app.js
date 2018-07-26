var express = require('express');
    var app = express();

    app.use(express.static('/advancedangular/public'));

    app.listen(2319, function () {
        console.log('Our app is listening on port 2319!');
    });