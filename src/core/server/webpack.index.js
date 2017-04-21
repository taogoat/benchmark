'use strict'

// Webpack Requirements
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../../../utils/webpack.config')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = {
    pack: pack
}

function pack(app){
  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
  console.log(chalk.green('Serving from webpack'))
  return app
}
