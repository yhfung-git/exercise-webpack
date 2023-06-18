const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const common = require('./webpack.common.js');
const compiler = webpack(common);

// Tell express to use the webpack-dev-middleware and use the webpack.common.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: common.output.publicPath,
  })
);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
