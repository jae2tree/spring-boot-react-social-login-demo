const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'react-social',
  mode: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
      extensions: ['.js', '.jsx'],
  },

  devServer: {
    port: 3000,
    hot: true,
    publicPath: '/dist/',
  },

  entry: {
      app:  ['./src/index'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: ['last 2 chrome versions', '> 1% in KR'], 
              },
              //debug: true,
            }],
            '@babel/preset-react'
          ],
          plugins: ['react-hot-loader/babel','@babel/plugin-proposal-class-properties'],
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader',"less-loader"],
      },
    ],
  },

  plugins: [],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  }
};