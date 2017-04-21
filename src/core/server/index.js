'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var favicon = require('serve-favicon')
var app = express()
app.use(bodyParser.json({ limit: '20mb' }));
app.use(express.static(__dirname + '/assets'))
//app.use(favicon(__dirname + '/icon.png'))

// heroku positive port assignment
var port = process.env.PORT || 5000

// ------   <--this part gets cut from final version--> //slice
// check for wp flag //slice
var wp; if(process.argv.indexOf('-wp') != -1){wp = process.argv[process.argv.indexOf('-wp') + 1]} //slice
if (!wp || wp=='true'){app = require('./webpack.index.js').pack(app)}
else{console.log('Serving from express')} //slice
// ------ //slice

app.get('/', function(req, res) {
    res.status(200).sendFile('index.html', { root: __dirname })
})

app.listen(port, function () {
  console.log('Server running on port---' + port+'---')
})
