var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/core/client/index.js',

  output: {
    path: path.resolve(__dirname, '../build/public'),
    filename: 'app.js',
    publicPath: '/public/',
  },

  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [{
      test: /\.svg$/,
      loader: 'raw-loader'
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    }),
    //new webpack.optimize.UglifyJsPlugin()
  ],
}
