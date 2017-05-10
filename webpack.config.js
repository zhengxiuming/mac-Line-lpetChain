var webpack = require('webpack');
var path    = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');


var DIST_DIR  = path.resolve(__dirname, 'dist/public/static/');
var SOURCE_DIR = path.resolve(__dirname, 'src/app');

var config = {
   // devtool: 'cheap-module-eval-source-map',
   entry: {
    index:SOURCE_DIR + '/index.js'
    ,login:SOURCE_DIR + '/login.js'
   },
   output: {
       path: DIST_DIR,
       filename: '[name].js'
   },
   
   module : {
      loaders: [
        {
        	test : /\.js|jsx?$/,
        	include: SOURCE_DIR,
        	loader: 'babel',
          presets: ['es2015', 'react'] 
        },
        { test: /\.(css|less|)$/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
        { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]' },
        { test: /\.svg$/, loader: 'raw-loader'}
      ]
   },
    postcss: function(){
      return [autoprefixer, precss];
  }
 };

module.exports = config;


// webpack-dev-server --process --colors
// webpack-dev-server --host 182.92.117.162 --port 9090 --process --color
//   webpack-dev-server --host static.lpetchain.goudaifu.com --port 8080 --process --color
// NODE_ENV=production webpack --progress --colors

// npm install async-each
// npm install anymatch
// npm install glob-parent
// npm install is-glob
// npm install path-is-absolute
// npm install inherits
// npm install readdirp
// npm install is-binary-path
// npm install classnames