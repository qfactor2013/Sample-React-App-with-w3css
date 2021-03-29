const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

/* post email listing. */
router.post('/', function (req, res, next) {
    // console.log(req);
    // console.log(req.body);
    // console.log(req.body.name)
    // console.log(req.body.email)
    // console.log(req.body.subject)
    // console.log(req.body.message)
    // console.log(req.data);

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'google',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GOOGLE_ID,
            pass: process.env.GOOGLE_PW,
        }       
    }))
    
    let mailOptions = {
        from: `${req.body.name} <${req.body.email}>`,
        to: process.env.RECEIVE_EMAIL_ADDRESS,
        subject: req.body.subject,
        text: req.body.message,
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message %s sent: %s', info.messageId, info.response)
    })

    res.sendStatus(200);
});

router.get('/', function (req, res, next) {
    console.log('in?');
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        greeting: `Hello ${name}!`
    }));
});

module.exports = router;