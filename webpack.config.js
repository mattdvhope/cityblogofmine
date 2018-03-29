var path = require('path');
module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: "./webpack/entry.js",
  output: {
    path: path.join(__dirname, 'src/assets/javascripts'), // 'build' here is a folder that webpack creates which contains 'bundle.js'
    filename: 'bundle.js' // 'bundle.js' is inside the 'build' folder that had been created
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
  mode: 'development'
};

