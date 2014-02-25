var nodemailer = require('nodemailer');

//  TODO: Setup SMTP Transport

// var transport = nodemailer.createTransport('SMTP',{
//     host: 'vurtix.com',
//     port: 25,
//     auth:
//     service: "Gmail",
//     auth: {
//         user: "gmail.user@gmail.com",
//         pass: "userpass"
//     }
// });

exports.sendWelcomeEmail = function(userId){
    console.log(userId);

    //  TODO: Build and Send

    // mailOptions = {
    //     from: "Nodangular <nodangular@vurtix.com>"
    // };
    // transport.sendMail(mailOptions, function(err, res){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    // });
}