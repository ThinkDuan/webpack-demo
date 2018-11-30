const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base,{
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    hot: true
  },
});