const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(base,{
  plugins: [
    new UglifyJSPlugin()
  ]
});