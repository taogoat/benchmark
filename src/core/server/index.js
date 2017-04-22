'use strict'

var express = require('express')
var app = express()
app.use(express.static('public'))

// heroku positive port assignment
var port = process.env.PORT || 5000

// begin production slice
var wp
if(process.argv.indexOf('-wp') != -1)
{wp = process.argv[process.argv.indexOf('-wp') + 1]}
if (!wp || wp=='true'){app = require('./webpack.index.js').pack(app)}
else{console.log('Serving from express')}
// end production slice

app.get('/', function(req, res) {
    res.status(200).sendFile('index.html', { root: __dirname })
})

app.listen(port, function () {
  console.log('Server running on port---' + port+'---')
})
