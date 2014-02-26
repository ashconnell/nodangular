var express = require('express'),
    mongoose = require('mongoose'),
    app = module.exports = express(),
    api = require('./server/controllers/api.js'),
    dbName = 'nodangular',
    port = 3000;

//  MongoDB
mongoose.connect('mongodb://localhost/' + dbName);

//  Routes 
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public_build'));
 
//  Api
app.post('/user', api.userCreate);
app.post('/user/auth', api.userAuth);

//  Init 
app.listen(port);
console.log("Server listening on port %d, using database '%s'", port, dbName);
