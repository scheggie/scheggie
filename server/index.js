const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/../client/dist'));



// ************************************



    // ALL ENDPOINTS WILL LIVE HERE


// ************************************


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Scheggie app listening at http://${host}:${port}`);
});
