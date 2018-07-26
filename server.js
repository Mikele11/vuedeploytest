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
	/*
	
  let transporter = nodeMailer.createTransport({
	  host: 'smtp.gmail.com',
	  port: 587,//465..25
	  secure: false,
	  auth: {
		  user: 'mikeleilyash@gmail.com',
		  pass: 'face112358'
	  },
	  tls:{
		rejectUnauthorized: false
		}
  });
  let mailOptions = {
	  from: '"Krunal Lathiya" <mikeleilyash@gmail.com>', // sender address
	  to: req.body.to, // list of receivers
	  subject: req.body.subject, // Subject line
	  text: req.body.body, // plain text body
	  html: '<b>NodeJS Email Tutorial</b>' // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
	  if (error) {
		  return console.log(error);
	  }
	  console.log('Message %s sent: %s', info.messageId, info.response);
		  res.render('index');
	  });
	  */
		var nodemailer = require('nodemailer');
		var sgTransport = require('nodemailer-sendgrid-transport');

		var options = {
		  auth: {
			api_user: 'Mikele11',//SENDGRID_USERNAME
			api_key: 'face112358'//SENDGRID_PASSWORD
		  }
		}

		var client = nodemailer.createTransport(sgTransport(options));
		
		console.log('>>>>',req.body);
		
		var email = {
		  from: 'mikeleilyash@gmail.com',
		  to: req.body.to,
		  subject: req.body.subject,
		  text: req.body.body,
		  html: '<b>NodeJS Email Tutorial</b>'
		};

		client.sendMail(email, function(err, info){
			if (err ){
			  console.log(error);
			}
			else {
			  console.log('Message sent: ' + info.response);
			}
		});		  
	  
  });




//---------------------------------------------------
//"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"