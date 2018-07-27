var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
//---------------------------------------------------

app.post('/send-email', function (req, res) {
	
	var nodemailer = require('nodemailer');
	var sgTransport = require('nodemailer-sendgrid-transport');

	var options = {
	  auth: {
		api_user: 'Mikele11',//SENDGRID_USERNAME
		api_key: 'face112358'//SENDGRID_PASSWORD
	  }
	}

	var client = nodemailer.createTransport(sgTransport(options));
	
	var email = {
	  from: 'mikeleilyash@gmail.com',
	  to: req.body.to,
	  subject: req.body.subject,
	  text: req.body.body,
	};

	client.sendMail(email, function(err, info){
		if (err ){
		  console.log(error);
		}
		else {
		  console.log('Message sent: ');

		}
		return res.end();
	});		  
	  
});


//---------------------------------------------------
//"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"