var mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   ObjectId = Schema.ObjectId,
   crypto = require('crypto'),
   uuid = require('node-uuid');

var errors = {
    email: [ /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'This email address is invalid' ]
}
 
var userSchema = new Schema({
    email: { type: String, required: true, unique: true, match: errors.email },
    password: { type: String, required: [true, 'You must enter a password'] },
    firstName: { type: String },
    lastName: { type: String },
    apiKey: { type: String, unique: true, required: true },
    created: { type: Date, default: Date.now },
    lastSeen: { type: Date, default: Date.now }
});

userSchema.statics.hashPassword = function(password){
    if(!password) return null;
    var hash = crypto.createHash('sha1');
    hash.update(password);
    return hash.digest('hex');
}

userSchema.statics.generateApiKey = function(){
    return uuid.v4();
}
 
module.exports = mongoose.model('User', userSchema);