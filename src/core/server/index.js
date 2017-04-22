'use strict'

var express = require('express')
var app = express()
app.use(express.static('public'))

// heroku positive port assignment
var port = process.env.PORT || 5000

// ------   <--this part gets cut from final version--> //slice
// check for wp flag //slice
var wp; //slice
if(process.argv.indexOf('-wp') != -1) //slice
{wp = process.argv[process.argv.indexOf('-wp') + 1]} //slice
if (!wp || wp=='true'){app = require('./webpack.index.js').pack(app)} //slice
else{console.log('Serving from express')} //slice
// ------ //slice

app.get('/', function(req, res) {
    res.status(200).sendFile('index.html', { root: __dirname })
})

app.listen(port, function () {
  console.log('Server running on port---' + port+'---')
})
