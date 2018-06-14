var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'dist');

app.use('/', express.static(public));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.get('/main.js', function(req, res, next) {  
    res.sendfile('main.js'); 
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);