'use strict'

var express = require('express')
var app = express()
app.use(express.static('public'))

// heroku positive port assignment
var port = process.env.PORT || 5000


app.get('/', function(req, res) {
    res.status(200).sendFile('index.html', { root: __dirname })
})

app.listen(port, function () {
  console.log('Server running on port---' + port+'---')
})
