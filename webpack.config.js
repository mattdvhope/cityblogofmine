var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: "./webpack/entry.js",
  output: {
    // path: path.join(__dirname, 'src/assets/javascripts'), // 'build' here is a folder that webpack creates which contains 'bundle.js'
    // filename: 'bundle.js' // 'bundle.js' is inside the 'build' folder that had been created

    // move bundle.js to a folder instead of the root 
    path: path.resolve('./src/assets/build'),
    filename: 'bundle.js'

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./src/index.html'),
    })
  ],
  mode: 'development'
};

