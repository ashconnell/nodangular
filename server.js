var dbname = "app",
    publicfolder = "public",
    port = 3000;

var express = require('express'),
    mongoose = require('mongoose'),
    app = module.exports = express();

// MongoDB
 
mongoose.connect('mongodb://localhost/' + dbname);

// Config
 
app.use(express.bodyParser());
app.use(express.static(__dirname + '/' + publicfolder));
 
// REST Api

var api = require('./server/controllers/api.js');
app.post('/thread', api.post);
app.get('/thread/:title', api.show);
app.get('/thread', api.list);

// Start Server
 
app.listen(port);
console.log("Server listening on port %d", port);
