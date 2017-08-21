const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  
  devtool: 'source-map',
  context: SRC_DIR,
  entry: {
    main:`${SRC_DIR}/index.js`,
    login: `${SRC_DIR}/login.js`
  },
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /(pdfkit|linebreak|fontkit|unicode|brotli|png-js).*\.js$/, 
        loader: "transform-loader?brfs" 
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }

};
