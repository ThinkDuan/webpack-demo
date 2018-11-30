const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(base,{
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});