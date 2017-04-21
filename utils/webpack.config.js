var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client?reload=true',
          './src/core/client/index.js'
  ],

  output: {
    path: __dirname + '/src/public/',
    filename: 'index.js',
    publicPath: '',
  },

  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },{
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader'
    },{
      test: /\.(jpg|png)$/,
      loader: 'url-loader'
    },{
      test: /\.css$/,
      loader: 'css-loader'
    },{
      test: /\.svg$/,
      loader: 'raw-loader'
    },{
      test: /\.html$/,
      loader: 'raw-loader'
    },{
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ]
}
