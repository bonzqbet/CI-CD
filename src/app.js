const express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

app.listen(3500,function(){
    console.log('Port is open at '+ 3500);
});

app.all("/", function(req, res) {
    res.json({ code: 1001, msg: `Welcome to Express Continue CD`});
});

module.exports = app;