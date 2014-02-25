var User = require('../models/user.js'),
    mail = require('./mail.js');

exports.userCreate = function(req, res){
    req.body.email = req.body.email.toLowerCase();
    User.count({ email: req.body.email }, function(err, count){
        if(count > 0) res.send(400, { errors: { email: { message: 'A user with that email address already exists' }}});
        var user = new User({
            email: req.body.email,
            password: User.hashPassword(req.body.password),
            apiKey: User.generateApiKey()
        });
        user.save(function(err, doc){
            if(err) {
                res.send(400, { errors: err.errors }); 
                return;
            }
            mail.sendWelcomeEmail(doc._id);
            res.send(200, doc);
        });        
    });
}

exports.userAuth = function(req, res){
    var errors = {};
    if(!req.body.email) errors.email = { message: 'You must enter an email address' };
    if(!req.body.password) errors.password = { message: 'You must enter a password' };
    if(errors.email || errors.password) res.send({ errors: errors });
    User.findOne({ email: req.body.email.toLowerCase() }, function(err, doc){
        if(err) res.send(500);
        else if(!doc) res.send(401, { errors: { user: { message: 'User not found' }}});
        else if(doc.password == User.hashPassword(req.body.password)) res.send(doc);
        else res.send(401, { errors: { user: { message: 'Please check your email and password are correct' }}});
    });
}