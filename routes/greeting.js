var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log('in?');
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        greeting: `Hello ${name}!`
    }));
});

module.exports = router;